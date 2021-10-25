import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";


// MUI components
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getCasino } from '../../graphql/queriesExt'
import awsExports from "../../aws-exports.js";
Amplify.configure(awsExports);

const useStyles = makeStyles(styles);
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#9c27b0",
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default function ReservePage(props) {

    const [expanded, setExpanded] = React.useState('panel1');
    const [casinoSE, setCasinoSE] = useState([])
    const { date, idVenue } = useParams()

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleNext = (panel) => (event) => {
        setExpanded(panel);
      };

    const [cardAnimaton, setCardAnimation] = useState("cardHidden");

    setTimeout(function() {
        setCardAnimation("");
      }, 700);
      const classes = useStyles();
      const { ...rest } = props;

    useEffect(() => {
        fetchCasino();
      }, [])

    async function fetchCasino() {
        try {
          // REQUESTING THE LIST OF CASINOS WITH THEIR IMAGES INFO
          let casinoData = await API.graphql(graphqlOperation(getCasino, { id: idVenue }));
          let casinoServicios = casinoData.data.getCasino.servicios.items;
          let casinoServiciosExtras = casinoData.data.getCasino.servicios_extras.items;
          setCasinoSE(casinoServiciosExtras);
          // ITERATING THE ARRAY OF CASINOS TO ASSIGN THEM THE IMAGES ON THE S3 BUCKET
          /*for (let idxCasino = 0; idxCasino < casinos.length; idxCasino++) {
            if (casinos[idxCasino].imagenes.items.length == 0) {
              casinos[idxCasino].img = '';
            }else {
              const key_image = casinos[idxCasino].imagenes.items[0].file.key;
              //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
              const img = await Storage.get(key_image, {level: 'public'});
              casinos[idxCasino].img = img;
            }
          }*/
        } catch (err) { console.log('error cargando casinos: ', err) }
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
                  <Accordion expanded={expanded === 'panel1'}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                          <Typography>Confirma tu casino</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>
                              Seleccionaste el casino con ID: {idVenue} para la fecha: {date}.
                          </Typography>
                          <ColorButton variant="contained" onClick={casinoSE.length > 0 ? handleNext('panelSE') : handleNext('panel2') }>Confirmar</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  {casinoSE.length > 0 ?
                      <Accordion expanded={expanded === 'panelSE'}>
                          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                              <Typography>Selecciona Servicios Extras</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography>
                                  Hehe no sirve
                              </Typography>
                              <ColorButton variant="contained" onClick={handleNext('panel1')}>Anterior</ColorButton>
                              <ColorButton variant="contained" onClick={handleNext('panel2')}>Siguiente</ColorButton>
                          </AccordionDetails>
                      </Accordion>
                      :
                    null
                  }
                  <Accordion expanded={expanded === 'panel2'}>
                      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                          <Typography>Selecciona Música</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>
                              Hehe no sirve
                            </Typography>
                          <ColorButton variant="contained" onClick={handleNext('panel1')}>Anterior</ColorButton>
                          <ColorButton variant="contained" onClick={handleNext('panel3')}>Siguiente</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'}>
                      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                          <Typography>Selecciona Comida</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>
                              Hehe tampoco sirve we xd
                          </Typography>
                          <ColorButton variant="contained" onClick={handleNext('panel2')}>Anterior</ColorButton>
                          <ColorButton variant="contained" onClick={handleNext(false)}>Finalizar</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  <h1>{date}</h1>
                  <h1>{idVenue}</h1>
                  <h1>{window.sessionStorage.getItem('idAuth')}</h1>
              </div>
              <Footer whiteFont />
          </div>
      </div>
  );
}
