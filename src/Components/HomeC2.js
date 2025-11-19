import React from "react";
import {Link} from 'react-router-dom'
import { CheckCircle } from "lucide-react";
export default function HomeC2() {
 
  const coreFeatures = [
    "Custom eCommerce platform development",
    "AI-powered product search & recommendations",
    "Secure multi-currency payment integration",
    "Inventory, order & subscription management",
    "Mobile app integration for iOS & Android",
  ];

  const advancedModules = [
    "Custom admin panel with role-based access",
    "Warehouse management system (WMS)",
    "Influencer & affiliate management",
    "Loyalty, wallet & rewards system",
    "CRM & marketing automation",
    "B2B, B2C & multi-vendor capabilities",
  ];

  return (
      <div className="min-h-screen  py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Advanced eCommerce Development
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          We build custom digital commerce platforms designed for performance,
          flexibility, and long-term growth. With our end-to-end development
          approach, your brand gets a complete ecosystem tailored exactly to
          your needs.
        </p>
      </div>

      {/* Core Features */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          Core Features
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreFeatures.map((item, index) => (
            <div data-aos="zoom-in-up"
              key={index}
              className="flex items-start gap-3 p-4 bg-white shadow rounded-xl font-bold"
            >
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Modules */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          Advanced Modules
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedModules.map((item, index) => (
            <div data-aos="zoom-in-up"
              key={index}
              className="flex items-start gap-3 p-4 bg-white shadow rounded-xl font-bold"
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
