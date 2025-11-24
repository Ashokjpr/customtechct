import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { CheckCircle } from "lucide-react";
export default function HomeC2() {
  const [Homec2Data, setHomec2Data] = useState();

  //   Fetch data 
  useEffect(() => {
    axios
      .get("https://ctlabsbackend.vercel.app/api/pages/homec2") 
      .then((res) => {
        const Data=res.data[0];// assuming API returns array
        setHomec2Data(Data);
      })
      .catch((err) => {
        console.log("Error fetching C1 data", err);
      });
  }, []);
 
  // const coreFeatures = [
  //   "Custom eCommerce platform development",
  //   "AI-powered product search & recommendations",
  //   "Secure multi-currency payment integration",
  //   "Inventory, order & subscription management",
  //   "Mobile app integration for iOS & Android",
  // ];

  // const advancedModules = [
  //   "Custom admin panel with role-based access",
  //   "Warehouse management system (WMS)",
  //   "Influencer & affiliate management",
  //   "Loyalty, wallet & rewards system",
  //   "CRM & marketing automation",
  //   "B2B, B2C & multi-vendor capabilities",
  // ];

  // console.log(Homec2Data)
  return (
      <div className="min-h-screen  py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-4xl md:text-5xl font-bold text-blue-900">{Homec2Data?.title}</p>
        <p className="text-gray-600 mt-4 text-lg">{Homec2Data?.description}</p>
      </div>

      {/* Core Features */}
      <div className="max-w-5xl mx-auto mt-16">
        <p className="text-3xl font-semibold text-blue-900 ">
          Core Features
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Homec2Data?.coreFeatures.map((item, index) => (
            <div data-aos="zoom-in-up"
              key={index}
              className="flex items-start gap-3 p-4 bg-white shadow rounded-xl font-bold md:mb-4 "
            >
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Modules */}
      <div className="max-w-5xl mx-auto mt-16">
        <p className="text-3xl font-semibold text-blue-900">
          Advanced Modules
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Homec2Data?.advancedModules.map((item, index) => (
            <div data-aos="zoom-in-up"
              key={index}
              className="flex items-start gap-3 p-4 bg-white shadow rounded-xl font-bold md:mb-4"
            >
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Built to scale. Built for your business.
        </h3>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          <Link className='!no-underline text-white' to="/contact">Start Your Project</Link>
        </button>
      </div>
    </div>
  );
}
