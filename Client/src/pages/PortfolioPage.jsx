// import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { portfolioData } from '../utils/data';

const PortfolioPage = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Portfolio</h2>
      <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
