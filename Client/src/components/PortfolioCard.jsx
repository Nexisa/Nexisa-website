// import React from 'react';

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white mb-4 rounded-lg shadow-xl overflow-hidden group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover transform 
      transition-transform duration-300 ease-in-out group-hover:scale-110" />
      <div className="p-4">
        <h3 className="text-xl font-semibold hover:text-blue-800 transition-all duration-200 cursor-pointer">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
