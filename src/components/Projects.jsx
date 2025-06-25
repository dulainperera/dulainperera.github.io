import React from 'react';
import { PROJECTS } from '../data/constants';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="pb-20 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="grid gap-10 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;