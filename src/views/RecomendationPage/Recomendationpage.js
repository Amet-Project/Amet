import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import { Loading } from "carbon-components-react";
import { Modal, ComposedModal, ModalHeader, ModalFooter } from "carbon-components-react";

import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { ratingCasinoPorUsuario } from '../../graphql/queries.js'
import { eventoPorFecha, listEventsByUser } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { date } = useParams()
  const [open, setOpen] = useState(false);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchCasinos()
  }, []);

  const onSubmitClick= (e) => {
    e.preventDefault();
    window.location.href="/"
}

  //Get the whole items
  async function fetchCasinos() {
    try {
      const idAuth = window.sessionStorage.getItem('idAuth');
      let ratingData = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: idAuth }));
      const eventosData = await API.graphql(graphqlOperation(eventoPorFecha, {fecha: date}));
      const userEventData = await API.graphql(graphqlOperation(listEventsByUser, { id: idAuth }));
      let eventsArray = eventosData.data.eventoPorFecha.items;
      let userRatings = ratingData.data.ratingCasinoPorUsuario.items;
      let userEvents = userEventData.data.getUsuario.eventos.items;
      if(userRatings.length < 3){
        setOpen(true);
      }
      let positiveRatings = 0;
      for (let idx = 0; idx < userRatings.length; idx++){
        if(userRatings[idx].rating >= 3){
          positiveRatings++;
        }
      };
      if(positiveRatings < 2){
        setOpen(true);
      }
      let userCasinos = [];
      for (let idx = 0; idx < userEvents.length; idx++){
        userCasinos.push(userEvents[idx].casino.casino.id);
      };
      let bestScore = 0;
      let user1;
      let user2;
      let user3;
      const baseURL= "https://amet-ffts6w3jba-uc.a.run.app/rating";
      await axios.get(`${baseURL}?hashuser=${idAuth}`).then(response =>{
        console.log('response: ', response.data);
        user1 = response.data[0];
        user2 = response.data[1];
        user3 = response.data[2];
      });
      console.log('1: ', user1, ' 2: ', user2, ' 3: ', user3);
      let ratingData1 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user1 }));
      let ratingData2 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user2 }));
      let ratingData3 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: user3 }));
      userRatings = ratingData1.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      let found = false;
      let bestCasinos = [];
      let bestCasinos2 = [];
      let bestCasinos2BU = []
      let bestCasinos3 = [];
      let bestCasinos3BU = [];
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating > bestScore && !userCasinos.includes(userRatings[idxRatings].id_casino)){
              bestCasinos = [];
              bestCasinos.push(userRatings[idxRatings].id_casino);
              bestScore = userRatings[idxRatings].rating;
            }
            else{
              if(!userCasinos.includes(userRatings[idxRatings].id_casino)){
                bestCasinos.push(userRatings[idxRatings].id_casino);
                bestScore = userRatings[idxRatings].rating;
              }
            }
          }
          found = false;
        }
      };
      found = false;
      userRatings = ratingData2.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating > bestScore && !bestCasinos.includes(userRatings[idxRatings].id_casino) && !userCasinos.includes(userRatings[idxRatings].id_casino)){
              bestCasinos2BU.push.apply(bestCasinos2BU, bestCasinos2);
              bestCasinos2 = [];
              bestCasinos2.push(userRatings[idxRatings].id_casino);
              bestScore = userRatings[idxRatings].rating;
            }
            else{
              if(!bestCasinos.includes(userRatings[idxRatings].id_casino) && !userCasinos.includes(userRatings[idxRatings].id_casino)){
                bestCasinos2.push(userRatings[idxRatings].id_casino);
                bestScore = userRatings[idxRatings].rating;
              }
            }
          }
          found = false;
        }
      };
      if(bestCasinos2.length == 0){
        bestCasinos2.push.apply(bestCasinos2, bestCasinos2BU);
      }
      found = false;
      userRatings = ratingData3.data.ratingCasinoPorUsuario.items;
      bestScore = 0;
      for (let idxRatings = 0; idxRatings < userRatings.length; idxRatings++){
        if (userRatings[idxRatings].rating >= bestScore){
          for (let i = 0; i < eventsArray.length; i++){
            if (eventsArray[i].casino.id_casino === userRatings[idxRatings].id_casino) {
              found = true;
              break;
            }
          }
          if(!found){
            if(userRatings[idxRatings].rating > bestScore && !bestCasinos.includes(userRatings[idxRatings].id_casino) && !bestCasinos2.includes(userRatings[idxRatings].id_casino) && !userCasinos.includes(userRatings[idxRatings].id_casino)){
              bestCasinos3BU.push.apply(bestCasinos3BU, bestCasinos3);
              bestCasinos3 = [];
              bestCasinos3.push(userRatings[idxRatings].id_casino);
              bestScore = userRatings[idxRatings].rating;
            }
            else{
              if(!bestCasinos.includes(userRatings[idxRatings].id_casino) && !bestCasinos2.includes(userRatings[idxRatings].id_casino) && !userCasinos.includes(userRatings[idxRatings].id_casino)){
                bestCasinos3.push(userRatings[idxRatings].id_casino);
                bestScore = userRatings[idxRatings].rating;
              }
            }
          }
          found = false;
        }
      };
      if(bestCasinos3.length == 0){
        bestCasinos3.push.apply(bestCasinos3, bestCasinos3BU);
      }
      var item = bestCasinos[Math.floor(Math.random()*bestCasinos.length)];
      var item2 = bestCasinos2[Math.floor(Math.random()*bestCasinos2.length)];
      var item3 = bestCasinos3[Math.floor(Math.random()*bestCasinos3.length)];

      window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "/recomendationcheckout="+date+"="+item+"="+item2+"="+item3;

    }, 3000);
    } catch (err) { setOpen(true) }
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
                <div className={classes.infoContainerCenter}>
                <h2>Obteniendo tu recomendación de nuestra Inteligencia Artificial...</h2>
                    <Loading
                        description="Active loading indicator" withOverlay={false}
                    />
                </div>
              </div>

              <ComposedModal open={open} onClose={e => onSubmitClick(e)} onRequestClose={e => onSubmitClick(e)} preventCloseOnClickOutside={true}>
                  <ModalHeader label={"Mensaje"}>
                      <h1>
                          Sin recomendación
                      </h1>
                      <h2>No tenemos suficiente información para recomendarte.</h2>
                      <h2>Puedes crear un evento de manera normal, no es necesario utilizar recomendación por IA.</h2>
                  </ModalHeader>
                  <ModalFooter primaryButtonText="OK" onRequestSubmit={e => onSubmitClick(e)}/>
              </ComposedModal>
        <Footer whiteFont />
      </div>
    </div>
  );
}
