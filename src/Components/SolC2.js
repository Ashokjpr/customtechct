import React,{useState, useEffect} from 'react'
import axios from 'axios';
import indc2bg from '../assets/images/indc2bg.png'

function SolC2(props) {

  const pagename= props.pagename;
  
    
      const [SolutionsData, setSolutionsData] = useState([]);
        
          //   Fetch data 
          useEffect(() => {
            axios
              .get(`http://localhost:5000/api/pages/carddata/${pagename}`) 
              .then((res) => {
                const Data=res.data;// assuming API returns array
                setSolutionsData(Data);
              })
              .catch((err) => {
                console.log("Error fetching C1 data", err);
              });
          }, []);
     
          // console.log(SolutionsData)

  const solutionCards = [
    {
      title: "CRM, HRMS & ATS Systems",
      desc: "We build intelligent CRM, HRMS, and ATS platforms that streamline workflows, enhance collaboration, and provide real-time analytics — empowering teams to work smarter and drive business growth.",
    },
    {
      title: "Wellness & Fitness Platforms",
      desc: "We design interactive wellness and fitness platforms that promote engagement, lifestyle tracking, and personalized health experiences — helping users stay motivated and connected on their wellness journey.",
    },
    {
      title: "Learning & Quiz Apps",
      desc: "We create engaging learning and quiz applications that make education interactive and fun. Our gamified platforms enhance knowledge sharing, track progress, and boost learner motivation across all age groups.",
    },
    {
      title: "B2B & B2C Platforms",
      desc: "We develop robust B2B and B2C platforms that streamline transactions, enhance communication, and support business scalability — empowering brands to connect, engage, and grow in the digital marketplace.",
    },
    {
      title: "Custom Business Process Automation",
      desc: "We build intelligent automation solutions that digitize workflows, reduce manual effort, and improve decision-making. Our systems enhance efficiency, accuracy, and visibility across business operations.",
    },
    {
      title: "Healthcare & Telemedicine Solutions",
      desc: "We deliver secure and scalable healthcare and telemedicine platforms that connect patients and providers seamlessly. Our solutions enable virtual consultations, medical record management, and real-time health monitoring — ensuring accessibility and care beyond boundaries.",
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

      <div className='container position-absolute py-auto mt-5'>
        <div className='justify-content-center'>

          {SolutionsData.map((card, index) => (
            <div key={index} className='customcard d-flex flex-wrap shadow-lg p-3 my-5' data-aos="zoom-in-up">

              <div className='my-auto col-12 col-md-3'>
                <h3 className='ms-3'>{card.title}</h3>
              </div>

              <div className='d-flex my-auto col-12 col-md-9'>
                <p>{card.points}</p>
                <span className='col-2 text-center my-auto'>{ArrowIcon}</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default SolC2;











