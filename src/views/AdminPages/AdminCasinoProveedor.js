import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

//Importanto estilos
import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { listCrudCasinos, listEntretenimientoWithImage } from "../../graphql/queriesExt";
import { listCasinosByUser } from "../../graphql/queriesExt";
import { listBanqueteByUser } from "../../graphql/queriesExt";
import { listEntretenimientoByUser } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(informationPageStyle);
const bcrypt = require('bcryptjs');

export default function AdminCasinoProveedor(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const classes = useStyles();
  const [casinos, setCasinos] = useState([]);
  const [banquetes, setBanquetes] = useState([]);
  const [musica, setMusica] = useState([]);
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    if(window.sessionStorage.getItem('auth') && window.sessionStorage.getItem('userRole') === 'PROVEEDOR'){
      let idAuth = window.sessionStorage.getItem('idAuth');
      try{
        const casinosData = await API.graphql(graphqlOperation(listCasinosByUser, {id: idAuth}));
        const casinoList = casinosData.data.getUsuario.casinos.items;
        setCasinos(casinoList);
        console.log('casinos: ', casinosData);

        const musicData = await API.graphql(graphqlOperation(listEntretenimientoByUser, {id: idAuth}));
        console.log('music: ', musicData);

        const banquetesData = await API.graphql(graphqlOperation(listBanqueteByUser, {id: idAuth}));
        console.log('banquetes: ', banquetesData);
  
      }catch(err){console.log('error cargando casinos: ', err)};

    }else{
      window.location.href="/";
      return;
    } 
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
        {
          casinos.length > 0 ? 
          <div className={classes.infoContainer}>
              <h2>Casinos</h2>
              <hr className={classes.hrRound}></hr>
              <ul className="casino-list">
                {casinos.map(({ id, titulo, descripcion, direccion }, index) => {
                  return (
                    <li key={index}>
                      <div className="music-list-item">
                        <div className="left-section">
                          <h3>{titulo}</h3>
                          <h4>{descripcion}</h4>
                          <h4>{direccion}</h4>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div> : null
        }
        <div className={classes.infoContainer}>
          <h2>Banquetes</h2>
          <hr className={classes.hrRound}></hr>
        </div>

        <div className={classes.infoContainer}>
          <h2>Entretenimiento</h2>
          <hr className={classes.hrRound}></hr>
        </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
