import React from 'react'
import Ecoc1bgpc from '../assets/images/ecoc1bgpc.gif'
import Ecoc1bgmob from '../assets/images/ecoc1bgmob.gif'


function EcoC1(props) {
  return (
        <div>
            <div className='d-flex justify-content-start '>
                <img src={Ecoc1bgpc} className='w-100 d-none d-md-block'  />
                        <img src={Ecoc1bgmob} className='w-100  d-md-none'  />
                <div className='container position-absolute d-flex justify-content-center text-light  py-auto '>
                    <div className='pt-5   col-12 col-md-9'>
                        <p className='fs-1 mt-5 fw-bold ' data-aos="fade-down-right">{props.title}</p>
                    </div>
                  
                </div>
            </div>
            <div className='container fs-4 my-5' data-aos="fade-down-right">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default EcoC1
