import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { getCasino } from '../../graphql/queriesExt.js'
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
  const { date, idCasino1, idCasino2, idCasino3,  } = useParams()

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
      let venuesArray = [];
      if(idCasino1 != "undefined"){
        const casinosData = await API.graphql(graphqlOperation(getCasino, {id: idCasino1}));
        venuesArray.push(casinosData.data.getCasino);
      }
      if(idCasino2 != "undefined"){
        const casinosData2 = await API.graphql(graphqlOperation(getCasino, {id: idCasino2}));
        venuesArray.push(casinosData2.data.getCasino);
      }
      if(idCasino3 != "undefined"){
        const casinosData3 = await API.graphql(graphqlOperation(getCasino, {id: idCasino3}));
        venuesArray.push(casinosData3.data.getCasino);
      }
      console.log(venuesArray);
      
      for (let idxCasino = 0; idxCasino < venuesArray.length; idxCasino++) {
        if(venuesArray[idxCasino].imagenes){
          if (venuesArray[idxCasino].imagenes.items.length === 0) {
            venuesArray[idxCasino].img = 'https://weddingsparrow.com/uploads/slir/w1200/IMG_1028.jpg';
          }else {
            const key_image = venuesArray[idxCasino].imagenes.items[0].file.key;
            console.log('Key image: ', key_image);
            //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
            const img = await Storage.get(key_image, {level: 'public'});
            venuesArray[idxCasino].img = img;
          }
        } else {
          venuesArray[idxCasino].img = 'https://weddingsparrow.com/uploads/slir/w1200/IMG_1028.jpg';
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
                          {console.log(casino.servicios)}
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