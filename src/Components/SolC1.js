import React, { useEffect, useState } from "react";
import {preloadImages} from '../utils/preloadImages'

function SolC1(props) {
    
    return (
        <div>
            <div className="position-relative">
                <img src={props.desktopbg} className="w-100 d-none d-md-block" />
                <img src={props.mobilebg} className="w-100 d-md-none" />

                <div className="container position-absolute top-50 start-50 translate-middle w-100 text-center text-light">
                    <p
                        className="fw-bold text-2xl lg:text-4xl text-md-3xl col-12 col-md-9"
                        data-aos="fade-up-left"
                    >
                        {props.title}
                    </p>
                </div>
            </div>

            <div
                className="container fs-4 my-5 text-center"
                data-aos="fade-down"
            >
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default SolC1;
