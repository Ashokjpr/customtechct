import React from 'react'
import Heac1bgpc from '../assets/images/heac1bgpc.gif'
import Heac1bgmob from '../assets/images/heac1bgmob.gif'

function HeaC1() {
    return (
        <div>
            <div className='d-flex justify-content-center pt-3'>
                <img src={Heac1bgpc} className='w-100 d-none d-md-block' />
                <img src={Heac1bgmob} className='w-100 d-md-none' />
                <div className='container position-absolute d-flex text-light  py-auto md:pt-20 pt-10  items-center'>
                    <div className='slide-up my-auto  col-12 col-md-9   '>
                        <p className=' text-2xl md:text-4xl text-pink-500  fw-bold 'data-aos="fade-down-left">Scale operational productivity, drive efficiencies, manage regulatory requirements, and ensure better patient outcomes</p>
                    </div>
                </div>
            </div>
            <div className="container text-xl md:text-3xl my-5 slide-up" data-aos="fade-down-right">
            <p>We bring innovation and precision to healthcare technology.</p>
            <p>
                Our customized digital solutions for hospitals, assisted living facilities,
                and pharmacies ensure compliance, scalability, and seamless user experience.
            </p>
            </div>
        </div>
    )
}


export default HeaC1
