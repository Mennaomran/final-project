import React, { Component, Fragment } from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Nav.jsx";
import Home from "./Component/Home/Home.jsx";
//import FreePro from "./Component/Free Profile/FreelancePro.jsx";
import Footer from "./Component/Footer/footer.jsx";
import ProfileForm from "./Component/Free Regist/FreeRegist.jsx";
import Userregister from "./Component/Client regist/regist";
import Client from "./Component/Client  Page/ClientPage";
export default class App extends Component {
  render() {
    return (
      <Fragment>

        <Navbar />
        <Home />
        <Routes>
          <Route path="/regist_freelance" element={<ProfileForm />} />
          <Route path="/regist_user" element={<Userregister/>} />
          <Route path="/ Client" element={<Client/>} />
        </Routes>

        <Footer />
      </Fragment>
    )
  }
}
/*       

        
        


          */