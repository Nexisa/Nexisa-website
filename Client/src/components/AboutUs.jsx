import React from 'react';
import img from '../assets/Logo/about.jpg'

const AboutUs = () => {
    return (
        <section className=" bg-gray-50">
            
            <div className="container mx-auto py-16 flex justify-center items-center w-1/2">
                <h1 className="text-4xl font-bold text-left mb-8">About Us</h1>
                <p className="text-lg text-gray-700 text-left mb-12">
                    Welcome to Nexisa, your trusted partner in cutting-edge IT solutions and training.
                </p>
                <div className="flex flex-col justify-center">
                    <div className=" text-left mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
                        <p className="text-gray-700">
                            Crafting responsive and dynamic websites that elevate your online presence.
                        </p>
                    </div>
                    <div className=" text-left mb-8">
                        <h2 className="text-3xl font-semibold mb-4">App Development</h2>
                        <p className="text-gray-700">
                            Building intuitive and user-friendly applications tailored to your needs.
                        </p>
                    </div>
                    <div className="text-left mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Data Science</h2>
                        <p className="text-gray-700">
                            Unlocking insights and driving decisions with advanced data analytics.
                        </p>
                    </div>
                    <div className=" text-left mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Training Programs</h2>
                        <p className="text-gray-700">
                            Empowering individuals and teams with the latest tech skills to thrive in the digital world.
                        </p>
                    </div>
                </div>

                <div className="w-full flex">
                <img
                    src={img}
                    alt="About Us"
                    className="rounded-lg shadow-lg"
                />
            </div>


            </div>
        </section>

    );
};

export default AboutUs;