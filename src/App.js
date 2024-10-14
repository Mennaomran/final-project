import React, {Component, Fragment} from "react";
//import { Route,Routes} from "react-router-dom";
import Navbar from "./Component/Navbar/Nav.jsx";
import Home from "./Component/Home/Home.jsx";




export default class App extends Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        <Home/>
        
        
      </Fragment>
    )
  }
}
/*        <Route path="" element={}></Route>
          <Route path="" element={}></Route>
          <Route path="" element={}></Route>*/