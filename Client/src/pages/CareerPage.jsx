// CareerPage.jsx
// import React from 'react';
import CareerCard from '../components/CareerCard';
import { careerData } from '../utils/data'

const CareerPage = () => {

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4 mb-16 md:mb-24">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Career</h2>
      <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-16'></div>

      <div className="w-11/12 flex flex-col md:flex-row gap-16 md:gap-6 mx-auto">
        {/* Left side - Career Cards */}
        <div className="grid grid-cols-2 gap-8 md:w-[60%]">
          {careerData.map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              imgSrc={career.imgSrc}
            />
          ))}
        </div>

        {/* Right side - Information and Button */}
        <div className="flex flex-col justify-center items-center text-center sm:text-left md:w-[40%]">
          <p className="text-lg leading-relaxed mb-6 max-w-md">
            Join Our Team! At Nexisa, we're always on the lookout for talented
            individuals who are passionate about technology and innovation. If
            you're ready to make an impact and grow with a dynamic team, we'd
            love to hear from you. Showcase your talent with us by filling out
            the form below.
          </p>
          <a href="https://forms.gle/g96sj8FtojUWQius7">
            <button className="bg-[#5846F9] text-white font-bold px-6 py-3 rounded-lg 
            shadow-lg hover:bg-[#4834f7] transition duration-300">
              Get Started Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
