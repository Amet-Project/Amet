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

import { listCrudCasinos } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(styles);
const bcrypt = require('bcryptjs');

export default function AdminCasinoProveedor(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const classes = useStyles();
  const [casinos, setCasinos] = useState([]);
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
    getCasinos();
  }, [])

  function getidAuth() {
    if(window.sessionStorage.getItem('auth') && window.sessionStorage.getItem('userRole') === 'PROVEEDOR'){
      setidAuth(window.sessionStorage.getItem('idAuth'))
    }else{
      window.location.href="/";
      return;
    }  
  }

  async function getCasinos(){
    try{
      const casinosData = await API.graphql(graphqlOperation(listCrudCasinos));
      const casinoList = casinosData.data.listCasinos.items;
      setCasinos(casinoList);
      console.log(casinoList);
    }catch(err){console.log('error cargando casinos: ', err)};
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
