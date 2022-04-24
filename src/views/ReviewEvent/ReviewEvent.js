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
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    try {
      console.log("idEvent: ",idEvent);
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
          {console.log(evento)}
        <div className={classes.infoBigContainer}>
            {
                evento.casino ?
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
                            min={1}
                        />
                    </div>
                    : null
            }
            {
                evento.entretenimiento ?
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
                            min={1}
                        />
                    </div>
                    : null
            }
            {
                evento.banquete ?
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
                            min={1}
                        />
                    </div>
                    : null
            }
            <Button color="primary" size="lg" href={"/reviewEvent"}>
                Enviar calificación
            </Button>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
