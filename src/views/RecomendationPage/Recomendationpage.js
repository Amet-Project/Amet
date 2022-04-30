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

import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(informationPageStyle);

export default function StartEventPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { date } = useParams()

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchCasinos()
  }, []);

  //Get the whole items
  async function fetchCasinos() {
    try {
      const idAuth = window.sessionStorage.getItem('idAuth');
      const baseURL= "https://gorest.co.in/public/v2";
      axios.get(`${baseURL}/users`).then(response =>{
        console.log('response: ', response.data);
      });
      window.setTimeout(function(){

        // Move to a new location or you can do something else
        //window.location.href = "/recomendationcheckout="+date;

    }, 10000);
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
        <Footer whiteFont />
      </div>
    </div>
  );
}
