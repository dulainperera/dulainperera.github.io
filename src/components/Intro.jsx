import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import profilePic from '../assets/profile-pic.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Intro = () => {
  return (
    <div className=" pt-4 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Dulain Perera
            </motion.h1>
            <motion.span
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl">
              Undergraduate
            </motion.span>
            <motion.p variants={container(0)}
              initial="hidden"
              animate="visible" className="max-w-xl py-6 text-gray-400">
              Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in Python, Java, and HTML and currently exploring other frameworks like Laravel and Spring Boot. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.
            </motion.p>

            <motion.div 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="m-8 flex items-center justify-center gap-8 text-4xl">
              <a href="mailto:dulainp337@gmail.com" target="_blank" className="text-gray-500 text-5xl hover:text-yellow-500 transition duration-300 ease-in-out mr-1" >
                <MdEmail />
              </a>
              <a href="https://www.linkedin.com/in/dulain-perera-091778292/" target="_blank" className="text-gray-500 hover:text-blue-700 transition duration-300 ease-in-out">
                <FaLinkedin />
              </a>
              <a href="https://github.com/dulainperera" target="_blank" className="text-gray-500 hover:text-white transition duration-300 ease-in-out">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/dulain_03/" target="_blank" className="text-gray-500 hover:text-pink-500 transition duration-300 ease-in-out">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.img 
            initial={{ x:100, opacity: 0 }}
            animate={{x:0, opacity: 1 }}
            transition={{ duration:1, delay: 1.2 }}
            src={profilePic} alt="Dulain Perera" className="rounded-lg shadow-lg w-4/5 mx-auto h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Intro;