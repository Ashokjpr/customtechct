import React from 'react'
import indc2bg from '../assets/images/indc2bg.png'
import Healthcaremob from '../assets/images/healthcaremob.png'
import ECommerce from '../assets/images/ecommerce.png'
import Otherindc from '../assets/images/otherind.png'
import Services from '../assets/images/services.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


function IndC2() {
    return (
        <div className='d-flex justify-content-center '>
            <img src={indc2bg} className='w-100 ' />
            <div className='container position-absolute rounded   my-5'>
                <p className="fs-1 fw-bold ">Industries We Serve.</p>
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
                    className="mySwiper text-primary"
                >
                    <SwiperSlide>
                      <div className='d-flex helCard shadow-lg rounded'>
                        <img src={Healthcaremob} className='w-100  '  />  
                        <div className='container position-absolute fw-bold  mt-md-5 p-4  px-auto'>
                          <h2 className='border-bottom '>Healthcare</h2>
                          <p className='fs-3'>Key Healthcare Solutions:</p>
                            <ul className='heaul'>
                                <li className='  fs-5 '>Custom EMAR Software Development</li>
                                <li className='  fs-5'>Pharmacy Management Platforms</li>
                                <li className='  fs-5'>Medicine Search & Inventory Systems</li>
                                <li className='  fs-5'>Appointment and Patient Tracking Portals</li>
                                <li className='  fs-5'>Healthcare Staff Coordination Apps</li>
                              </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div className='d-flex helCard shadow-lg rounded'>
                       <img src={ECommerce} className='w-100  '  /> 
                        <div className='container position-absolute fw-bold  mt-md-5 p-4  px-auto'>
                          <h2 className='border-bottom'>E-Commerce</h2>
                            <p className='fs-3'>Core Capabilities:</p>
                            <ul className='heaul'>
                                <li className='  fs-6'>Shopify, WooCommerce & Custom Store Development</li>
                                <li className='  fs-6'>Advanced Product Search & Recommendation Systems</li>
                                <li className='  fs-6'>Secure Payment Gateway Integration</li>
                                <li className='  fs-6'>Inventory, Order & Subscription Management</li>
                                <li className='  fs-6'>Mobile App Integration (iOS & Android)</li>
                                
                            </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div className='d-flex helCard shadow-lg rounded text center'>
                        <img src={Otherindc} className='w-100  '  /> 
                        <div className='container position-absolute fw-bold   mt-md-5 p-4  px-auto'>
                          <h2 className='border-bottom'>Other Industries</h2>
                            <p className='fs-3 '>Our Core Services Include:</p>
                            <ul className='heaul'>
                                <li className='  fs-5'>CRM, HRMS, and ATS Platforms</li>
                                <li className='  fs-5'>Wellness & Fitness Applications</li>
                                <li className='  fs-5'>Learning & Quiz Platforms</li>
                                <li className='  fs-5'>B2B and B2C Portals</li>
                                <li className='  fs-5'>SaaS & Automation Systems</li>
                                <li className='  fs-5'>Maintenance and Post-Launch Support</li>
                            </ul>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div className='d-flex helCard shadow-lg rounded text center'>
                        <img src={Services} className='w-100  '  /> 
                        <div className='container position-absolute fw-bold   mt-md-5 p-4  px-auto'>
                          <h2 className='border-bottom'>Services</h2>
                            <p className='fs-3'>Our Core Services Include:</p>
                            <ul className='heaul'>
                                <li className='  fs-5'>Custom Web and Mobile App Development</li>
                                <li className='  fs-5'>AI-driven Product Engineering</li>
                                <li className='  fs-5'>Cloud and API Integration</li>
                                <li className='  fs-5'>UI/UX Design and Digital Experience Optimization</li>
                                <li className='  fs-5'>Enterprise Solutions for Web, iOS, and Android</li>
                                <li className='  fs-5'>Maintenance and Post-Launch Support</li>
                            </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>


    )
}

export default IndC2
