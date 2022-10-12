import React from 'react';

const ProgressionBar = ({ progression }) => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
      {progression === 'planning' && (
        <div
          className='bg-green-600 h-2.5 rounded-full'
          style={{ width: '0%' }}
        ></div>
      )}
      {progression === 'define requirements' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '14.28%' }}
        ></div>
      )}
      {progression === 'design and prototyping' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '28.56%' }}
        ></div>
      )}
      {progression === 'software development' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '42.84%' }}
        ></div>
      )}
      {progression === 'testing' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '57.12%' }}
        ></div>
      )}
      {progression === 'deployment' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '71.4%' }}
        ></div>
      )}
      {progression === 'operations and maintenance' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '85.68%' }}
        ></div>
      )}
      {progression === 'end of support' && (
        <div
          className='bg-green-600 h-2.5 animate-pulse rounded-full'
          style={{ width: '100%' }}
        ></div>
      )}
      {progression === 'cancelled' && (
        <div
          className='bg-red-600 h-2.5 rounded-full'
          style={{ width: '100%' }}
        ></div>
      )}
    </div>
  );
};

export default ProgressionBar;
