import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

import { BsGithub, BsTwitch } from 'react-icons/bs';
import { FaTrello, FaJira, FaFigma, FaDiscord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { AiFillTwitterCircle, AiOutlineSlack } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import TagsInput from '../../components/UI/TagsInput';
import TechnologyStack from '../../components/UI/TechnologyStackInput';
import SkillsTag from '../../components/UI/SkillsTagsInput';
import { isMobileDevice } from '../../utils/device';

const CreatePage = () => {
  const router = useRouter();

  if (isMobileDevice(router.req)) {
    router.push(`/projects`);
  }

  // Form useState hooks
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [technology_stack, setTechStack] = useState([]);
  const [development_status, setDevStatus] = useState('');
  const [difficulty_level, setDiffLevel] = useState('');
  const [teamNeed, setTeamNeed] = useState(0);
  const [discord, setDiscord] = useState('');
  const [twitch, setTwitch] = useState('');
  const [twitter, setTwitter] = useState('');
  const [slack, setSlack] = useState('');
  const [github, setGithub] = useState('');
  const [jira, setJira] = useState('');
  const [figma, setFigma] = useState('');
  const [trello, setTrello] = useState('');
  const [notion, setNotion] = useState('');
  const [tagsValid, setTagsValid] = useState(false);
  const [techStackValid, setTechStackValid] = useState(false);
  const [skillsValid, setSkillsValid] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('/api/project/createProject', {
        method: 'POST',
        body: JSON.stringify({
          title,
          tags,
          description,
          skills,
          technology_stack,
          development_status,
          difficulty_level,
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
        <h1 className='mt-5'>Add Project</h1>
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
                  value={title}
                  required
                  onChange={e => setTitle(e.target.value)}
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
                value={description}
                rows='4'
                required
                onChange={e => {
                  setDescription(e.target.value);
                }}
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
              <TagsInput
                tags={tags}
                setTags={setTags}
                setTagsValid={setTagsValid}
              />

              <SkillsTag
                className='relative z-0 mb-6 w-full group'
                skills={skills}
                setSkills={setSkills}
                setSkillsValid={setSkillsValid}
              />
              <TechnologyStack
                className='relative z-0 mb-6 w-full group'
                technology_stack={technology_stack}
                setTechStack={setTechStack}
                setTechStackValid={setTechStackValid}
              />
            </div>
            <div className='grid md:grid-cols-3 md:gap-6'>
              <div className='relative z-0 mb-6 w-full group'>
                <label htmlFor='development_status' className='sr-only'>
                  Development Status
                </label>
                <select
                  defaultValue={'default'}
                  onChange={e => setDevStatus(e.target.value)}
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
                  defaultValue={'DEFAULT'}
                  id='difficulty_level'
                  onChange={e => setDiffLevel(e.target.value)}
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
                  value={teamNeed}
                  onChange={e => setTeamNeed(e.target.value)}
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
                    value={discord}
                    onChange={e => setDiscord(e.target.value)}
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
                    value={twitch}
                    onChange={e => setTwitch(e.target.value)}
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
                    value={twitter}
                    onChange={e => setTwitter(e.target.value)}
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
                    value={slack}
                    onChange={e => setSlack(e.target.value)}
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
                      value={github}
                      required
                      onChange={e => setGithub(e.target.value)}
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
                    value={jira}
                    onChange={e => setJira(e.target.value)}
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
                    value={figma}
                    onChange={e => setFigma(e.target.value)}
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
                    value={trello}
                    onChange={e => setTrello(e.target.value)}
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
                    value={notion}
                    onChange={e => setNotion(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='Notion'
                  />
                </div>
              </div>
            </div>
          </div>
          {!title ||
          !description ||
          !development_status ||
          !difficulty_level ||
          !github ||
          !tagsValid ||
          !techStackValid ||
          !skillsValid ? (
            <button
              type='submit'
              disabled
              className='text-white bg-gradient-to-r from-red-400 via-red-400 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-400 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
              Submit
            </button>
          ) : (
            <button
              type='submit'
              className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePage;

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
