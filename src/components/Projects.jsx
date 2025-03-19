import React from 'react';
import { PROJECTS } from '../data/constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img 
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded" 
              />
            </div> 
            <div className="w-full max-w-xl lg:w-3/4 lg:pl-8">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium "
                  >
                    {tech}
                  </span>       
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out">
                View on GitHub
              </a>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;