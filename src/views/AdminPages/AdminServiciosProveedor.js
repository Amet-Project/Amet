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
import Button from "components/CustomButtons/Button.js";

//Importanto estilos
import informationPageStyle from "assets/jss/material-kit-react/views/informationPage.js";
import image from "assets/img/bg7.jpg";

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { listCrudCasinos, listEntretenimientoWithImage } from "../../graphql/queriesExt";
import { listCasinosByUser } from "../../graphql/queriesExt";
import { listBanqueteByUser } from "../../graphql/queriesExt";
import { listEntretenimientoByUser } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);


const useStyles = makeStyles(informationPageStyle);
const bcrypt = require('bcryptjs');

export default function AdminCasinoProveedor(props) {
  let history = useHistory();
  const [idAuth, setidAuth] = useState('');
  const classes = useStyles();
  const [casinos, setCasinos] = useState([]);
  const [banquetes, setBanquetes] = useState([]);
  const [entretenimiento, setEntretenimientos]   = useState([]);
  const { ...rest } = props;

  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    if(window.sessionStorage.getItem('auth') && window.sessionStorage.getItem('userRole') === 'PROVEEDOR'){
      let idAuth = window.sessionStorage.getItem('idAuth');
      try{
        const casinosData = await API.graphql(graphqlOperation(listCasinosByUser, {id: idAuth}));
        const casinoList = casinosData.data.getUsuario.casinos.items;
        setCasinos(casinoList);

        const entretenimientoData = await API.graphql(graphqlOperation(listEntretenimientoByUser, {id: idAuth}));
        const entretenimientosList = entretenimientoData.data.getUsuario.entretenimiento.items;
        setEntretenimientos(entretenimientosList);

        const banquetesData = await API.graphql(graphqlOperation(listBanqueteByUser, {id: idAuth}));
        const banqueteList = banquetesData.data.getUsuario.banquete.items;
        setBanquetes(banqueteList);
  
      }catch(err){console.log('error cargando casinos: ', err)};

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
          backgroundColor: "black",
          backgroundSize: "contain",
        }}
      >
        <div className={classes.infoBigContainer}>
          {
            casinos.length > 0 ? 
            <div className={classes.infoContainer}>
                <h2>Casinos</h2>
                <hr className={classes.hrRound}></hr>
                <ul className="casino-list">
                  {casinos.map(({ id, titulo, descripcion, direccion }, index) => {
                    return (
                      <li key={index}>
                        <div className="music-list-item">
                          <div className="left-section">
                            <h3>{titulo}</h3>
                            <h4>{descripcion}</h4>
                            <h4>{direccion}</h4>
                          </div>
                        </div>
                        <br>
                        </br>
                      </li>
                    );
                  })}

                </ul>
                <Button color="primary" size="lg" href={ "/casinosupload"}>
                  Subir imágenes a casino
                </Button>
              </div> : null
          }
          {
            banquetes.length > 0 ? 
            <div className={classes.infoContainer}>
              <h2>Banquetes</h2>
              <hr className={classes.hrRound}></hr>
              <ul className="casino-list">
                {banquetes.map(({ id, titulo, descripcion, precio_unitario }, index) => {
                  return (
                    <li key={index}>
                      <div className="music-list-item">
                        <div className="left-section">
                          <h3>{titulo}</h3>
                          <h4>{descripcion}</h4>
                          <h4>Precio por platillo: {precio_unitario}</h4>
                        </div>
                      </div>
                      <br>
                      </br>
                    </li>
                  );
                })}
              </ul>
              <Button color="primary" size="lg" href={ "/banquetesupload"}>
                  Subir imágenes a banquetes
                </Button>
            </div> : null
          }
          {
            entretenimiento.length > 0 ? 
            <div className={classes.infoContainer}>
              <h2>Entretenimiento</h2>
              <hr className={classes.hrRound}></hr>
              <ul className="casino-list">
                {entretenimiento.map(({ id, titulo, descripcion, precio_hora }, index) => {
                  return (
                    <li key={index}>
                      <div className="music-list-item">
                        <div className="left-section">
                          <h3>{titulo}</h3>
                          <h4>{descripcion}</h4>
                          <h4>Precio por hora: {precio_hora}</h4>
                        </div>
                      </div>
                      <br>
                      </br>
                    </li>
                  );
                })}
              </ul>
              <Button color="primary" size="lg" href={ "/entretenimientosupload"}>
                  Subir imágenes a entretenimiento
                </Button>
              </div> : null
          }
          <div className={classes.pageFooter}>
            <Footer whiteFont />
          </div>
        </div>
      </div>
    </div>
  );
}
