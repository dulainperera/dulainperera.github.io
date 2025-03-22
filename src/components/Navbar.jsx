import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-6 px-12 bg-neutral-950">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-2xl text-gray-300">Dulain Perera</p>
      </div>
      <div className="hidden md:flex m-8 items-center justify-center gap-8 text-xl">
        <a href="#intro" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
        after:transition-all after:duration-300 hover:after:w-full">
          About
        </a>
        <a href="#tech" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
        after:transition-all after:duration-300 hover:after:w-full">
          Tech
        </a>
        <a href="#experience" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
        after:transition-all after:duration-300 hover:after:w-full">
          Experience
        </a>
        <a href="#projects" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
        after:transition-all after:duration-300 hover:after:w-full">
          Projects
        </a>
      </div>


      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-950 flex flex-col items-center gap-8 text-xl py-4 md:hidden">
          <a href="#intro" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMenu}>
            About
          </a>
          <a href="#tech" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMenu}>
            Tech
          </a>
          <a href="#experience" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" className="text-gray-500 hover:text-white relative transition duration-300 ease-in-out 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
          after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMenu}>
            Projects
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;