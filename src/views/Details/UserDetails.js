import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
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
import perfil from "assets/img/perfil.jpg";

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GetUsuarioDetails } from '../../graphql/queriesExt.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(styles);
//const bcrypt = require('bcryptjs');

export default function UserDetails(props) {
  //let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const { ...rest } = props;

  setTimeout(function() {
    setCardAnimation("");
  }, 1500);
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser(){
    const idAuthMine = window.sessionStorage.getItem('idAuth');
    setidAuth(idAuthMine);
    try {
      const response = await API.graphql(graphqlOperation(GetUsuarioDetails, {id: idAuthMine}));
      setUser(response.data.getUsuario);
    } catch (err) {
      console.log('Error cargando usuario: ',err);
    }
    
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
                      <h4>{user.nombres}</h4>
                      <h4>{user.ap_paterno ?? ''}{user.ap_materno ? ' ' + user.ap_materno : ''}</h4>
                    </CardHeader>
                    <CardBody>
                      <img className={classes.casinoImage} src={perfil} alt="imagePerfil" />
                      <p>Email: {user.email}</p>
                      <p>Celular: {user.celular}</p>
                      <p>Cumpleaños: {user.nacimiento}</p>
                      
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button href="\user_edit" color="primary" size="lg">
                        Editar
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
