import React from 'react';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -50 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Tech = () => {
  const technologies = [
    {
      name: 'Java',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-blue-600">
          {/* Replace below path with actual Java SVG paths */}
          <circle cx="64" cy="64" r="50" />
        </svg>
      ),
    },
    {
      name: 'HTML5',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-orange-500">
          <path d="M19 0l10 112 45 16 45-16 10-112H19z" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-blue-500">
          <path d="M19 0l10 112 45 16 45-16 10-112H19z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-yellow-400">
          <rect x="10" y="10" width="108" height="108" rx="20" />
        </svg>
      ),
    },
    {
      name: 'React',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-sky-400">
          <circle cx="64" cy="64" r="10" />
          {/* You can paste React SVG rings here */}
        </svg>
      ),
    },
    {
      name: 'MySQL',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-teal-600">
          <path d="M64 10c30 0 54 24 54 54s-24 54-54 54S10 94 10 64 34 10 64 10z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-sky-500">
          <path d="M64 20c-30 0-40 30-40 30s10-10 20-10 20 10 20 10 10-10 20-10 20 10 20 10-10-30-40-30z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      svg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 fill-[#181616]">
          {/* Insert GitHub SVG path exactly like you provided here */}
          <g>
            <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347..."></path>
            <path d="M26.484 91.806c-..." />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="pb-24 lg:mb-35">
      <motion.h1 className="text-center text-4xl mb-20 lg:mt-16">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-8"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-900 p-6 shadow-lg flex flex-col items-center"
          >
            {tech.svg}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
