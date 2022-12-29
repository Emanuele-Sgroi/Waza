import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import ProjectsCard from '../../components/ProjectsCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ProjectPage = () => {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState([]);

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

  // Get projects from the search bar
  const handleSearch = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/search/${search}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataJSON = await response.json();
      setSearchValue(dataJSON);

      return await dataJSON;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    isLoading: GetProjectLoading,
    isError: GetProjectIsError,
    data: GetProjectData,
    error: GetProjectError,
  } = useQuery(['projects'], fetchGetAllProjects, {
    refetchOnWindowFocus: true,
  });

  if (GetProjectLoading) return <LoadingSpinner />;

  if (GetProjectIsError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-24 h-screen'>
      <div className='mt-10 '>
        <div className='grid grid-cols-2'>
          <div className='col-span-1'>
            <h1>Projects</h1>
          </div>
          <div className='col-span-1'>
            <form>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  value={search || ''}
                  onChange={e => setSearch(e.target.value)}
                  className='block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  placeholder='Search a title of the project...'
                  required
                />
                <button
                  onClick={handleSearch}
                  className='text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-red-400 via-red-500 to-red-600 focus:outline-none hover:bg-gradient-to-br focus:ring-4  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2'
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
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
          {
            searchValue.length >= 1 ?  
              <div className='col-span-3'>
                {searchValue.map(prj => (
                  <ProjectsCard key={prj.id} prj={prj} />
                ))}
              </div>
           :    
            <div className='col-span-3'>
              {GetProjectData.length === 0 && <h3>No projects to show</h3>}
              {GetProjectData.map(prj => (
                <ProjectsCard key={prj.id} prj={prj} />
              ))}
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
