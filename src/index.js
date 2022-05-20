import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import LogoutPage from "views/LogoutPage/LogoutPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import StartEventPage from "views/StartEventPage/StartEventPage.js";
import ReservePage from "views/ReservePage/ReservePage.js";
import CasinosPage from "views/Proveedores/CasinosPage.js";
import ComidaPage from "views/Proveedores/ComidaPage.js";
import EntretenimientoPage from "views/Proveedores/EntretenimientoPage.js";
import UploadCasino from "views/Proveedores/UploadCasino.js";
import UploadBanquete from "views/Proveedores/UploadBanquete.js";
import UploadEntretenimiento from "views/Proveedores/UploadEntretenimiento";
import CasinoDetails from "views/Details/CasinosDetails.js";
import BanqueteDetails from "views/Details/BanqueteDetails.js";
import EntretenimientoDetails from "views/Details/EntretenimientoDetails";
import UserDetails from "views/Details/UserDetails.js";
import UserEdit from "views/Edits/UserEdit.js";
import Events from "views/EventosPages/Events.js";
import AdminUsersPage from "views/AdminPages/AdminUsers.js";
import AdminCasinosPage from "views/AdminPages/AdminCasinos.js";
import AdminServiciosProveedorPage from "views/AdminPages/AdminServiciosProveedor";
import AdminEventsProveedorPage from "views/AdminPages/AdminEventsProveedor.js";
import RegistrarCasinoPage from "views/AdminPages/RegistrarCasino.js";
import RegistrarEntretenimientoPage from "views/AdminPages/RegistrarEntretenimiento.js";
import RegistrarBanquetePage from "views/AdminPages/RegistrarBanquete.js";
import SigninProveedores from "views/SignupPage/SignupProveedores.js";
import RecomendationPage from "views/RecomendationPage/Recomendationpage.js";
import RecomendationCheckout from "views/RecomendationPage/RecomendationCheckout.js";
import ReviewEvent from "views/ReviewEvent/ReviewEvent.js";
import CompareRatings from "views/CompareUsers/CompareUsers.js";

//Amplify AWS
import Amplify from 'aws-amplify';
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login=:date" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/signup_proveedores" component={SigninProveedores} />
      <Route path='/startevent=:date' component={StartEventPage} />
      <Route path='/reserveevent=:date=:idVenue' component={ReservePage} />
      <Route path="/casinos" component={CasinosPage} />
      <Route path="/casinosupload" component={UploadCasino} />
      <Route path="/banquetesupload" component={UploadBanquete} />
      <Route path="/entretenimientosupload" component={UploadEntretenimiento} />
      <Route path="/casinodetails=:id" component={CasinoDetails} />
      <Route path="/banquetedetails=:id" component={BanqueteDetails} />
      <Route path="/entretenimientodetails=:id" component={EntretenimientoDetails} />
      <Route path="/user" component={UserDetails} />
      <Route path="/user_edit" component={UserEdit} />
      <Route path="/admineventos" component={Events} />
      <Route path="/registrarcasino" component={RegistrarCasinoPage} />
      <Route path="/registrarbanquete" component={RegistrarBanquetePage} />
      <Route path="/registrarentretenimiento" component={RegistrarEntretenimientoPage} />
      <Route path="/comida" component={ComidaPage} />
      <Route path="/entretenimiento" component={EntretenimientoPage} />
      <Route path="/adminusers" component={AdminUsersPage} />
      <Route path="/admincasinos" component={AdminCasinosPage} />
      <Route path="/adminserviciosproveedor" component={AdminServiciosProveedorPage} />
      <Route path="/admineventosproveedor" component={AdminEventsProveedorPage} />
      <Route path="/registrarcasino" component={RegistrarCasinoPage} />
      <Route path="/recomendation=:date" component={RecomendationPage} />
      <Route path="/recomendationcheckout=:date=:idCasino1=:idCasino2=:idCasino3" component={RecomendationCheckout} />
      <Route path="/reviewEvent=:idEvent" component={ReviewEvent} />
      <Route path="/compareRatings=:userid1=:userid2" component={CompareRatings} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
