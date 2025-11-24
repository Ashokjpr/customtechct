import React,{useState, useEffect} from 'react'
import axios from 'axios';
import HeaC1 from '../Components/HeaC1'
import HeaC2 from '../Components/HeaC2'

function Healthcare() {
  document.title="Healthcare Software Development & Digital Solutions"
  const [HealthcareData, setHealthcareData] = useState();
  const pagename="Healthcare";
  
    //   Fetch data 
    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/pages/textdata/${pagename}`) 
        .then((res) => {
          const Data=res.data[0];// assuming API returns array
          setHealthcareData(Data);
        })
        .catch((err) => {
          console.log("Error fetching C1 data", err);
        });
    }, []);
  return (
    <div className='mt-5'> 
      <HeaC1 pagename={HealthcareData?.pagename} title={HealthcareData?.title} description={HealthcareData?.titledec}/>
      <HeaC2 pagename={pagename} subtitle={HealthcareData?.subtitle}/>
    </div>
  )
}

export default Healthcare
