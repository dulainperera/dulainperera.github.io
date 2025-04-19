import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration: 0.5, delay: 0.2 }, 
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-t border-neutral-800 pb-20"
    >
      <h1 className="my-10 text-center text-4xl">Get in touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          <a
            href="mailto:dulainp337@gmail.com"
            className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            dulainp337@gmail.com
          </a>
        </p>
        <p>&copy; 2025 Dulain Perera. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Contact;