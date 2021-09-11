import React, { useState } from "react";
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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//Amplify imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createUsuario } from '../../graphql/mutations.js'
import { listUsuarios } from '../../graphql/queries.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const initialState = { 
  //id: 100,
  id_rol: 2,
  nombres: '',
  ap_paterno: '',
  ap_materno: '',
  nacimiento: '',
  sexo: '',
  email: '',
  telefono: '',
  celular: ''
}

const useStyles = makeStyles(styles);

export default function SigninPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [formState, setFormState] = useState(initialState)
  const [usuarios, setUsuarios] = useState([])

  //Add to API function
  async function addUser() {
    try {
      if (!formState.nombres || !formState.email || !formState.telefono ) return
      //Get last id
      const usuariosData = await API.graphql(graphqlOperation(listUsuarios, {limit: 1, order: [['created_at', 'DESC']]  }))
      
      const usuario = { ...formState }
      setUsuarios([...usuarios, usuario])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createUsuario, {input: usuario}))
      console.log(formState)
    } catch (err) {
      console.log('error creating user:', err)
    }
  }

  const setInput = (key, value) => {
    console.log(formState)
    setFormState({ ...formState, [key]: value })
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
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
                  <p className={classes.divider}>O regístrate con Email</p>
                  <CardBody>
                    <label>
                      First Name
                      <br />
                      <input value={formState.nombres} onChange={e => setInput('nombres', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Last Name
                      <br />
                      <input value={formState.ap_paterno} onChange={e => setInput('ap_paterno', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Email
                      <br />
                      <input value={formState.email} onChange={e => setInput('email', e.target.value)}/>
                    </label>
                    <br />
                    <label>
                      Password
                      <br />
                      <input value={formState.telefono} onChange={e => setInput('telefono', e.target.value)}/>
                    </label>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={addUser}>
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
