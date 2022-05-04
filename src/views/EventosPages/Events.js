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

import { listEventsByUser } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(informationPageStyle);
const bcrypt = require('bcryptjs');

export default function AdminCasinoProveedor(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const classes = useStyles();
  const [eventos, setEventos] = useState([]);
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    let idAuth = window.sessionStorage.getItem('idAuth');
    try {
      const eventData = await API.graphql(graphqlOperation(listEventsByUser, { id: idAuth }));
      const eventList = eventData.data.getUsuario.eventos.items;
      for (let idxCasino = 0; idxCasino < eventList.length; idxCasino++) {
        if (eventList[idxCasino].casino.casino.imagenes.items.length === 0) {
          eventList[idxCasino].img = '';
        }else {
          const key_image = eventList[idxCasino].casino.casino.imagenes.items[0].file.key;
          //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
          const img = await Storage.get(key_image, {level: 'public'});
          eventList[idxCasino].img = img;
        }
      }
      setEventos(eventList);
      console.log(eventList);
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
          { eventos.map(({ id, fecha, casino, banquete, entretenimiento, importe_total, img }, index) => {
            return (
              <div className={classes.infoContainer}>
                <h2>{casino.casino.titulo} - {fecha}</h2>
                <hr className={classes.hrRound}></hr>
                <h3>Casino: {casino.casino.titulo} - {casino.status}</h3>
                {
                  banquete ? 
                  <h3>Banquete: {banquete.banquete.titulo} - {banquete.status}</h3>
                  : null
                }
                {
                  entretenimiento ? 
                  <h3>Entretenimiento: {entretenimiento.entretenimiento.titulo} - {entretenimiento.status}</h3>
                  : null
                }
                <h3>Importe total del evento: ${importe_total}</h3>
                {
                  (casino.reviewed && ( banquete ? banquete.reviewed : true ) && (entretenimiento ? entretenimiento.reviewed : true)) ? 
                  <Button color="primary" size="lg">
                  Calificación enviada
                  </Button>
                  :
                  <Button color="primary" size="lg" href={ "/reviewEvent=" + id}>
                  Calificar servicios
                  </Button>
                }
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
