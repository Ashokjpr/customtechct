import React from 'react'
import indc2bg from '../assets/images/indc2bg.png'

function EcoC2() {
  return (
    <div className='d-flex justify-content-center '>
        <img src={indc2bg} className='w-100 ' />
      <div className='container position-absolute py-auto  pt-md-5 mt-5'>
        <p className="fs-1 fw-bold ">Service Offerings.</p>
        
        <div className='gap-4 d-flex flex-wrap justify-content-center'>
            
            <div className='hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}} data-aos="ease-out " data-aos="zoom-in-up">
                <h3 className='border-bottom'>Shopify Development</h3>
                <ul>
                    <li className='mb-2'>Custom Shopify theme development</li>
                    <li className='mb-2'>App integration & automation</li>
                    <li className='mb-2'>High-converting storefront design</li>
                    <li className='mb-2'>Shopify migration & optimization</li>
                </ul>
            </div>        
            <div className=' hover:scale-108  helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}} data-aos="ease-out" data-aos="zoom-out-down">
                <h3 className='border-bottom'>Custom Store Development</h3>
                <ul>
                    <li>Full-stack custom eCommerce solutions</li>
                    <li>MERN / Laravel / Next.js store development</li>
                    <li>Scalable architecture for large catalogs</li>
                    <li>Custom admin dashboards & analytics</li>
                    
                </ul>
            </div>
            <div className='hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}} data-aos="ease-out" data-aos="zoom-in-up">
                <h3 className='border-bottom'>Advanced Product Search</h3>
                <ul>
                    <li>NLP-based keyword understanding</li>
                    <li>Vector search for deeper matching</li>
                    <li>ML models for recommendation engines</li>
                    <li>Smart filters (price, category, brand, ratings, availability)</li>
                    <li>Trending, popular & seasonal product insights</li>
                    
                </ul>
            </div>
            <div className='hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}} data-aos="ease-out" data-aos="zoom-out-down">
                <h3 className='border-bottom'>Secure Payment Gateway Integration</h3>
                <ul>
                    <li>Supports Stripe, PayPal, Razorpay, Paytm, and more.</li>
                    <li>Encrypted, PCI-DSS–compliant payment processing.</li>
                    <li>Multi-currency & multiple payment methods.</li>
                    <li>Fraud protection & secure checkout.</li>
                    <li>Smooth integration with APIs and webhooks.</li>
                  
                </ul>
            </div>
            <div className='hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}}data-aos="ease-out" data-aos="zoom-in-up">
                <h3 className='border-bottom'>Inventory, Order & Subscription Management</h3>
                <ul>
                    <li>Real-time inventory tracking & stock alerts.</li>
                    <li>Automated order processing & fulfillment.</li>
                    <li>Centralized order history & status updates.</li>
                    <li>Subscription creation, renewal & billing automation.</li>
                    <li>Seamless integration with payment gateways & CRMs.</li>
                </ul>
            </div>
            <div className='hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2' style={{minWidth:"20rem"}}data-aos="ease-out" data-aos="zoom-out-down">
                <h3 className='border-bottom'>Mobile App Integration (iOS & Android)</h3>
                <ul>
                    <li>Seamless integration with native and hybrid mobile apps.</li>
                    <li>Real-time data syncing via APIs.</li>
                    <li>Support for push notifications & in-app features.</li>
                    <li>Secure authentication and user management.</li>
                    <li>Optimized performance for both iOS and Android.</li>
                </ul>
            </div>

        </div>
      </div>
    </div>
  )
}

export default EcoC2
