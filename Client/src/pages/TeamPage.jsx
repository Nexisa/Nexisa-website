// import React from 'react'

import TeamCard from "../components/TeamCard"
import { teamData } from "../utils/data"

const TeamPage = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Team</h2>
      <div className='bg-[#5846F9] w-[3%] h-0.5 mx-auto mb-8'></div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default TeamPage