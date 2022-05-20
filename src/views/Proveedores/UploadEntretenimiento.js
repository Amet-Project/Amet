import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; //IMPORT THE LIBRARY THAT GENERATES THE UUID
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { createImagenEntretenimiento } from '../../graphql/mutations.js'
import { listEntretenimientoByUser } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function UploadCasinoImages(props) {

  const classes = useStyles();
  const [entretenimientos, setCasinos] = useState([]);
  const [idSelected, setId] = useState('');
  const [file, setFile] = useState({});

  //const [idAuth, setidAuth] = useState('');
  const { ...rest } = props;

  
  useEffect(() => {
    getidAuth();
  }, [])

  async function getidAuth() {
    if(window.sessionStorage.getItem('auth') && window.sessionStorage.getItem('userRole') === 'PROVEEDOR'){
      let idAuth = window.sessionStorage.getItem('idAuth');
      try{
        const entretenimientosData = await API.graphql(graphqlOperation(listEntretenimientoByUser, {id: idAuth}));
        const entretenimientoList = entretenimientosData.data.getUsuario.entretenimiento.items;
        setCasinos(entretenimientoList);

      }catch(err){console.log('error cargando entretenimientos: ', err)};

    }else{
      window.location.href="/";
      return;
    }  
  }



  const addImageToDB = async (image) => {
    try {
        //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
        await API.graphql(graphqlOperation(createImagenEntretenimiento, {input:image}));
    } catch (error) {
        console.log(error);
    }  
  }

  function onCasinoSelected(e) {
    setId(e.target.value);
  }
  function onFileSelected(e) {
    setFile(e.target.files[0]);
  }
  function onChange() {
    //SAVING THE IMAGE ON THE BUCKET OF S3
    const uniqueName = uuidv4(); //HERE GENERATES AN UNIQUE ID FOR THE IMAGE
    Storage.put(uniqueName, file, {
      level: 'public',
      contentType: 'image/png',
    }).then((response) => {
      const image = {
      id_entretenimiento: idSelected,
      //url: url_img,
      file: {
      //INFOTMATION THAT THE STORAGE CLASS NEED TO SAVE THE IMAGE
        bucket: awsExports.aws_user_files_s3_bucket,
        region: awsExports.aws_user_files_s3_bucket_region,
        key: response.key, 
      }
    }
    addImageToDB(image);
    })
    .catch(err => console.log(err));
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
          <div>
            <select defaultValue={{ label: "Elige un entretenimiento", value: '' }} onChange={(evt)=> onCasinoSelected(evt)}>
              {entretenimientos.map((entretenimiento) => (
              <option key={entretenimiento.id} value={entretenimiento.id}>{entretenimiento.titulo}</option>
              ))}
            </select>
            <br/>
            <input name="image_uploads" accept=".jfif, .png, .jpeg, .jpg" type="file" onChange={(evt) => onFileSelected(evt)}/>
            <br/>
            <button onClick={onChange}>Subir imagen</button>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
