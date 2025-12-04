import React,{useState, useEffect} from 'react'
import { preloadImages } from '../utils/preloadImages'
import axios from 'axios';
import SerC1 from '../Components/SerC1';
import SerC2 from '../Components/SerC2';
const pagename="Services";

function Services() {
  document.title="Complete IT & Development Services"

  
  const [loaded, setLoaded] = useState(false);
  const [ServicesData, setServicesData] = useState();
  
    //   Fetch data 
    useEffect(() => {
      axios
        .get(`https://ctlabsbackend.vercel.app/api/pages/textdata/${pagename}`) 
        .then((res) => {
          const Data=res.data[0];// assuming API returns array
          setServicesData(Data);
        })
        .catch((err) => {
          console.log("Error fetching C1 data", err);
        });
    }, []);

    //  pre LoadImages
      useEffect(() => {
        preloadImages([ServicesData?.desktopbg, ServicesData?.mobilebg])
          .then(() => setLoaded(true));
      }, [ServicesData?.desktopbg, ServicesData?.mobilebg]);
    
      if (!loaded) {
        return (
          <div className="h-[70vh] flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
          </div>
        );
      }

  return (
    <div className='mt-5'>
      <SerC1 pagename={ServicesData?.pagename} title={ServicesData?.title} description={ServicesData?.titledec} desktopbg={ServicesData?.desktopbg} mobilebg={ServicesData?.mobilebg} />
      <SerC2 pagename={pagename}/>
    </div>
  )
}

export default Services
