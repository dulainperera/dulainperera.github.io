import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import profilePic from '../assets/profile-pic.jpg';

const Intro = () => {
  return (
    <div className=" pt-4 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Dulain Perera
            </h1>
            <span className="text-2xl">
              Undergraduate
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter">
              Hello, and welcome to my portfolio! I'm a 2nd year computer science undergraduate with a strong foundation in Python, Java, and HTML and currently exploring other frameworks like Laravel and Spring Boot. My journey in tech has been shaped by a commitment to learning and a passion for building functional, engaging websites and applications.
            </p>
            <div className="m-8 flex items-center justify-center gap-8 text-4xl">
              <a href="mailto:dulainp337@gmail.com" target="_blank" className="text-gray-500 text-5xl hover:text-yellow-500 transition duration-300 ease-in-out mr-1" >
                <MdEmail />
              </a>
              <a href="https://www.linkedin.com/in/dulain-perera-091778292/" target="_blank" className="text-gray-500 hover:text-blue-700 transition duration-300 ease-in-out">
                <FaLinkedin />
              </a>
              <a href="https://github.com/dulainperera" target="_blank" className="text-gray-500 hover:text-black transition duration-300 ease-in-out">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/dulain_03/" target="_blank" className="text-gray-500 hover:text-pink-500 transition duration-300 ease-in-out">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <img src={profilePic} alt="Dulain Perera" className="rounded-lg shadow-lg w-4/5 mx-auto h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Intro;