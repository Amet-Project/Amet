import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
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
import { updateUsuario } from '../../graphql/mutations.js'
import { usuarioPorEmail } from '../../graphql/queries.js'
import { GetUsuarioDetails } from '../../graphql/queriesExt.js'

import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);
const initialState = { 
  id: '',
  email: '',
  pwd: '',
  pwd_2: '',
  ap_paterno: '',
  ap_materno: '',
  nombres: '',
  celular: '',
  rol: 'CLIENTE'
}

const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function SigninPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [formState, setFormState] = useState(initialState);
  const [usuarios, setUsuarios] = useState([]);
  const [idAuth, setidAuth] = useState('');

  const classes = useStyles();
  const { ...rest } = props;

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  useEffect(() => {
    fetchUser();
  }, []);


  //Add to API function
  async function updateUser() {
    try {
      //Inputs validation
      if (formState.pwd !== formState.pwd_2) {
        return 
      }
      //Email exist validation
      const usuarioAux = await API.graphql(graphqlOperation(usuarioPorEmail, {email: formState.email}))
      if (usuarioAux.data.usuarioPorEmail.items.length === 0){
        console.log("El correo no existe")
        return
      }//Validating user to change their pwd
      else if(usuarioAux.data.usuarioPorEmail.items[0].id !== idAuth){
        console.log("Lo siento es una cuenta distinta.", usuarioAux.data.usuarioPorEmail.items.id, idAuth);
        return;
      }else{
        const usuario = { ...formState }
        usuario.pwd = bcrypt.hashSync(usuario.pwd, bcrypt.genSaltSync());
        delete usuario.pwd_2;
        setFormState(initialState)
        await API.graphql(graphqlOperation(updateUsuario, {input: usuario}))
        console.log("Usuario guardado.");
      }
    
    } catch (err) {
      console.log('error editando usuario:', err)
    }
  }

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchUser(){
    const idAuthMine = window.sessionStorage.getItem('idAuth');
    setidAuth(idAuthMine);
    try {
      const response = await API.graphql(graphqlOperation(GetUsuarioDetails, {id: idAuthMine}));
      setUsuarios(response.data.getUsuario);
      const updateState = { 
        id: idAuthMine,
        email: response.data.getUsuario.email,
        pwd: '',
        pwd_2: '',
        ap_materno: '',
        ap_paterno: '',
        nombres: '',
        celular: '',
        rol: 'CLIENTE'
      }
      setFormState(updateState)
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
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h5>Editar perfil de</h5>
                    <h4>{usuarios.nombres}</h4>
                    <h4>{usuarios.ap_paterno ?? '' + ' ' + usuarios.ap_materno ?? ''}</h4>
                  </CardHeader>
 
 
                  <CardBody>
                    <label>
                      Email
                      <br />
                      <input disabled value={formState.email} onChange={e => setInput('email', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Contraseña
                      <br />
                      <input type="password" value={formState.pwd} onChange={e => setInput('pwd', e.target.value)}/>
                    </label>
                    <label>
                      Confirmar Contraseña
                      <br />
                      <input type="password" value={formState.pwd_2} onChange={e => setInput('pwd_2', e.target.value)}/>
                    </label>
                     <label>
                      Nombres
                      <br />
                      <input value={formState.nombres} onChange={e => setInput('nombres', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Apellido paterno
                      <br />
                      <input value={formState.ap_paterno} onChange={e => setInput('ap_paterno', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Apellido materno
                      <br />
                      <input value={formState.ap_materno} onChange={e => setInput('ap_materno', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Celular
                      <br />
                      <input type="number" value={formState.celular} onChange={e => setInput('celular', e.target.value)}/>
                    </label>
                    <br />
                    {/*
                    <label>
                      Fecha de nacimiento
                      <br />
                      <input value={formState.ap_paterno} onChange={e => setInput('ap_paterno', e.target.value)}/>
                    </label>
                    <br /> */}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={updateUser}>
                      Guardar
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
