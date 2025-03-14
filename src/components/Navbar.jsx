import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
  
const Navbar = () => {
  return <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <p className="text-2xl">Dulain Perera</p>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
    </div>
  </nav>
    
}

export default Navbar;