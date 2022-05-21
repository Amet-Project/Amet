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
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { listBanquetesWithImage } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);
const cardStyles = makeStyles(cardStyle);

//variables

export default function ComidaPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [banquetes, setbanquetes] = useState([])

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const cardClasses = cardStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchBanquetes();
  }, [])

  async function fetchBanquetes() {
    try {
      // request banquetes list
      let banquetesData = await API.graphql(graphqlOperation(listBanquetesWithImage));
      let banquetes = banquetesData.data.listBanquetes.items;

      // ITERATING THE ARRAY OF banquetes TO ASSIGN THEM THE IMAGES ON THE S3 BUCKET
      for (let idxBanquete = 0; idxBanquete < banquetes.length; idxBanquete++) {
        if (banquetes[idxBanquete].imagenes.items.length === 0) {
          banquetes[idxBanquete].img = 'https://i.pinimg.com/originals/0b/de/4d/0bde4de25d244c95f3be932c2188ed13.jpg';
        }else {
          const key_image = banquetes[idxBanquete].imagenes.items[0].file.key;
          //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING banquete
          const img = await Storage.get(key_image, {level: 'public'});
          banquetes[idxBanquete].img = img;
        }
      }
     
      setbanquetes(banquetes);
    } catch (err) { console.log('error cargando banquetes: ', err) }
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
                banquetes && banquetes.map(banquete => (
                  banquete.aprobado ? 
                  <div>
                    <Col key={banquete.id}>
                    <Card className={cardClasses.foodCard} text='dark'>
                      <Card.Img variant="top" src={banquete.img} className={classes.cardImage}/>
                      <Card.Body>
                        <Card.Title>
                          {banquete.titulo}
                        </Card.Title>
                        <Card.Text>
                          {banquete.descripcion} <br />
                          Precio unitario: {banquete.precio_unitario}
                        </Card.Text>
                      </Card.Body>
                      <Button href={"\\banquetedetails="+banquete.id} variant="primary">Detalles</Button>
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
