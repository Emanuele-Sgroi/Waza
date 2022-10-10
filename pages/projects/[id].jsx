import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import ProgressionBar from '../../components/ProgressionBar';
import DevelopmentToolsCard from '../../components/DevelopmentToolsCard';
import CommunicationToolsCard from '../../components/CommunicationToolsCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ProjectPage = () => {
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

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log('data: ', data);

  return (
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
                <p key={tag} className='inline text-gray-500 text-sm mr-5'>
                  #{tag}
                </p>
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
          <div className='mt-5 grid grid-cols-3 gap-4'>
            <div className='mt-5'>
              <h2 className='font-semibold'>Technology Stack</h2>
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
                Skills Required
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
              <h2 className='font-semibold'>Number of People</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
