import React from 'react'
import Solc1bgpc from '../assets/images/solc1bgpc.png'
import Solc1bgmob from '../assets/images/solc1bgmob.png'

function SolC1() {
  return (
        <div>
            <div className='d-flex justify-content-center '>
                <img src={Solc1bgpc} className='w-100 d-none d-md-block'  />
                <img src={Solc1bgmob} className='w-100  d-md-none'  />      
                <div className='container position-absolute d-flex justify-content-start text-light  py-auto '>
                    <div className='pt-5   mt-5  col-11 col-md-9'>
                        <p className=' text-2xl md:text-4xl mt-md-5 fw-bold  ' data-aos="fade-up-left">We provide specialized digital solutions that simplify complex processes and accelerate growth.</p>
                    </div>
                   
                </div>
            </div>
            <div className='container fs-4  my-5 text-center'data-aos="fade-down">
                <p>Each solution is designed for scalability, security, and long-term performance, with full-stack architecture built for your business needs.</p>    
            </div>
        </div>
    )
}

export default SolC1
