function Header() {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 rounded-full 
              border border-white/20 bg-white/10
               backdrop-blur-lg shadow-lg fixed top-0 z-50">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="px-4 py-1.5 rounded-full text-base text-gray-900 bg-white">
          Contact
        </a>
      </nav>
    </div>
  ) ;
}
export default Header;