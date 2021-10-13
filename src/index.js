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
import MusicaPage from "views/Proveedores/MusicaPage.js";
import UploadCasinoImages from "views/Proveedores/UploadCasinoImages.js";
import CasinoDetails from "views/Details/CasinosDetails.js";
import UserDetails from "views/Details/UserDetails.js";


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
      <Route path='/startevent=:date' component={StartEventPage} />
      <Route path='/reserveevent=:date=:idvenue' component={ReservePage} />
      <Route path="/casinos" component={CasinosPage} />
      <Route path="/casinosupload" component={UploadCasinoImages} />
      <Route path="/casinodetails" component={CasinoDetails} />
      <Route path="/user" component={UserDetails} />
      <Route path="/comida" component={ComidaPage} />
      <Route path="/musica" component={MusicaPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
