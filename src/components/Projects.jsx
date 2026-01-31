import React from 'react';
import { PROJECTS } from '../data/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="pb-20 lg:mb-35 px-6 md:px-12">
      <h1
        className="my-20 text-center text-4xl"
      >
        Projects
      </h1>
      <div className="grid gap-10 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;