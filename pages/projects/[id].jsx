import React from 'react';
import fs from 'fs';
import ProgressionBar from '../../components/ProgressionBar';
import DevelopmentToolsCard from '../../components/DevelopmentToolsCard';
import CommunicationToolsCard from '../../components/CommunicationToolsCard';

const ProjectPage = ({ data }) => {
  const project = data[0];

  return (
    <div className='container mx-auto'>
      <div className='mt-16 grid grid-cols-2 gap-4'>
        <div>
          <div className='flex'>
            <img
              className='inline object-cover w-16 h-16 mr-2 rounded-full'
              src={project.user.picture}
              alt='Profile image'
            />
            <div className='relative inline-block'>
              <p>
                {project.user.name} {project.user.lastName}
              </p>
              <p className='text-gray-500 text-sm'>{project.user.bio}</p>
              <p className='text-sm'>
                Posted:{' '}
                <span className='text-gray-500 text-sm'>
                  {new Date(project.createdAt).toLocaleDateString('en-gb', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <h1 className='font-semibold'>{project.title}</h1>
            {project.tags.map(tag => (
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
              {project.difficulty}
            </span>
          </p>
        </div>
      </div>
      <div className='mt-5'>
        <div>
          <h2 className='font-semibold'>
            Status:{' '}
            {project.status !== 'cancelled' && (
              <span className='capitalize text-green-500'>
                {project.status}
              </span>
            )}
            {project.status === 'cancelled' && (
              <span className='capitalize text-red-500'>{project.status}</span>
            )}
          </h2>
          <ProgressionBar progression={project.status} />
        </div>
        <div className='mt-10'>
          <h2 className='font-semibold'>Description</h2>
          <p>{project.description}</p>
        </div>
        <div className='mt-5 grid grid-cols-3 gap-4'>
          <div className='mt-5'>
            <h2 className='font-semibold'>Technology Stack</h2>
            {project.technologyStack.length === 0 && <p>No projects to show</p>}
            <ul className='space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400'>
              {project.technologyStack.map(tech => (
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
            {project.skills.length === 0 && <p>No required</p>}
            <ul className='space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400'>
              {project.skills.map(skill => (
                <li key={skill} className='capitalize'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-5'>
            <h2 className='font-semibold'>Number of People</h2>
            {project.numberOfPeople.length === 0 && <p>N/A</p>}
            <p>{project.numberOfPeople}</p>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='font-semibold'>Tools</h2>
          <div className='mt-5 grid grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold'>Collaborate</h3>
              <CommunicationToolsCard commTools={project.communication} />
            </div>
            <div>
              <h3 className='font-semibold'>Development</h3>
              <DevelopmentToolsCard devTools={project.developmentTools} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  // Get files from data.json file
  const files = fs.readFileSync('./data.json');
  const data = JSON.parse(files);

  // Get IDs form data.json and match ID from the URL path
  const paths = data.map(post => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // Get files from data.json file
  const files = fs.readFileSync('./data.json');
  const jsonData = JSON.parse(files);

  // Filter data to just get that ID data from the ID URL path
  const data = jsonData.filter(d => d.id.toString() === id);

  return {
    props: {
      data,
    },
  };
}
