import React from 'react'
import indc2bg from '../assets/images/indc2bg.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function HeaC2() {

  const healthcareCards = [
    {
      title: "EMAR Software Development",
      items: [
        "Automated Medication Tracking",
        "Real-time Data Access",
        "Regulatory Compliance",
        "User-friendly Interface",
        "Integration Ready",
        "Reporting & Analytics",
        "Mobile & Cloud Support",
      ],
    },
    {
      title: "Pharmacy Management Platforms",
      items: [
        "Inventory Management",
        "Prescription Handling",
        "Billing & Invoicing",
        "Supplier & Purchase Management",
        "Customer Database",
        "Regulatory Compliance",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Medicine Search & Inventory Systems",
      items: [
        "Smart Medicine Search",
        "Real-time Inventory Tracking",
        "Automated Restocking Alerts",
        "Batch & Lot Management",
        "Integration Support",
        "Detailed Reporting",
        "Cloud & Mobile Access",
      ],
    },
    {
      title: "Appointment and Patient Tracking Portals",
      items: [
        "Online Appointment Scheduling",
        "Real-time Availability",
        "Patient Profile Management",
        "Automated Reminders",
        "Integrated Calendar View",
        "Secure Health Data Management",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Healthcare Staff Coordination Apps",
      items: [
        "Shift & Duty Scheduling",
        "Real-time Communication",
        "Task Management",
        "Attendance & Time Tracking",
        "Emergency Alerts",
        "Role-based Access",
        "Mobile & Cloud Support",
      ],
    },
  ];

  return (
    <div className='d-flex justify-content-center'>
      <img src={indc2bg} className='w-100' />

      <div className='container position-absolute my-5'>
        <p className="fs-1 fw-bold">Healthcare Solutions.</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >

          {healthcareCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className='helCard shadow-lg rounded p-3'>
                <h3 className='border-bottom'>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i} className='mb-4'>{item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
}

export default HeaC2;
