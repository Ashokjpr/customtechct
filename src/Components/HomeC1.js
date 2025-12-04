import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { preloadImages } from '../utils/preloadImages'
import Homec1bgmob from '../assets/images/homec1bgmob.gif'
import Homec1bgpc from '../assets/images/homec1bgpc.gif'
function HomeC1() {
  
const [loaded, setLoaded] = useState(false);
  const [Homec1Data, setHomec1Data] = useState();

//   Fetch data 
  useEffect(() => {
    axios
      .get("https://ctlabsbackend.vercel.app/api/pages/homec1") 
      .then((res) => {
        const Data=res.data[0];// assuming API returns array
        setHomec1Data(Data);
      })
      .catch((err) => {
        console.log("Error fetching C1 data", err);
      });
  }, []);

  //  pre LoadImages
        useEffect(() => {
          preloadImages([Homec1Data?.desktopbg, Homec1Data?.mobilebg])
            .then(() => setLoaded(true));
        }, [Homec1Data?.desktopbg, Homec1Data?.mobilebg]);
      
        if (!loaded) {
          return (
            <div className="h-[70vh] flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
            </div>
          );
        }
  return (
    <div className='d-flex justify-content-center '>
       <img src={`${Homec1Data?.desktopbg}`} className='w-100 d-none d-md-block'  />
       <img src={`${Homec1Data?.mobilebg}`} className='w-100  d-md-none'  />
      <div className='container position-absolute text-light  py-auto md:pt-5 lg:pt-5 mt-md-2 lg:pt-30 '>
        <p className='text-2xl md:text-4xl lg:text-5xl fw-bold mt-3 md:mt-5 text-pink-400'data-aos="fade-up-left">{Homec1Data?.title}</p>
        <p className='fw-bold'data-aos="zoom-in-up">{Homec1Data?.titledec}</p>

        <div className="lg:my-5 ">
        <p className='md:text-xl lg:text-3xl text-sky-200'data-aos="fade-up-left">{Homec1Data?.subtitle}</p>
        <p className='fw-bold'data-aos="zoom-in-up">{Homec1Data?.subtitledec}</p>
      </div>
      <button className="border  font-bold transition duration-300 ease-in-out px-4 py-2 bg-pink-500 hover:bg-pink-700  rounded" data-aos="zoom-in-up">
        <Link className='!no-underline text-white' to="/contact">Let's go</Link> </button>



    </div>
    </div>
  )
}

export default HomeC1
