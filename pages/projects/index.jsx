import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { GrAscend, GrDescend } from 'react-icons/gr';

import ProjectsCard from '../../components/ProjectsCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Pagination from '../../components/Pagination';
import ProjectSkeleton from '../../components/Skeleton/ProjectsSkeleton';

const ProjectPage = () => {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingColumn, setSortingColumn] = useState('createdAt');
  const [sortingDirection, setSortingDirection] = useState('desc');

  const handleSortingChange = event => {
    const sortByValue = event.target.getAttribute('data-value');
    setSortingColumn(sortByValue);
    if (sortByValue === sortingColumn) {
      setSortingDirection(sortingDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortingColumn(sortByValue);
      setSortingDirection('asc');
    }
  };

  const fetchGetAllProjects = async () => {
    try {
      const response = await fetch(
        `/api/project/getAllProjects?page=${currentPage}&sortBy=${sortingColumn}&sortDirection=${sortingDirection}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataJSON = await response.json();
      return dataJSON;
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

      return dataJSON;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    isLoading: GetProjectLoading,
    isError: GetProjectIsError,
    data: GetProjectData,
    error: GetProjectError,
  } = useQuery(
    ['projects', currentPage, sortingColumn, sortingDirection],
    fetchGetAllProjects,
    {
      refetchOnWindowFocus: true,
    }
  );

  if (GetProjectLoading) return <ProjectSkeleton />;

  if (GetProjectIsError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='container mx-auto mb-10 md:mb-24 min-h-screen'>
      <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='col-span-1 md:col-span-1'>
            <h1 className='text-3xl md:text-3xl ml-5'>Projects</h1>
          </div>
          <div className='col-span-1 md:col-span-1 m-5'>
            <div className='grid justify-items-stretch'>
              {/* Search bar */}
              <div>
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
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className='block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-red-500 focus:ring-red-500 focus:border-red-200'
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
                <p className='text-xs font-sans text-gray-500'>
                  P.S.: Type 'all' to show all project again!
                </p>
              </div>
              {/* Sorting */}
              <div className='justify-self-end'>
                <p className='text-gray-500 inline-flex'>
                  Sort by:{' '}
                  <span className='text-red-500 ml-1.5'>
                    <a
                      aria-checked='false'
                      role='menuitemradio'
                      data-turbo-frame='_self'
                      onClick={handleSortingChange}
                      data-value={'title'}
                      className='cursor-pointer'
                    >
                      Name{' '}
                    </a>
                    {sortingColumn === 'title' && sortingDirection === 'asc' ? (
                      <GrAscend />
                    ) : sortingColumn === 'title' &&
                      sortingDirection === 'desc' ? (
                      <GrDescend />
                    ) : null}
                  </span>{' '}
                  /{' '}
                  <span className='text-red-500'>
                    <a
                      aria-checked='false'
                      role='menuitemradio'
                      data-turbo-frame='_self'
                      onClick={handleSortingChange}
                      data-value='createdAt'
                      className='cursor-pointer'
                    >
                      Date{' '}
                    </a>
                    {sortingColumn === 'createdAt' &&
                    sortingDirection === 'asc' ? (
                      <GrAscend />
                    ) : sortingColumn === 'createdAt' &&
                      sortingDirection === 'desc' ? (
                      <GrDescend />
                    ) : null}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
          {searchValue.result?.length >= 1 ? (
            <div className='col-span-3'>
              {searchValue.result.map(prj => (
                <ProjectsCard key={prj.id} prj={prj} />
              ))}
              <Pagination
                prjData={searchValue}
                setCurrentPage={setCurrentPage}
              />
            </div>
          ) : (
            <div className='col-span-3'>
              {GetProjectData.projects.length === 0 && (
                <h3>No projects to show</h3>
              )}
              {GetProjectData.projects.map(prj => (
                <ProjectsCard key={prj.id} prj={prj} />
              ))}
              <Pagination
                prjData={GetProjectData}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
