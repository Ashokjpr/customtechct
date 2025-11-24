import React,{useState, useEffect} from 'react'
import axios from 'axios';
import SerC1 from '../Components/SerC1';
import SerC2 from '../Components/SerC2';
const pagename="Services";

function Services() {
  document.title="Complete IT & Development Services"

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

  return (
    <div className='mt-5'>
      <SerC1 pagename={ServicesData?.pagename} title={ServicesData?.title} description={ServicesData?.titledec}  />
      <SerC2 pagename={pagename}/>
    </div>
  )
}

export default Services
