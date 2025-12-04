import React from 'react'
import Serc1bgpc from '../assets/images/serc1bgpc.gif'
import Serc1bgmob from '../assets/images/Serc1bgmob.gif'

function SerC1(props) {

    
    return (
        <div>
            <div className="position-relative text-center">
                <img src={`${props.desktopbg}`} className='w-100 d-none d-md-block'  />
                <img src={`${props.mobilebg}`} className='w-100  d-md-none'  />

                <div className="position-absolute top-50 start-50 translate-middle w-100">
                    <p className="text-4xl lg:text-6xl   fw-bold text-blue-700" data-aos="fade-down-left" > {props?.title} </p>
                </div>
        
            </div>
            <div className="container py-5 fs-3 text-center" data-aos="fade-down">
                <p>{props?.description}</p>
            </div>
        </div>

    )
}


export default SerC1
