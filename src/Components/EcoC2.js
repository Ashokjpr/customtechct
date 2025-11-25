import React,{useState, useEffect} from 'react'
import axios from 'axios';
import indc2bg from '../assets/images/indc2bg.png'

function EcoC2(props) {

    const pagename= props.pagename;
      
        
          const [ECommerceData, setECommerceData] = useState([]);
            
              //   Fetch data 
              useEffect(() => {
                axios
                  .get(`https://ctlabsbackend.vercel.app/api/pages/carddata/${pagename}`) 
                  .then((res) => {
                    const Data=res.data;// assuming API returns array
                    setECommerceData(Data);
                  })
                  .catch((err) => {
                    console.log("Error fetching C1 data", err);
                  });
              }, []);
         
              // console.log(ECommerceData)

    const serviceCards = [
        {
            title: "Custom Store Development",
            items: [
                "Full-stack custom eCommerce solutions",
                "MERN / Laravel / Next.js store development",
                "Scalable architecture for large catalogs",
                "Custom admin dashboards & analytics",
            ],
        },
        {
            title: "Advanced Product Search",
            items: [
                "NLP-based keyword understanding",
                "Vector search for deeper matching",
                "ML models for recommendation engines",
                "Smart filters (price, category, brand, ratings, availability)",
                "Trending, popular & seasonal product insights",
            ],
        },
        {
            title: "Secure Payment Gateway Integration",
            items: [
                "Supports Stripe, PayPal, Razorpay, Paytm, and more.",
                "Encrypted, PCI-DSS–compliant payment processing.",
                "Multi-currency & multiple payment methods.",
                "Fraud protection & secure checkout.",
                "Smooth integration with APIs and webhooks.",
            ],
        },
        {
            title: "Inventory, Order & Subscription Management",
            items: [
                "Real-time inventory tracking & stock alerts.",
                "Automated order processing & fulfillment.",
                "Centralized order history & status updates.",
                "Subscription creation, renewal & billing automation.",
                "Seamless integration with payment gateways & CRMs.",
            ],
        },
        {
            title: "Mobile App Integration (iOS & Android)",
            items: [
                "Seamless integration with native and hybrid mobile apps.",
                "Real-time data syncing via APIs.",
                "Support for push notifications & in-app features.",
                "Secure authentication and user management.",
                "Optimized performance for both iOS and Android.",
            ],
        },
    ];

    const aosin = "zoom-in-up";
    const aosout = "zoom-out-down";
    return (
        <div className='d-flex justify-content-center '>
            <img src={indc2bg} className='w-100 ' />
            <div className='container position-absolute py-auto  pt-md-5'>
                <p className="fs-1 fw-bold ">{props.subtitle}</p>

                <div className="gap-4 d-flex flex-wrap justify-content-center">

                    {ECommerceData?.map((card, index) => (
                        <div
                            key={index}
                            className="hover:scale-108 helCard shadow-lg rounded col-11 col-md-3 p-2"
                            style={{ minWidth: "20rem" }}
                            data-aos={index % 2 === 0 ? aosin : aosout}
                            data-aos-easing="ease-out"
                        >
                            <h3 className="border-bottom">{card.title}</h3>

                            <ul>
                                {card.points.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default EcoC2
