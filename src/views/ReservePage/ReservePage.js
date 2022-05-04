import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Loading, NumberInput, Modal, ComposedModal, ModalHeader, ModalFooter } from "carbon-components-react";
import image from "assets/img/bg7.jpg";

//Amplify Imports
import Amplify, {Storage, API, graphqlOperation } from 'aws-amplify';
import { getCasino } from '../../graphql/queriesExt';
import { listBanquetesWithImage, listEntretenimientoWithImage } from '../../graphql/queriesExt.js';
import { eventoPorFecha } from '../../graphql/queriesExt.js';
import { createEvento, createOrdenCasino, createOrdenBanquete, createOrdenEntretenimiento } from '../../graphql/mutations';
import { createEventoCasino, createEventoCasEnt, createEventoCasBan } from "../../graphql/mutationsExt";
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
    const [idEvent, setIdEvent ] = useState(-1);
    const [checkedState, setCheckedState] = useState([]);
    const [food, setFood] = useState([]);
    const [selectedFood, setSelectedFood] = useState();
    const [checkedStateFood, setCheckedStateFood] = useState();
    const [checkedFoodPrice, setCheckedFoodPrice] = useState();
    const [checkedFoodPlates, setCheckedFoodPlates] = useState(0);
    const [music, setMusic] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState();
    const [checkedStateMusic, setCheckedStateMusic] = useState();
    const [checkedMusicPrice, setCheckedMusicPrice] = useState();
    const [checkedMusicHours, setCheckedMusicHours] = useState(0);
    const [total, setTotal] = useState(0);
    const [musicPriceTotal, setMusicPriceTotal] = useState(0);
    const [banquetePriceTotal, setBanquetePriceTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [open, setOpen] = useState(false);

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

    const handleOnChangeMusic = (musicId, price, titulo) => {
        if(musicId === checkedStateMusic){
            setCheckedStateMusic(null);
            setSelectedMusic(null);
            setCheckedMusicPrice(0);
            setTotal(subtotal);
        }
        else{
            setCheckedStateMusic(musicId);
            setSelectedMusic(titulo);
            setCheckedMusicPrice(price);
            let totalPrice = subtotal + (price * checkedMusicHours);
            setTotal(totalPrice);
        }
    };

    const handleOnChangeMusicHours = (hours) => {
        setCheckedMusicHours(hours);
        if(checkedMusicPrice>0){
            let totalPrice = subtotal + (hours * checkedMusicPrice);
            setTotal(totalPrice);
            //console.log("horas musica:", hours, " precio por hora", checkedMusicPrice);
            setMusicPriceTotal(hours * checkedMusicPrice);
        }
        else{
            setTotal(subtotal);
            setMusicPriceTotal(0);
        }
    }

    const handleOnChangeFood = (foodId, price, titulo) => {
        if(foodId === checkedStateFood){
            setCheckedStateFood(null);
            setSelectedFood(null);
            setCheckedFoodPrice(0);
            setTotal(subtotal);
        }
        else{
            setCheckedStateFood(foodId);
            setSelectedFood(titulo);
            setCheckedFoodPrice(price);
            let totalPrice = subtotal + (price * checkedFoodPlates);
            setTotal(totalPrice);
        }
    };

    const handleOnChangeFoodPlates = (plates) => {
        setCheckedFoodPlates(plates);
        if(checkedFoodPrice>0){
            let totalPrice = subtotal + (plates * checkedFoodPrice);
            //console.log("precio:", checkedFoodPrice, " platillos", plates);
            setBanquetePriceTotal(checkedFoodPrice * plates);
            setTotal(totalPrice);
        }
        else{
            setTotal(subtotal);
        }
    }

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onSubmitClick= (e) => {
        e.preventDefault();
        window.location.href="/"
    }


    const storeEvent = async () => {
        const idAuth = window.sessionStorage.getItem('idAuth');
        let resBanquete, resCasino, resEntretenimiento;
        try {
            //console.log("horarios fijos", horariosFijos);
            let price = 0;
            let idHorFij = "";
            horariosFijos.map(hf => {
            if(hf[day]) {
                price = hf.precio;
                idHorFij = hf.id                           
            }
            })
            const casinoOrder = {
                id_casino: casino.id,
                fecha: date,
                importe: price,
                reviewed: false,
                status: "PENDING",
                id_cas_hor_fijo: idHorFij
            };
            const entretenimientoOrder = {
                id_entretenimiento: checkedStateMusic,
                fecha: date,
                reviewed: false,
                status: "PENDING",
                horas: parseInt(checkedMusicHours),
                importe: musicPriceTotal,
            };
            const banqueteOrder = {
                id_banquete: checkedStateFood,
                fecha: date,
                reviewed: false,
                status: "PENDING",
                numero_platillos: parseInt(checkedFoodPlates),
                importe: banquetePriceTotal,

            };
            if(banqueteOrder.id_banquete !== undefined  || banqueteOrder.numero_platillos !== 0) 
                resBanquete = await API.graphql(graphqlOperation(createOrdenBanquete, {input:banqueteOrder}));
            else{
                console.log("Falta informacion para el banquete") 
            }
            console.log("Orden banquete", resBanquete);
            if(entretenimientoOrder.id_entretenimiento !== undefined  || entretenimientoOrder.horas !== 0) 
                resEntretenimiento = await API.graphql(graphqlOperation(createOrdenEntretenimiento, {input:entretenimientoOrder}));
            else{
                console.log("Falta informacion para el entretenimiento") 
            }
            
            console.log("Orden entretenimiento", resEntretenimiento);
            resCasino = await API.graphql(graphqlOperation(createOrdenCasino, {input:casinoOrder}));
            console.log("Orden casino", resCasino);

            if(banqueteOrder.id_banquete == undefined && entretenimientoOrder.id_entretenimiento == undefined){
                const event = {
                id_usuario: idAuth,
                id_orden_casino: resCasino.data.createOrdenCasino.id,
                fecha: date,
                importe_total: total,
                };

                console.log("Entrando a solo casino");

                //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
                const resEvent = await API.graphql(graphqlOperation(createEventoCasino, {input:event}));
                console.log("Evento creado: ", resEvent);
                setIdEvent(resEvent.data.createEvento.id);
            }
            else if (banqueteOrder.id_banquete == undefined){
                const event = {
                    id_usuario: idAuth,
                    id_orden_casino: resCasino.data.createOrdenCasino.id,
                    id_orden_entretenimiento: resEntretenimiento.data.createOrdenEntretenimiento.id,
                    fecha: date,
                    importe_total: total,
                };

                console.log("Entrando a casino sin banquete");

                //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
                const resEvent = await API.graphql(graphqlOperation(createEventoCasEnt, {input:event}));
                console.log("Evento creado: ", resEvent);
                setIdEvent(resEvent.data.createEvento.id);
            }
            else if(entretenimientoOrder.id_entretenimiento == undefined){
                const event = {
                    id_usuario: idAuth,
                    id_orden_casino: resCasino.data.createOrdenCasino.id,
                    id_orden_banquete: resBanquete.data.createOrdenBanquete.id,
                    fecha: date,
                    importe_total: total,
                };
                
                console.log("Entrando a casino sin entretenimiento");

                //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
                const resEvent = await API.graphql(graphqlOperation(createEventoCasBan, {input:event}));
                console.log("Evento creado: ", resEvent);
                setIdEvent(resEvent.data.createEvento.id);
            }
            else{
                const event = {
                    id_usuario: idAuth,
                    id_orden_casino: resCasino.data.createOrdenCasino.id,
                    id_orden_entretenimiento: resEntretenimiento ? resEntretenimiento.data.createOrdenEntretenimiento.id : null,
                    id_orden_banquete: resBanquete ? resBanquete.data.createOrdenBanquete.id : null,
                    fecha: date,
                    importe_total: total,
                };

                //SAVE DATA TO THE IMAGEN TABLE ON DYNAMODB
                const resEvent = await API.graphql(graphqlOperation(createEvento, {input:event}));
                console.log("Evento creado: ", resEvent);
                setIdEvent(resEvent.data.createEvento.id);
            }
        } catch (error) {
            console.log("Error creando evento:", error);
        }  
      }

    const handleNext = (panel) => (event) => {
        setSubtotal(total);
        setExpanded(panel);
        if(panel==false){ 
            storeEvent();
            setOpen(true);
        }
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
            let servExtraCount = 0;
            for (const servExtra of casinoSE) {
                checkedState[servExtraCount] = false;
                servExtraCount++;
            }
            const casinoHF = casinoData.horarios_fijos.items;
            //console.log("Datos del casino: ", casinoData);
            //console.log("Servicios extras: ", casinoSE);
            const dateMod = date.slice(6) + "/" + date.slice(3, 5) + "/" + date.slice(0, 2) + " 00:00:00";
            const dayNumber = new Date(dateMod).getDay();
            day = days[dayNumber];
            setServiciosExtras(casinoSE);
            setHorariosFijos(casinoHF);
            setCheckedState(new Array(casinoSE.length).fill(false))
            const key_image = casinoData.imagenes.items[0] ? casinoData.imagenes.items[0].file.key : null;
            //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
            const img = key_image ? await Storage.get(key_image, { level: 'public' }) : 'https://weddingsparrow.com/uploads/slir/w1200/IMG_1028.jpg';
            casinoData.img = img;
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
            let indexVenueToDelete = -1;
            for (let idxMusic = 0; idxMusic < musicArray.length; idxMusic++) {
                if (musicArray[idxMusic].imagenes.items.length === 0) {
                  musicArray[idxMusic].img = 'http://bandboxjazz.com/wp-content/uploads/2022/02/51497wtzupcitylivemusicbyparraeventkochichristmas.jpg';
                }else {
                  const key_image = musicArray[idxMusic].imagenes.items[0].file.key;
                  //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
                  const img = await Storage.get(key_image, {level: 'public'});
                  musicArray[idxMusic].img = img;
                }
            }
            for (let i = 0; i < eventsArray.length; i++) {
                for (let j = 0; j < musicArray.length; j++) {
                    if (eventsArray[i].entretenimiento.id_entretenimiento === musicArray[j].id) {
                        indexVenueToDelete = j;
                        break;
                    }
                }
                if (indexVenueToDelete !== -1) {
                    musicArray.splice(indexVenueToDelete, 1);
                }
            }
            indexVenueToDelete = -1;
            for (let idxFood = 0; idxFood < foodArray.length; idxFood++) {
                if (foodArray[idxFood].imagenes.items.length === 0) {
                  foodArray[idxFood].img = 'https://i.pinimg.com/originals/0b/de/4d/0bde4de25d244c95f3be932c2188ed13.jpg';
                }else {
                  const key_image = foodArray[idxFood].imagenes.items[0].file.key;
                  //REQUESTING THE IMAGE OF THE S3 BUCKET WITH THE INFO OBTEINED OF THE CORRESPONDING CASINO
                  const img = await Storage.get(key_image, {level: 'public'});
                  foodArray[idxFood].img = img;
                }
            }

            for (let i = 0; i < eventsArray.length; i++) {
                for (let j = 0; j < foodArray.length; j++) {
                  if (eventsArray[i].banquete.id_banquete === foodArray[j].id) {
                    indexVenueToDelete = j;
                    break;
                  }      
                }
                if(indexVenueToDelete !== -1){
                  foodArray.splice(indexVenueToDelete, 1);
                }
              }
            setFood(foodArray);
            setMusic(musicArray);

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
                backgroundColor: "black",
                backgroundSize: "contain",
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
                          <div>
                              <ul className="music-list">
                                  {music.map(({ id, titulo, precio_hora, img }, index) => {
                                      return (
                                          <li key={index}>
                                              <div className="music-list-item">
                                                  <div className="left-section">
                                                  <img className={classes.serviceImage} src={img} />
                                                  <br/>
                                                      <input
                                                          type="checkbox"
                                                          id={`custom-checkbox-${index}`}
                                                          name={titulo}
                                                          value={titulo}
                                                          checked={checkedStateMusic === id}
                                                          onChange={() => handleOnChangeMusic(id, precio_hora, titulo)}
                                                      />
                                                      <label style={{ color: "black" }}>{titulo}</label>
                                                      <br/>
                                                  </div>
                                                  <div className="right-section">Precio por hora: {getFormattedPrice(precio_hora)}</div>
                                              </div>
                                              <br/>
                                              <br/>
                                          </li>
                                      );
                                  })}
                              </ul>
                              <p>Seleciona el número de horas a reservar:</p>
                              <NumberInput
                                  id="hr-input"
                                  helperText="Ingresa un número entre 1 y 12"
                                  invalidText="Número inválido"
                                  label="Horas"
                                  max={12}
                                  min={0}
                                  onChange={e => handleOnChangeMusicHours(e.imaginaryTarget.value)}
                              />
                          </div>
                          <ColorButton variant="contained" onClick={serviciosExtras.length > 0 ? handleNext('panelSE') : handleNext('panel1')}>Anterior</ColorButton>
                          <ColorButton variant="contained" onClick={ handleNext('panel3')}>Siguiente</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === 'panel3'}>
                      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                          <Typography>Selecciona Comida</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <div>
                              <ul className="food-list">
                                  {food.map(({ id, titulo, precio_unitario, img }, index) => {
                                      return (
                                          <li key={index}>
                                              <div className="food-list-item">
                                                  <div className="left-section">
                                                  <img className={classes.serviceImage} src={img} />
                                                  <br/>
                                                      <input
                                                          type="checkbox"
                                                          id={`custom-checkbox-${index}`}
                                                          name={titulo}
                                                          value={titulo}
                                                          checked={checkedStateFood === id}
                                                          onChange={() => handleOnChangeFood(id, precio_unitario, titulo)}
                                                      />
                                                      <label style={{ color: "black" }}>{titulo}</label>
                                                      <br/>
                                                  </div>
                                                  <div className="right-section">Precio unitario: {getFormattedPrice(precio_unitario)}</div>
                                              </div>
                                              <br/>
                                              <br/>
                                          </li>
                                      );
                                  })}
                              </ul>
                              <p>Seleciona el número de platillos a reservar:</p>
                              <NumberInput
                                  id="hr-input"
                                  helperText="Ingresa un número entre 1 y 500"
                                  invalidText="Número inválido"
                                  label="Platillos"
                                  max={500}
                                  min={0}
                                  onChange={e => handleOnChangeFoodPlates(e.imaginaryTarget.value)}
                              />
                          </div>
                          <ColorButton variant="contained" onClick={handleNext('panel2')}>Anterior</ColorButton>
                          <ColorButton variant="contained" onClick={handleNext(false)}>Finalizar</ColorButton>
                      </AccordionDetails>
                  </Accordion>
                  <h3>
                  Total de reservación: {getFormattedPrice(total)}
                  </h3>
              </div>

              <ComposedModal open={open} onClose={e => onSubmitClick(e)} onRequestClose={e => onSubmitClick(e)} preventCloseOnClickOutside={true}>
                  <ModalHeader label={idEvent}>
                      <h1>
                          Evento creado exitosamente
                      </h1>
                      <h2>
                          ¡Gracias por tu reservación en Amet! Estos son los detalles de tu evento:
                      </h2>
                      <br/>
                      <h2>
                          {casino.titulo}
                      </h2>
                      <h3>
                          Fecha: {date}
                      </h3>
                      {
                          checkedStateMusic ? 
                          <h3>
                              Entretenimiento: {selectedMusic} - Horas: {checkedMusicHours}
                          </h3> : null
                      }
                      {
                          checkedStateFood ? 
                          <h3>
                              Banquete: {selectedFood} - Platillos: {checkedFoodPlates}
                          </h3> : null
                      }
                      <h3>
                          Total de tu reservación: ${total}
                      </h3>
                  </ModalHeader>
                  <ModalFooter primaryButtonText="OK" onRequestSubmit={e => onSubmitClick(e)}/>
              </ComposedModal>
              <Footer whiteFont />
          </div>
      </div>
  );
}
