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

import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { listCasinosWithImage } from '../../graphql/queriesExt.js'
import { eventoPorFecha } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

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
  const { date } = useParams()

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
      const casinosData = await API.graphql(graphqlOperation(listCasinosWithImage));
      const eventosData = await API.graphql(graphqlOperation(eventoPorFecha, {fecha: date}));
      let eventsArray = eventosData.data.eventoPorFecha.items;
      let venuesArray = casinosData.data.listCasinos.items;
      
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
      let indexVenueToDelete = -1;

      const dateMod = date.slice(6) + "/" + date.slice(3, 5)+ "/" + date.slice(0, 2) + " 00:00:00";
      const dayNumber = new Date(dateMod).getDay();
      day = days[dayNumber];

      for (let i = 0; i < eventsArray.length; i++) {
        for (let j = 0; j < venuesArray.length; j++) {
          if (eventsArray[i].casino.id_casino === venuesArray[j].id) {
            indexVenueToDelete = j;
            break;
          }      
        }
        if(indexVenueToDelete !== -1){
          venuesArray.splice(indexVenueToDelete, 1);
        }
      }
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

              <div className={classes.infoBigContainer}>
                  {casinos && casinos.map(casino => {
                      return (
                          <div className={classes.infoContainer}>
                              <h2>{casino.titulo}</h2>
                              <hr className={classes.hrRound}></hr>
                              <img className={classes.casinoListImage} src={casino.img} />
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
                          <br/>
                          <div className={classes.listText}>
                          Dirección: {casino.direccion} <br />
                          Descripción: {casino.descripcion} <br />
                          Horario: {startHour + " - " + endHour} <br />                         
                          Precio: ${price === 0 ? "No disponible este día" : price.toString()} <br />
                          {casino.servicios.items.length !== 0 ? "Servicios" : ""}
                          <ul>
                            {casino.servicios && casino.servicios.items.map(srv => (
                                <li>{srv.servicio.nombre}</li>
                              ))
                            }
                          </ul>
                          <Button className={classes.btnList} color="primary" size="lg" disabled={price === 0} href={ "/reserveevent=" + date + "=" + casino.id}>
                          Reservar  
                          </Button>
                        </div>
                      </div>
                    );
                  })}
          <div className={classes.pageFooter}>
            <Footer whiteFont />
          </div>
        </div>
      </div>
    </div>
  );
}
