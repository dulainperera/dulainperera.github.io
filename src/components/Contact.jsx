import React from 'react';
import {motion} from 'framer-motion';

const Contact = () => {

  return (
    <div
      className="border-t border-neutral-800 pb-20"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
        >
          Get in touch
        </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-neutral-400"
        >
          <a
            href="mailto:dulainp337@gmail.com"
            className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            dulainp337@gmail.com
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-neutral-400"
        >&copy; 2025 Dulain Perera. All rights reserved.</motion.p>
      </div>
    </div>
  );
};

export default Contact;