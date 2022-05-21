import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; //IMPORT THE LIBRARY THAT GENERATES THE UUID
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { Storage, API, graphqlOperation } from 'aws-amplify'
import { createImagenBanquete } from '../../graphql/mutations.js'
import { listBanqueteByUser } from "../../graphql/queriesExt";
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function UploadBanqueteImages(props) {

  const classes = useStyles();
  const [banquetes, setBanquetes] = useState([]);
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
        const banquetesData = await API.graphql(graphqlOperation(listBanqueteByUser, {id: idAuth}));
        const banqueteList = banquetesData.data.getUsuario.banquete.items;
        setBanquetes(banqueteList);
        console.log(banqueteList);

      }catch(err){console.log('error cargando banquetes: ', err)};

    }else{
      window.location.href="/";
      return;
    }  
  }



  const addImageToDB = async (image) => {
    console.log('addimage to db');
    try {
        //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
        await API.graphql(graphqlOperation(createImagenBanquete, {input:image}));
    } catch (error) {
        console.log(error);
    }  
  }

  function onBanqueteSelected(e) {
    console.log(e.target.value);
    setId(e.target.value);
  }
  function onFileSelected(e) {
    setFile(e.target.files[0]);
  }
  function onChange() {
    console.log("id:",idSelected, file);
    //SAVING THE IMAGE ON THE BUCKET OF S3
    const uniqueName = uuidv4(); //HERE GENERATES AN UNIQUE ID FOR THE IMAGE
    Storage.put(uniqueName, file, {
      level: 'public',
      contentType: 'image/png',
    }).then((response) => {
      console.log("imagen subida: ", response);
      const image = {
      id_banquete: idSelected,
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
            <select defaultValue={{ label: "Elige un banquete", value: '' }} onChange={(evt)=> onBanqueteSelected(evt)}>
              {banquetes.map((banquete) => (
              <option key={banquete.id} value={banquete.id}>{banquete.titulo}</option>
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
