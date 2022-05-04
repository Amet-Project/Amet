from flask import request, jsonify, Flask
import os
import time
import gc
import argparse
import json
import sys

# data science imports
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors

# utils import
from fuzzywuzzy import fuzz

app = Flask(__name__)

class KnnRecommender:
    """
    This is an item-based collaborative filtering recommender with
    KNN implmented by sklearn
    """
    def __init__(self, path_usuarios, path_ratings):
        """
        Recommender requires path to data: usuarios data and ratings data
        Parameters
        ----------
        path_usuarios: str, usuarios data file path
        path_ratings: str, ratings data file path
        """
        self.path_usuarios = path_usuarios
        self.path_ratings = path_ratings
        self.usuario_rating_thres = 0
        self.casino_rating_thres = 0
        self.model = NearestNeighbors()

    def set_filter_params(self, usuario_rating_thres, casino_rating_thres):
        """
        set rating frequency threshold to filter less-known usuarios and
        less active casinos
        Parameters
        ----------
        usuario_rating_thres: int, minimum number of ratings received by casinos
        casino_rating_thres: int, minimum number of ratings a casino gives
        """
        self.usuario_rating_thres = usuario_rating_thres
        self.casino_rating_thres = casino_rating_thres

    def set_model_params(self, n_neighbors, algorithm, metric, n_jobs=None):
        """
        set model params for sklearn.neighbors.NearestNeighbors
        Parameters
        ----------
        n_neighbors: int, optional (default = 5)
        algorithm: {'auto', 'ball_tree', 'kd_tree', 'brute'}, optional
        metric: string or callable, default 'minkowski', or one of
            ['cityblock', 'cosine', 'euclidean', 'l1', 'l2', 'manhattan']
        n_jobs: int or None, optional (default=None)
        """
        if n_jobs and (n_jobs > 1 or n_jobs == -1):
            os.environ['JOBLIB_TEMP_FOLDER'] = '/tmp'
        self.model.set_params(**{
            'n_neighbors': n_neighbors,
            'algorithm': algorithm,
            'metric': metric,
            'n_jobs': n_jobs})

    def _prep_data(self):
        """
        prepare data for recommender
        1. usuario-casino scipy sparse matrix
        2. hashmap of usuario to row index in usuario-casino scipy sparse matrix
        """
        # read data
        df_usuarios = pd.read_csv(
            os.path.join(self.path_usuarios),
            usecols=['usuarioId', 'title'],
            dtype={'usuarioId': 'str', 'title': 'str'})

        df_ratings = pd.read_csv(
            os.path.join(self.path_ratings),
            usecols=['casinoId', 'usuarioId', 'rating'],
            dtype={'casinoId': 'str', 'usuarioId': 'str', 'rating': 'int32'})

        # filter data
        df_usuarios_cnt = pd.DataFrame(
            df_ratings.groupby('usuarioId').size(),
            columns=['count'])
        popular_usuarios = list(set(df_usuarios_cnt.query('count >= @self.usuario_rating_thres').index))  # noqa
        usuarios_filter = df_ratings.usuarioId.isin(popular_usuarios).values

        df_casinos_cnt = pd.DataFrame(
            df_ratings.groupby('casinoId').size(),
            columns=['count'])

        active_casinos = list(set(df_casinos_cnt.query('count >= @self.casino_rating_thres').index))  # noqa
        casinos_filter = df_ratings.casinoId.isin(active_casinos).values
        df_ratings_filtered = df_ratings[usuarios_filter & casinos_filter]

        # pivot and create usuario-casino matrix
        usuario_casino_mat = df_ratings_filtered.pivot(
            index='usuarioId', columns='casinoId', values='rating').fillna(0)
        # create mapper from usuario title to index
        hashmap = {
            usuario: i for i, usuario in
            enumerate(list(df_usuarios.set_index('usuarioId').loc[usuario_casino_mat.index].title)) # noqa
        }

        # transform matrix to scipy sparse matrix
        usuario_casino_mat_sparse = csr_matrix(usuario_casino_mat.values)

        # clean up
        del df_usuarios, df_usuarios_cnt, df_casinos_cnt
        del df_ratings, df_ratings_filtered, usuario_casino_mat
        gc.collect()
        return usuario_casino_mat_sparse, hashmap

    def _fuzzy_matching(self, hashmap, fav_usuario):
        """
        return the closest match via fuzzy ratio.
        If no match found, return None
        Parameters
        ----------
        hashmap: dict, map usuario title name to index of the usuario in data
        fav_usuario: str, name of casino input usuario
        Return
        ------
        index of the closest match
        """
        match_tuple = []
        # get match
        for title, idx in hashmap.items():
            ratio = fuzz.ratio(title.lower(), fav_usuario.lower())
            if ratio >= 60:
                match_tuple.append((title, idx, ratio))

        # sort
        match_tuple = sorted(match_tuple, key=lambda x: x[2])[::-1]
        if match_tuple:
            return match_tuple[0][1]

        #if not match_tuple:
            #print('Oops! No match is found')
        #else:
            #print('Found possible matches in our database: '
            #      '{0}\n'.format([x[0] for x in match_tuple]))
            #return match_tuple[0][1]

    def _inference(self, model, data, hashmap,
                   fav_usuario, n_recommendations):
        """
        return top n similar usuario recommendations based on casino's input usuario
        Parameters
        ----------
        model: sklearn model, knn model
        data: usuario-casino matrix
        hashmap: dict, map usuario title name to index of the usuario in data
        fav_usuario: str, name of casino input usuario
        n_recommendations: int, top n recommendations
        Return
        ------
        list of top n similar usuario recommendations
        """
        # fit
        model.fit(data)

        # get input usuario index
        #print('You have input usuario:', fav_usuario)
        idx = self._fuzzy_matching(hashmap, fav_usuario)

        # inference
        #print('Recommendation system start to make inference')
        #print('......\n')
        t0 = time.time()
        distances, indices = model.kneighbors(
            data[idx],
            n_neighbors=n_recommendations+1)
        # get list of raw idx of recommendations
        raw_recommends = \
            sorted(
                list(
                    zip(
                        indices.squeeze().tolist(),
                        distances.squeeze().tolist()
                    )
                ),
                key=lambda x: x[1]
            )[:0:-1]
        #print('It took my system {:.2f}s to make inference \n\
        #      '.format(time.time() - t0))
        # return recommendation (usuarioId, distance)
        return raw_recommends

    def make_recommendations(self, fav_usuario, n_recommendations):
        """
        make top n usuario recommendations
        Parameters
        ----------
        fav_usuario: str, name of casino input usuario
        n_recommendations: int, top n recommendations
        """
        # get data
        usuario_casino_mat_sparse, hashmap = self._prep_data()
        # get recommendations
        raw_recommends = self._inference(
            self.model, usuario_casino_mat_sparse, hashmap,
            fav_usuario, n_recommendations)
        # print results
        reverse_hashmap = {v: k for k, v in hashmap.items()}

        #print(reverse_hashmap)
        #print('Recommendations for {}:'.format(fav_usuario))
        recommendedUsers = []
        for i, (idx, dist) in enumerate(raw_recommends):
            recommendedUsers.append(reverse_hashmap[idx])
        #    print('{0}: {1}, with distance '
        #          'of {2}'.format(i+1, reverse_hashmap[idx], dist))
        obj = {}
        count = 0
        for i in recommendedUsers:
            obj[count] = i
            count+=1

        return jsonify(obj)
        #print(recommendedUsers)


