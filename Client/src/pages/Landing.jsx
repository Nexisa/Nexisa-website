// import React from 'react'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/Services'



const Landing = () => {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <ServiceSection />
        <Gallery/>
    </div>
  )
}

export default Landing