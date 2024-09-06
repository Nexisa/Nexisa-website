// import React from 'react';
import '../Styles/Herosection.css';
import heroImg from '../assets/Logo/heroImg.png';

function HeroSection() {
  return (
    <section className="max-w-screen bg-[#5846F9] py-16 h-screen">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div> */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 h-full">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Better Digital Experience With <span className="text-white">NEXISA</span>
          </h1>
          <p className="mt-16 text-white text-lg">
            Nexisa offers innovative IT solutions and expert training to empower businesses and individuals in the digital age.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg} 
            alt="Digital Experience"
            className="w-{100%} h-auto animate-float ml-25"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
