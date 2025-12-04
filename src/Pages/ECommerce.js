import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { preloadImages } from '../utils/preloadImages'
import EcoC1 from '../Components/EcoC1'
import EcoC2 from '../Components/EcoC2'

function ECommerce() {
  document.title="Modern ECommerce ECommerce for Online Businesses"

   const [loaded, setLoaded] = useState(false);
  const [ECommerceData, setECommerceData] = useState();
      const pagename="E-Commerce";
      
        //   Fetch data 
        useEffect(() => {
          axios
            .get(`https://ctlabsbackend.vercel.app/api/pages/textdata/${pagename}`) 
            .then((res) => {
              const Data=res.data[0];// assuming API returns array
              setECommerceData(Data);
            })
            .catch((err) => {
              console.log("Error fetching C1 data", err);
            });
        }, []);

        //  pre LoadImages
              useEffect(() => {
                preloadImages([ECommerceData?.desktopbg, ECommerceData?.mobilebg])
                  .then(() => setLoaded(true));
              }, [ECommerceData?.desktopbg, ECommerceData?.mobilebg]);
            
              if (!loaded) {
                return (
                  <div className="h-[70vh] flex justify-center items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
                  </div>
                );
              }
  return (
    <div className='mt-5'>
      <EcoC1 pagename={ECommerceData?.pagename} title={ECommerceData?.title} description={ECommerceData?.titledec} desktopbg={ECommerceData?.desktopbg} mobilebg={ECommerceData?.mobilebg} />
      <EcoC2 pagename={pagename} subtitle={ECommerceData?.subtitle}/>
    </div>
  )
}

export default ECommerce
