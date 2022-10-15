import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import Giscus from '@giscus/react';

import ProgressionBar from '../../components/ProgressionBar';
import DevelopmentToolsCard from '../../components/DevelopmentToolsCard';
import CommunicationToolsCard from '../../components/CommunicationToolsCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ProjectPage = () => {
  // State for modal
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { data: session } = useSession();

  const router = useRouter();
  const { id } = router.query;

  // Fetch project by using the URL ID
  const fetchGetProjectByID = async () => {
    try {
      const response = await fetch(`/api/project/${id}`, {
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

  // Destructure properties from useQuery
  const { isLoading, isError, data, error } = useQuery(
    ['project'],
    fetchGetProjectByID
  );

  //? Delete Project Mutation
  const userDeleteMutation = async () => {
    const response = await fetch(`/api/project/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    });
  };

  const mutation = useMutation(userDeleteProjectMutation => {
    userDeleteMutation(userDeleteProjectMutation);
  });

  if (mutation.isSuccess) {
    router.push(`/dashboard`);
  }

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className='container mx-auto mb-24 h-screen '>
        <div className='bg-white mt-16 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <div className='m-5 grid grid-cols-2 gap-4'>
            <div>
              <div className='flex'>
                <Link href={`/user/${data.userId}`}>
                  <img
                    className='inline cursor-pointer object-cover w-16 h-16 mr-2 rounded-full'
                    src={data.user.image}
                    alt='Profile image'
                  />
                </Link>

                <div className='relative inline-block'>
                  <p>
                    <Link href={`/user/${data.userId}`}>{data.user.name}</Link>
                  </p>
                  <p className='text-gray-500 text-sm'>{data.user.short_bio}</p>
                  <p className='text-sm'>
                    Posted:{' '}
                    <span className='text-gray-500 text-sm'>
                      {new Date(data.createdAt).toLocaleDateString('en-gb', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </p>
                </div>
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold'>{data.title}</h1>
                {data.tags.map(tag => (
                  <span className='mr-3' key={tag}>
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
                      <span className=' inline relative text-red-500 uppercase font-semibold pr-px'>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>#{tag}
                        <span>&nbsp;</span>
                      </span>
                    </div>
                  </span>
                ))}
              </div>
            </div>
            <div className='flex justify-end'>
              <p>
                Level of difficulty:{' '}
                <span className='capitalize  text-gray-500'>
                  {data.difficulty_level}
                </span>
              </p>
            </div>
          </div>
          <div className='m-5 mb-32'>
            <div>
              <h2 className='font-semibold'>
                Status:{' '}
                {data.development_status !== 'cancelled' && (
                  <span className='capitalize text-green-500'>
                    {data.development_status}
                  </span>
                )}
                {data.development_status === 'cancelled' && (
                  <span className='capitalize text-red-500'>
                    {data.development_status}
                  </span>
                )}
              </h2>
              <ProgressionBar progression={data.development_status} />
            </div>
            <div className='mt-10'>
              <h2 className='font-semibold'>Description</h2>
              <p className='whitespace-pre-line'>{data.description}</p>
            </div>
            <div className='mt-5 grid grid-cols-3 gap-4 ml-10'>
              <div className='mt-5'>
                <h2 className='font-semibold'>Technology stack</h2>
                {data.technology_stack.length === 0 && <p>No required</p>}
                <ul className='space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400'>
                  {data.technology_stack.map(tech => (
                    <li key={tech} className='capitalize'>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-5'>
                <h2 className='mb-2 font-semibold text-gray-900 dark:text-white'>
                  Skills required
                </h2>
                {data.skills.length === 0 && <p>No required</p>}
                <ul className='space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400'>
                  {data.skills.map(skill => (
                    <li key={skill} className='capitalize'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-5'>
                <h2 className='font-semibold'>Team #</h2>
                {data.team_need.length === 0 && <p>N/A</p>}
                <p>{data.team_need}</p>
              </div>
            </div>
            <div className='mt-10'>
              <h2 className='font-semibold'>Tools</h2>
              <div className='mt-5 grid grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold'>Collaborate</h3>
                  <CommunicationToolsCard commTools={data.communication[0]} />
                </div>
                <div>
                  <h3 className='font-semibold'>Development</h3>
                  <DevelopmentToolsCard devTools={data.developmentTool[0]} />
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <div>
                <h2>Comments</h2>
              </div>
              <div>
                <Giscus
                  id='comments'
                  repo='giscus/giscus-component'
                  repoId='MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA='
                  category='Announcements'
                  categoryId='DIC_kwDOF1L2fM4B-hVS'
                  mapping='specific'
                  term='Welcome to @giscus/react component!'
                  reactionsEnabled='1'
                  emitMetadata='0'
                  inputPosition='top'
                  theme='light'
                  lang='en'
                  loading='lazy'
                />
              </div>
            </div>

            {session && session.user.email == data.user.email ? (
              <div className='mt-10'>
                <h2 className='font-semibold text-orange-500'>
                  Project settings
                </h2>{' '}
                <div className='ml-10 mt-5'>
                  <ul>
                    <li>
                      <span className='mr-5'>Update project</span>
                      <Link href={`/projects/update/${id}`}>
                        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                          <a>Update</a>
                        </button>
                      </Link>
                    </li>
                    <li className='mt-2'>
                      <span className='mr-5 text-red-700 font-bold'>
                        DELETE PROJECT
                      </span>

                      <button
                        onClick={openModal}
                        type='button'
                        className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
                      >
                        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                          <a>Delete</a>
                        </span>
                      </button>
                      <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                          as='div'
                          className='relative z-10'
                          onClose={closeModal}
                        >
                          <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <div className='fixed inset-0 bg-black bg-opacity-25' />
                          </Transition.Child>

                          <div className='fixed inset-0 overflow-y-auto'>
                            <div className='flex min-h-full items-center justify-center p-4 text-center'>
                              <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                              >
                                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                  <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium leading-6 text-gray-900'
                                  >
                                    Delete Project
                                  </Dialog.Title>
                                  <Dialog.Description>
                                    This will permanently deactivate your
                                    project
                                  </Dialog.Description>
                                  <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                      Are you sure you want to delete your
                                      project? All of the data will be
                                      permanently removed. This action cannot be
                                      undone.
                                    </p>
                                  </div>

                                  <div className='mt-4'>
                                    <button
                                      className='mr-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                      onClick={mutation.mutate}
                                    >
                                      Delete
                                    </button>
                                    <button
                                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                      onClick={closeModal}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
