import React from 'react'
import Heac1bgpc from '../assets/images/heac1bgpc.gif'
import Heac1bgmob from '../assets/images/heac1bgmob.gif'

function HeaC1(props) {
    return (
        <div>
            <div className='d-flex justify-content-center pt-3'>
                <img src={Heac1bgpc} className='w-100 d-none d-md-block' />
                <img src={Heac1bgmob} className='w-100 d-md-none' />
                <div className='container position-absolute d-flex text-light  py-auto md:pt-20 pt-10  items-center'>
                    <div className='slide-up my-auto  col-12 col-md-10  '>
                        <p className=' text-2xl md:text-4xl lg:text-5xl text-pink-500  fw-bold 'data-aos="fade-down-left">{props.title}</p>
                    </div>
                </div>
            </div>
            <div className="container text-xl md:text-2xl my-5 slide-up" data-aos="fade-down-right">
            <p>{props.description}</p>
            
            </div>
        </div>
    )
}


export default HeaC1
