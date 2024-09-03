import React from 'react';

const services = [
  {
    title: 'Training',
    description: 'Tailored technology solutions to optimize your business operations.',
    icon: '🛠️', // Use your preferred icon or image here
  },
  {
    title: 'IT Solutions',
    description: 'Expert-led programs to enhance your skills and knowledge.',
    icon: '💻',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns to boost your online presence and engagement!',
    icon: '📈',
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="mb-8">
          At Nexisa, we are dedicated to providing comprehensive services that drive your success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white text-black rounded-lg shadow-lg">
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
