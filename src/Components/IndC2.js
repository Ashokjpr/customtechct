import React,{useState, useEffect} from 'react'
import axios from 'axios';
import indc2bg from '../assets/images/indc2bg.png'
import Healthcare from '../assets/images/healthcaremob.png'
import ECommerce from '../assets/images/ecommerce.png'
import Otherindc from '../assets/images/otherind.png'
import Services from '../assets/images/services.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function IndC2(props) {
  const pagename = props.pagename;

  const industrySlides = [
    {
      image: Healthcare,
      title: "Healthcare",
      subtitle: "Key Healthcare Solutions:",
      items: [
        "Custom EMAR Software Development",
        "Pharmacy Management Platforms",
        "Medicine Search & Inventory Systems",
        "Appointment and Patient Tracking Portals",
        "Healthcare Staff Coordination Apps",
      ],
    },
    {
      image: ECommerce,
      title: "E-Commerce",
      subtitle: "Core Capabilities:",
      items: [
        "Custom Store Development",
        "Advanced Product Search & Recommendation Systems",
        "Secure Payment Gateway Integration",
        "Inventory, Order & Subscription Management",
        "Mobile App Integration (iOS & Android)",
      ],
    },
    {
      image: Otherindc,
      title: "Other Industries",
      subtitle: "Our Core Services Include:",
      items: [
        "Wellness & Fitness Applications",
        "Learning & Quiz Platforms",
        "B2B and B2C Portals",
        "SaaS & Automation Systems",
        "Maintenance and Post-Launch Support",
      ],
    },
    {
      image: Services,
      title: "Services",
      subtitle: "Our Core Services Include:",
      items: [
        "Custom Web and Mobile App Development",
        "AI-driven Product Engineering",
        "Cloud and API Integration",
        "UI/UX Design and Digital Experience Optimization",
        "Enterprise Solutions for Web, iOS, and Android",
        "Maintenance and Post-Launch Support",
      ],
    },
  ];

  const [IndustriesData, setIndustriesData] = useState([]);
      
        //   Fetch data 
        useEffect(() => {
          axios
            .get(`http://localhost:5000/api/pages/${pagename}`) 
            .then((res) => {
              const Data=res.data;// assuming API returns array
              setIndustriesData(Data);
            })
            .catch((err) => {
              console.log("Error fetching C1 data", err);
            });
        }, []);
   
        // console.log(IndustriesData)

  return (
    <div className='d-flex justify-content-center'>
      <img src={indc2bg} className='h-100' />

      <div className='container position-absolute rounded my-5'>
        <p className="fs-1 fw-bold">{props.subtitle}</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true} // 🔁 Infinite scroll
          autoplay={{
            delay: 2500, // time between slides
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 1 },  // Tablet
            992: { slidesPerView: 2 },  // Desktop
          }}
          className="mySwiper text-primary mb-5"
          >

          {IndustriesData?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='d-flex helCard shadow-lg rounded position-relative'>
                <img src={Healthcare} className='w-100' />

                <div className='container position-absolute fw-bold mt-md-5 p-4 px-auto'>
                  <h2 className='border-bottom'>{slide?.title}</h2>
                  <p className='text-xl md:text-3xl'>{slide?.keytitle}</p>

                  <ul className='heaul leading-tight'>
                    {slide.points.map((item, i) => (
                      <li key={i} className='md:text-2xl'>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
}

export default IndC2;
