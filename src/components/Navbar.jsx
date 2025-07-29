import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full z-50 px-6 py-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex flex-shrink-0 items-center">
          <p className="text-2xl text-gray-300">DP</p>
        </div>
        <div className="flex m-8 items-center justify-center gap-8 text-xl">
          <a href="#tech" className="ml-64 text-gray-500 hover:text-gray-300 relative transition duration-300 ease-in-out">
            Tech
          </a>
          <a href="#experience" className="text-gray-500 hover:text-gray-300 relative transition duration-300 ease-in-out">
            Experience
          </a>
          <a href="#projects" className="text-gray-500 hover:text-gray-300 relative transition duration-300 ease-in-out">
            Projects
          </a>
          <a href="#contact" className="px-6 py-2 bg-neutral-950 text-gray-500 border border-gray-500 rounded-full  transition duration-300 ease-in-out hover:text-gray-300 hover:border-gray-300">
            Get in Touch
          </a>
        </div>

        
      </div>

      {/* Mobile Navbar Header */}
      <div className="flex md:hidden items-center justify-between px-4 text-2xl w-full pt-2">
        <p className="text-gray-300">DP</p>
        <button onClick={toggleMenu} className="text-gray-500 z-50">
          {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl text-gray-300">
          <a href="#tech" onClick={toggleMenu}>
            Tech
          </a>
          <a href="#experience" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-neutral-950 text-gray-500 border border-gray-500 rounded-full transition duration-300 ease-in-out hover:text-gray-300 hover:border-gray-300"
            onClick={toggleMenu}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;