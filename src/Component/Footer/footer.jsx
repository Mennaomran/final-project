import React, { Component, Fragment } from "react";
import style from './footer.module.css';
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


/*banan*/
/*import React, { Component, Fragment } from "react";
import styles from './footer.module.css'; // Corrected filename
import img from "../../assets/logoo.png";

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                

                <div id="footer" className={`footercontainer p-3 ${styles.main}`}>
                    <div className={`container text-center ${styles.container}`}>
                        <div className="icon">
                            <img src={img} alt="Logo" width={"100px"} height={"100px"} />
                        </div>
                        <div className={`${styles.links}`}>
                            <a className={`${styles.link}`} href="#home">Home</a>
                            <a className={`${styles.link}`} href="#traks">Our Specialties</a>
                            <a className={`${styles.link}`} href="#beadiv">Start your Developing Journey</a>
                            <a className={`${styles.link}`} href="#footer">Contact Us</a>
                        </div>
                        <ul className={`${styles.icons}`}>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-whatsapp"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-facebook"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-twitter"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-instagram"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-linkedin"></i></a>
                        </ul>
                        <p>Copyright &copy; 2024; Designed by <span className="designer">Team.1</span></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}*/





















