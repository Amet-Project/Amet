import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardGroup, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { listCasinosandImage } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function CasinoPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [casinos, setCasinos] = useState([])

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchCasinos();
  }, [])

  async function fetchCasinos() {
    try {
      const usersData = await API.graphql(graphqlOperation(listCasinosandImage))
      setCasinos(usersData.data.listCasinos.items)
    } catch (err) { console.log('error cargando casinos') }
  }
  function getImageOfCasino(casino){
    //REQUESTING THE IMAGE BY ITS KEY ON THE BUCKET OF S3
    if (casino.imagenes.items.length == 0) {
      return 'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg';
    }else {
      const url_image = casino.imagenes.items[0].url;
      return url_image;
    }
  }

  return (
    <div>
      {
        console.log('casinos: ', casinos)
      }
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
            <Row xs={3} md={4} className="g-4">
            {
                casinos && casinos.map(casino => (
                  <Col>
                  <Card text='dark'>
                    <Card.Img variant="top" src={getImageOfCasino(casino)} />
                    <Card.Body>
                      <Card.Title>
                        {casino.titulo}
                      </Card.Title>
                      <Card.Text>
                        {casino.descripcion}
                      </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Reservar</Button>
                  </Card>
                  </Col>
                ))
              }
            </Row>

{/*             <GridItem xs={12} sm={12} md={4}>
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
            </GridItem> */}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
