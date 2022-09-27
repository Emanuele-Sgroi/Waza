import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import ProjectsCard from '../../components/ProjectsCard';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  const handleGetProjects = async () => {
    try {
      const response = await fetch('/api/getProjectsByEmail', {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataJSON = await response.json();
      return dataJSON;
    } catch (error) {
      console.error(error);
    }
  };

  const { isLoading, isError, data, error } = useQuery(
    ['projects'],
    handleGetProjects
  );

  console.log('This is data: ', data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24'>
      <div className='mt-10'>
        <h1>Personal Dashboard</h1>
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

export default DashboardPage;

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
