// import React from 'react'
import address from '../assets/Contact/address.png'
import call from '../assets/Contact/call.png'
import email from '../assets/Contact/email.png'
import open from '../assets/Contact/open.png'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden">
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Contact Us</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className="flex flex-col md:flex-row w-11/12 mx-auto mb-8 gap-8">
            <div className='w-11/12 mx-auto md:w-1/2 flex justify-center items-center'>
                <div className='flex flex-col gap-20'>
                    <div className='flex gap-20'>
                        <img src={address} alt="Address" className='w-32 h-32' />
                        <img src={call} alt="Call Us" className='w-32 h-32' />
                    </div>
                    <div className='flex gap-20'>
                        <img src={email} alt="E-mail" className='w-32 h-32' />
                        <img src={open} alt="Open Hours" className='w-32 h-32' />
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto md:w-1/2'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default ContactPage