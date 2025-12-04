import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { preloadImages } from '../utils/preloadImages'
import SolC1 from '../Components/SolC1'
import SolC2 from '../Components/SolC2'

function Solutions() {
  document.title = "Technology Solutions for Every Industry"


  const [loaded, setLoaded] = useState(false);
  const [SolutionsData, setSolutionsData] = useState();
  const pagename = "Solutions";

  //   Fetch data 
  useEffect(() => {
    axios
      .get(`https://ctlabsbackend.vercel.app/api/pages/textdata/${pagename}`)
      .then((res) => {
        const Data = res.data[0];// assuming API returns array
        setSolutionsData(Data);
      })
      .catch((err) => {
        console.log("Error fetching C1 data", err);
      });
  }, []);

  //  pre LoadImages
  useEffect(() => {
    preloadImages([SolutionsData?.desktopbg, SolutionsData?.mobilebg])
      .then(() => setLoaded(true));
  }, [SolutionsData?.desktopbg, SolutionsData?.mobilebg]);

  if (!loaded) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }


  return (
    <div className='mt-5'>
      <SolC1 pagename={SolutionsData?.pagename} title={SolutionsData?.title} description={SolutionsData?.titledec} desktopbg={SolutionsData?.desktopbg} mobilebg={SolutionsData?.mobilebg} />
      <SolC2 pagename={pagename} />
    </div>
  )
}

export default Solutions
