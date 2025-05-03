import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const iconVariantants = (duration) => ({
  initial: { y: -50 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
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
    <div className="pb-24 lg:mb-35">
      <motion.h1 className="text-center text-4xl mb-20 lg:mt-16">Technologies</motion.h1> {/* Increased mb-10 to mb-16 */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mt-8" // Added mt-8 for extra spacing
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariantants(2.5)}
            initial="initial"
            animate="visible"
            className="rounded-2xl border-3 border-neutral-900 p-6 shadow-lg flex flex-col items-center"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;