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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants(index)} // Pass index to determine animation direction
            initial="hidden"
            animate="visible"
            className="mb-8 flex flex-wrap lg:justify-center"
          >
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;