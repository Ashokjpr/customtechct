import React from 'react'
import indc2bg from '../assets/images/indc2bg.png'
import HealthcareSlider from './HealthcareSlider'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


function HeaC2() {
    return (
        <div className='d-flex justify-content-center '>
            <img src={indc2bg} className='w-100 ' />
            <div className='container position-absolute  my-5'>
                <p className="fs-1 fw-bold ">Healthcare Solutions.</p>
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
                        768: { slidesPerView: 2 },  // Tablet
                        992: { slidesPerView: 3 },  // Desktop
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='helCard shadow-lg rounded p-3'>
                            <h3 className='border-bottom'>EMAR Software Development</h3>
                            <ul>
                                <li className='mb-4'>Automated Medication Tracking</li>
                                <li className='mb-4'>Real-time Data Access</li>
                                <li className='mb-4'>Regulatory Compliance</li>
                                <li className='mb-4'>User-friendly Interface</li>
                                <li className='mb-4'>Integration Ready</li>
                                <li className='mb-4'>Reporting & Analytics</li>
                                <li className='mb-4'>Mobile & Cloud Support</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='helCard shadow-lg rounded p-3'>
                            <h3 className='border-bottom'>Pharmacy Management Platforms</h3>
                            <ul>
                                <li className='mb-4'>Inventory Management</li>
                                <li className='mb-4'>Prescription Handling</li>
                                <li className='mb-4'>Billing & Invoicing</li>
                                <li className='mb-4'>Supplier & Purchase Management</li>
                                <li className='mb-4'>Customer Database</li>
                                <li className='mb-4'>Regulatory Compliance</li>
                                <li className='mb-4'>Analytics & Reporting</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='helCard shadow-lg rounded p-3'>
                            <h3 className='border-bottom'>Medicine Search & Inventory Systems</h3>
                            <ul>
                                <li className='mb-4'>Smart Medicine Search</li>
                                <li className='mb-4'>Real-time Inventory Tracking</li>
                                <li className='mb-4'>Automated Restocking Alerts</li>
                                <li className='mb-4'>Batch & Lot Management</li>
                                <li className='mb-4'>Integration Support</li>
                                <li className='mb-4'>Detailed Reporting</li>
                                <li className='mb-4'>Cloud & Mobile Access</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='helCard shadow-lg rounded p-3'>
                            <h3 className='border-bottom'>Appointment and Patient Tracking Portals</h3>
                            <ul>
                                <li className='mb-4'>Online Appointment Scheduling</li>
                                <li className='mb-4'>Real-time Availability</li>
                                <li className='mb-4'>Patient Profile Management</li>
                                <li className='mb-4'>Automated Reminders</li>
                                <li className='mb-4'>Integrated Calendar View</li>
                                <li className='mb-4'>Secure Health Data Management</li>
                                <li className='mb-4'>Analytics Dashboard</li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='helCard shadow-lg rounded p-3'>
                            <h3 className='border-bottom'>Healthcare Staff Coordination Apps</h3>
                            <ul>
                                <li className='mb-4'>Shift & Duty Scheduling</li>
                                <li className='mb-4'>Real-time Communication</li>
                                <li className='mb-4'>Task Management</li>
                                <li className='mb-4'>Attendance & Time Tracking</li>
                                <li className='mb-4'>Emergency Alerts</li>
                                <li className='mb-4'>Role-based Access</li>
                                <li className='mb-4'>Mobile & Cloud Support</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>


    )
}

export default HeaC2
