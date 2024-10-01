// import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Logo/about.jpg'

const AdminDashboard = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Dashboard</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='md:w-1/2 md:mr-5 w-11/12 mx-auto'>
                <img src={image} alt="image" />
            </div>
            <div className='md:w-1/2 w-11/12 mx-auto flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl font-semibold text-left'>Welcome Admin,</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full'>
                    <Link to='/leave-applications'>
                        <div className='bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer'>Leave Applications</div>
                    </Link>
                    <Link to='/salary-slips'>
                        <div className='bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer'>Salary Slips</div>
                    </Link>
                    <Link to='/employees'>
                        <div className='bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer'>Employees Informations</div>
                    </Link>
                    <div className='bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer'>Logout</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard