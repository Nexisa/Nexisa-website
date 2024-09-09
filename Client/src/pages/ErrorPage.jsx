// import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/Logo/error2.png'

const ErrorPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen 
//     bg-gradient-to-r from-[#9388f1] to-[#5846F9] text-white">
//       <h1 className="text-9xl font-bold tracking-wider">404</h1>
//       <h2 className="text-3xl md:text-4xl mt-4 font-semibold">Page Not Found</h2>
//       <p className="text-lg md:text-xl mt-4 text-center px-6">
//         Sorry, the page you're looking for doesn't exist or may have been moved.
//       </p>
//       <button 
//         onClick={handleGoHome}
//         className="mt-8 inline-block bg-white text-gray-900 font-semibold text-lg py-3 px-6 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
//       >
//         Go Back to Home
//       </button>
//     </div>
//   );
  return (
    <div className='flex flex-col justify-center items-center gap-6
    max-w-screen container mx-auto p-4 overflow-x-hidden mt-4 mb-24'>
        <img src={error} alt="Error" className='w-96 h-60'/>
        <h1 className='font-extrabold text-6xl'>Page Not Found</h1>
        <p className='text-center text-gray-600'>The page you're looking for might be renamed, removed <br />or might never exists in this website</p>
        <button 
            onClick={handleGoHome}
            className="mt-4 inline-block bg-[#5846F9] text-white font-semibold text-lg py-3 px-6 
            rounded-lg shadow-lg hover:bg-[#4834f7] transition duration-300"
        >
            Go Back to Home
        </button>
    </div>
  );


};

export default ErrorPage;