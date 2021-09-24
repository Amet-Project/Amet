import React, { useState, useEffect } from "react";
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
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listCasinos } from '../../graphql/queries.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [casinos, setCasinos] = useState([])

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchCasinos()
  }, [])

  async function fetchCasinos() {
    try {
      const usersData = await API.graphql(graphqlOperation(listCasinos))
      setCasinos(usersData.data.listCasinos.items)
    } catch (err) { console.log('error cargando casinos') }
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
        <div className={classes.container}>
          <GridContainer justify="center">
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
                            <img className={classes.casinoImage} src={'https://images.getbento.com/accounts/e1aebb31183b4f68112b495ab2ebbf66/media/images/937502_DSC_1141.jpg?w=1800&fit=max&auto=compress,format&h=1800'} />
                            <p>{casino.descripcion}</p>
                          </div>
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button color="primary" size="lg">
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
