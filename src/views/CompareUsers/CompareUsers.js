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
import { eventoPorFecha } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { userid1, userid2 } = useParams()
  const [casinos1, setCasinos1] = useState([]);
  const [casinos2, setCasinos2] = useState([]);
  const [ratings1, setRatings1] = useState([]);
  const [ratings2, setRatings2] = useState([]);
  const [difCasinos, setDifCasinos] = useState([]);
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
      let ratingData1 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: userid1 }));
      let ratingData2 = await API.graphql(graphqlOperation(ratingCasinoPorUsuario, { id_usuario: userid2 }));


      let userRatings1 = ratingData1.data.ratingCasinoPorUsuario.items;
      let userRatings2 = ratingData2.data.ratingCasinoPorUsuario.items;
      console.log('User Ratings 2: ', userRatings2);
      let sameCasino = [];
      let similarCasino = [];
      let differentCasino = [];
      let sameCasino1 = [];
      let sameCasino2 = [];
      let sameRating = [];
      let similarRating = [];
      let similarRating2 = [];
      let differentRating = [];
      let differentRating2 = [];
      let sameRating1 = [];
      let sameRating2 = [];

      for(let idxRatings = 0; idxRatings<userRatings1.length; idxRatings++){
        for(let idxRatings2 = 0; idxRatings2<userRatings2.length; idxRatings2++){
            if(userRatings1[idxRatings].id_casino == userRatings2[idxRatings2].id_casino){
                if(userRatings1[idxRatings].rating == userRatings2[idxRatings2].rating && (!sameCasino.includes(userRatings1[idxRatings].id_casino))){
                    console.log("Same rating - Casino "+ userRatings1[idxRatings].id_casino+ " - "+ userRatings1[idxRatings].rating+" vs "+userRatings2[idxRatings2].rating);
                    sameCasino.push(userRatings1[idxRatings].id_casino);
                    sameRating.push(userRatings1[idxRatings].rating);
                }
                else{
                    if((userRatings1[idxRatings].rating == (userRatings2[idxRatings2].rating - 1) || userRatings1[idxRatings].rating == (userRatings2[idxRatings2].rating + 1)) && (!similarCasino.includes(userRatings1[idxRatings].id_casino))){
                        console.log("Similar rating - Casino "+ userRatings1[idxRatings].id_casino+ " - "+ userRatings1[idxRatings].rating+" vs "+userRatings2[idxRatings2].rating);
                        similarCasino.push(userRatings1[idxRatings].id_casino);
                        similarRating.push(userRatings1[idxRatings].rating);
                        similarRating2.push(userRatings2[idxRatings2].rating);
                    }
                    else{
                        if(!sameCasino.includes(userRatings1[idxRatings].id_casino) && !similarCasino.includes(userRatings1[idxRatings].id_casino) && !differentCasino.includes(userRatings1[idxRatings].id_casino)){
                            console.log("Different rating  - Casino "+ userRatings1[idxRatings].id_casino+ " - "+ userRatings1[idxRatings].rating+" vs "+userRatings2[idxRatings2].rating);
                            differentCasino.push(userRatings1[idxRatings].id_casino);
                            differentRating.push(userRatings1[idxRatings].rating);
                            differentRating2.push(userRatings2[idxRatings2].rating);
                        }
                    }
                }
            }
        }
      }

      let differentCasinos = [];
      for(let idxRatings = 0; idxRatings<userRatings1.length; idxRatings++){
          if(!sameCasino1.includes(userRatings1[idxRatings].id_casino)){
            differentCasinos.push(userRatings1[idxRatings].id_casino);
          }
      }

      for(let idxRatings = 0; idxRatings<userRatings2.length; idxRatings++){
        if(!sameCasino2.includes(userRatings2[idxRatings].id_casino)){
          differentCasinos.push(userRatings2[idxRatings].id_casino);
        }
      }
      setCasinos1(sameCasino1);
      setCasinos2(sameCasino2);
      setRatings1(sameRating1);
      setRatings2(sameRating2);
      setDifCasinos(differentCasinos);
      let totalCasinos = sameCasino1.length + differentCasinos.length;
      let porcentajeCasinos = (sameCasino1.length * 100 ) / totalCasinos;
      console.log('Casinos en Same Casino: ', sameCasino.length);
      console.log('Casinos en Similar Casino: ', similarCasino.length);
      console.log('Casinos en Different: ', differentCasino.length);
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
                    <h2></h2>
                </div>
              </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
