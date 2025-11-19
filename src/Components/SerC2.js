import React from 'react'
import indc2bg from '../assets/images/indc2bg.png'

function SerC2() {

  const serviceCards = [
    {
      title: "Custom Web and Mobile App Development",
      desc: "We design and develop high-performing web and mobile applications tailored to your business needs. From concept to deployment, our solutions ensure scalability, speed, and seamless user experiences across all devices.",
    },
    {
      title: "AI-driven Product Engineering",
      desc: "We harness the power of AI and machine learning to build intelligent, data-driven products. Our solutions enhance automation, optimize performance, and accelerate innovation across every stage of product development.",
    },
    {
      title: "Cloud and API Integration",
      desc: "We enable seamless connectivity and scalability through secure cloud and API integration. Our experts help businesses modernize infrastructure, streamline data exchange, and enhance performance across platforms and applications.",
    },
    {
      title: "UI/UX Design and Digital Experience Optimization",
      desc: "We craft intuitive, visually engaging designs that elevate user experience. Our UI/UX experts blend creativity with usability to deliver seamless digital journeys that drive engagement and brand loyalty.",
    },
    {
      title: "Enterprise Solutions for Web, iOS, and Android",
      desc: "We develop robust, scalable enterprise applications that streamline operations and enhance productivity. Our cross-platform solutions for web, iOS, and Android empower businesses with security, performance, and seamless integration.",
    },
    {
      title: "Maintenance and Post-Launch Support",
      desc: "We provide continuous maintenance and technical support to keep your applications secure, updated, and high-performing. Our team ensures smooth operations, regular enhancements, and long-term reliability post-deployment.",
    },
  ];

  const ArrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#EA3323">
      <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
    </svg>
  );

  return (
    <div className='d-flex justify-content-center'>
      <img src={indc2bg} className='w-100' />

      <div className='container position-absolute py-auto'>
        <div className='justify-content-center'>

          {serviceCards.map((card, index) => (
            <div key={index} className='customcard d-flex flex-wrap shadow-lg p-3 my-5' data-aos="zoom-in-up">

              <div className='m-auto col-11 col-md-3'>
                <h3 className='ms-3'>{card.title}</h3>
              </div>

              <div className='d-flex my-auto col-12 col-md-9'>
                <p>{card.desc}</p>
                <span className='col-2 text-center my-auto'>{ArrowIcon}</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default SerC2;
