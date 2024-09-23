// import React from 'react'
import GalleryCard from "./GalleryCard";
import Slider from "react-slick";

// Import slick-carousel styles for the slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { galleryData } from "../utils/data";
import { PrevArrow, NextArrow } from "./Arrows";



const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div id="gallery" className="max-w-screen h-full container mx-auto pt-12 pb-24 px-4 overflow-x-hidden mb-5">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 text-[#2C4964]">Gallery</h2>
      <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
      <Slider {...settings}>
        {galleryData.map((image, index) => (
          <GalleryCard key={index} imageSrc={image.src} altText={image.alt}/>
        ))}
      </Slider>
    </div>
  )
}

export default Gallery