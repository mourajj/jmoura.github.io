import React, { useState } from 'react';
import golang from '../assets/publisher.png';
import mmanager from '../assets/membermanager.png';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0f0f0f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff4415]'>
            Personal projects
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='flex flex-col gap-4'>
          {/* Project 1 */}
          <div className='flex gap-4 items-center'>
            <div
              style={{ backgroundImage: `url(${mmanager})` }}
              className='shadow-lg shadow-[#040c16] group container h-40 bg-cover bg-center'
            />
            <div className='text-white'>
              <span className='text-2xl font-bold'>
                Member Manager
              </span>
              <p>This is a CRUD microservice application responsible for managing members</p>
              <div className='pt-2'>
                <a href='https://github.com/mourajj/member-manager'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className='flex gap-4 items-center'>
            <div
              style={{ backgroundImage: `url(${golang})` }}
              className='shadow-lg shadow-[#040c16] group container h-40 bg-cover bg-center'
            />
            <div className='text-white'>
              <span className='text-2xl font-bold'>
                Event Publisher
              </span>
              <p>Application to send events (files) to S3, built on top of a cloudformation stack</p>
              <div className='pt-2'>
                <a href='https://github.com/mourajj/eventpublisher'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
