import React,{useState, useEffect} from 'react'
import axios from 'axios';
import SolC1 from '../Components/SolC1'
import SolC2 from '../Components/SolC2'

function Solutions() {
  document.title="Technology Solutions for Every Industry"

  const [SolutionsData, setSolutionsData] = useState();
    const pagename="Solutions";
    
      //   Fetch data 
      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/pages/textdata/${pagename}`) 
          .then((res) => {
            const Data=res.data[0];// assuming API returns array
            setSolutionsData(Data);
          })
          .catch((err) => {
            console.log("Error fetching C1 data", err);
          });
      }, []);
  return (
    <div className='mt-5'>
      <SolC1 pagename={SolutionsData?.pagename} title={SolutionsData?.title} description={SolutionsData?.titledec} />
      <SolC2 pagename={pagename}/>
    </div>
  )
}

export default Solutions
