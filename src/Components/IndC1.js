import React from 'react'
import Indc1bgpc from '../assets/images/indc1bg.gif'
import Indc1bgmob from '../assets/images/indc1bgmob.gif'

function IndC1(props) {
  return (
    <div className='d-flex justify-content-center '>
        <img src={`${props.desktopbg}`} className='w-100 d-none d-md-block'  />
        <img src={`${props.mobilebg}`} className='w-100  d-md-none'  />
      <div className='container position-absolute  text-light  py-auto  py-lg-5 mt-4 '>
        <div className='mt-md-5 col-12 col-md-11 '>
            <p className='text-2xl md:text-3xl lg:text-5xl text-pink-400 fw-bold animate__animated animate__zoomInDown'>{props.title}</p>
            <p className='lg:text-xl animate__animated animate__fadeInUpBig'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default IndC1
