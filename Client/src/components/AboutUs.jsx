// import React from 'react';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import img from '../assets/Logo/about.jpg'

const AboutUs = () => {
    return (

        <div id='about' className="container mx-auto py-12 flex gap-8 flex-col-reverse md:flex-row justify-center items-center w-full md:w-5/6">
            <div className='flex flex-col md:w-1/2 w-11/12 sm:mx-auto'>
                <div className='flex flex-col'>
                    <h1 className="text-xl md:text-3xl font-bold text-[#5846F9] text-left mb-4">About Us</h1>
                    <p className="text-md text-gray-700 text-left mb-4 italic">
                        Welcome to Nexisa, your trusted partner in cutting-edge IT solutions and training. At Nexisa, we specialize in delivering comprehensive services across various domains, including:
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className=" text-left mb-4"> 
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 flex items-center justify-start gap-2"><CheckCircleOutlineSharpIcon
                        />Web Development</h2>
                        <p className="text-gray-700 ml-8">
                            Crafting responsive and dynamic websites that elevate your online presence.
                        </p>
                    </div>
                    <div className=" text-left mb-4">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 flex items-center justify-start gap-2"><CheckCircleOutlineSharpIcon
                        />App Development</h2>
                        <p className="text-gray-700 ml-8">
                            Building intuitive and user-friendly applications tailored to your needs.
                        </p>
                    </div>
                    <div className="text-left mb-4">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 flex items-center justify-start gap-2"><CheckCircleOutlineSharpIcon
                        />Data Science</h2>
                        <p className="text-gray-700 ml-8">
                            Unlocking insights and driving decisions with advanced data analytics.
                        </p>
                    </div>
                    <div className=" text-left mb-4">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 flex items-center justify-start gap-2"><CheckCircleOutlineSharpIcon
                        />Training Programs</h2>
                        <p className="text-gray-700 ml-8">
                            Empowering individuals and teams with the latest tech skills to thrive in the digital world.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <img
                    src={img}
                    alt="About Us"
                    className="rounded-lg shadow-lg w-9/12"
                />
            </div>
        </div>

    );
};

export default AboutUs;