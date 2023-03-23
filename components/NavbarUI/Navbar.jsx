import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import Waza_Japanese from '../../assets/waza_japa.png';
import NavbarLogin from './NavbarLogin';
import NavbarUserLogged from './NavbarUserLogged';

const Navbar = () => {
  // NextAuth.JS session
  const { data: session } = useSession();

  return (
    <header className='sticky top-0 z-50 w-full flex justify-between items-center border-b-2 bg-white border-gray-150 py-2 px-4'>
      <nav className=' bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20'>
        {/* //? Logo */}
        <div className='inline-flex'>
          <a className='_o6689fn' href='/'>
            <div className='hidden md:block'>
              <Image
                src={Waza_Japanese}
                alt='Picture of the author'
                width={50}
                height={32}
                fill='currentcolor'
                style={{ display: 'block' }}
              />
              <p className='ml-2 hover:text-red-700 text-md font-semibold'>
                Waza{' '}
                <span className='text-xs text-gray-400 inline-block align-top'>
                  beta
                </span>
              </p>
            </div>
            <div className='block md:hidden'>
              <Image
                src={Waza_Japanese}
                alt='Picture of the author'
                width={30}
                height={32}
                fill='currentcolor'
              />
            </div>
          </a>
        </div>
        {/* //TODO: Implement a search bar 👇🏻 */}
        {/* <div className='hidden sm:block flex-shrink flex-grow-0 justify-start px-2'>
          <div className='inline-block'>
            <div className='inline-flex items-center max-w-full'>
              <button
                className='flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1'
                type='button'
              >
                <div className='block flex-grow flex-shrink overflow-hidden'>
                  Start your search
                </div>
                <div className='flex items-center justify-center relative  h-8 w-8 rounded-full'>
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    role='presentation'
                    focusable='false'
                    style={{
                      display: 'block',
                      fill: 'none',
                      height: '12px',
                      width: '12px',
                      stroke: 'currentcolor',
                      strokeWidth: '5.33333',
                      overflow: 'visible',
                    }}
                  >
                    <g fill='none'>
                      <path d='m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9'></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div> */}
        {/* //? Login */}
        <div className='flex-initial'>
          <div className='flex justify-end items-center relative'>
            <div className='flex mr-4 items-center'>
              <Link href='/projects'>
                <a
                  className='inline-block py-2 px-3 hover:bg-gray-200 rounded-full'
                  href='#'
                >
                  <div className='flex items-center relative cursor-pointer whitespace-nowrap'>
                    Explore projects
                  </div>
                </a>
              </Link>
            </div>
            {!session ? (
              <NavbarLogin />
            ) : (
              <NavbarUserLogged session={session} />
            )}
            {/* <div className='block'>
              <div className='inline relative'>
                <button
                  type='button'
                  className='inline-flex items-center relative px-2 border rounded-full hover:shadow-lg'
                >
                  <div className='pl-1'>
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                      style={{
                        display: 'block',
                        fill: 'none',
                        height: '16px',
                        width: '16px',
                        stroke: 'currentcolor',
                        strokeWidth: '3',
                        overflow: 'visible',
                      }}
                    >
                      <g fill='none' fillRule='nonzero'>
                        <path d='m2 16h28'></path>
                        <path d='m2 24h28'></path>
                        <path d='m2 8h28'></path>
                      </g>
                    </svg>
                  </div>

                  <div className='block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5'>
                    <svg
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                      style={{
                        display: 'block',
                        height: '100%',
                        width: '100%',
                        fill: 'currentcolor',
                      }}
                    >
                      <path d='m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z'></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
