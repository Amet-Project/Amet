import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardGroup, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
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
        if (casinos[idxCasino].imagenes.items.length === 0) {
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
                  casino.aprobado ? 
                  <div>
                    <Col key={casino.id}>
                    <Card text='dark'>
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
                  </div>
                  : null
                ))
              }
            </Row>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
