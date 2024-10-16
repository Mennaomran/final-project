import React, { Component, Fragment } from "react";
import style from './ClientPage.css';
import freelancerdata from "../../FreelancerData";

export default class Client extends Component {
    render() {
        return (
            <Fragment>
                <section className="welcome">
                    <h1 className="text-center w-75">
                        Welcome to the world's largest freelancing marketplace
                        starting your dreams with us ant it will be reality.

                    </h1>
                </section>
                <section className={`${style.frelancer}`}>
                    <div className="container">
                            <div className="row">

                                <h1 className="text-center pt-5">
                                    Our freelanceres
                                </h1>
                                <p className="fs-1 text-center">we have the best Talent here.</p>
                                {freelancerdata.map((value, index) => {
                                    return (
                                        <div key={value.id} className=" data text-center col-lg-4 col-md-6 col-sm-12 px-5 py-5 ">

                                            <div className="one">
                                                <img src={value.image} alt="" width={200} height={200} />

                                                <div className="two">
                                                    <h1>{value.name}</h1>
                                                    <h3 className="py-3">{value.track}</h3>
                                                    <h4 >Previously at</h4>
                                                    <h4>{value.company}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    
                </section>
            </Fragment >
        )
    }
}