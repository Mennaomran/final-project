import React, { Component, Fragment } from "react";
import style from './footer.css';
import data from "../../data";
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <section className={`${style.footer}`}>
                    <div className="container-fluid ">
                        <div className="footer1 ">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Features</h1>
                                <hr />
                                <div className="row">
                                    {data.map((value, index) => {
                                        return (
                                            <div key={value.id} className=" col-lg-4 md-12 sm-12">
                                                <h4>{value.title}</h4>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 md-12 sm-12">
                                <div className="row pt-5">
                                    <div className="col-lg-12  md-12 sm-12">
                                        <h1>Contacts</h1>
                                        <hr />
                                    </div>

                                    <div className="col-lg-6 pb-4  md-12 sm-12">
                                        <h4>Free.@gmail.com</h4>
                                        <h4>234-456-657</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6  md-12 sm-12">
                                <div className="row pt-5">
                                    <div className="col-lg-12  ">
                                        <h1>Social Media</h1>
                                        <hr />
                                    </div>
                                    <div className="col-lg-6 pb-4">
                                        <h4><i class="fa-brands fa-linkedin-in pe-2"></i> Linkedin</h4>
                                        <h4><i class="fa-brands fa-facebook-f pe-2"></i> Facebook</h4>
                                        
                                    </div>
                                    <div className="col-lg-6 pb-4">
                                        
                                        <h4><i class="fa-brands fa-instagram  pe-2"></i>Instagram</h4>
                                        <h4><i class="fa-brands fa-x-twitter pe-2"></i>Twitter</h4>
                                    </div>

                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <hr />
                                    <h5>Copyright 2010 - 2024 Free, LLC Privacy Policy Website Terms Accessibility</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        )
    }
}

/**{data.map((value, index) => {
                  return (
                    <div key={value.id} className=" ps-5 col-lg-4 col-md-6 col-sm-12" >
                      <div className="col-md-3 ">
                        <h3 className={`${style.card1}`}>{value.title}<i class="fa-solid fa-angle-right ps-4"></i></h3>
                      </div>
                    </div>
                  )
                })} */