import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Golang from '../assets/go.png';
import Java from '../assets/java.png';
import Mysql from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0f0f0f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ff4415] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Golang} alt="HTML icon" />
                  <p className='my-4'>GOLANG</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
