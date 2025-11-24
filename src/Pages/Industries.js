import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Contact from '../Components/Conc1';
import IndC1 from '../Components/IndC1'
import IndC2 from '../Components/IndC2'
const pagename="Industries";
function Industries() {
  document.title="Industries We Serve - eCommerce, Healthcare,  CRM, HRMS, ATS, Wellness, B2B & B2C Platforms.";
  
  const [IndustriesData, setIndustriesData] = useState();
    
      //   Fetch data 
      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/pages/textdata/${pagename}`) 
          .then((res) => {
            const Data=res.data[0];// assuming API returns array
            setIndustriesData(Data);
          })
          .catch((err) => {
            console.log("Error fetching C1 data", err);
          });
      }, []);
  return (
    <div className="mt-5">
      <IndC1 pagename={IndustriesData?.pagename} title={IndustriesData?.title} description={IndustriesData?.titledec}/>
      <IndC2 pagename={pagename} subtitle={IndustriesData?.subtitle}/>
      {/* <Contact/> */}
    </div>
  )
}

export default Industries
