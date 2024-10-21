
import React, { Component, Fragment } from "react";
import style from './FreelancePro.css';
import freelancerdata from "../../FreelancerData";

export default class FreePro extends Component {
    render() {
        return (
            <Fragment>
                <section className="bg">
                    
                </section>
                <section className={`${style.pro}`}>
                    <div className='container '>
                        <div className="row">
                            {freelancerdata.map((value, index) => {
                                return (
                                    <Fragment key={value.id}>
                                        <div className="col-lg-6 col-sm-12 md-12">
                                            <div className="row">
                                                <div className="col-lg-12  d-flex justify-content-start">
                                                    <img src={value.image} alt="" width={260} height={290} />
                                                    <div className="text">
                                                    <h1>{value.name}</h1>
                                                    <h4>{value.track}</h4></div>
                                                </div>
                                               
                                            </div>

                                            <div className="dataset">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h4>From:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h5>{value.from}</h5>
                                                    </div>
                                                </div>

                                                <div className="row pt-2">
                                                    <div className="col-lg-3">
                                                        <h4>Experience:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h5>4</h5>
                                                    </div>
                                                </div>

                                                <div className="row pt-2">
                                                    <div className="col-lg-3">
                                                        <h4>Languages:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h5>{value.languages}</h5>
                                                    </div>
                                                </div>

                                                <div className="row pt-2">
                                                    <div className="col-lg-3">
                                                        <h4>Certifications:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h5>{value.Certifications}</h5>
                                                    </div>
                                                </div>

                                                <hr />

                                                <div className="col-lg-12">
                                                    <h4>about me:</h4>
                                                </div>
                                                <div className="col-lg-12">
                                                    <p>{value.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-1"></div>
                                        <div className="col-lg-4">
                                            <div className="contact">
                                                <div className="row">
                                                    <div className="col-lg-12 ps-5 pb-3">
                                                        <h1>Contact with me</h1>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <h4>E-mail:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <p>{value.email}</p>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <h4>Phone:</h4>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <p>{value.phone}</p>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <a href={value.linkedin}><i className="fa-brands fa-linkedin fs-2"></i></a>
                                                        <a href={value.linkedin}><i class="fa-brands fa-square-instagram fs-2"></i></a>
                                                        <a href={value.linkedin}><i class="fa-brands fa-square-threads fs-2"></i></a>
                                                        <a href={value.twitter}><i className="fa-brands fa-square-x-twitter fs-2"></i></a>
                                                        <a href={value.facebook}><i className="fa-brands fa-square-facebook fs-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </section>
                
            </Fragment>
        );
    }
} 




/* <div className="col-lg-6 col-sm-12 md-12">
                                <div className="row">
                                    <div className="col-lg-3 ">
                                        <img src="data:image/png;base64,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" alt="" width={130} height={130} />
                                    </div>
                                    <div className="col-lg-6 pt-3">
                                        <h1>menna tamer</h1>
                                        <h4>front end</h4>
                                    </div>
                                </div>

                                <div className="dataset ">
                                    <div className="row  ">
                                        <div className="col-lg-3">
                                            <h4>From:</h4>
                                        </div>
                                        <div className="col-lg-8">
                                            <h5> Egypt</h5>
                                        </div>
                                    </div>

                                    <div className="row pt-2">
                                        <div className="col-lg-3">
                                            <h4>Experience:</h4>
                                        </div>
                                        <div className="col-lg-8">
                                            <h5>4 years</h5>
                                        </div>
                                    </div>

                                    <div className="row pt-2 ">
                                        <div className="col-lg-3">
                                            <h4>Languages:</h4>
                                        </div>
                                        <div className="col-lg-8">
                                            <h5>English</h5>
                                        </div>
                                    </div>

                                    <div className="row pt-2">
                                        <div className="col-lg-3">
                                            <h4>Certifications:</h4>
                                        </div>
                                        <div className="col-lg-8">
                                            <h5>I333</h5>
                                        </div>
                                    </div>
                                    
                                    <hr />

                                    <div className="col-lg-12">
                                       <h4>Details:</h4> 
                                    </div>    
                                    <div className="col-lg-12">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim veritatis qui minima fugiat rerum porro nulla harum neces Animi ratione placeat itaque omnis temporibus, est fuga!</p>
                                    </div>
                                </div>
                                

                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                                <div className="contact">
                                    <div className="row ">
                                        <div className="col-lg-12 ps-5 pb-3  ">
                                            <h1>Contact with me </h1>
                                        </div>    
                                        <div className="col-lg-3">
                                            <h4>E-mail:</h4>
                                            
                                        </div>
                                        <div className="col-lg-8 ">
                                        <p>memskgggggggggggsf@gmail.com</p>
                                        </div>

                                        <div className="col-lg-3 ">
                                            <h4>phone:</h4>
                                        </div>
                                        <div className="col-lg-8 ">
                                        <p>memskgggggggggggsf@gmail.com</p>
                                        </div>
                                        <div className="col-lg-12">
                                        <i class="fa-brands fa-linkedin fs-2"></i>
                                        <i class="fa-brands fa-square-whatsapp fs-2  "></i>
                                        <i class="fa-brands fa-square-x-twitter fs-2 "></i>
                                        <i class="fa-brands fa-square-facebook fs-2 "></i>
                                        <i class="fa-brands fa-square-instagram fs-2 "></i>
                                        </div>
                                    </div>
                                </div>
                            </div> */