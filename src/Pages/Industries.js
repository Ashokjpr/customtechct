import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { preloadImages } from '../utils/preloadImages'
import Contact from '../Components/Conc1';
import IndC1 from '../Components/IndC1'
import IndC2 from '../Components/IndC2'
const pagename = "Industries";
function Industries() {
  document.title = "Industries We Serve - eCommerce, Healthcare,  CRM, HRMS, ATS, Wellness, B2B & B2C Platforms.";


  const [loaded, setLoaded] = useState(false);
  const [IndustriesData, setIndustriesData] = useState();

  //   Fetch data 
  useEffect(() => {
    axios
      .get(`https://ctlabsbackend.vercel.app/api/pages/textdata/${pagename}`)
      .then((res) => {
        const Data = res.data[0];// assuming API returns array
        setIndustriesData(Data);
      })
      .catch((err) => {
        console.log("Error fetching C1 data", err);
      });
  }, []);

  //  pre LoadImages
  useEffect(() => {
    preloadImages([IndustriesData?.desktopbg, IndustriesData?.mobilebg])
      .then(() => setLoaded(true));
  }, [IndustriesData?.desktopbg, IndustriesData?.mobilebg]);

  if (!loaded) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <IndC1 pagename={IndustriesData?.pagename} title={IndustriesData?.title} description={IndustriesData?.titledec} desktopbg={IndustriesData?.desktopbg} mobilebg={IndustriesData?.mobilebg} />
      <IndC2 pagename={pagename} subtitle={IndustriesData?.subtitle} />
      {/* <Contact/> */}
    </div>
  )
}

export default Industries
