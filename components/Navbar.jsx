import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  // NextAuth.JS session
  const { data: session } = useSession();

  console.log(session);

  const router = useRouter();

  // TODO: Implement Search functionality
  const handleSearch = e => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <header className='sticky top-0 z-50 w-full flex justify-between items-center border-b-2 bg-white border-gray-150 py-2 px-4'>
      <div className='w-[100px] md:w-[130px]'>
        <Link href='/'>
          <a className='hover:text-red-700 text-lg ml-5'>技 | Waza</a>
        </Link>
      </div>

      <div className='relative hidden md:block mt-1'>
        <form
          onSubmit={handleSearch}
          className='absolute md:static top-10 bg-white'
        >
          <input
            type='text'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder='Search projects...'
            className='bg-gray-100 p-2 md:text-sm font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-2.5 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
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
                onClick={() => signIn()}
                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                <a>Login</a>
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href='/projects/create'>
                  <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                    <a>Create Project</a>
                  </button>
                </Link>
              </li>
              <li>
                {session.user?.image ? (
                  <>
                    <Dropdown
                      label={
                        <Image
                          width={40}
                          height={40}
                          className='rounded-full cursor-pointer'
                          src={session.user?.image}
                          alt='Profile Photo'
                        />
                      }
                      arrowIcon={false}
                      inline={true}
                    >
                      <Dropdown.Header>
                        <span className='block text-sm'>
                          {session.user?.name}
                        </span>
                        <span className='block truncate text-sm font-medium'>
                          {session.user?.email}
                        </span>
                      </Dropdown.Header>
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => signOut()}>
                        Sign out
                      </Dropdown.Item>
                    </Dropdown>
                  </>
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
