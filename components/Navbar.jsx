import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [login, setLogin] = useState(true);

  const handleLogin = e => {
    if (login) {
      useState(false);
    } else {
      useState(true);
    }
  };

  const router = useRouter();

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
          {login != true ? (
            <li>
              <Link href='/login'>
                <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                  <a>Login</a>
                </button>
              </Link>
            </li>
          ) : (
            <li>
              <Link href='/projects/create'>
                <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                  <a>Create Project</a>
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
