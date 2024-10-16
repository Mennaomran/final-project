import React, {Component, Fragment} from "react";
import { Route,Routes} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from "./Component/Navbar/Nav.jsx";
import Home from "./Component/Home/Home.jsx";
import Footer from "./Component/Footer/footer.jsx";
import ProfileForm from "./Component/Free Regist/FreeRegist.jsx";
import FreePro from "./Component/Free Profile/FreelancePro.jsx";



export default class App extends Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        <Home/>
        <Footer/>
        <Routes>
        <Route path="/home" element={<Home/>}/>
          {/* <Route path="/footer" element={<Footer/>}/> */}
          <Route path="/ProfileForm" element={<ProfileForm/>}/>
          <Route path="/FreePro" element={<FreePro/>}/>
        </Routes>
        
        {/*<Switch>
        <Route path="/ProfileForm" exact component={ProfileForm} />
        <Route path="/FreePro" component={FreePro} />
        <Route component={NotFound} /> {/* Fallback for unmatched routes */}
        {/* </Switch>*/} 

      </Fragment>
    )
  }
}
/*        <Route path="" element={}></Route>
          <Route path="" element={}></Route>
          <Route path="" element={}></Route>*/