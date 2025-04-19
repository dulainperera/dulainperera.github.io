import React from 'react';
import { motion } from 'framer-motion';

const Tech = () => {
  const headingVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <div className="pb-20 lg:mb-35">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl mt-10 mb-10 text-center"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-col gap-6 text-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-xl mb-4 font-medium">Languages</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> Python
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Java
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> HTML
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> CSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> JavaScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> PHP
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> SQL
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-xl mb-4 font-medium">Libraries & Frameworks</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> React
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Tailwind
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Bootstrap
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Laravel
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Spring Boot
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Node.js
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 border border-gray-700 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-xl mb-4 font-medium">Tools</h3>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> Git/GitHub
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> VS Code
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> IntelliJ
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Postman
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> MySQL
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> MongoDB
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;