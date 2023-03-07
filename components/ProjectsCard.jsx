import Link from 'next/link';

import { excerpt } from '../utils/util';

export default function ProjectCard({ prj }) {
  return (
    <div className='bg-white pt-3 pb-3 pl-5 mt-5 grid grid-cols-1 md:grid-cols-6 gap-4 p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='md:col-span-5'>
        <div className='flex flex-col md:flex-row'>
          <a href={`/user/${prj.userId}`} className='md:mr-2'>
            <img
              className='inline cursor-pointer object-cover w-16 h-16 rounded-full'
              src={prj.user.image}
              alt='Profile image'
            />
          </a>

          <div className='relative inline-block'>
            <p>
              <a href={`/user/${prj.userId}`}>{prj.user.name}</a>
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
            <p>{excerpt(prj.description, 25)}...</p>
            <div className='flex flex-wrap mt-2'>
              {prj.tags.map(tag => (
                <span className='mr-3 mb-2' key={tag}>
                  <div className='inline-block relative py-1 text-xs'>
                    <div className='absolute inset-0 text-red-200 flex'>
                      <svg height='100%' viewBox='0 0 50 100'>
                        <path
                          d='M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z'
                          fill='currentColor'
                        />
                      </svg>
                      <div className='flex-grow h-full -ml-px bg-red-200 rounded-md rounded-l-none'></div>
                    </div>
                    <span className='inline relative text-red-500 uppercase font-semibold pr-px'>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>#{tag}
                      <span>&nbsp;</span>
                    </span>
                  </div>
                </span>
              ))}
            </div>
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
            className='text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 sm:mr-0 sm:mb-0 sm:w-auto'
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
