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
    fetchGetAllProjects
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24'>
      <div className='mt-10'>
        <h1>Projects</h1>
        <div>
          {data.length === 0 && <h3>No projects to show</h3>}
          {data.map(prj => (
            <ProjectsCard key={prj.id} prj={prj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
