import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Carbon components
import { TextInput } from 'carbon-components-react'

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

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { usuarioPorEmail } from "../../graphql/queries";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function LoginPage(props) {
  let history = useHistory();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [userData, setUserData] = useState({email: '', pwd:''})
  const [isInvalidEmail, setIsInvalidEmail] = useState(false)
  const { date } = useParams()

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const setInput = (key, value) => {
    setUserData({...userData, [key]: value});
  }

  const ValidateInputs = () => {
    setIsInvalidEmail(handleValidation())
    if(isInvalidEmail){
      console.log('Invalid email:');
    }else{
      console.log('Valid email');
    }
    loginUser();
  }
  const aftertLoging = (user) => {
    console.log('Login success: ', user.nombres);
    window.sessionStorage.setItem('auth', true);
    window.sessionStorage.setItem('idAuth', user.id);
    window.sessionStorage.setItem('userRole', user.rol)
    if(date != undefined){
      history.push('/startevent=' + date);
    }
    else{
      history.push('/');
    }
  }
  //Validate credentials
  function loginUser() {
    try {
      API.graphql(graphqlOperation(usuarioPorEmail, {email: userData.email}))
      .then((response)=>{
        if(response.data.usuarioPorEmail.items.length == 0){
          console.log('No se encontro usuario');
        }
        else {
          console.log('data: ', response.data);
          const loggedUser = response.data.usuarioPorEmail.items[0];
          const doesPasswordMatch = bcrypt.compareSync(userData.pwd, loggedUser.pwd)
          doesPasswordMatch ?
            aftertLoging(loggedUser) :
            console.log('Contraseña incorrecta');
        }
      });

    } catch (err) {
      console.log('Error al iniciar sesión:', err)
    }
  }
  const handleValidation = () => {
    let fields = userData;
    let formIsInvalid = false;

    //Email
    if(!fields["email"]){
       formIsInvalid = true;
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsInvalid = true;
        }
    }
    return formIsInvalid;
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
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Si aún no tienes una cuenta</h4>
                    <Link to="/signup" className={classes.signupLink}>Regístrate</Link>
                    <br/>
                    <Link to="/signup_proveedores" className={classes.signupLink}>Regístrate como Proveedor</Link>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>O inicia sesión con Email</p>
                  <CardBody>
                    <TextInput
                      id="emailInput"
                      labelText="Correo electrónico:"
                      type='email'
                      invalid={isInvalidEmail}
                      value={userData.email}
                      onChange={e => setInput('email', e.target.value)}
                      className="emailInput"
                    />
                    <br />
                    <TextInput.PasswordInput
                      id="passwordInput"
                      labelText="Contraseña:"
                      value={userData.pwd}
                      onChange={e => setInput('pwd', e.target.value)}
                      className="passwordInput"
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={ValidateInputs}>
                      Iniciar Sesión
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
