import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { TextInput, Loading } from 'carbon-components-react'
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
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

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createUsuario } from '../../graphql/mutations.js'
import { usuarioPorEmail } from '../../graphql/queries.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);
const initialState = { 
  nombres: '',
  ap_paterno: '',
  email: '',
  pwd: '',
  rol: 'CLIENTE'
}

const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function SigninPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [formState, setFormState] = useState(initialState)
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(false);

  //Add to API function
  async function addUser() {
    try {
      //Inputs validation
      setLoading(true);
      if (!formState.nombres || !formState.email || !formState.pwd ) {
        console.log("Favor de ingresar todos los campos")
        return 
      }   
      //Email exist validation
      const usuarioAux = await API.graphql(graphqlOperation(usuarioPorEmail, {email: formState.email}))
      if (usuarioAux.data.usuarioPorEmail.items.length > 0){
        console.log("El correo que esta deseando ingresar ya esta registrado")
        return
      } 
      const usuario = { ...formState }
      setUsuarios([...usuarios, usuario])
      usuario.pwd = bcrypt.hashSync(usuario.pwd, bcrypt.genSaltSync());
      setFormState(initialState)
      await API.graphql(graphqlOperation(createUsuario, {input: usuario}))
      window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "/login";

      }, 1000);
    } catch (err) {
      console.log('error creando usuario:', err)
    }
  }

  const setInput = (key, value) => {
    //console.log(formState)
    setFormState({ ...formState, [key]: value })
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
          {
            loading ?
              <Loading
                description="Active loading indicator" withOverlay={true}
              />
              : null
          }
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Registrarse</h4>
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
                  <CardBody>
                  <TextInput
                      id="nameInput"
                      labelText="Nombres:"
                      value={formState.nombres}
                      onChange={e => setInput('nombres', e.target.value)}
                      className="emailInput"
                    />
                    <br />
                    <TextInput
                      id="lastNameInput"
                      labelText="Apellido paterno:"
                      value={formState.ap_paterno}
                      onChange={e => setInput('ap_paterno', e.target.value)}
                      className="emailInput"
                    />
                    <br />
                    <TextInput
                      id="lastNameInput2"
                      labelText="Apellido materno:"
                      value={formState.ap_materno}
                      onChange={e => setInput('ap_materno', e.target.value)}
                      className="emailInput"
                    />
                    <br />
                    <TextInput
                      id="emailInput"
                      labelText="Correo electr??nico:"
                      value={formState.email}
                      type='email'
                      onChange={e => setInput('email', e.target.value)}
                      className="emailInput"
                    />
                    <br />
                    <TextInput.PasswordInput
                      id="passwordInput"
                      labelText="Contrase??a:"
                      value={formState.pwd}
                      onChange={e => setInput('pwd', e.target.value)}
                      className="passwordInput"
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="danger" size="lg" href="/">
                      Cancelar
                    </Button>
                    <Button color="primary" size="lg" onClick={addUser}>
                      Registrarme
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
