import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Carbon components
import { DatePicker, DatePickerInput } from 'carbon-components-react'
import { Run32 } from '@carbon/icons-react';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";


import dateFormat from 'dateformat';

//Amplify section
//import { API, graphqlOperation} from 'aws-amplify'
//import { listCasinos } from '../../graphql/queries'
 

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [datePicked, setDatePicked] = useState('')
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    validateAuthentication()
  }, [])

  function validateAuthentication() {
    //let authen = window.sessionStorage.getItem('auth');
    console.log("AUTH:", window.sessionStorage.getItem('auth'))

  }

  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Amet"
        rightLinks={<HeaderLinks />}
        fixed
        height={300}
        {...rest}
      />
      <Parallax filter image={require("assets/img/party.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Maneja tus eventos</h1>
              <h4>
                Organiza tu evento desde la comodidad de tu casa, pon fecha, lugar, 
                música, comida y más. Encuentra la combinación perfecta en Amet.
              </h4>
              <br />
              <DatePicker datePickerType="single" dateFormat="d-m-Y" minDate="today" value={datePicked} onChange={e => setDatePicked(dateFormat(e, "dd-mm-yyyy"))}>
                <DatePickerInput
                  placeholder="dd/mm/aaaa"
                  id="date-picker-single"
                />
              </DatePicker>
              <br />
              <Button
                color="primary"
                size="lg"
                href= {window.sessionStorage.getItem('auth') ? ("/startevent=" + datePicked) : ("/login=" + datePicked)}
                rel="noopener noreferrer"
              >
                <Run32 />
                Iniciar Evento
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        </div>
      </div>
      <Footer />
    </div>
  );
}
