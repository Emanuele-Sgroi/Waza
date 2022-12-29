import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  // NextAuth.JS session
  const { data: session } = useSession();



  return (
    <header className='sticky top-0 z-50 w-full flex justify-between items-center border-b-2 bg-white border-gray-150 py-2 px-4'>
      <div className='w-[100px] md:w-[130px]'>
        <Link href='/' className='hover:text-red-700 text-lg ml-5'>
          技 | Waza
        </Link>
      </div>

      <nav className='mr-5 mt-2'>
        <ul className='flex gap-5'>
          <li>
            <Link href='/projects'>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  <a>Explore</a>
                </span>
              </button>
            </Link>
          </li>

          {!session ? (
            <li>
              <button
                onClick={() => signIn(undefined)}
                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                <a>Login</a>
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href='/projects/create-project'>
                  <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                    <a>Create Project</a>
                  </button>
                </Link>
              </li>
              <li>
                {session.user?.image ? (
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='inline-flex w-full justify-center bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-100 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                        <Image
                          width={50}
                          height={50}
                          className='rounded-full cursor-pointer'
                          src={session.user?.image}
                          alt='Profile Photo'
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='p-3'>
                          <span className='block text-sm'>
                            {session.user?.name}
                          </span>
                          <span className='block truncate text-sm font-bold'>
                            {session.user?.email}
                          </span>
                        </div>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <div>
                                <Link href={`/dashboard`}>
                                  <button
                                    className={`${
                                      active
                                        ? 'bg-orange-400 text-white'
                                        : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Dashboard
                                  </button>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <div>
                                <Link href={`/settings`}>
                                  <button
                                    className={`${
                                      active
                                        ? 'bg-orange-400 text-white'
                                        : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Settings
                                  </button>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                        </div>

                        <div className='px-1 py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <div>
                                <Link href={`/settings`}>
                                  <button
                                    onClick={() =>
                                      signOut({ callbackUrl: '/' })
                                    }
                                    className={`${
                                      active
                                        ? 'bg-red-500 text-white'
                                        : 'text-red-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Logout
                                  </button>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className='overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600'>
                    <svg
                      className='absolute -left-1 w-12 h-12 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
