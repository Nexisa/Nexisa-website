// import React from 'react'
import teamSvg from '../assets/Team/team-shape.svg'

// eslint-disable-next-line react/prop-types
const TeamCard = ({ imgUrl, name, role }) => {
  return (
    <div className="w-full flex justify-center mb-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="member-img relative">
                <img src={imgUrl} className="w-full h-auto object-cover" alt={name} />
                <div className="absolute bottom-0 left-0 right-0">
                    <img src={teamSvg} alt="TeamSVG" />
                </div>
            </div>
            <div className="p-4 text-center">
                <h4 className="text-lg md:text-xl font-semibold text-[#2C4964]">{name}</h4>
                <span className="text-gray-500">{role}</span>
            </div>
        </div>
    </div>
  );
};

export default TeamCard;