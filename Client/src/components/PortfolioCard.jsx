// import React from 'react';
import wave from '../assets/Portfolio/featuresWaves.svg'

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({link, title, description, imageUrl }) => {
  return (
    <a target="_blank" href={link}>
      <div className="bg-white mb-4 rounded-xl shadow-xl overflow-hidden group">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover transform 
        transition-transform duration-300 ease-in-out group-hover:scale-105" />
        <div className="p-4 relative cursor-pointer">
          <h3 className="text-xl font-semibold hover:text-blue-800 transition-all duration-200 cursor-pointer">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <img src={wave} alt="" className="absolute right-0 bottom-3 z-[-150] group-hover:z-[150]"></img>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
