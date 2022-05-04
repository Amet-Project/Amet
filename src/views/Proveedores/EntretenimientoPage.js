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
import { listEntretenimientoWithImage } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

//variables

export default function ComidaPage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [entretenimiento, setentretenimiento] = useState([])

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchEntretenimiento();
  }, [])

  async function fetchEntretenimiento() {
    try {
      // request entretenimiento list
      let entretenimientoData = await API.graphql(graphqlOperation(listEntretenimientoWithImage));
      let entretenimiento = entretenimientoData.data.listEntretenimientos.items;

      // ITERATING THE ARRAY OF entretenimiento TO ASSIGN THEM THE IMAGES ON THE S3 BUCKET
      for (let idxEntretenimiento = 0; idxEntretenimiento < entretenimiento.length; idxEntretenimiento++) {
        if (entretenimiento[idxEntretenimiento].imagenes.items.length === 0) {
          entretenimiento[idxEntretenimiento].img = '';
        }else {
          const key_image = entretenimiento[idxEntretenimiento].imagenes.items[0].file.key;
          //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING entr
          const img = await Storage.get(key_image, {level: 'public'});
          entretenimiento[idxEntretenimiento].img = img;
        }
      }
     
      setentretenimiento(entretenimiento);
    } catch (err) { console.log('error cargando entretenimiento: ', err) }
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
                entretenimiento && entretenimiento.map(entr => (
                  entr.aprobado ? 
                  <div>
                    <Col key={entr.id}>
                    <Card text='dark'>
                      <Card.Img variant="top" src={entr.img} />
                      <Card.Body>
                        <Card.Title>
                          {entr.titulo}
                        </Card.Title>
                        <Card.Text>
                          {entr.descripcion} <br />
                          Precio por hora: {entr.precio_hora} <br />
                          Minimo de horas: {entr.minimo} 
                        </Card.Text>
                      </Card.Body>
                      <Button href={"\\entretenimientodetails="+entr.id} color="primary">Detalles</Button>
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
