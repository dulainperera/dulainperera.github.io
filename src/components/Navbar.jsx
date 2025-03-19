import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-2xl">Dulain Perera</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-4xl">
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
    </nav>
  );
}

export default Navbar;