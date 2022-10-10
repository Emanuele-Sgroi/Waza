import Link from 'next/link';

import { excerpt } from '../utils/util';

export default function ProjectCard({ prj }) {
  return (
    <div className='bg-white pt-3 pb-3 pl-5 mt-5 grid grid-cols-6 gap-4 p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='col-span-5'>
        <div className='flex'>
          <Link href={`/user/${prj.userId}`}>
            <img
              className='inline cursor-pointer object-cover w-16 h-16 mr-2 rounded-full'
              src={prj.user.image}
              alt='Profile image'
            />
          </Link>

          <div className='relative inline-block'>
            <p>
              <Link href={`/user/${prj.userId}`}>{prj.user.name}</Link>
            </p>
            <p className='text-gray-500 text-sm'>{prj.user.short_bio}</p>
            <p className='text-sm'>
              Posted:{' '}
              <span className='text-gray-500 text-sm'>
                {new Date(prj.createdAt).toLocaleDateString('en-gb', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </p>
          </div>
        </div>

        <div className='mt-2'>
          <div>
            <h2 className='font-medium'>{prj.title}</h2>
            {/* The below code takes two parameters: description and the length to
            make the excerpt */}
            <p>{excerpt(prj.description, 25)}...</p>
            {prj.tags.map(tag => (
              <p key={tag} className='inline text-gray-500 text-sm mr-5'>
                #{tag}
              </p>
            ))}
          </div>
          <div className='mt-2'>
            <p>
              Status:{' '}
              {prj.development_status === 'cancelled' ? (
                <span className='text-red-600 font-semibold capitalize'>
                  {prj.development_status}
                </span>
              ) : (
                <span className='text-green-700 font-semibold animate-pulse capitalize'>
                  {prj.development_status}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className='col-span-1 self-center'>
        <Link href={`/projects/${prj.id}`}>
          <button
            type='button'
            className='text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2'
          >
            Project Details
            <svg
              aria-hidden='true'
              className='ml-2 -mr-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
