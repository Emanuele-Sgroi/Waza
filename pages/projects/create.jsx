import React, { useState } from 'react';
import Link from 'next/link';

import { BsGithub, BsTwitch } from 'react-icons/bs';
import { FaTrello, FaJira, FaFigma, FaDiscord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { AiFillTwitterCircle, AiOutlineSlack } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import TagsInput from '../../components/UI/TagsInput';
import TechnologyStack from '../../components/UI/TechnologyStackInput';
import SkillsTag from '../../components/UI/SkillsTagsInput';

const CreatePage = () => {
  // Form useState
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [technology_stack, setTechStack] = useState([]);
  const [development_status, setDevStatus] = useState('');
  const [difficulty_level, setDiffLevel] = useState('');
  const [teamNeed, setTeamNeed] = useState('');
  const [discord, setDiscord] = useState('');
  const [twitch, setTwitch] = useState('');
  const [twitter, setTwitter] = useState('');
  const [slack, setSlack] = useState('');
  const [github, setGithub] = useState('');
  const [jira, setJira] = useState('');
  const [figma, setFigma] = useState('');
  const [trello, setTrello] = useState('');
  const [notion, setNotion] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch('/api/create', {
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
    console.log('Frontend data: ', data);
  };

  return (
    <div className='container mx-auto'>
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
        <form className='mt-5' onSubmit={handleSubmit}>
          <div>
            <h2>Project Details</h2>
            <div className='mt-2 relative z-0 mb-6 w-full group'>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                placeholder=' '
              />
              <label
                htmlFor='title'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Title
              </label>
            </div>
            <TagsInput tags={tags} setTags={setTags} />
            <div className='relative z-0 mb-6 w-full group'>
              <textarea
                type='text'
                name='description'
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:red-blue-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                placeholder=' '
              />
              <label
                htmlFor='description'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Description
              </label>
              <p className='text-sm text-gray-400'>0/500 Characters</p>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <SkillsTag
                className='relative z-0 mb-6 w-full group'
                skills={skills}
                setSkills={setSkills}
              />
              <TechnologyStack
                className='relative z-0 mb-6 w-full group'
                technology_stack={technology_stack}
                setTechStack={setTechStack}
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
                  className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-red-400 dark:border-red-700 focus:outline-none focus:ring-0 focus:border-red-200 peer'
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
              </div>
              <div className='relative z-0 mb-6 w-full group'>
                <label htmlFor='difficulty_level' className='sr-only'>
                  Difficulty Level
                </label>
                <select
                  defaultValue={'DEFAULT'}
                  id='difficulty_level'
                  onChange={e => setDiffLevel(e.target.value)}
                  className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-red-400 dark:border-red-700 focus:outline-none focus:ring-0 focus:border-red-200 peer'
                >
                  <option value='DEFAULT' disabled>
                    Difficulty Level
                  </option>
                  <option value='newbie'>Newbie</option>
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
                  <option value='jedi'>Jedi</option>
                </select>
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
                <p className='text-sm text-gray-400'>Leave 0 for N/A</p>
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                      onChange={e => setGithub(e.target.value)}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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

export default CreatePage;
