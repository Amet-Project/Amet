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

import { listUsuarios } from "../../graphql/queries";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function AdminUsers(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const classes = useStyles();
  const [usuarios, setUsuarios] = useState([])
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
    getUsuarios();
  }, [])


  async function getUsuarios(){
    try{
      const usuariosData = await API.graphql(graphqlOperation(listUsuarios));
      const usuariosList = usuariosData.data.listUsuarios.items;
      setUsuarios(usuariosList);
    }catch(err){console.log('error cargando usuarios: ', err)};
  }

  function getidAuth() {
    if(window.sessionStorage.getItem('auth') && window.sessionStorage.getItem('userRole') === 'ADMIN'){
      setidAuth(window.sessionStorage.getItem('idAuth'))
    }else{
      window.location.href="/";
      return;
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
            <h3>Hola</h3>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