def parse_args():
    parser = argparse.ArgumentParser(
        prog="Usuario Recommender",
        description="Run KNN Usuario Recommender")
    parser.add_argument('--path', nargs='?', default='C:/Users/ismarque/Documents/Amet/ServerFinal',
                        help='input data path')
    parser.add_argument('--usuarios_filename', nargs='?', default='usuarios.csv',
                        help='provide usuarios filename')
    parser.add_argument('--ratings_filename', nargs='?', default='ratings.csv',
                        help='provide ratings filename')
    parser.add_argument('--usuario_name', nargs='?', default='',
                        help='provide your favoriate usuario name')
    parser.add_argument('--top_n', type=int, default=3,
                        help='top n usuario recommendations')
    return parser.parse_args()



@app.route("/rating")
def get_rating():
    # get args
    #print(sys.argv[1])
    #args = parse_args()
    data_path = './' #args.path
    usuarios_filename = 'usuarios.csv' #args.usuarios_filename
    ratings_filename = 'ratings.csv' #args.ratings_filename
    usuario_name = request.args.get('hashuser') #args.usuario_name
    top_n = 3 #args.top_n

    # initial recommender system
    recommender = KnnRecommender(
        os.path.join(data_path, usuarios_filename),
        os.path.join(data_path, ratings_filename))
    # set params
    recommender.set_filter_params(10, 10)
    recommender.set_model_params(20, 'brute', 'cosine', -1)
    
    # make recommendations
    return(recommender.make_recommendations(usuario_name, top_n))

if __name__ == "__main__":
    app.run(debug=True, port=8080, host='0.0.0.0')