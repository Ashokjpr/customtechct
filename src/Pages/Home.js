import React from 'react'
import HomeC1 from '../Components/HomeC1'
import HomeC2 from '../Components/HomeC2'
function Home() {
  document.title="CustomTechLabs - Custom Web and Mobile App Development";
  return (
    <div className='mt-5'>
      <HomeC1/>
      <HomeC2/>
    </div>
  )
}

export default Home
