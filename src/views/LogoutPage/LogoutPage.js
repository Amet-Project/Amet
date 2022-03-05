import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

//Importanto estilos
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";




const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  let history = useHistory();

  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    logoutUser();
  }, []);

  //Validate credentials
  function logoutUser() {
    window.sessionStorage.removeItem('auth', false);
    window.sessionStorage.removeItem('idAuth', "");
    window.sessionStorage.removeItem('userRole', "");
    history.push('/');
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
    </div>
  );
}
