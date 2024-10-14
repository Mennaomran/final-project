import React, { Component, Fragment } from "react";
import style from './footer.css';
export default class Footer extends Component {
    render() {
        return (
            <Fragment>

                <div className={`${style.footer}`}>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="">
                                <ul className="">
                                    <li><h5 >Categories</h5></li>
                                    <li>Python</li>
                                    <li>Python</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div >
                                <ul className="">
                                    <li><h5 className="">For freelancer</h5></li>
                                    <li>Python</li>
                                    <li>Python</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div >
                                <ul className="">
                                    <li><h5 className="">For clients</h5></li>
                                    <li>Python</li>
                                    <li>Python</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div >
                                <ul className="">
                                    <li><h5 className="">About</h5></li>
                                    <li>Python</li>
                                    <li>Python</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment >
        )
    }
}
