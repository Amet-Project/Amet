import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listCasinos } from '../../graphql/queries.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function ReservePage(props) {

    const [cardAnimaton, setCardAnimation] = useState("cardHidden");

    setTimeout(function() {
        setCardAnimation("");
      }, 700);
      const classes = useStyles();
      const { ...rest } = props;

    const { date, idvenue } = useParams()

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
              <div className={classes.container}>
                  <h1>{date}</h1>
                  <h1>{idvenue}</h1>
              </div>
              <Footer whiteFont />
          </div>
      </div>
  );
}
