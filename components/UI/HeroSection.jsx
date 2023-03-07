import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <div className='h-screen'>
      <div className='p-10 md:p-20 lg:p-60 grid justify-items-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold text-center'>
          Make your project.{' '}
          <span className='font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>
            Reality
          </span>
        </h1>
        <button
          type='button'
          className='text-white flex items-center mt-10 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-md md:text-lg lg:text-xl px-6 py-3 text-center'
        >
          <span>GET STARTED</span>
          <BsArrowDownCircle className='animate-bounce ml-4 w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
