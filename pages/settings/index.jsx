import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { BiSave } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';

import LoadingSpinner from '../../components/UI/LoadingSpinner';
import SkillsTags from '../../components/SettingsUI/SettingsSkillsTag';
import HobbiesTags from '../../components/SettingsUI/SettingsHobbiesTag';

const SettingsPage = () => {
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [shortBio, setShortBio] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [education, setEducation] = useState('');
  const [workHistory, setWorkHistory] = useState('');
  const [formDefaultValue, setFormDefaultValue] = useState(false);
  const [formHobbiesDefaultValue, setFormTagHobbiesDefaultValue] =
    useState(false);
  const [formSkillsDefaultValue, setFormTagSkillsDefaultValue] =
    useState(false);

  //? Data Query
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

  //? End Data Query

  //? Data Mutation
  const userMutation = async data => {
    const response = await fetch('/api/user/putUserSettings', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'content-Type': 'application/json',
      },
    });
  };

  const mutation = useMutation(userDataMutation =>
    userMutation(userDataMutation)
  );

  // Send user Short Bio to backend
  const onUserSectionSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ short_bio: userData.target[2].value });
    // Once sending the data set short bio to empty
    setShortBio('');
  };

  // Send General information to backend
  const onAboutMeSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ aboutMe: userData.target[1].value });
    // Once sending the data set about me to empty
    setAboutMe('');
  };

  // Send Education to backend
  const onEducationSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ education: userData.target[1].value });
    // Once sending the data set about me to empty
    setEducation('');
  };

  // Send Work History to backend
  const onWorkSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ work: userData.target[1].value });
    // Once sending the data set about me to empty
    setWorkHistory('');
  };

  // Send Skills to backend
  const onSkillsSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ skills: skills });
    setFormTagSkillsDefaultValue(false);
  };

  // Send Hobbies to backend
  const onHobbiesSubmit = userData => {
    userData.preventDefault();
    mutation.mutate({ hobbies: hobbies });
    setFormTagHobbiesDefaultValue(false);
  };

  // Send Work History to backend
  const onSocialSubmit = userData => {
    userData.preventDefault();
    let website = userData.target[1].value;
    let github = userData.target[2].value;
    let linkedin = userData.target[3].value;
    let discord = userData.target[4].value;
    let twitch = userData.target[5].value;
    let medium = userData.target[6].value;
    let dev = userData.target[7].value;
    let twitter = userData.target[8].value;
    mutation.mutate({
      website,
      github,
      linkedin,
      discord,
      twitch,
      medium,
      dev,
      twitter,
      userId: data.id,
    });
  };

  //TODO: Create validation
  //TODO: Create Save button instead of using BiSave
  //TODO: Implement feature to change image

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24'>
      {/* Left side */}
      <div className='mt-10 '>
        <h1>User settings</h1>
        <div className='mt-10'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-2 '>
              <div className='bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <form className='flex p-2' onSubmit={onUserSectionSubmit}>
                  <div className='mt-3'>
                    <img
                      className='w-36 h-36 rounded ml-2'
                      src={data.image}
                      alt='Profile image'
                    />
                  </div>

                  <div className='ml-5'>
                    <div className='grid grid-cols-4 gap-4'>
                      <div className='col-span-2'>
                        <h2 className='font-semibold'>{data.name}</h2>
                        <h3>
                          <span>{data.email}</span>
                        </h3>
                        <time>Join Date: {dateString}</time>
                      </div>
                    </div>
                    <div className='mb-6 mt-10'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='about-me-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            Short Bio
                          </label>
                        </div>

                        {shortBio && data?.short_bio.length ? (
                          <div className='col-span-2'>
                            <div className='flex justify-end'>
                              <button
                                type='submit'
                                className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                              >
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                  <a>Save</a>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <input
                        type='text'
                        id='short-bio-input'
                        defaultValue={data?.short_bio}
                        onChange={e =>
                          setShortBio({ shortBio: e.target.value })
                        }
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      <p className='text-gray-500 text-sm'>
                        Your short bio appears on your Profile and next to your
                        byline. Max 160 characters.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className='col-span-2 mt-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='col-span-2'>
                    <h3 className='font-semibold'>General information</h3>
                  </div>
                  <div className=''>
                    <form onSubmit={onAboutMeSubmit} className='mb-6 mt-3'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='about-me-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            About me
                          </label>
                        </div>

                        {aboutMe && data?.bio.length ? (
                          <div className='col-span-2'>
                            <div className='flex justify-end'>
                              <button
                                type='submit'
                                className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                              >
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                  <a>Save</a>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <textarea
                        type='text'
                        rows='7'
                        id='about-me-input'
                        defaultValue={data?.bio}
                        onChange={e => setAboutMe({ aboutMe: e.target.value })}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      <p className='text-gray-500 text-sm'>
                        Your short bio appears on your Profile and next to your
                        byline. Max 160 characters.
                      </p>
                    </form>

                    <form onSubmit={onEducationSubmit} className='mb-6 mt-3'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='education-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            Education
                          </label>
                        </div>
                        {education && data?.education.length ? (
                          <div className='col-span-2'>
                            <div className='flex justify-end'>
                              <button
                                type='submit'
                                className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                              >
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                  <a>Save</a>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <input
                        type='text'
                        id='education-input'
                        defaultValue={data?.education}
                        onChange={e =>
                          setEducation({ education: e.target.value })
                        }
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      <p className='text-gray-500 text-sm'>
                        Your short bio appears on your Profile and next to your
                        byline. Max 160 characters.
                      </p>
                    </form>

                    <form className='mb-6 mt-3' onSubmit={onWorkSubmit}>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='working-history-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            Work History
                          </label>
                        </div>
                        {workHistory && data?.work.length ? (
                          <div className='col-span-2'>
                            <div className='flex justify-end'>
                              <button
                                type='submit'
                                className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                              >
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                  <a>Save</a>
                                </span>
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <input
                        type='text'
                        id='working-history-input'
                        defaultValue={data?.work}
                        onChange={e =>
                          setWorkHistory({ workHistory: e.target.value })
                        }
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      <p className='text-gray-500 text-sm'>
                        Your short bio appears on your Profile and next to your
                        byline. Max 160 characters.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}

            <div className='col-span-2'>
              <form className='col-span-2' onSubmit={onSkillsSubmit}>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Skills</h3>
                    </div>
                    {formSkillsDefaultValue ? (
                      <div className='col-span-2'>
                        <div className='flex justify-end'>
                          <button
                            type='submit'
                            className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                          >
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                              <a>Save</a>
                            </span>
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <SkillsTags
                    skills={skills}
                    setSkills={setSkills}
                    dataSkills={data?.skills}
                    formChange={setFormTagSkillsDefaultValue}
                  />
                </div>
              </form>
              <form className='col-span-2 mt-2' onSubmit={onHobbiesSubmit}>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Hobbies</h3>
                    </div>
                    {formHobbiesDefaultValue ? (
                      <div className='col-span-2'>
                        <div className='flex justify-end'>
                          <button
                            type='submit'
                            className='w-15 h-15 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                          >
                            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                              <a>Save</a>
                            </span>
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <HobbiesTags
                    hobbies={hobbies}
                    setHobbies={setHobbies}
                    dataHobbies={data?.hobbies}
                    formChange={setFormTagHobbiesDefaultValue}
                  />
                </div>
              </form>
              <form className='mt-2' onSubmit={onSocialSubmit}>
                <div className='p-2  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Social</h3>
                    </div>
                    {formDefaultValue ? (
                      <div className='col-span-2'>
                        <div className='flex justify-end'>
                          <button type='submit'>
                            <BiSave className='w-8 h-8 text-red-500' />
                          </button>
                          <button onClick={() => setFormDefaultValue(false)}>
                            <TiDeleteOutline className='w-8 h-8 text-red-500' />
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
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
                          defaultValue={data?.UserSocialProfile[0]?.website}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.github}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.linkedin}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.discord}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.twitch}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.medium}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.dev}
                          onChange={() => setFormDefaultValue(true)}
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
                          defaultValue={data?.UserSocialProfile[0]?.twitter}
                          onChange={() => setFormDefaultValue(true)}
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
