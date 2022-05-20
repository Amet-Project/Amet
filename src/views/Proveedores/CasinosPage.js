import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {CardGroup, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";
import image from "assets/img/bg7.jpg";
import Button from "components/CustomButtons/Button.js";


//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { listCasinosWithImage } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);
const cardStyles = makeStyles(cardStyle);

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
  const cardClasses = cardStyles();
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
          casinos[idxCasino].img = 'https://weddingsparrow.com/uploads/slir/w1200/IMG_1028.jpg';
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
          backgroundColor: "black",
          backgroundSize: "contain",
        }}
      >
        <div className={classes.container}>
            <Row xs={3} md={4} className="g-4">
            {
                casinos && casinos.map(casino => (
                  casino.aprobado ? 
                    <Col key={casino.id}>
                    <Card className={cardClasses.card} text='dark'>
                      <Card.Img variant="top" src={casino.img} className={classes.cardImage}/>
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
                          <p>{casino.descripcion}</p>
                          <p>Teléfono: {casino.usuario.telefono}</p>
                          <p>Precio: ${lowPrice + " - $" + highPrice}</p>
                        </Card.Text>
                      </Card.Body>
                      <Button href={"\\casinodetails="+casino.id} color="primary">Detalles</Button>
                    </Card>
                    </Col>
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
