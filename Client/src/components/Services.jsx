// import React from 'react';
import { services  } from '../utils/data';


const ServiceSection = () => {
  return (
    <section id='services' className="py-16 bg-[#5846F9] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="mb-8">
          At Nexisa, we are dedicated to providing comprehensive services that drive your success.
        </p>

        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-[#6353f2] text-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
