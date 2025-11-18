import React from 'react'
import Contact from '../Components/Conc1';
import IndC1 from '../Components/IndC1'
import IndC2 from '../Components/IndC2'
function Industries() {
  document.title="Industries We Serve - eCommerce, Healthcare,  CRM, HRMS, ATS, Wellness, B2B & B2C Platforms.";
  return (
    <div className="mt-5">
      <IndC1/>
      <IndC2/>
      {/* <Contact/> */}
    </div>
  )
}

export default Industries
