import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { signOut } from 'next-auth/react';

const NavbarUserLogged = ({ session }) => {
  return (
    <div>
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
                <span className='block text-sm'>{session.user?.name}</span>
                <span className='block truncate text-sm font-bold'>
                  {session.user?.email}
                </span>
              </div>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <div>
                      <Link href={`/projects/create-project`}>
                        <button
                          className={`${
                            active
                              ? 'bg-purple-400 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Create Project
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
                          onClick={() => signOut({ callbackUrl: '/' })}
                          className={`${
                            active ? 'bg-red-500 text-white' : 'text-red-900'
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
    </div>
  );
};

export default NavbarUserLogged;
