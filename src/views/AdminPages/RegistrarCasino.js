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
import { createCasino, createCasinoHorarioFijo  } from '../../graphql/mutations.js'
import awsExports from "../../aws-exports.js";
import { SettingsInputAntenna } from "@material-ui/icons";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

const arrayDays = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo',
];


//Variables
let price = 0;
let day;
let startHour;
let endHour;

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [casino, setCasino] = useState({
    direccion: '',
    titulo: '',
    descripcion: '',
    cap_maxima: 0,
    aprobado: false,
    id_usuario: ''
  });
  const [id_usuario, setIdUsuario] = useState('');
  const [days, setUpDays] = useState({lunes: 0, martes: 0, miercoles: 0, jueves:0, viernes:0, sabado:0, domingo:0})
  
  useEffect(() => {
    getidAuth();
  }, [])

  const setInput = (key, value) => {
    setCasino({...casino, [key]: value});
  }
  const setDays = (key, value) => {
    setUpDays({...days, [key]: value});
  }
  async function getidAuth() {
    try {
      let idAuth = window.sessionStorage.getItem('idAuth');
      setIdUsuario(idAuth);
      setCasino({...casino, ['id_usuario']:idAuth});
    } catch (err) { console.log('error obteniendo usuario: ', err) };
  }

  async function sumbitCasino () {
    try {
      const resCasino = await API.graphql(graphqlOperation(createCasino, {input:casino}));
      await sumbitHorariosFijos(resCasino.data.createCasino.id);
    } catch (error) {
      console.log(error);
    }
  };

  async function sumbitHorariosFijos(idCasino){
    let DaysSelected = {
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
      domingo: false
    };
    for (let day = 0; day < arrayDays.length; day++) {
      let ban = false;
      let horarioForSumbit = {
        id_casino: idCasino,
        hora_inicio: '2 pm',
        hora_fin: '10 pm',
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false,
        precio: 0
      }
      if(DaysSelected[arrayDays[day]]) continue;
      for (let index = day + 1; index <= arrayDays.length - 1; index++) {
        if(days[arrayDays[day]] === days[arrayDays[index]]){
          horarioForSumbit[arrayDays[index]] = true;
          DaysSelected[arrayDays[index]] = true;
          ban = true;
        }
      }
      if(ban){
        horarioForSumbit['precio'] = days[arrayDays[day]];
        horarioForSumbit[arrayDays[day]] = true;
        console.log(horarioForSumbit);
        await API.graphql(graphqlOperation(createCasinoHorarioFijo, {input:horarioForSumbit}));
      }else{
        horarioForSumbit['precio'] = days[arrayDays[day]];
        horarioForSumbit[arrayDays[day]] = true;
        console.log(horarioForSumbit);
        await API.graphql(graphqlOperation(createCasinoHorarioFijo, {input:horarioForSumbit}));
      }
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
          <div className={classes.infoContainer}>
            <h2>Registrar Casino</h2>
            <div>
              <TextInput
                id="casinoName"
                invalidText="Invalid error message."
                labelText="Nombre"
                placeholder="Ingresa el nombre del casino"
                value={casino.titulo}
                onChange = {e => setInput('titulo', e.target.value)}
              />
              <br />
              <TextInput
                id="casinoAddress"
                invalidText="Invalid error message."
                labelText="Dirección"
                placeholder="Ingresa la dirección del casino"
                value={casino.direccion}
                onChange = {e => setInput('direccion', e.target.value)}
              />
              <br />
              <TextInput
                id="casinoDescription"
                invalidText="Invalid error message."
                labelText="Descripción"
                placeholder="Ingresa la descripción del casino"
                value={casino.descripcion}
                onChange = {e => setInput('descripcion', e.target.value)}

              />
              <br />
              <p>Capacidad maxima:</p>
              <NumberInput
                id="casinoCapacity"
                invalidText="Invalid error message."
                placeholder="Ingresa la capacidad máxima del casino"
                min={0}
                value={casino.cap_maxima}
                onChange = {e => setInput('cap_maxima', e.target.value)}
              />
              <br />
              <p>Precio por hora Lunes:</p>
              <NumberInput
                id="mondayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Lunes"
                min={0}
                value={days.lunes}
                onChange = {e => setDays('lunes', e.target.value)}
              />
              <br />
              <p>Precio por hora Martes:</p>
              <NumberInput
                id="tuesdayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Martes"
                min={0}
                value={days.martes}
                onChange = {e => setDays('martes', e.target.value)}
              />
              <br />
              <p>Precio por hora Miercoles:</p>
              <NumberInput
                id="wednesdayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Miércoles"
                min={0}
                value={days.miercoles}
                onChange = {e => setDays('miercoles', e.target.value)}
              />
              <br />
              <p>Precio por hora Jueves:</p>
              <NumberInput
                id="thursdayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Jueves"
                min={0}
                value={days.jueves}
                onChange = {e => setDays('jueves', e.target.value)}
              />
              <br />
              <p>Precio por hora Viernes:</p>
              <NumberInput
                id="fridayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Viernes"
                value={days.viernes}
                onChange = {e => setDays('viernes', e.target.value)}
              />
              <br />
              <p>Precio por hora Sabado:</p>
              <NumberInput
                id="saturdayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Sábado"
                value={days.sabado}
                onChange = {e => setDays('sabado', e.target.value)}
              />
              <br />
              <p>Precio por hora Domingo:</p>
              <NumberInput
                id="sundayPrice"
                helperText="Ingrese 0 para marcar el día como No Disponible"
                invalidText="Invalid error message."
                placeholder="Ingresa el precio por hora de Domingo"
                value={days.domingo}
                onChange = {e => setDays('domingo', e.target.value)}
              />
            </div>
            <br />
            <Button color="primary" size="lg" onClick={sumbitCasino}>
                  Registrar casino
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
