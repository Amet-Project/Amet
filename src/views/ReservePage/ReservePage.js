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
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify'
import { getCasino } from '../../graphql/queriesExt'
import { listBanquetesWithImage, listEntretenimientoWithImage } from '../../graphql/queriesExt.js'
import { eventoPorFecha } from '../../graphql/queriesExt.js'
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

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
const days = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
];

let day;
let price = 0;
let startHour;
let endHour;

export default function ReservePage(props) {

    const [expanded, setExpanded] = React.useState('panel1');
    const [casino, setCasino] = useState([]);
    const [serviciosExtras, setServiciosExtras] = useState([]);
    const [horariosFijos, setHorariosFijos] = useState([]);
    const { date, idVenue } = useParams();
    const [checkedState, setCheckedState] = useState([]);
    
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        let totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
            if (currentState === true) {
                return sum + serviciosExtras[index].costo;
            }
            return sum;
            },
            0
        );
        totalPrice = subtotal + totalPrice
        setTotal(totalPrice);
    };

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
        //fetchMusica(date)
        //fetchComida(date)
      }, [])

    async function fetchCasino() {
        try {
            // REQUESTING THE LIST OF CASINOS WITH THEIR IMAGES INFO
            const response = await API.graphql(graphqlOperation(getCasino, { id: idVenue }));
            const casinoData = response.data.getCasino;
            //const casinoServicios = casinoData.data.getCasino.servicios.items;
            const casinoSE = casinoData.servicios_extras.items;
            const casinoHF = casinoData.horarios_fijos.items;
            console.log("Datos del casino: ", casinoData);
            console.log("Servicios extras: ", casinoSE);
            const dateMod = date.slice(6) + "-" + date.slice(3, 5) + "-" + date.slice(0, 2) + " 00:00:00";
            const dayNumber = new Date(dateMod).getDay();
            day = days[dayNumber];
            setServiciosExtras(casinoSE);
            setHorariosFijos(casinoHF);
            setCheckedState(new Array(casinoSE.length).fill(false))
            casinoData.img = "https://media.istockphoto.com/photos/historic-bodiam-castle-and-moat-in-east-sussex-picture-id1159222457?k=20&m=1159222457&s=612x612&w=0&h=wM4QmgwlFr8rbTrXzhEf8tQe51eQ7W9wefZOcDOD1b0="
            setCasino(casinoData);
            casinoHF.map(hf => {
                if (hf[day]) {
                    setSubtotal(hf.precio);
                    setTotal(hf.precio);
                }
            })

            const musicaData = await API.graphql(graphqlOperation(listEntretenimientoWithImage));
            const comidaData = await API.graphql(graphqlOperation(listBanquetesWithImage));
            const eventosData = await API.graphql(graphqlOperation(eventoPorFecha, { fecha: date }));
            let eventsArray = eventosData.data.eventoPorFecha.items;
            let musicArray = musicaData.data.listEntretenimientos.items;
            let foodArray = comidaData.data.listBanquetes.items;
            console.log("EventsData: ", eventsArray);
            console.log("musicData: ", musicaData.data.listEntretenimientos);
            console.log("comidaData: ", comidaData.data.listBanquetes);

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
                  <h1>
                      Fecha de tu reservación: {date}.
                  </h1>
                  <Accordion expanded={expanded === 'panel1'}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                          <Typography>Confirma tu casino</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <div style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                          }}>
                              <img style={{ width: "40%" }} className={classes.casinoImage} src={casino.img}></img>
                          </div>
                          <div style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                          }}>
                              <h2>
                                  {casino.titulo}
                              </h2>
                          </div>
                          <h3>
                            Dirección: {casino.direccion}
                          </h3>
                          <h3>
                            Capacidad Máxima: {casino.cap_maxima}
                          </h3>
                          {
                              price = 0,
                              startHour = "",
                              endHour = "", 
                              horariosFijos.map(hf => {
                                if(hf[day]) {
                                  price = hf.precio;
                                  startHour = hf.hora_inicio;
                                  endHour = hf.hora_fin;                               
                                }
                              })
                          }
                          <h3>
                              Precio: {getFormattedPrice(price)}
                          </h3>
                          <ColorButton variant="contained" onClick={serviciosExtras.length > 0 ? handleNext('panelSE') : handleNext('panel2') }>Confirmar</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  {serviciosExtras.length > 0 ?
                      <Accordion expanded={expanded === 'panelSE'}>
                          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                              <Typography>Selecciona Servicios Extras</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <div>
                                  <ul className="servextra-list">
                                      {serviciosExtras.map(({ descripcion, costo }, index) => {
                                          return (
                                              <li key={index}>
                                                  <div className="servextra-list-item">
                                                      <div className="left-section">
                                                          <input
                                                              type="checkbox"
                                                              id={`custom-checkbox-${index}`}
                                                              name={descripcion}
                                                              value={descripcion}
                                                              checked={checkedState[index]}
                                                              onChange={() => handleOnChange(index)}
                                                          />
                                                          <label style={{color: "black"}}>{descripcion}</label>
                                                      </div>
                                                      <div className="right-section">{getFormattedPrice(costo)}</div>
                                                  </div>
                                              </li>
                                          );
                                      })}
                                  </ul>
                              </div>
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
                          <ColorButton variant="contained" onClick={serviciosExtras.length > 0 ? handleNext('panelSE') : handleNext('panel1') }>Anterior</ColorButton>
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
                  <h3>
                  Total de reservación: {getFormattedPrice(total)}
                  </h3>
              </div>
              <Footer whiteFont />
          </div>
      </div>
  );
}
