/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, AccountCircle } from "@material-ui/icons";
import MenuIcon from '@mui/icons-material/Menu';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {
        window.sessionStorage.getItem('userRole') === 'ADMIN' ?
        <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Administrar"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/adminusers" className={classes.dropdownLink}>
              Administrar Usuarios
            </Link>,
            <Link to="/admincasinos" className={classes.dropdownLink}>
              Administrar Casinos
            </Link>,
            <Link to="/admineventos" className={classes.dropdownLink}>
              Administrar Eventos
            </Link>
          ]}
        />
      </ListItem>
      :
      null
      }
      {
        window.sessionStorage.getItem('userRole') === 'PROVEEDOR' ?
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="Administrar"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Link to="/registrarcasino" className={classes.dropdownLink}>
                  Registrar Casino
                </Link>,
                <Link to="/registrarentretenimiento" className={classes.dropdownLink}>
                  Registrar Entretenimiento
                </Link>,
                <Link to="/registrarbanquete" className={classes.dropdownLink}>
                  Registrar Banquete
                </Link>,
                <Link to="/adminserviciosproveedor" className={classes.dropdownLink}>
                  Administrar Servicios
                </Link>,
                <Link to="/admineventosproveedor" className={classes.dropdownLink}>
                  Reservaciones Eventos
                </Link>
              ]}
            />
          </ListItem>
          :
          null
      }
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Catálogo"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/casinos" className={classes.dropdownLink}>
              Casinos
            </Link>,
            <Link to="/comida" className={classes.dropdownLink}>
            Comida
            </Link>,
            <Link to="/entretenimiento" className={classes.dropdownLink}>
              Entretenimiento
          </Link>
          ]}
        />
      </ListItem>
      {
        
        window.sessionStorage.getItem('auth') ?
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="MENU"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={MenuIcon}
              dropdownList={[
                <Link to="/user" className={classes.dropdownLink}>
                  Perfil
                </Link>,
                <Link to="/admineventos" className={classes.dropdownLink}>
                  Mis eventos
                </Link>,
                <Link to="/logout" className={classes.dropdownLink}>
                  Salir
                </Link>
                
              ]}
            />
          </ListItem>
          :
          <ListItem className={classes.listItem}>
          <Button
            href="/login"
            color="transparent"
            className={classes.navLink}
          >
            <AccountCircle className={classes.icons} /> {'Iniciar Sesión' }
          </Button>
          </ListItem>
      }{/*
      <ListItem className={classes.listItem}>
        <Button
          href= {window.sessionStorage.getItem('auth') ? "/user" : "/login"}
          color="transparent"
          className={classes.navLink}
        >
          <AccountCircle className={classes.icons} /> {window.sessionStorage.getItem('auth') ? 'Perfil' : 'Iniciar Sesión' }
        </Button>
      </ListItem>*/}
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Sígenos en Twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Sígenos en Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Sígenos en Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
