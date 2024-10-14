import React, { Component, Fragment } from "react";
import style from './nav.css';
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${style.navbar}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink className="navbar-brand fs-1" to="/">FREE<span className="text-primary fs-1 dot">.</span>
              </NavLink>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 pt-2 fw-lighter ">

                  <NavLink className="nav-link  active mt-2 m-" to="/">Find talent</NavLink>

                  <NavLink className="nav-link active mt-2 mx-2" to="/">Find work</NavLink>

                  <NavLink className=" nav-link active mt-2 " to="/">About us</NavLink>

                  <NavLink className="cont nav-link ms-1 mt- " to="/"><button className="btn1 rounded-5 px-2 py-1 mb-1 ">login</button></NavLink>

                  <li class="nav-item dropdown ">
                    <a class="nav-link" href="/" id="navbarDropdown"
                      role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <button className="btn2 rounded-5 px-2 py-1  ">
                        sign up<i class="fa-solid fa-right-to-bracket ps-2 "></i></button>
                    </a>
                    <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li><NavLink class="dropdown-item" to="/">As a freelancer</NavLink></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><NavLink class="dropdown-item" to="/">As a client</NavLink></li>
                      <li><hr class="dropdown-divider" /></li>
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    )
  }
}