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

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { getCasino } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

const days = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];

//Variables
let price = 0;
let day;
let startHour;
let endHour;

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { date, idCasino1, idCasino2, idCasino3 } = useParams()

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    fetchCasinos()
  }, []);

  //Get the whole items
  async function fetchCasinos() {
    try {
      const casinosData = await API.graphql(graphqlOperation(getCasino, {id: idCasino1}));
      const casinosData2 = await API.graphql(graphqlOperation(getCasino, {id: idCasino2}));
      const casinosData3 = await API.graphql(graphqlOperation(getCasino, {id: idCasino3}));
      let venuesArray = [];
      venuesArray.push(casinosData.data.getCasino);
      venuesArray.push(casinosData2.data.getCasino);
      venuesArray.push(casinosData3.data.getCasino);
      
      for (let idxCasino = 0; idxCasino < venuesArray.length; idxCasino++) {
        if (venuesArray[idxCasino].imagenes.items.length === 0) {
          venuesArray[idxCasino].img = '';
        }else {
          const key_image = venuesArray[idxCasino].imagenes.items[0].file.key;
          //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
          const img = await Storage.get(key_image, {level: 'public'});
          venuesArray[idxCasino].img = img;
        }
      }

      const dateMod = date.slice(6) + "/" + date.slice(3, 5)+ "/" + date.slice(0, 2) + " 00:00:00";
      const dayNumber = new Date(dateMod).getDay();
      day = days[dayNumber];
      setCasinos(venuesArray);
    } catch (err) { console.log('error cargando casinos', err) }
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
          backgroundColor: "black",
          backgroundSize: "contain",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
          <h1>Casinos Recomendados por Inteligencia Artificial:</h1>
            <GridItem xs={12} sm={12} md={4}>
            {
                casinos && casinos.map(casino => (
                  <div>
                  <Card className={classes[cardAnimaton]}>
                    <form className={classes.form}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h3>{casino.titulo}</h3>
                      </CardHeader>
                      <CardBody>
                        <div id={casino.id}>                                                   
                          { 
                          price = 0,
                          startHour = "",
                          endHour = "", 
                          casino.horarios_fijos.items.map(hf => {
                            if(hf[day]) {
                              price = hf.precio;
                              startHour = hf.hora_inicio;
                              endHour = hf.hora_fin;                               
                            }
                          })
                          }                           
                          <img className={classes.casinoImage} src={casino.img} />
                          Dirección: {casino.direccion} <br />
                          Descripción: {casino.descripcion} <br />
                          Horario: {startHour + " - " + endHour} <br />                         
                          Precio: ${price === 0 ? "No disponible este día" : price.toString()} <br />
                          {console.log(casino.servicios)}
                          {casino.servicios.items.length !== 0 ? "Servicios" : ""}
                          <ul>
                            {casino.servicios && casino.servicios.items.map(srv => (
                                <li>{srv.servicio.nombre}</li>
                              ))
                            }
                          </ul>
                        </div>
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="lg" disabled={price === 0} href={ "/reserveevent=" + date + "=" + casino.id}>
                          Reservar
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                  <br />
                </div>
                ))
              }
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
