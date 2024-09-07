// eslint-disable-next-line react/prop-types
export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-[#5846F9]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-[#5846F9]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};