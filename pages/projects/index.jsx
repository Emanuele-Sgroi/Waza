import React from 'react';
import { useQuery } from '@tanstack/react-query';

import ProjectsCard from '../../components/ProjectsCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ProjectPage = () => {
  const fetchGetAllProjects = async () => {
    try {
      const response = await fetch(`/api/project/getAllProjects`, {
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
    ['projects'],
    fetchGetAllProjects,
    { refetchOnWindowFocus: true }
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24 h-screen'>
      <div className='mt-10 '>
        <h1>Projects</h1>
        <div className='grid grid-col-3 grid-flow-col gap-4'>
          {/* 
          //TODO: Implement popular tags
          <div className='col-span-1 mt-5'>
            <p className='font-semibold'>Popular Tags</p>
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
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>#tag
                <span>&nbsp;</span>
              </span>
            </div>
          </div> */}
          <div className='col-span-3'>
            {data.length === 0 && <h3>No projects to show</h3>}
            {data.map(prj => (
              <ProjectsCard key={prj.id} prj={prj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
