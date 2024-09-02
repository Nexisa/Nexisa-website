import React from 'react';
import '../Styles/Herosection.css'; 

function HeroSection() {
  return (
    <section className="bg-purple-500 py-16 h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 h-full">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Better Digital Experience With <span className="text-white">NEXISA</span>
          </h1>
          <p className="mt-4 text-white text-lg">
            Nexisa offers innovative IT solutions and expert training to empower businesses and individuals in the digital age.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="your-image-url-here" // Replace with the actual path to your image
            alt="Digital Experience"
            className="w-3/4 h-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
