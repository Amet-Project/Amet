import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import { Loading } from "carbon-components-react";
import { Modal, ComposedModal, ModalHeader, ModalFooter } from "carbon-components-react";

import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { ratingCasinoPorUsuario } from '../../graphql/queries.js'
import { eventoPorFecha } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { date } = useParams()
  const [favCasino, setFavCasino] = useState([]);
  const [open, setOpen] = useState(false);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchCasinos()
  }, []);

  const onSubmitClick= (e) => {
    e.preventDefault();
    window.location.href="/"
}

  //Get the whole items
  async function fetchCasinos() {
    try {
      const idAuth = window.sessionStorage.getItem('idAuth');
      let ratingData = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: idAuth }));
      const eventosData = await API.graphql(graphqlOperation(eventoPorFecha, {fecha: date}));
      let eventsArray = eventosData.data.eventoPorFecha.items;
      let userRatings = ratingData.data.ratingCasinoPorUsuario.items;
      if(userRatings.length < 3){
        setOpen(true);
      }
      let bestCasino = null;
      let bestScore = 0;
      let user1;
      let user2;
      let user3;
      let bestCasino1 = null;
      let bestCasino2 = null;
      let bestCasino3 = null;
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= 3 && userRatings[idxRatings].rating >= bestScore){
          bestScore = userRatings[idxRatings].rating;
          bestCasino = userRatings[idxRatings].id_casino;
        }
      };
      setFavCasino(bestCasino);
      const baseURL= "https://amet-ffts6w3jba-uc.a.run.app/rating";
      await axios.get(`${baseURL}?hashuser=${idAuth}`).then(response =>{
        console.log('response: ', response.data);
        user1 = response.data[0];
        user2 = response.data[1];
        user3 = response.data[2];
      });
      let ratingData1 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user1 }));
      let ratingData2 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user2 }));
      let ratingData3 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user3 }));
      userRatings = ratingData1.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      let found = false;
      let bestCasinos = [];
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating == 5){
              bestCasinos.push(userRatings[idxRatings].id_casino);
            }
            bestScore = userRatings[idxRatings].rating;
            bestCasino1 = userRatings[idxRatings].id_casino;
          }
          found = false;
        }
      };

      userRatings = ratingData2.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating == 5 && !bestCasinos.includes(userRatings[idxRatings].id_casino)){
              bestCasinos.push(userRatings[idxRatings].id_casino);
            }
            bestScore = userRatings[idxRatings].rating;
            bestCasino2 = userRatings[idxRatings].id_casino;
          }
          found = false;
        }
      };

      userRatings = ratingData3.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating == 5 && !bestCasinos.includes(userRatings[idxRatings].id_casino)){
              bestCasinos.push(userRatings[idxRatings].id_casino);
            }
            bestScore = userRatings[idxRatings].rating;
            bestCasino3 = userRatings[idxRatings].id_casino;
          }
          found = false;
        }
      };
      var item = bestCasinos[Math.floor(Math.random()*bestCasinos.length)];
      var item2 = bestCasinos[Math.floor(Math.random()*bestCasinos.length)];
      var item3 = bestCasinos[Math.floor(Math.random()*bestCasinos.length)];

      window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "/recomendationcheckout="+date+"="+item+"="+item2+"="+item3;

    }, 5000);
    } catch (err) { setOpen(true) }
  }

  return (
    <div>
      <Header
        absolute
        color="primary"
        brand="Amet"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
          <div
              className={classes.pageHeader}
              style={{
                  backgroundImage: "url(" + image + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "top center"
              }}
          >
              <div className={classes.infoBigContainer}>
                <div className={classes.infoContainerCenter}>
                <h2>Obteniendo tu recomendación de nuestra Inteligencia Artificial...</h2>
                    <Loading
                        description="Active loading indicator" withOverlay={false}
                    />
                </div>
              </div>

              <ComposedModal open={open} onClose={e => onSubmitClick(e)} onRequestClose={e => onSubmitClick(e)} preventCloseOnClickOutside={true}>
                  <ModalHeader label={"Mensaje"}>
                      <h1>
                          Sin recomendación
                      </h1>
                      <h2>No tenemos suficiente información para recomendarte.</h2>
                      <h2>Puedes crear un evento de manera normal, no es necesario utilizar recomendación por IA.</h2>
                  </ModalHeader>
                  <ModalFooter primaryButtonText="OK" onRequestSubmit={e => onSubmitClick(e)}/>
              </ComposedModal>
        <Footer whiteFont />
      </div>
    </div>
  );
}
