// import React from 'react';

// eslint-disable-next-line react/prop-types
const GalleryCard = ({ imageSrc, altText }) => {
  return (
    <div className="p-2">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="rounded-xl object-cover w-full h-64" 
      />
    </div>
  );
};

export default GalleryCard;