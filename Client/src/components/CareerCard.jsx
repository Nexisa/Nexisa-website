// import React from 'react';

// eslint-disable-next-line react/prop-types
const CareerCard = ({ title, imgSrc }) => {
  return (
    <div className="border-2 rounded-xl shadow-xl px-8 md:py-2 flex items-center justify-center
    hover:scale-110 bg-white hover:shadow-2xl transition duration-300">
      <div className="text-left flex justify-center items-center gap-1 md:gap-6 p-5">
        <img src={imgSrc} alt={title} className="mx-auto mb-4 h-16 w-16" />
        <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CareerCard;
