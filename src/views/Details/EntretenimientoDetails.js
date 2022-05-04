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

//Importanto estilos
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import awsExports from "../../aws-exports.js";
import { getEntretenimiento } from "graphql/queriesExt.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function CasinoDetails(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const { id } = useParams();

  setTimeout(function() {
    setCardAnimation("");
  }, 1500);
  const classes = useStyles();
  const { ...rest } = props;
  const [entreImgs, setEntreImgs] = useState([]);
  const [entretenimiento, setEntretenimiento] = useState([]);
  useEffect(() => {
    fetchCasinoData()
  }, [])

  async function fetchCasinoData() {
    try {
      const responseGql = await API.graphql(graphqlOperation(getEntretenimiento, {id: id}));
      const entreData = responseGql.data.getEntretenimiento;
      const casinoKeyImages = entreData.imagenes.items;
      let arrayImages = [];
      //REQUESTING IMAGES BY ITS KEY ON THE BUCKET OF S3
      casinoKeyImages.forEach(image => {
        Storage.get(image.file.key).then((response) => {
          arrayImages.push(response)
        });
      });
      setEntreImgs(arrayImages);
      setEntretenimiento(entreData);
    } catch (err) { console.log('error cargando las imagenes de casino', err); }
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
              <div>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h3>{entretenimiento.titulo}</h3>
                    </CardHeader>
                    <CardBody>
                      <p>{entretenimiento.descripcion}</p>
                      <p>RFC: {entretenimiento.rfc}</p>
                      <p>Precio por hora: ${entretenimiento.precio_hora}</p>
                      <p>Mínimo de horas: {entretenimiento.minimo}</p>
                      {
                        entreImgs.map(img => (
                          <img key={img} className={classes.casinoImage} src={img} />
                        ))
                      }
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button href={"\\"} color="primary" size="lg">
                        Volver
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
                <br />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        
        
        <Footer whiteFont />
      </div>
    </div>
  );
}
