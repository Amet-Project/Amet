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
import SignupPage from "views/SignupPage/SignupPage.js";
import StartEventPage from "views/StartEventPage/StartEventPage.js";
import ReservePage from "views/ReservePage/ReservePage.js";
import CasinosPage from "views/Proveedores/CasinosPage.js";
import ComidaPage from "views/Proveedores/ComidaPage.js";
import EntretenimientoPage from "views/Proveedores/EntretenimientoPage.js";
import UploadCasinoImages from "views/Proveedores/UploadCasinoImages.js";
import CasinoDetails from "views/Details/CasinosDetails.js";
import UserDetails from "views/Details/UserDetails.js";
import AdminUsersPage from "views/AdminPages/AdminUsers.js";
import AdminCasinosPage from "views/AdminPages/AdminCasinos.js";
import SigninProveedores from "views/SignupPage/SignupProveedores.js";


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
      <Route path="/signup" component={SignupPage} />
      <Route path="/signup_proveedores" component={SigninProveedores} />
      <Route path='/startevent=:date' component={StartEventPage} />
      <Route path='/reserveevent=:date=:idVenue' component={ReservePage} />
      <Route path="/casinos" component={CasinosPage} />
      <Route path="/casinosupload" component={UploadCasinoImages} />
      <Route path="/casinodetails=:id" component={CasinoDetails} />
      <Route path="/user" component={UserDetails} />
      <Route path="/comida" component={ComidaPage} />
      <Route path="/entretenimiento" component={EntretenimientoPage} />
      <Route path="/adminusers" component={AdminUsersPage} />
      <Route path="/admincasinos" component={AdminCasinosPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
