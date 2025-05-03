import React from 'react';
import { PROJECTS } from '../data/constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  });

  return (
    <div className="pb-20 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{ opacity: 0, x: -100}}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x:0}}
              initial={{ opacity: 0, x: 100}}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-8">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 text-color-yellow px-2 py-1 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;