import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthcareSlider = () => {
  return (
    <div className="container my-4">
      <Carousel interval={3000} indicators={true} controls={true} pause="hover">
        {/* 1️⃣ EMAR Software Development */}
        <Carousel.Item>
          <div className="helCard shadow-lg rounded p-3 mx-auto" style={{ maxWidth: "25rem" }}>
            <h3 className="border-bottom text-center">EMAR Software Development</h3>
            <ul>
              <li>Automated Medication Tracking</li>
              <li>Real-time Data Access</li>
              <li>Regulatory Compliance</li>
              <li>User-friendly Interface</li>
              <li>Integration Ready</li>
              <li>Reporting & Analytics</li>
              <li>Mobile & Cloud Support</li>
            </ul>
          </div>
        </Carousel.Item>

        {/* 2️⃣ Pharmacy Management Platforms */}
        <Carousel.Item>
          <div className="helCard shadow-lg rounded p-3 mx-auto" style={{ maxWidth: "25rem" }}>
            <h3 className="border-bottom text-center">Pharmacy Management Platforms</h3>
            <ul>
              <li>Inventory Management</li>
              <li>Prescription Handling</li>
              <li>Billing & Invoicing</li>
              <li>Supplier & Purchase Management</li>
              <li>Customer Database</li>
              <li>Regulatory Compliance</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>
        </Carousel.Item>

        {/* 3️⃣ Medicine Search & Inventory Systems */}
        <Carousel.Item>
          <div className="helCard shadow-lg rounded p-3 mx-auto" style={{ maxWidth: "25rem" }}>
            <h3 className="border-bottom text-center">Medicine Search & Inventory Systems</h3>
            <ul>
              <li>Smart Medicine Search</li>
              <li>Real-time Inventory Tracking</li>
              <li>Automated Restocking Alerts</li>
              <li>Batch & Lot Management</li>
              <li>Integration Support</li>
              <li>Detailed Reporting</li>
              <li>Cloud & Mobile Access</li>
            </ul>
          </div>
        </Carousel.Item>

        {/* 4️⃣ Appointment and Patient Tracking Portals */}
        <Carousel.Item>
          <div className="helCard shadow-lg rounded p-3 mx-auto" style={{ maxWidth: "25rem" }}>
            <h3 className="border-bottom text-center">Appointment and Patient Tracking Portals</h3>
            <ul>
              <li>Online Appointment Scheduling</li>
              <li>Real-time Availability</li>
              <li>Patient Profile Management</li>
              <li>Automated Reminders</li>
              <li>Integrated Calendar View</li>
              <li>Secure Health Data Management</li>
              <li>Analytics Dashboard</li>
            </ul>
          </div>
        </Carousel.Item>

        {/* 5️⃣ Healthcare Staff Coordination Apps */}
        <Carousel.Item>
          <div className="helCard shadow-lg rounded p-3 mx-auto" style={{ maxWidth: "25rem" }}>
            <h3 className="border-bottom text-center">Healthcare Staff Coordination Apps</h3>
            <ul>
              <li>Shift & Duty Scheduling</li>
              <li>Real-time Communication</li>
              <li>Task Management</li>
              <li>Attendance & Time Tracking</li>
              <li>Emergency Alerts</li>
              <li>Role-based Access</li>
              <li>Mobile & Cloud Support</li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HealthcareSlider;
