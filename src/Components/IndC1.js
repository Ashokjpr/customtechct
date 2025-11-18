import React from 'react'
import Indc1bgpc from '../assets/images/indc1bg.gif'
import Indc1bgmob from '../assets/images/indc1bgmob.gif'

function IndC1() {
  return (
    <div className='d-flex justify-content-center '>
        <img src={Indc1bgpc} className='w-100 d-none d-md-block'  />
        <img src={Indc1bgmob} className='w-100  d-md-none'  />
      <div className='container position-absolute  text-light  py-auto  py-md-5 mt-4'>
        <div className='mt-md-5 col-12 col-md-11 '>
            <p className='text-2xl md:text-5xl text-pink-400 fw-bold animate__animated animate__zoomInDown'>Maximize operational excellence and drive growth</p>
            <p className='animate__animated animate__fadeInUpBig'>CustomTechLabs partners with businesses across industries to drive digital transformation through expert consulting and tailored technology solutions. Our domain specialists combine deep industry knowledge with technical excellence to deliver customer-centric, agile, and value-driven results.</p>
        </div>
      </div>
    </div>
  )
}

export default IndC1
