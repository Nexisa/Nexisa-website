// import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5846F9] to-[#6251f9] text-white py-10">
      <div className="w-11/12 md:w-9/12 container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-11/12 mx-auto md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">Nexisa</h2>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            {/* Social Icons */}
            <a href="https://x.com" target="_blank" rel="noreferrer" className="border border-solid border-gray-300 rounded-full p-2
            text-gray-300 text-xl hover:scale-110 hover:text-white hover:border-white transition-all duration-300">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="border border-solid border-gray-300 rounded-full p-2
            text-gray-300 text-xl hover:scale-110 hover:text-white hover:border-white transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="border border-solid border-gray-300 rounded-full p-2
            text-gray-300 text-xl hover:scale-110 hover:text-white hover:border-white transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="border border-solid border-gray-300 rounded-full p-2
            text-gray-300 text-xl hover:scale-110 hover:text-white hover:border-white transition-all duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-11/12 mx-auto md:w-2/3 justify-between px-6">
            <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2 text-center">
                    <li><a href="/" className="hover:text-white text-gray-300">Home</a></li>
                    <li><a href="/team" className="hover:text-white text-gray-300">Team</a></li>
                    <li><a href="/" className="hover:text-white text-gray-300">About Us</a></li>
                    <li><a href="/" className="hover:text-white text-gray-300">Services</a></li>
                    <li><a href="/portfolio" className="hover:text-white text-gray-300">Portfolio</a></li>
                    <li><a href="/career" className="hover:text-white text-gray-300">Career</a></li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Kolkata, West Bengal</p>
                <br />
                <p>Phone: <a href="tel:+919432323039" className="hover:text-gray-300">+91 9432323039</a></p>
                <p>Email: <a href="mailto:aneek@nexisa.co.in" className="hover:text-gray-300">aneek@nexisa.co.in</a></p>
            </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-lg">&copy; Copyright <span className="font-semibold">Nexisa</span> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
