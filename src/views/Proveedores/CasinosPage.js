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
import { listCasinosWithImage } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

//variables
let lowPrice = 0;
let highPrice = 0;

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
      // REQUESTING THE LIST OF CASINOS WITH THEIR IMAGES INFO
      let casinosData = await API.graphql(graphqlOperation(listCasinosWithImage));
      let casinos = casinosData.data.listCasinos.items;
      // ITERATING THE ARRAY OF CASINOS TO ASSIGN THEM THE IMAGES ON THE S3 BUCKET
      for (let idxCasino = 0; idxCasino < casinos.length; idxCasino++) {
        if (casinos[idxCasino].imagenes.items.length == 0) {
          casinos[idxCasino].img = '';
        }else {
          const key_image = casinos[idxCasino].imagenes.items[0].file.key;
          //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
          const img = await Storage.get(key_image, {level: 'public'});
          casinos[idxCasino].img = img;
        }
      }
     
      setCasinos(casinos);
    } catch (err) { console.log('error cargando casinos: ', err) }
  }
  // async function getImageOfCasino(casino){
  //   //REQUESTING THE IMAGE BY ITS KEY ON THE BUCKET OF S3
  //   if (casino.imagenes.items.length == 0) {
  //     return '';
  //   }else {
  //     const key_image = casino.imagenes.items[0].file.key;
  //     const img = await Storage.get(key_image, {level: 'public'});
  //     console.log(img);
  //     return img;
  //   }
  // }

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
            <Row xs={3} md={4} className="g-4">
            {
                casinos && casinos.map(casino => (
                  <Col key={casino.id}>
                  <Card text='dark'>
                    {/* <Card.Img variant="top" src={getImageOfCasino(casino)} /> */}
                    <Card.Img variant="top" src={casino.img} />
                    <Card.Body>
                      <Card.Title>
                        {casino.titulo}
                      </Card.Title>
                      <Card.Text>
                        {lowPrice = 999999,
                        highPrice = 0,
                        casino.horarios_fijos.items.map(hf => {
                          if (hf.precio > highPrice) {
                            highPrice = hf.precio
                          } 
                          if (hf.precio < lowPrice) {
                            lowPrice = hf.precio
                          }
                        })}
                        {casino.descripcion}
                        <p>{lowPrice + " - " + highPrice} </p>
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
