import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { NumberInput, TextInput } from "carbon-components-react";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { createEntretenimiento } from '../../graphql/mutations.js'

import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);


export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [id_usuario, setIdUsuario] = useState('');

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [entretenimiento, setEntretenimiento] = useState({
    id_usuario: '',
    titulo: '',
    descripcion: '',
    rfc: '',
    precio_hora: 0,
    minimo: 0,
    aprobado: false,
  });


  const setInput = (key, value) => {
    setEntretenimiento({...entretenimiento, [key]: value});
  }
  
  useEffect(() => {
    getidAuth();
  }, []);
  async function getidAuth() {
    try {
      let idAuth = window.sessionStorage.getItem('idAuth');
      setIdUsuario(idAuth);
      setEntretenimiento({...entretenimiento, ['id_usuario']:idAuth});
    } catch (err) { console.log('error obteniendo usuario: ', err) };
  }
  async function sumbitEntretenimiento () {
    try {
      const resEntretenimiento = await API.graphql(graphqlOperation(createEntretenimiento, {input:entretenimiento}));
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className={classes.infoContainer}>
            <h2>Registrar Entretenimiento</h2>
            <div>
              <TextInput
                id="entreName"
                invalidText="Invalid error message."
                labelText="Nombre"
                placeholder="Ingresa el nombre del servicio de entretenimiento"
                value={entretenimiento.titulo}
                onChange = {e => setInput('titulo', e.target.value)}
              />
              <br />
              <TextInput
                id="entreRFC"
                invalidText="Invalid error message."
                labelText="RFC"
                placeholder="Ingresa el RFC a registrar"
                value={entretenimiento.rfc}
                onChange = {e => setInput('rfc', e.target.value)}
              />
              <br />
              <TextInput
                id="entreDescripcion"
                invalidText="Invalid error message."
                labelText="Descripción"
                placeholder="Ingresa la descripción del servicio de entretenimiento"
                value={entretenimiento.descripcion}
                onChange = {e => setInput('descripcion', e.target.value)}
              />
              <br />
              <p>Precio por hora:</p>
              <NumberInput
                id="entreHourRate"
                invalidText="Invalid error message."
                helperText="Ingresa el precio por hora"
                value={entretenimiento.precio_hora}
                onChange = {e => setInput('precio_hora', e.target.value)}
              />
              <br />
              <p>Minimo de horas:</p>
              <NumberInput
                id="entreMinHours"
                invalidText="Invalid error message."
                helperText="Ingresa las horas mínimas para contratar"
                value={entretenimiento.minimo}
                onChange = {e => setInput('minimo', e.target.value)}
              />
            </div>
            <br />
            <Button color="primary" size="lg" onClick={sumbitEntretenimiento}>
              Registrar entretenimiento
            </Button>
          </div>
          <div className={classes.pageFooter}>
            <Footer whiteFont />
          </div>
        </div>
      </div>
    </div>
  );
}
