// import React from 'react'
import '../Styles/Herosection.css';
import heroImg from '../assets/Logo/heroImg.png';
import SigninForm from '../components/SigninForm';

const Signin = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Signin</h2>
      <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 h-full">
        <div className="md:w-1/2 w-11/12 mx-auto mb-8 md:mb-0">
          <SigninForm />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg} 
            alt="Digital Experience"
            className="w-{100%} h-96 animate-float ml-25"
          />
        </div>
      </div>
    </div>
  )
}

export default Signin