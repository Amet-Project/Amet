import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

//Importanto estilos
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { GetUsuarioDetails } from '../../graphql/queriesExt.js'

import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function UserDetails(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser(){
    const idAuthMine = window.sessionStorage.getItem('idAuth');
    setidAuth(idAuthMine);
    console.log("idAuth: ", idAuthMine);
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
            <h3>Nombre del usuario: {user.nombres}</h3>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
