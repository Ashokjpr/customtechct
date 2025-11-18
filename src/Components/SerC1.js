import React from 'react'
import usePreloadImages from '../hooks/usePreloadImages';
import Serc1bgpc from '../assets/images/serc1bgpc.gif'
import Serc1bgmob from '../assets/images/Serc1bgmob.gif'

function SerC1() {
     // Preload both images
    usePreloadImages([Serc1bgpc, Serc1bgmob]);
    return (
        <div>
            <div className='d-flex justify-content-center '>
                <img src={Serc1bgpc} className='w-100 d-none d-md-block' />
                <img src={Serc1bgmob} className='w-100 d-md-none' />
                <div className='container position-absolute d-flex justify-content- text-light  py-auto '>
                    <div className='pt-5   mt-5  col-12 col-md-8'>
                        <p className='fs-1 my-auto fw-bold   text-blue-700' data-aos="fade-down-left" >Drive operational excellence, innovation and transformation.</p>
                    </div>
                   
                </div>  
            </div>
            <div className='container  py-5 fs-3 text-center' data-aos="fade-down">
                <p>Comprehensive technology services to turn your ideas into market-ready digital products.</p>
            </div>
        </div>
    )
}


export default SerC1
