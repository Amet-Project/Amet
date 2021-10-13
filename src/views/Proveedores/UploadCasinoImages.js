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
import { createImagenCasino } from '../../graphql/mutations.js'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);

export default function UploadCasinoImages(props) {

  const classes = useStyles();
  const { ...rest } = props;

  const addImageToDB = async (image) => {
    console.log('addimage to db');
    try {
        //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
        await API.graphql(graphqlOperation(createImagenCasino, {input:image}));
    } catch (error) {
        console.log(error);
    }  
  }
  function onChange(e) {
    const file = e.target.files[0];
    console.log(file);
    //SAVING THE IMAGE ON THE BUCKET OF S3
    const uniqueName = uuidv4(); //HERE GENERATES AN UNIQUE ID FOR THE IMAGE
    Storage.put(uniqueName, file, {
        contentType: 'image/png'
    }).then((response) => {
      Storage.get(response.key).then((url_img)=>{
        console.log("response url del put:", url_img);
        const image = {
        id_casino: '0651d1df-ac5a-4f99-8ec0-ef08d71400eb',
        url: url_img,
        file: {
          //INFOTMATION THAT THE STORAGE CLASS NEED TO SAVE THE IMAGE
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: uniqueName, 
        }
      }
      addImageToDB(image);
      console.log('added completed')
      })
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
              <p>Ingresa una imagen para el casino</p>
              <input type="file" onChange={(evt) => onChange(evt)}/>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
