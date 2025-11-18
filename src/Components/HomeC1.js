import React from 'react'
import {Link} from 'react-router-dom'
import Homec1bgmob from '../assets/images/homec1bgmob.gif'
import Homec1bgpc from '../assets/images/homec1bgpc.gif'
function HomeC1() {
  return (
    <div className='d-flex justify-content-center '>
       <img src={Homec1bgpc} className='w-100 d-none d-md-block'  />
        <img src={Homec1bgmob} className='w-100  d-md-none'  />
      <div className='container position-absolute text-light  py-auto  pt-md-5 mt-md-5'>
        <p className='text-2xl md:text-5xl fw-bold mt-3 md:mt-5 text-pink-400 '>Custom Web and Mobile App Development</p>
        <p className='fw-bold'>At CustomTechLabs USA, we build scalable and performance-driven digital solutions.</p>

        <div className=" md:my-5 ">
        <p className='fs-2 text-sky-300'>Industries We Serve</p>
        <p className='fw-bold'>Healthcare, eCommerce, CRM, HRMS, ATS, Wellness, B2B & B2C Platforms.</p>
      </div>
      <button class="border  font-bold transition duration-300 ease-in-out px-4 py-2 bg-pink-500 hover:bg-pink-700  rounded">
        <Link className='!no-underline text-white' to="/contact">Let's go</Link> </button>



    </div>
    </div>
  )
}

export default HomeC1
