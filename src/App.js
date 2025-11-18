import React, { useEffect } from "react";
import './App.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Healthcare from './Pages/Healthcare';
import Industries from './Pages/Industries';
import ECommerce from './Pages/ECommerce';
import Services from './Pages/Services';
import Solutions from './Pages/Solutions';
import Contact from './Pages/Contact';
function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 1000,     // Animation duration (ms)
      offset: 100,        // Distance from top to trigger animation
      easing: "ease-in-out",
      // once: true          // Run animation only once
    });
  }, []);

   return (
    <div >
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />}/>
        <Route path='/healthcare' element={<Healthcare/>}/>
        <Route path='/ecommerce'  element={<ECommerce/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
