import React, { Component, Fragment } from "react";
//import { Route,Routes} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./Component/Navbar/Nav.jsx";
import Home from "./Component/Home/Home.jsx";

import Footer from "./Component/Footer/footer.jsx";
//import ProfileForm from "./Component/Free Regist/FreeRegist.jsx";
//import FreePro from "./Component/Free Profile/FreelancePro.jsx";
//import Client from "./Component/Client  Page/ClientPage";
//import UserRegister from "./Component/Client regist/regist";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Home />
        <Footer />
      </Fragment>
    )
  }
}


/** 
<Navbar />
<ProfileForm />
<Footer />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/ProfileForm" element={<ProfileForm />} />
          <Route path="/FreePro" element={<FreePro />} />
          <Route path="/" element={<UserRegister />} />
        </Routes>*/




/*<Switch>
        <Route path="/ProfileForm" exact component={ProfileForm} />
        <Route path="/FreePro" component={FreePro} />
        <Route component={NotFound} /> {/* Fallback for unmatched routes */
/* </Switch>*/ 

/* <Route path="/footer" element={<Footer/>}/> */ 