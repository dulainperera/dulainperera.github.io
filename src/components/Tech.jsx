import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiMysql } from 'react-icons/si';

const Tech = () => {
  const headingVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const technologies = [
    { icon: <FaJava className="text-7xl text-blue-600" /> }, // Java (Blue)
    { icon: <FaHtml5 className="text-7xl text-orange-500" /> }, // HTML5 (Orange)
    { icon: <FaCss3Alt className="text-7xl text-blue-500" /> }, // CSS3 (Blue)
    { icon: <FaJs className="text-7xl text-yellow-400" /> }, // JavaScript (Yellow)
    { icon: <FaReact className="text-7xl text-sky-400" /> }, // React (Light Blue)
    { icon: <SiMysql className="text-7xl text-teal-600" /> }, // MySQL (Teal)
    { icon: <SiTailwindcss className="text-7xl text-sky-500" /> }, // TailwindCSS (Light Blue)
    { icon: <FaGitAlt className="text-7xl text-orange-600" /> }, // Git (Orange)
  ];

  return (
    <div className="pb-30 ">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-4xl mb-10"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={techVariants}
            initial="hidden"
            animate="visible"
            className="rounded-2xl border-3 border-neutral-900 p-6 shadow-lg flex flex-col items-center"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;