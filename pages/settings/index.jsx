import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { BiSave } from 'react-icons/bi';

import LoadingSpinner from '../../components/UI/LoadingSpinner';
import SkillsTags from '../../components/SettingsUI/SettingsSkillsTag';
import HobbiesTags from '../../components/SettingsUI/SettingsHobbiesTag';

const SettingsPage = () => {
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  // Fetch User information
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

  // Create data variable from the createdAt data
  var date = new Date(data?.createdAt);
  // Convert string into dd/mm/yyyy
  var dateString = date.toLocaleDateString();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className='container mx-auto mb-24'>
      {/* Left side */}
      <div className='mt-10'>
        <h1>User settings</h1>
        <div className='mt-10'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-2 '>
              <div className='bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex p-2'>
                  <div className='mt-3'>
                    <img
                      className='w-36 h-36 rounded ml-2'
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
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        ></path>
                      </svg>
                      Change picture
                    </button>
                  </div>

                  <div className='ml-2'>
                    <div className='grid grid-cols-4 gap-4'>
                      <div className='col-span-2'>
                        <h2 className='font-semibold'>{data.name}</h2>
                        <h3>
                          <span>{data.email}</span>
                        </h3>
                        <p>Join Date: {dateString}</p>
                      </div>
                      <div className='col-span-2 '>
                        <div className='flex justify-end'>
                          <button>
                            <BiSave className='w-8 h-8 text-red-' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='mb-6 mt-10'>
                      <label
                        htmlFor='short-bio-input'
                        className='block mb-2  font-medium text-gray-900 dark:text-gray-300'
                      >
                        Short Bio
                      </label>
                      <input
                        type='text'
                        id='short-bio-input'
                        value={data?.short_bio}
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
                  <h3 className='font-semibold'>General information</h3>
                  <div className='mb-6 mt-3'>
                    <label
                      htmlFor='about-me-input'
                      className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      About me
                    </label>
                    <textarea
                      type='text'
                      rows='7'
                      id='about-me-input'
                      value={data?.bio}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <p className='text-gray-500 text-sm'>
                      Your short bio appears on your Profile and next to your
                      byline. Max 160 characters.
                    </p>
                  </div>

                  <div className='mb-6 mt-3'>
                    <label
                      htmlFor='education-input'
                      className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      Education
                    </label>
                    <input
                      type='text'
                      id='education-input'
                      value={data?.education}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <p className='text-gray-500 text-sm'>
                      Your short bio appears on your Profile and next to your
                      byline. Max 160 characters.
                    </p>
                  </div>
                  <div className='mb-6 mt-3'>
                    <label
                      htmlFor='working-history-input'
                      className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                    >
                      Work History
                    </label>
                    <input
                      type='text'
                      id='working-history-input'
                      value={data?.work}
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

            {/* Right side */}

            <div className='col-span-2'>
              <div className='col-span-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <h3 className='font-semibold'>Skills</h3>
                  <SkillsTags skills={skills} setSkills={setSkills} />
                </div>
              </div>
              <div className='col-span-2 mt-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <h3 className='font-semibold'>Hobbies</h3>
                  <HobbiesTags hobbies={hobbies} setHobbies={setHobbies} />
                </div>
              </div>
              <div className='mt-2'>
                <div className='p-2  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <h3 className='font-semibold'>Social</h3>
                  <div className='grid grid-cols-2 gap-2 mt-2'>
                    <div className='row-span-3'>
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                          Linkedin
                        </label>
                        <input
                          type='text'
                          id='default-input'
                          value={data?.UserSocialProfile[0]?.linkedin}
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                      </div>
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
                      <div className='mb-6'>
                        <label
                          htmlFor='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
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
