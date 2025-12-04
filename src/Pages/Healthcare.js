import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { preloadImages } from '../utils/preloadImages'
import HeaC1 from '../Components/HeaC1'
import HeaC2 from '../Components/HeaC2'

function Healthcare() {
  document.title = "Healthcare Software Development & Digital Solutions"

  const [loaded, setLoaded] = useState(false);
  const [HealthcareData, setHealthcareData] = useState();
  const pagename = "Healthcare";

  //   Fetch data 
  useEffect(() => {
    axios
      .get(`https://ctlabsbackend.vercel.app/api/pages/textdata/${pagename}`)
      .then((res) => {
        const Data = res.data[0];// assuming API returns array
        setHealthcareData(Data);
      })
      .catch((err) => {
        console.log("Error fetching C1 data", err);
      });
  }, []);

  //  pre LoadImages
  useEffect(() => {
    preloadImages([HealthcareData?.desktopbg, HealthcareData?.mobilebg])
      .then(() => setLoaded(true));
  }, [HealthcareData?.desktopbg, HealthcareData?.mobilebg]);

  if (!loaded) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }
  return (
    <div className='mt-5'>
      <HeaC1 pagename={HealthcareData?.pagename} title={HealthcareData?.title} description={HealthcareData?.titledec} desktopbg={HealthcareData?.desktopbg} mobilebg={HealthcareData?.mobilebg} />
      <HeaC2 pagename={pagename} subtitle={HealthcareData?.subtitle} />
    </div>
  )
}

export default Healthcare
