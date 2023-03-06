import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import LoadingSpinner from '../../components/UI/LoadingSpinner';
import UserHobbiesTags from '../../components/UserUI/UserHobbiesTag';
import UserSkillsTags from '../../components/UserUI/UserSkillsTag';

const SettingsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  //? Data Query
  // Fetch User information
  const fetchGetUserInformation = async () => {
    try {
      const response = await fetch(`/api/user/${id}`, {
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
    ['userData', id],
    () => fetchGetUserInformation(id),
    { enabled: !!id }
  );

  // Create data variable from the createdAt data
  var date = new Date(data?.createdAt);
  // Convert string into dd/mm/yyyy
  var dateString = date.toLocaleDateString();

  //? End Data Query

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
                <div className='flex p-2'>
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
                      </div>
                      <input
                        type='text'
                        id='short-bio-input'
                        disabled
                        defaultValue={data?.short_bio}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 mt-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='col-span-2'>
                    <h3 className='font-semibold'>General information</h3>
                  </div>
                  <div className=''>
                    <div className='mb-6 mt-3'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='about-me-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            About me
                          </label>
                        </div>
                      </div>
                      <textarea
                        type='text'
                        rows='7'
                        id='about-me-input'
                        defaultValue={data?.bio}
                        disabled
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-6 mt-3'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='education-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            Education
                          </label>
                        </div>
                      </div>
                      <input
                        type='text'
                        id='education-input'
                        defaultValue={data?.education}
                        disabled
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-6 mt-3'>
                      <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-2'>
                          <label
                            htmlFor='working-history-input'
                            className='block mb-2 font-medium text-gray-900 dark:text-gray-300'
                          >
                            Work History
                          </label>
                        </div>
                      </div>

                      <input
                        type='text'
                        id='working-history-input'
                        disabled
                        defaultValue={data?.work}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}

            <div className='col-span-2'>
              <div className='col-span-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Skills</h3>
                    </div>
                  </div>

                  <UserSkillsTags dataSkills={data?.skills} />
                </div>
              </div>
              <div className='col-span-2 mt-2'>
                <div className='bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Hobbies</h3>
                    </div>
                  </div>

                  <UserHobbiesTags dataHobbies={data?.hobbies} />
                </div>
              </div>
              <div className='mt-2'>
                <div className='p-2  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-2'>
                      <h3 className='font-semibold'>Social</h3>
                    </div>
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
                          defaultValue={data?.userSocialProfile[0]?.website}
                          disabled
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.github}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.linkedin}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.discord}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.twitch}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.medium}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.dev}
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
                          disabled
                          defaultValue={data?.userSocialProfile[0]?.twitter}
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
