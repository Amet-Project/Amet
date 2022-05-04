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
import Button from "components/CustomButtons/Button.js";

//Importanto estilos
import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";


//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { updateOrdenCasino, updateOrdenEntretenimiento, updateOrdenBanquete } from "../../graphql/mutations.js";

import { listEventosByCasinoProv, listEventosByBanqueteProv, listEventosByEntretenimientoProv,  } from "../../graphql/queriesExt";
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

  async function updateCasino(id_orden_casino, myStatus){
    try {
      const updatedOrder = {
        id: id_orden_casino,
        status: myStatus
      };
      const resCasino = await API.graphql(graphqlOperation(updateOrdenCasino, {input:updatedOrder}));
      console.log(resCasino);
      window.location.href="/admineventosproveedor"
    } catch (error) {
      console.log(error);
    }
  }

  async function updateBanquete(id_orden_banquete, myStatus){
    try {
      const updatedOrder = {
        id: id_orden_banquete,
        status: myStatus
      };
      const resBanquete = await API.graphql(graphqlOperation(updateOrdenBanquete, {input:updatedOrder}));
      console.log(resBanquete);
      window.location.href="/admineventosproveedor"
    } catch (error) {
      console.log(error);
    }
  }

  async function updateEntretenimiento(id_orden_entretenimiento, myStatus){
    try {
      const updatedOrder = {
        id: id_orden_entretenimiento,
        status: myStatus
      };
      const resEntretenimiento = await API.graphql(graphqlOperation(updateOrdenEntretenimiento, {input:updatedOrder}));
      console.log(resEntretenimiento);
      window.location.href="/admineventosproveedor"
    } catch (error) {
      console.log(error);
    }
  }
  
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
        setMusica(entUser);
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
        setBanquetes(banqueteUser);
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
                {casinos.map(({ casino, fecha, usuario, id_orden_casino  }, index) => {
                  return (
                    <div  key={index}>
                      <li>
                        <div className="music-list-item">
                          <div className="left-section">
                            <h4>{casino.status}</h4>
                            <h3>{casino.casino.titulo} - {fecha}</h3>
                            <h4>Reservado por {usuario.nombres} {usuario.ap_paterno} {usuario.ap_materno}</h4>
                          </div>
                        </div>
                      </li>
                      {
                        casino.status === 'PENDING'?
                        <Button color="primary" size="lg" onClick={() => updateCasino(id_orden_casino, "ACCEPTED")}>
                        Confirmar
                      </Button> : null

                      }{ casino.status === 'PENDING' ? 
                        <Button color="danger" size="lg" onClick={() => updateCasino(id_orden_casino, "CANCELLED")}>
                          Cancelar
                        </Button> : null
                      }
                      
                      
                      <hr className={classes.hrRound}></hr>
                      <br/>
                    </div>
                  );
                })}
              </ul>
            </div> : null
          }
          {
            banquetes.length > 0 ?
              <div className={classes.infoContainer}>
                <h2>Banquetes</h2>
                <hr className={classes.hrRound}></hr>
                <ul className="banquete-list">
                  {banquetes.map(({ banquete, fecha, usuario, id_orden_banquete }, index) => {
                    return (
                      <div key={index}>
                        <li>
                          <div className="music-list-item">
                            <div className="left-section">
                              <h4>{banquete.status}</h4>
                              <h3>{banquete.banquete.titulo} - {fecha}</h3>
                              <h4>Número de platillos: {banquete.numero_platillos}</h4>
                              <h4>Reservado por {usuario.nombres} {usuario.ap_paterno} {usuario.ap_materno}</h4>
                            </div>
                          </div>
                        </li>
                        {
                        banquete.status === 'PENDING'?
                        <Button color="primary" size="lg" onClick={() => updateBanquete(id_orden_banquete, "ACCEPTED")}>
                        Confirmar
                      </Button> : null

                      }{ banquete.status === 'PENDING' ? 
                        <Button color="danger" size="lg" onClick={() => updateBanquete(id_orden_banquete, "CANCELLED")}>
                          Cancelar
                        </Button> : null
                      }
                        <hr className={classes.hrRound}></hr>
                        <br />
                      </div>
                    );
                  })}
                </ul>
              </div> : null
          }
          {
            musica.length > 0 ?
              <div className={classes.infoContainer}>
                <h2>Entretenimiento</h2>
                <hr className={classes.hrRound}></hr>
                <ul className="musica-list">
                  {musica.map(({ entretenimiento, fecha, usuario, id_orden_entretenimiento }, index) => {
                    return (
                      <div key={index}>
                        <li>
                          <div className="music-list-item">
                            <div className="left-section">
                              <h4>{entretenimiento.status}</h4>
                              <h3>{entretenimiento.entretenimiento.titulo} - {fecha}</h3>
                              <h4>Número de horas: {entretenimiento.horas}</h4>
                              <h4>Reservado por {usuario.nombres} {usuario.ap_paterno} {usuario.ap_materno}</h4>
                            </div>
                          </div>
                        </li>
                        {
                          entretenimiento.status === 'PENDING'?
                          <Button color="primary" size="lg" onClick={() => updateEntretenimiento(id_orden_entretenimiento, "ACCEPTED")}>
                            Confirmar
                          </Button> : null

                        }{ 
                            entretenimiento.status === 'PENDING' ? 
                            <Button color="danger" size="lg" onClick={() => updateEntretenimiento(id_orden_entretenimiento, "CANCELLED")}>
                              Cancelar
                            </Button> : null
                        }
                        <hr className={classes.hrRound}></hr>
                        <br />
                      </div>
                    );
                  })}
                </ul>
              </div> : null
          }
        <div className={classes.pageFooter}>
            <Footer whiteFont />
          </div>
        </div>
      </div>
    </div>
  );
}
