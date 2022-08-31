import Link from 'next/link';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagramSquare, FaDiscord } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='border-t-2 border-gray-150 mt-10'>
      <div className='relative mr-10'>
        <div className='absolute right-2.5 mt-5'>
          <p className='text-lg font-bold text-gray-500'>Support</p>
          <p>Code of Conduct</p>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>
      </div>

      <div className='ml-3 mt-5 ml-10'>
        <p className='text-lg font-bold text-gray-500'>Follow us:</p>
        <div className='flex mt-2'>
          <button>
            <AiFillTwitterCircle className='px-50 mr-2 w-9 h-9 fill-blue-500' />
          </button>
          <button>
            <FaInstagramSquare className='mr-2 w-9 h-9 fill-pink-500' />
          </button>
          <button>
            <BsFacebook className='mr-2 w-9 h-9 fill-blue-500' />
          </button>
          <button>
            <FaDiscord className='w-9 h-9 fill-purple-500' />
          </button>
        </div>
        <p className='mt-3 text-gray-500'>Copyright &copy; Waza 2022</p>
      </div>
    </footer>
  );
}
