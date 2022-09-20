import React from 'react';
import fs from 'fs';

import ProjectsCard from '../../components/ProjectsCard';

const ProjectPage = ({ data }) => {
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

export async function getStaticProps() {
  // Get files from data.json file
  const files = fs.readFileSync('./data.json');
  const data = JSON.parse(files);

  return {
    props: {
      data,
    },
  };
}
