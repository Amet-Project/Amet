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
import { listEventosByCasinoProv, listEventosByBanqueteProv, listEventosByEntretenimientoProv } from "../../graphql/queriesExt";
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
        const casinosData = await API.graphql(graphqlOperation(listEventosByCasinoProv));
        const casinoList = casinosData.data.listEventos.items;
        
        let casinosUser = []
        for (let idxCasino = 0; idxCasino < casinoList.length; idxCasino++) {
          //console.log('usuario prov:', idAuth, ' - Usuario due;o: ', casinoList[idxCasino].casino.casino.id_usuario)
          if(casinoList[idxCasino].casino.casino.id_usuario == idAuth){
            casinosUser.push(casinoList[idxCasino])
            //console.log('casino del usuario: ', idAuth, ' - ', casinoList[idxCasino].fecha);
          }
        }

        setCasinos(casinosUser);
        console.log('casinos: ', casinosUser);

        const entData = await API.graphql(graphqlOperation(listEventosByEntretenimientoProv));
        const entList = entData.data.listEventos.items;

        let entUser = []
        for (let idxEnt = 0; idxEnt < entList.length; idxEnt++) {
          if(entList[idxEnt].entretenimiento != null){
            if(entList[idxEnt].entretenimiento.entretenimiento.id_usuario == idAuth){
              entUser.push(entList[idxEnt])
            }
          }
        }
        console.log('music: ', entUser);
        

        const banqueteData = await API.graphql(graphqlOperation(listEventosByBanqueteProv));
        const banqueteList = banqueteData.data.listEventos.items;
        
        let banqueteUser = []
        for (let idxBanquete = 0; idxBanquete < banqueteList.length; idxBanquete++) {
          if(banqueteList[idxBanquete].banquete != null){
            if(banqueteList[idxBanquete].banquete.banquete.id_usuario == idAuth){
              banqueteUser.push(banqueteList[idxBanquete])
            }
          }
        }
        console.log('banquetes: ', banqueteUser);
  
      }catch(err){console.log('error cargando eventos: ', err)};

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
