import React,{useState, useEffect} from 'react'
import axios from 'axios';
import EcoC1 from '../Components/EcoC1'
import EcoC2 from '../Components/EcoC2'

function ECommerce() {
  document.title="Modern ECommerce ECommerce for Online Businesses"

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

  return (
    <div className='mt-5'>
      <EcoC1 pagename={ECommerceData?.pagename} title={ECommerceData?.title} description={ECommerceData?.titledec}/>
      <EcoC2 pagename={pagename} subtitle={ECommerceData?.subtitle}/>
    </div>
  )
}

export default ECommerce
