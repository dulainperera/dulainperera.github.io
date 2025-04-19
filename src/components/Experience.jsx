import React from 'react';
import { EXPERIENCES } from '../data/constants';
import { motion } from 'framer-motion';

const Experience = () => {
  const headingVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <div className="pb-20 lg:mb-35">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="flex flex-col items-center">
        {EXPERIENCES.sort((a, b) => {
          const startYearA = parseInt(a.period.split(' - ')[0], 10);
          const startYearB = parseInt(b.period.split(' - ')[0], 10);
          return startYearB - startYearA; // Sort in descending order
        }).map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex flex-wrap justify-center w-full max-w-4xl"
          >
            <motion.div
              variants={itemVariants}
              className="w-1/4 text-center lg:text-left"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {experience.period}
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-3/4"
            >
              <p className="mb-2 font-semibold">{experience.title}</p>
              <p className="text-sm text-blue-100">{experience.institution}</p>
              <p className="text-sm">{experience.details}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;