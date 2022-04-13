import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0f0f0f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff4415]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Jonathan, nice to meet you.</p>
            </div>
            <div>
              <p>I am currently working as a Product Engineer at SAP, and I'm passionate with programming. 
              One of my hobbies is developing applications with specific technologies that I'm curious about. Feel free to take a look on my recent personal projects =)</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
