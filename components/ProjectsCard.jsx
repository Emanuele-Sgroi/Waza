import Link from 'next/link';

import { excerpt } from '../utils/util';

export default function ProjectCard({ prj }) {
  return (
    <div className='bg-white m-5 pt-3 pb-3 pl-5 mt-5 grid grid-cols-1 md:grid-cols-6 gap-4 p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-700'>
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

        <div className='mt-3'>
          <div>
            <Link href={`/projects/${prj.id}`}>
              <span className='text-2xl font-medium cursor-pointer'>
                {prj.title}
              </span>
            </Link>
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
    </div>
  );
}
