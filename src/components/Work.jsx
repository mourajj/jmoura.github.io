import React, {useState}  from 'react';
import devbook from '../assets/devbook.png';
import realEstate from '../assets/realestate.PNG';
import tictactoe from '../assets/tictactoe.PNG';
import golang from '../assets/golang.png';
import bitcoin from '../assets/bitcoin.jpeg';


const Work = () => 
{ 
  const [openModal, setOpenModal] = useState(false)
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0f0f0f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff4415]'>
            Work
          </p>
          <p className='py-6'>// Check it out a little bit about my journey</p>

          <p className = 'mt-6 text-2xl font-bold' >SAP Concur US</p> 
          <p className = 'text-1xl' >jul 2022 - now</p>
          <p className='text-[#8892b0] max-w-[700px]'>
          • Here, I'm currently working for the Data Platform team, 
          which is responsible for the data ingress/egress pipeline of Concur, 
          this means that we ingest data from a variety of different resources and send it to the customers/partners, storing this data into a data lake
          in the cloud (AWS)  </p>
          <p className='text-[#8892b0] max-w-[700px]'>
          • As a Software Engineer, I'm responsible for optimizing solutions for cost, scalability, security and maintainability, juggling multiple responsibilities like reviewing pull requests, creating and maintaining CI/CD pipelines,
           designing APIs for both microservices and AWS integration, ingesting new DataSets to ingress pipeline, fixing vulnerabilities and so on.
          </p>

          <p className = 'mt-6 text-2xl font-bold' >SAP</p> 
          <p className = 'text-1xl' >sep 2018 - jul 2022</p>
          <p className='text-[#8892b0] max-w-[700px]'>
          •    At SAP, I've started working as a SAP Basis Engineer responsible for the Web Services (SOAP, HTTP) and Middleware (RFC) components in AMER</p>
          <p className='text-[#8892b0] max-w-[700px]'>
          •   Here, most of the time I was debugging API Calls based on SOAP and also RFC calls, my main tasks were Troubleshooting and debugging ABAP Code and also ERP bugs / malfunction along with consulting calls with customers
          </p>
          <p className='text-[#8892b0] max-w-[700px]'>
          •   In addition, I had a second role acting as the Employee Engagement Representative =)
          </p>

          <p className = 'mt-6 text-2xl font-bold' >GVDASA</p> 
          <p className = 'text-1xl' >nov 2016 - sep 2018</p>
          <p className='text-[#8892b0] max-w-[700px]'>
          •   This was an company focused on educational ERPs, as a developer, I was part of the team responsible for the school reports.
          </p>
          <p className='text-[#8892b0] max-w-[700px]' mg>
          •   My tasks were mainly related to create customizations in the customer's systems, maintaining integrity and ensuring the correct data extraction of the customer’s systems
          and also solving any bugs that could possibly occur.
          </p>  
        </div>
{/* Container */}
        </div>
      </div>
    
  );
};

export default Work;
