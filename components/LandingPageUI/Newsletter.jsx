import Link from 'next/link';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { CgPatreon } from 'react-icons/cg';
import { FaDiscord } from 'react-icons/fa';

function Newsletter() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20'>
          {/* CTA box */}
          <div
            className='relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden'
            data-aos='zoom-y-out'
          >
            {/* Background illustration */}
            <div
              className='absolute right-0 bottom-0 pointer-events-none hidden lg:block'
              aria-hidden='true'
            >
              <svg width='428' height='328' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <radialGradient
                    cx='35.542%'
                    cy='34.553%'
                    fx='35.542%'
                    fy='34.553%'
                    r='96.031%'
                    id='ni-a'
                  >
                    <stop stopColor='#DFDFDF' offset='0%' />
                    <stop stopColor='#4C4C4C' offset='44.317%' />
                    <stop stopColor='#333' offset='100%' />
                  </radialGradient>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <g fill='#FFF'>
                    <ellipse
                      fillOpacity='.04'
                      cx='185'
                      cy='15.576'
                      rx='16'
                      ry='15.576'
                    />
                    <ellipse
                      fillOpacity='.24'
                      cx='100'
                      cy='68.402'
                      rx='24'
                      ry='23.364'
                    />
                    <ellipse
                      fillOpacity='.12'
                      cx='29'
                      cy='251.231'
                      rx='29'
                      ry='28.231'
                    />
                    <ellipse
                      fillOpacity='.64'
                      cx='29'
                      cy='251.231'
                      rx='8'
                      ry='7.788'
                    />
                    <ellipse
                      fillOpacity='.12'
                      cx='342'
                      cy='31.303'
                      rx='8'
                      ry='7.788'
                    />
                    <ellipse
                      fillOpacity='.48'
                      cx='62'
                      cy='126.811'
                      rx='2'
                      ry='1.947'
                    />
                    <ellipse
                      fillOpacity='.12'
                      cx='78'
                      cy='7.072'
                      rx='2'
                      ry='1.947'
                    />
                    <ellipse
                      fillOpacity='.64'
                      cx='185'
                      cy='15.576'
                      rx='6'
                      ry='5.841'
                    />
                  </g>
                  <circle fill='url(#ni-a)' cx='276' cy='237' r='200' />
                </g>
              </svg>
            </div>

            <div className='relative flex flex-col lg:flex-row justify-between items-center'>
              {/* CTA content */}
              <div className='text-center lg:text-left lg:max-w-xl'>
                <h3 className='h3 text-white mb-2'>Join the Movement</h3>
                <p className='text-gray-300 text-lg mb-6'>
                  Join the global community of developers on Twitter and
                  Discord, and support us on Patreon.
                </p>

                {/* CTA form */}
                <form className='w-full lg:w-auto'>
                  <div className='flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0'>
                    <button className='w-55 h-12 px-5 mt-5 text-white text-center inline-flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg py-2.5 mr-2 mb-2'>
                      <AiFillTwitterCircle className='mr-2 -ml-1 w-6 h-5' />
                      Follow @Waza
                    </button>
                    <button className='w-55 h-12 px-5 mt-5 text-white text-center inline-flex items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 rounded-lg py-2.5 mr-2 mb-2'>
                      <CgPatreon className='mr-2 -ml-1 w-6 h-5' />
                      Become a Patreon
                    </button>
                    <Link href='https://discord.gg/MREttBxk'>
                      <a
                        className='w-55 h-12 px-5 mt-5 text-white text-center inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg py-2.5 mr-2 mb-2'
                        target='_blank'
                      >
                        <FaDiscord className='mr-2 -ml-1 w-6 h-5' />
                        Join us on Discord
                      </a>
                    </Link>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  {/* <p className='text-sm text-gray-400 mt-3'>
                    7 days free trial. No credit card required.
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
