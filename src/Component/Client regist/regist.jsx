import React, { Component, Fragment, } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import style from './regist.css';

export default class UserRegister extends Component {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  state = { errors: [] }

  schema = Joi.object({
    first_name:
      Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    last_name:
      Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email:
      Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password:
      Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


  })

  getFormData = (e) => {
    this.user[e.target.name] = e.target.value;
    console.log(this.user);

  };


  sendData = async () => {
    let result = this.schema.validate(this.user, { abortEarly: false });
    if (result.error) {
      this.setState({ errors: result.error.details })
    }
    else {
      console.log("form data is valid to send", this.user)

      try {
        let response = await axios.post("YOUR_API_ENDPOINT", this.user); console.log(response.data)

      } catch (error) {

        console.error("Error sending data", error)
      }
    }
  };


  renderErrors = (fieldName) => {

    const error = this.state.errors.find((e) => e.path[0] === fieldName);
    return error ? <div className="alert alert-danger">{error.message}</div> : null;
  };



  render() {
    return (

      <Fragment>
        <Navbar />

        <div className={`${style.regist}`}>
          
            <div className="container  ">
              <div className="row ">
                <div className="col-md-8 m-auto">
                  <h1 className="mb-5">Register</h1>


                  <input
                    name="first_name"
                    onKeyUp={this.getformdata}
                    className="form-control my-4"
                    placeholder="Enter your First Name"
                    type="text"
                  />
                  {this.renderErrors("first_name")}


                  <input
                    name="last_name"
                    onKeyUp={this.getformdata}
                    className="form-control my-4"
                    placeholder="Enter your last Name"
                    type="text"
                  />

                  {this.renderErrors("last_name")}

                  <input
                    name="email"
                    onKeyUp={this.getformdata}
                    className="form-control my-4"
                    placeholder="Enter your email"
                    type="text"
                  />
                  {this.renderErrors("email")}


                  <input
                    name="password"
                    onKeyUp={this.getformdata}
                    className="form-control my-4"
                    placeholder="Enter your password  "
                    type="password"
                  />
                  {this.renderErrors("password")}


                  <NavLink to="/Client"><button onClick={this.sendData} className="btn btn-info mt-3">Register</button></NavLink>
                </div>
              </div>
            </div>
          
        </div>
      </Fragment>

    )
  }
}