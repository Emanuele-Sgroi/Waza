import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const router = useRouter();

  const handleSearch = e => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <header className='w-full flex justify-between items-center border-b-2 border-gray-150 py-2 px-4'>
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

      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href='/projects'>
              <a className='flex bg-transparent hover:bg-red-500 text-red-700 hover:text-white py-1 px-3 border border-red-500 hover:border-transparent rounded'>
                Explore
              </a>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <a className='flex mr-5 bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded'>
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
