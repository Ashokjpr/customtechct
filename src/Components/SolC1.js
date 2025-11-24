import React from 'react'
import Solc1bgpc from '../assets/images/solc1bgpc.png'
import Solc1bgmob from '../assets/images/solc1bgmob.png'

function SolC1(props) {
    return (
        <div>
            <div>
                <div className="position-relative ">
                    <img src={Solc1bgpc} className="w-100 d-none d-md-block" />
                    <img src={Solc1bgmob} className="w-100 d-md-none" />
                    <div className="container position-absolute top-50 start-50 translate-middle w-100 text-center text-light">
                        <p className="fw-bold text-2xl lg:text-4xl  text-md-3xl col-12 col-md-9 " data-aos="fade-up-left"> {props.title} </p>
                    </div>
                </div>
                <div className="container fs-4 my-5 text-center" data-aos="fade-down">
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default SolC1
