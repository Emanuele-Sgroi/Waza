import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <div className='h-screen'>
      <div className='p-60 grid justify-items-center '>
        <h1 className='md:text-center font-semibold text-7xl'>
          Make your project.{' '}
          <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>
            Reality
          </span>
        </h1>
        <button
          type='button'
          className='text-white flex items-center mt-10 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-md px-6 py-3 text-center mr-2 mb-2'
        >
          <span>GET STARTED</span>
          <BsArrowDownCircle className='animate-bounce ml-4 w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
