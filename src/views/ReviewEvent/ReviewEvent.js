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
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'

import { getEvento } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
import { createRatingCasino, createRatingBanquete, createRatingEntretenimiento, updateOrdenCasino, updateOrdenEntretenimiento, updateOrdenBanquete } from '../../graphql/mutations';
import { NumberInput } from "carbon-components-react";
Amplify.configure(awsExports);


const useStyles = makeStyles(informationPageStyle);
const bcrypt = require('bcryptjs');

export default function ReviewEvent(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const { idEvent } = useParams();
  const classes = useStyles();
  const [evento, setEvento] = useState([]);
  const [casinoRate, setCasinoRate] = useState([]);
  const [entretenimientoRate, setEntretenimientoRate] = useState([]);
  const [banqueteRate, setBanqueteRate] = useState([]);
  const { ...rest } = props;
  
  const handleOnChangeCasino = (idCasino, ratingCasino) => {
    const myCasinoRate = {
      id_usuario: idAuth,
      id_casino: idCasino,
      rating: ratingCasino  
    };
    setCasinoRate(myCasinoRate);
  };
  
  const handleOnChangeEntretenimiento = (idEntretenimiento, ratingEntretenimiento) => {
    const myEntretenimientoRate = {
      id_usuario: idAuth,
      id_entretenimiento: idEntretenimiento,
      rating: ratingEntretenimiento  
    };
    setEntretenimientoRate(myEntretenimientoRate);
  };
  const handleOnChangeBanquete = (idBanquete, ratingBanquete) => {
    const myBanqueteRate = {
      id_usuario: idAuth,
      id_banquete: idBanquete,
      rating: ratingBanquete  
    };
    setBanqueteRate(myBanqueteRate);
  };
  
  async function sumbitRates() {
    try {
      if(casinoRate.length !== 0) {
        const resCasino = await API.graphql(graphqlOperation(createRatingCasino, {input:casinoRate}));
        await API.graphql(graphqlOperation(updateOrdenCasino, {input: { id:evento.id_orden_casino, reviewed: true }})) ;
      }
      if (banqueteRate.length !== 0){
        const resBanquete = await API.graphql(graphqlOperation(createRatingBanquete, {input:banqueteRate}));
        await API.graphql(graphqlOperation(updateOrdenBanquete, {input: { id:evento.id_orden_banquete, reviewed: true }})) ;
      }
      if (entretenimientoRate.length !== 0) {
        const resEntretenimiento = await API.graphql(graphqlOperation(createRatingEntretenimiento, {input:entretenimientoRate}));
        await API.graphql(graphqlOperation(updateOrdenEntretenimiento, {input: { id:evento.id_orden_entretenimiento, reviewed: true }})) ;
      }
      window.location.href = "/admineventos";
    } catch (error) {
      console.log("Error creando reviwes:", error);
    }
  };

  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    try {
      let idAuth = window.sessionStorage.getItem('idAuth');
      setidAuth(idAuth);
      const eventData = await API.graphql(graphqlOperation(getEvento, { id: idEvent }));
      const event = eventData.data.getEvento;
      setEvento(event);
    } catch (err) { console.log('error cargando eventos: ', err) };
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
                (evento.casino && !evento.casino.reviewed) ?
                    <div className={classes.infoContainer}>
                        <h2>{evento.casino.casino.titulo}</h2>
                        <hr className={classes.hrRound}></hr>
                        <p>Seleciona la calificación (1-5):</p>
                        <NumberInput
                            id="calCasino-input"
                            helperText="Ingresa un número entre 1 y 5"
                            invalidText="Número inválido"
                            label="Calificación"
                            max={5}
                            min={0}
                            onChange={e => handleOnChangeCasino(evento.casino.casino.id, e.imaginaryTarget.value)}

                        />
                    </div>
                    : null
            }
            {
                (evento.entretenimiento && !evento.entretenimiento.reviewed) ?
                    <div className={classes.infoContainer}>
                        <h2>{evento.entretenimiento.entretenimiento.titulo}</h2>
                        <hr className={classes.hrRound}></hr>
                        <p>Seleciona la calificación (1-5):</p>
                        <NumberInput
                            id="calEntre-input"
                            helperText="Ingresa un número entre 1 y 5"
                            invalidText="Número inválido"
                            label="Calificación"
                            max={5}
                            min={0}
                            onChange={e => handleOnChangeEntretenimiento(evento.entretenimiento.entretenimiento.id, e.imaginaryTarget.value)}
                        />
                    </div>
                    : null
            }
            {
                (evento.banquete && !evento.banquete.reviewed) ?
                    <div className={classes.infoContainer}>
                        <h2>{evento.banquete.banquete.titulo}</h2>
                        <hr className={classes.hrRound}></hr>
                        <p>Seleciona la calificación (1-5):</p>
                        <NumberInput
                            id="calBanquete-input"
                            helperText="Ingresa un número entre 1 y 5"
                            invalidText="Número inválido"
                            label="Calificación"
                            max={5}
                            min={0}
                            onChange={e => handleOnChangeBanquete(evento.banquete.banquete.id, e.imaginaryTarget.value)}
                        />
                    </div>
                    : null
            }
            <Button color="primary" size="lg" onClick={() => sumbitRates()}>
                Enviar calificación
            </Button>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
