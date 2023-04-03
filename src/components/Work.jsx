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
          <p className='py-6'>// Check it out a little bit more about my experience (TO-DO)</p>
        </div>

{/* Container */}
        </div>
      </div>
    
  );
};

export default Work;
