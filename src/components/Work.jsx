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
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${devbook})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                DevSocial
              </span>
              <p>Golang / MySQL / JavaScript</p>
              <div className='pt-8 text-center'>
                <a href='https://devsocial-jmoura.herokuapp.com/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300 '>
                    Demo
                  </button>
                  </a>
                <a href='https://github.com/mourajj/DevSocial'>
                
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300 '>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bitcoin})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Bitcoin Wallet
              </span>
              <p>Golang / Rest / External API </p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/mourajj/maxxer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${golang})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Rest Application
              </span>
              <p>Golang / PostGreSQL</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/mourajj/webapi-go'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${golang})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Golang Fundamentals
              </span>
              <p>Everything you need to know about Go</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/mourajj/Golang'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
            
          </div> 
          <div
            style={{ backgroundImage: `url(${tictactoe})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tic-Tac-Toe
              </span>
              <p>Javascript / HTML</p>
              <div className='pt-8 text-center'>
                <a href='https://tictactoe-jmoura.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mourajj/tic-tac-toe'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
            
          </div>    
          </div>
        </div>
      </div>
    
  );
};

export default Work;
