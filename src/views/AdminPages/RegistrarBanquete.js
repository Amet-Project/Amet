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
import { createBanquete } from '../../graphql/mutations.js'
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
  const [banquete, setBanquete] = useState({
    id_usuario: '',
    titulo: '',
    descripcion: '',
    rfc: '',
    precio_unitario: 0,
    minimo: 0,
    aprobado: false,
  });
  const setInput = (key, value) => {
    setBanquete({...banquete, [key]: value});
  }
  
  useEffect(() => {
    getidAuth();
  }, []);
  async function getidAuth() {
    try {
      let idAuth = window.sessionStorage.getItem('idAuth');
      setIdUsuario(idAuth);
      setBanquete({...banquete, ['id_usuario']:idAuth});
    } catch (err) { console.log('error obteniendo usuario: ', err) };
  }
  async function sumbitBanquete () {
    try {
      const resBanquete = await API.graphql(graphqlOperation(createBanquete, {input:banquete}));
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
            <h2>Registrar Banquete</h2>
            <div>
              <TextInput
                id="banqueteName"
                invalidText="Invalid error message."
                labelText="Nombre"
                placeholder="Ingresa el nombre del banquete"
                value={banquete.titulo}
                onChange = {e => setInput('titulo', e.target.value)}
              />
              <br />
              <TextInput
                id="banqueteAddress"
                invalidText="Invalid error message."
                labelText="RFC"
                placeholder="Ingresa el RFC del banquete"
                value={banquete.rfc}
                onChange = {e => setInput('rfc', e.target.value)}
              />
              <br />
              <TextInput
                id="banqueteDescription"
                invalidText="Invalid error message."
                labelText="Descripción"
                placeholder="Ingresa la descripción del banquete"
                value={banquete.descripcion}
                onChange = {e => setInput('descripcion', e.target.value)}
              />
              <br />
              <p>Precio unitario</p>
              <NumberInput
                id="priceDishes"
                helperText="Si el precio varía entre cada platillo, ingresar el precio más bajo"
                invalidText="Invalid error message."
                value={banquete.precio_unitario}
                onChange = {e => setInput('precio_unitario', e.target.value)}
              />
              <br />
              <p>Minimo de platillos:</p>
              <NumberInput
                id="minDishes"
                invalidText="Invalid error message."
                helperText="Ingresa la cantidad mínima de platillos para contratación"
                value={banquete.minimo}
                onChange = {e => setInput('minimo', e.target.value)}
              />
            </div>
            <br />
            <Button color="primary" size="lg" onClick={sumbitBanquete}>
              Registrar banquete
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
