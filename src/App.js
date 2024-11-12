import React, { Component, Fragment } from "react";
//import { Route,Routes} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./Component/Navbar/Nav.jsx";
import Client from "./Component/Client  Page/ClientPage.jsx";
import Footer from "./Component/Footer/footer.jsx";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Client/>
        <Footer />
      </Fragment>
    )
  }
}





