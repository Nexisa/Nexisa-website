import { useState } from 'react';
import logo from '../assets/Logo/nexisa.png';

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the opening and closing of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 shadow-xl">
      <div className="w-11/12 container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Nexisa Logo" className="h-10 w-36" />
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="relative group">
            <a href="/" className="hover:text-[#5846F9] text-xl transition-colors duration-300">Home</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/portfolio" className="hover:text-[#5846F9] text-xl transition-colors duration-300">Portfolio</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/career" className="hover:text-[#5846F9] text-xl transition-colors duration-300">Career</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/team" className="hover:text-[#5846F9] text-xl transition-colors duration-300">Team</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/contact" className="hover:text-[#5846F9] text-xl transition-colors duration-300">Contact</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              // Icon for closing menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon for opening menu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="text-gray-800 font-medium px-6 py-4 space-y-4">
            <li>
              <a href="/" className="block hover:text-[#5846F9] text-xl">Home</a>
            </li>
            <li>
              <a href="/portfolio" className="block hover:text-[#5846F9] text-xl">Portfolio</a>
            </li>
            <li>
              <a href="/career" className="block hover:text-[#5846F9] text-xl">Career</a>
            </li>
            <li>
              <a href="/team" className="block hover:text-[#5846F9] text-xl">Team</a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-[#5846F9] text-xl">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
