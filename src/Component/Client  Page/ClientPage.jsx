import React, { Component, Fragment } from "react";
import style from './ClientPage.css';
import freelancerdata from "../../FreelancerData";

export default class Client extends Component {
    state = {
        freelancerData: null,
    };

    handleFreelancerClick = (freelancer) => {
        this.setState({ freelancerData: freelancer });
    };

    render() {
        const { freelancerData } = this.state;
        return (
            <Fragment>
                <section className=" welcome d-flex justify-content-center">
                    <h1 className=" text-center text-light w-75">
                        Welcome to the world's largest freelancing marketplace,
                        starting your dreams with us and it will be a reality.
                    </h1>
                </section>

                <section className={`${style.frelancer}`}>
                    <div className="row container-fluid">
                        <div className="col-lg-12">
                            <h1 className="text-center pt-5">Our Freelancers</h1>
                            <p className="fs-1 text-center">We have the best talent here.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    {freelancerdata.map((value) => {
                                        return (
                                            <div key={value.id} className="col-lg-4 col-md-6 col-sm-12 text-center py-5">
                                                <div className="freelancer-card">
                                                    <img src={value.image} alt={value.name} className="freelancer-image" />
                                                    <div className="freelancer-info">
                                                        <h2>{value.name}</h2>
                                                        <h4>{value.track}</h4>
                                                        <p>Previously at</p>
                                                        <h5>{value.company}</h5>
                                                        <button className="btn btn-primary mt-2"
                                                            onClick={() => this.handleFreelancerClick(value)}>View Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="col-lg-3 py-5">
                                {freelancerData ? (
                                    <div className="card freelancerCard ">
                                        <div className="card-data d-flex">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <img src={freelancerData.image} alt={freelancerData.name} className="profileImage m-3 " />
                                                </div>
                                                <div className="col-lg-8 ms-3">
                                                    <h2 className="card-name">{freelancerData.name}</h2>
                                                    <h4 className="card-track mb-2">{freelancerData.track}</h4>
                                                    <p className="card-description">{freelancerData.description}</p>
                                                    <p className="company">Previously at: {freelancerData.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-cont d-flex justify-content-between px-1">
                                            <div>
                                                <p>Email: {freelancerData.email}</p>
                                                <p>Phone: {freelancerData.phone}</p>
                                            </div>
                                            <div>
                                                <a href={freelancerData.linkedin} aria-label="LinkedIn Profile">
                                                    <i className="fa-brands fa-linkedin fs-4"></i>
                                                </a>
                                                <a href={freelancerData.instagram} aria-label="Instagram Profile">
                                                    <i className="fa-brands fa-square-instagram fs-4 ms-2"></i>
                                                </a>
                                                <a href={freelancerData.twitter} aria-label="Twitter Profile">
                                                    <i className="fa-brands fa-square-x-twitter fs-4 ms-2"></i>
                                                </a>
                                                <a href={freelancerData.facebook} aria-label="Facebook Profile">
                                                    <i className="fa-brands fa-square-facebook fs-4 ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (null)}
                            </div>

                        </div>

                    </div>
                </section>
            </Fragment>
        );
    }
}




/**
 

 */









/*import React, { Component, Fragment } from "react";
import style from './ClientPage.css';
import freelancerdata from "../../FreelancerData";

export default class Client extends Component {
    render() {
        return (
            <Fragment>
                <section className="welcome d-flex justify-content-center">
                    <h1 className="text-center w-75">
                        Welcome to the world's largest freelancing marketplace,
                        starting your dreams with us and it will be a reality.
                    </h1>
                </section>
                <section className={`${style.frelancer}`}>
                    <div className="container-fluid">
                        <h1 className="text-center pt-5">
                            Our Freelancers
                        </h1>
                        <p className="fs-1 text-center">We have the best talent here.</p>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    {freelancerdata.map((value) => {
                                        return (
                                            <div key={value.id} className="col-lg-4 col-md-6 col-sm-12 text-center  py-5">

                                                <div className="freelancer-card">
                                                    <img src={value.image} alt={value.name} className="freelancer-image" />
                                                    <div className="freelancer-info">
                                                        <h2>{value.name}</h2>
                                                        <h4>{value.track}</h4>
                                                        <p>Previously at </p>
                                                        <h5>{value.company}</h5>
                                                    </div>

                                                </div>

                                            </div>
                                        );
                                    })}
                                    <div className="freepro col-lg-4">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}*/


