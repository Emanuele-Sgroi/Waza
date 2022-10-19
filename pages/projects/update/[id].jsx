import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { BsGithub, BsTwitch } from 'react-icons/bs';
import { FaTrello, FaJira, FaFigma, FaDiscord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { AiFillTwitterCircle, AiOutlineSlack } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import LoadingSpinner from '../../../components/UI/LoadingSpinner';

const UpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  //? Data Query
  // Fetch User information
  const fetchGetProject = async () => {
    try {
      const response = await fetch(`/api/project/update/${id}`, {
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
    ['projectData'],
    fetchGetProject
  );

  //? End Data Query

  //? Update data
  const handleSubmit = async event => {
    event.preventDefault();
    // let title = event.target[0].value;
    // let description = event.target[1].value;
    // let teamNeed = event.target[17].value;
    // let discord = event.target[18].value;
    // let twitch = event.target[19].value;
    // let twitter = event.target[20].value;
    // let slack = event.target[21].value;
    // let github = event.target[22].value;
    // let jira = event.target[23].value;
    // let figma = event.target[24].value;
    // let trello = event.target[25].value;
    // let notion = event.target[26].value;
    let title = event.target[0].value;
    let description = event.target[1].value;
    let teamNeed = event.target[4].value;
    let discord = event.target[5].value;
    let twitch = event.target[6].value;
    let twitter = event.target[7].value;
    let slack = event.target[8].value;
    let github = event.target[9].value;
    let jira = event.target[10].value;
    let figma = event.target[11].value;
    let trello = event.target[12].value;
    let notion = event.target[13].value;
    try {
      const response = await fetch('/api/project/update/putUserProject', {
        method: 'PUT',
        body: JSON.stringify({
          id,
          title,
          description,
          teamNeed,
          discord,
          twitch,
          twitter,
          slack,
          github,
          jira,
          figma,
          trello,
          notion,
        }),
        headers: {
          'content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data) router.push(`/projects/${data.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  //? End update data

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24'>
      <div className='mt-10'>
        <div className='grid justify-items-end'>
          <Link href='/projects'>
            <button className='flex'>
              <span className='mt-1 mr-2'>
                <MdOutlineArrowBackIosNew />
              </span>
              Back to Dashboard
            </button>
          </Link>
        </div>
        <h1 className='mt-5'>Edit Project</h1>
        <form
          className='mt-5 bg-white p-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
          onSubmit={handleSubmit}
        >
          <div>
            <h2>Project Details</h2>
            <div className='mt-2 relative z-0 mb-6 w-full group'>
              <div className='relative'>
                <label
                  htmlFor='title'
                  className='block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  defaultValue={data.title}
                  required
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  placeholder=' '
                />
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Use this as a title for your project.
                  </p>
                </div>
              </div>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Description
              </label>
              <textarea
                type='text'
                name='description'
                id='description'
                defaultValue={data.description}
                rows='4'
                required
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                placeholder='Project Description...'
              />
              <div className='mt-2'>
                <p className='text-sm text-gray-500'>
                  Insert a meaningful, giving insight of what you would like to
                  accomplish and the end goal.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 md:gap-6'>
              {/* I need to fix Tags, Skills, and technology Stack */}
              <p>Test</p>
            </div>
            <div className='grid md:grid-cols-3 md:gap-6'>
              <div className='relative z-0 mb-6 w-full group'>
                <label htmlFor='development_status' className='sr-only'>
                  Development Status
                </label>
                <select
                  defaultValue={data.development_status}
                  id='development_status'
                  className='w-full h-10 pl-3 pr-6 text-base bg-gray-50 placeholder-gray-600 border rounded-lg appearance-none focus:ring-red-500 focus:border-red-500 focus:shadow-outline'
                >
                  <option value='default' disabled>
                    Development Status
                  </option>
                  <option value='planning'>Planning</option>
                  <option value='define requirements'>
                    Define Requirements
                  </option>
                  <option value='design and prototyping'>
                    Design & Prototyping
                  </option>
                  <option value='software development'>
                    Software Development
                  </option>
                  <option value='testing'>Testing</option>
                  <option value='deployment'>Deployment</option>
                  <option value='operations and maintenance'>
                    Operations & Maintenance
                  </option>
                  <option value='end of support'>End of Support</option>
                  <option className='text-red-500' value='cancelled'>
                    Cancelled
                  </option>
                </select>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    This is used to indicate the current status of your project.
                  </p>
                </div>
              </div>
              <div className='relative z-0 mb-6 w-full group'>
                <label htmlFor='difficulty_level' className='sr-only'>
                  Difficulty Level
                </label>
                <select
                  defaultValue={data.difficulty_level}
                  id='difficulty_level'
                  className='w-full h-10 pl-3 pr-6 text-base bg-gray-50 placeholder-gray-600 border rounded-lg appearance-none focus:ring-red-500 focus:border-red-500 focus:shadow-outline'
                >
                  <option value='DEFAULT' disabled>
                    Difficulty Level
                  </option>
                  <option className='text-blue-500' value='newbie'>
                    Newbie
                  </option>
                  <option className='text-green-500' value='easy'>
                    Easy
                  </option>
                  <option className='text-yellow-500' value='medium'>
                    Medium
                  </option>
                  <option className='text-red-500' value='hard'>
                    Hard
                  </option>
                  <option className='text-purple-500' value='jedi'>
                    Jedi
                  </option>
                </select>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    How difficult your project is?
                  </p>
                </div>
              </div>
              <div className='z-0 mb-6 w-full group'>
                <label
                  htmlFor='team_need'
                  className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Team needed
                </label>
                <input
                  type='number'
                  id='team_need'
                  defaultValue={data.team_need}
                  min='0'
                  className='ml-5 bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500  w-25 p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  placeholder=''
                />
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Use 0 if you do not know how many people you might need.
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h2>Communication</h2>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <FaDiscord />
                  </div>
                  <input
                    type='text'
                    id='discord'
                    defaultValue={data.communication[0].discord}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Discord'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <BsTwitch />
                  </div>
                  <input
                    type='text'
                    id='twitch'
                    defaultValue={data.communication[0].twitch}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Twitch'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <AiFillTwitterCircle />
                  </div>
                  <input
                    type='text'
                    id='twitter'
                    defaultValue={data.communication[0].twitter}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Twitter'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <AiOutlineSlack />
                  </div>
                  <input
                    type='text'
                    id='slack'
                    defaultValue={data.communication[0].slack}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Slack'
                  />
                </div>
              </div>
              <div>
                <h2>Development tools</h2>
                <div>
                  <div className='relative z-0 mb-6 w-full group'>
                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                      <BsGithub />
                    </div>
                    <input
                      type='text'
                      id='gitHub'
                      defaultValue={data.developmentTool[0].github}
                      required
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='GitHub'
                    />
                  </div>
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <FaJira />
                  </div>
                  <input
                    type='text'
                    id='jira'
                    defaultValue={data.developmentTool[0].jira}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Jira'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <FaFigma />
                  </div>
                  <input
                    type='text'
                    id='figma'
                    defaultValue={data.developmentTool[0].figma}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Figma'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <FaTrello />
                  </div>
                  <input
                    type='text'
                    id='trello'
                    defaultValue={data.developmentTool[0].trello}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Trello'
                  />
                </div>
                <div className='relative z-0 mb-6 w-full group'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <SiNotion />
                  </div>
                  <input
                    type='text'
                    id='notion'
                    defaultValue={data.developmentTool[0].notion}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Notion'
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;

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
