// import React from 'react';
import logo from '../assets/Logo/nexisa.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md  sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Nexisa Logo" className="h-10 w-32" />
          {/* <span className="text-pink-500 text-2xl font-bold ml-2">NEXISA</span> */}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="relative group">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">Home</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#portfolio" className="hover:text-blue-500 transition-colors duration-300">Portfolio</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#career" className="hover:text-blue-500 transition-colors duration-300">Career</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#team" className="hover:text-blue-500 transition-colors duration-300">Team</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
