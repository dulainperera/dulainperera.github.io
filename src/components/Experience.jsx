import React from 'react';
import { EXPERIENCES } from '../data/constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="pb-24 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="flex flex-col items-center justify-center">
        {EXPERIENCES.sort((a, b) => {
          const startYearA = parseInt(a.period.split(' - ')[0], 10);
          const startYearB = parseInt(b.period.split(' - ')[0], 10);
          return startYearB - startYearA; // sort in descending order
        }).map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex w-full max-w-4xl mx-auto items-start gap-4 lg:gap-8"
          >
            {/* Time Period */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-1/4 text-center lg:text-left"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.period}</p>
            </motion.div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-3/4"
            >
              <p className="mb-2 font-semibold">{experience.title}</p>
              <p className="text-sm text-blue-100">{experience.institution}</p>
              <p className="text-sm">{experience.details}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;