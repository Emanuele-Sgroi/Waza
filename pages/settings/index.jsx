import React from 'react';
import { getSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import LoadingSpinner from '../../components/UI/LoadingSpinner';

const SettingsPage = () => {
  const fetchGetUserInformation = async () => {
    try {
      const response = await fetch(`/api/user/getUserInformation`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataJSON = await response.json();
      return await dataJSON;
    } catch (error) {
      console.error(error);
    }
  };

  const { isLoading, isError, data, error } = useQuery(
    ['userData'],
    fetchGetUserInformation
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className='container mx-auto mb-24'>
      <div className='mt-10'>
        <h1>User settings</h1>
        <div className='mt-10'>
          <div className='grid grid-cols-4 gap-4 '>
            <div className='col-span-2 '>
              <div className='bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex p-2'>
                  <div>
                    <img
                      className='w-36 h-36 rounded'
                      src={data.image}
                      alt='Profile image'
                    />
                    <button
                      type='button'
                      className='mt-1.5 flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >
                      <svg
                        aria-hidden='true'
                        className='mr-2 w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        ></path>
                      </svg>
                      Change picture
                    </button>
                  </div>

                  <div className='ml-2'>
                    <h2 className='font-semibold'>{data.name}</h2>
                    <h3>
                      <span>{data.email}</span>
                    </h3>
                    <div class='mb-6 mt-10'>
                      <label
                        for='default-input'
                        class='block mb-2  font-medium text-gray-900 dark:text-gray-300'
                      >
                        Short Bio
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.bio}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      <p className='text-gray-500 text-sm'>
                        Your short bio appears on your Profile and next to your
                        byline. Max 160 characters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 mt-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <h3 className='font-semibold'>Password information</h3>
                  <div class='mb-6 mt-3'>
                    <label
                      for='default-input'
                      class='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      Current password
                    </label>
                    <input
                      type='password'
                      id='default-input'
                      value={data?.bio}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <p className='text-gray-500 text-sm'>
                      Your short bio appears on your Profile and next to your
                      byline. Max 160 characters.
                    </p>
                  </div>
                  <div class='mb-6 mt-3'>
                    <label
                      for='default-input'
                      class='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      New password
                    </label>
                    <input
                      type='password'
                      id='default-input'
                      value={data?.bio}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <p className='text-gray-500 text-sm'>
                      Your short bio appears on your Profile and next to your
                      byline. Max 160 characters.
                    </p>
                  </div>
                  <div class='mb-6 mt-3'>
                    <label
                      for='default-input'
                      class='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      Confirm password
                    </label>
                    <input
                      type='password'
                      id='default-input'
                      value={data?.bio}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <p className='text-gray-500 text-sm'>
                      Your short bio appears on your Profile and next to your
                      byline. Max 160 characters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-2'>
                <h3 className='font-semibold'>Social</h3>
                <div className='grid grid-cols-2 gap-2 mt-2'>
                  <div className='row-span-3'>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Website
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.website}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        GitHub
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.github}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Discord
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.discord}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Twitter
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.twitter}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                  </div>
                  <div className='row-span-3'>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Twitch
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.twitch}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Medium
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.medium}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                    <div class='mb-6'>
                      <label
                        for='default-input'
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Dev.io
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        value={data?.UserSocialProfile[0]?.dev}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

export const getServerSideProps = async context => {
  const session = await getSession(context);

  // Check if user if logged in - if not send to login page
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
