import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDownCircle } from 'react-icons/bs';

import HeroImage from '../../assets/waza_full_logo.png';

function HeroSection({ scrollDown }) {
  return (
    <section className='relative'>
      {/* Illustration behind hero content */}
      <div
        className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none'
        aria-hidden='true'
      >
        <svg
          width='1360'
          height='578'
          viewBox='0 0 1360 578'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='50%'
              y1='0%'
              x2='50%'
              y2='100%'
              id='illustration-01'
            >
              <stop stopColor='#FFF' offset='0%' />
              <stop stopColor='#EAEAEA' offset='77.402%' />
              <stop stopColor='#DFDFDF' offset='100%' />
            </linearGradient>
          </defs>
          <g fill='url(#illustration-01)' fillRule='evenodd'>
            <circle cx='1232' cy='128' r='128' />
            <circle cx='155' cy='443' r='64' />
          </g>
        </svg>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='text-center pb-12 md:pb-16'>
            <h1
              className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Make your project{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400'>
                Reality
              </span>
            </h1>
            <div className='max-w-3xl mx-auto'>
              <p
                className='text-xl text-gray-600 mb-8'
                data-aos='zoom-y-out'
                data-aos-delay='150'
              >
                Let's build your dream project together with a community of
                like-minded developers.
              </p>
              <div
                className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
                data-aos='zoom-y-out'
                data-aos-delay='300'
              >
                <div>
                  <Link href='/projects'>
                    <button
                      type='button'
                      className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md p-0.5 px-5 py-3 text-center mr-2 mb-2'
                    >
                      Try Now for Free!
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={scrollDown}
                    className='relative  btn-scroll inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
                  >
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                      What's Waza?
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className='relative flex justify-center mb-8'
              data-aos='zoom-y-out'
              data-aos-delay='450'
            >
              <div className='flex flex-col justify-center'>
                <Image
                  className='mx-auto rounded-full'
                  src={HeroImage}
                  width='768'
                  height='432'
                  alt='Hero'
                />
                <svg
                  className='absolute inset-0 max-w-full mx-auto md:max-w-none h-auto'
                  width='768'
                  height='432'
                  viewBox='0 0 768 432'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <defs>
                    <linearGradient
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='100%'
                      id='hero-ill-a'
                    >
                      <stop stopColor='#FFF' offset='0%' />
                      <stop stopColor='#EAEAEA' offset='77.402%' />
                      <stop stopColor='#DFDFDF' offset='100%' />
                    </linearGradient>

                    <linearGradient
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='99.24%'
                      id='hero-ill-b'
                    >
                      <stop stopColor='#FFF' offset='0%' />
                      <stop stopColor='#EAEAEA' offset='48.57%' />
                      <stop stopColor='#DFDFDF' stopOpacity='0' offset='100%' />
                    </linearGradient>
                  </defs>
                  <g fill='none' fillRule='evenodd'>
                    <circle
                      fillOpacity='.04'
                      fill='url(#hero-ill-a)'
                      cx='384'
                      cy='216'
                      r='128'
                    />
                    <circle
                      fillOpacity='.16'
                      fill='url(#hero-ill-b)'
                      cx='384'
                      cy='216'
                      r='96'
                    />
                    <g fillRule='nonzero'>
                      <use fill='#000' xlinkHref='#hero-ill-d' />
                      <use fill='url(#hero-ill-e)' xlinkHref='#hero-ill-d' />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className='absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg'
                onClick={scrollDown}
                aria-controls='modal'
              >
                <BsArrowDownCircle className='animate-bounce w-5 h-5' />
                <span className='ml-3'>GET STARTED</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
