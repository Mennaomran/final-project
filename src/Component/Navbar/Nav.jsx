/*
import React, { Component, Fragment } from "react";
import styles from "./nav.module.css";

import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.navbar}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink
                className={`navbar-brand fs-1 mb-5 pb-5 ${styles.navbarbrand}`}
                to="/"
              >
                <h1>free</h1>
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div
                  className={`navbar-nav ms-auto mb-2 mb-lg-0 fs-6 pt-2 fw-lighter ${styles.navbarnav}`}
                >
                  <NavLink
                    className={`nav-link  active pb-5 mb-4 fs-5 ${styles.navlink}`}
                    to="/footer"
                  >
                    Find talent
                  </NavLink>

                  <NavLink
                    className={`nav-link  active  mx-2 ${styles.navlink}`}
                    to=""
                  >
                    Find work
                  </NavLink>

                  <NavLink
                    className={`nav-link  active  m-2 ${styles.navlink}`}
                    to="#"
                  >
                    About us
                  </NavLink>

                  <NavLink className="cont nav-link ms-1 mt- " to="#">
                    <button
                      className={`btn1 rounded-5 px-2 py-1 mb-1 ${styles.btn1}`}
                    >
                      login
                    </button>
                  </NavLink>

                  <li className="nav-item dropdown ">
                    <NavLink
                      className="nav-link"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button className={`btn2 rounded-5 px-2 py-1 mb-1 ${styles.btn2}`}>
                        sign up
                        <i className="fa-solid fa-right-to-bracket ps-2 "></i>
                      </button>
                    </NavLink>
                    <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink className="dropdown-item" to="/regist_freelance">
                          As a freelancer
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="regist_user">
                          As a client
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    );
  }
}
  */

import React, { Component, Fragment } from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
          <div className="container-fluid">
            <NavLink className={`navbar-brand ${styles.navbarbrand}`} to="/">
              Fivver<span>.</span>
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className={`navbar-nav ms-auto ${styles.navbarnav}`}>
                <NavLink className={`nav-link ${styles.navlink}`} to="/">
                  <p className="px-3">Home</p>
                </NavLink>
                
                <NavLink className={`nav-link ${styles.navlink}`} to="/">
                  <p>About us</p>
                </NavLink>

                <NavLink className={`nav-link ${styles.navlink}`} to="/">
                  <button className={`btn ${styles.btn1}`}> <span className={`pb-5  ${styles.login}`}>Login </span> </button>
                </NavLink>

                <NavLink className={`nav-link ${styles.navlink}`} to="/">
                  <button className={`btn  ${styles.btn2}`}><span className={`pb-5  ${styles.login}`}>sign up </span>
                    <i className="fa-solid fa-right-to-bracket ps-2"></i></button>
                </NavLink>

                
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}