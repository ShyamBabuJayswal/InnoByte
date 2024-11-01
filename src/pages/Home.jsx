import React from 'react';
import header from '../assets/header.jpg';

const Home = () => {
  return (
    <div
      className="h-[80vh] sm:h-[90vh] md:h-screen lg:h-[110vh] bg-cover bg-center -mt-5"
      style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: 'center', // Ensure the image is centered
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        backgroundSize: 'cover' // Ensure the image covers the entire div
      }}
    >
     <p className='text-2xl font-semibold text-gray-800 leading-relaxed ml-5'> 
      Enjoy a perfect getaway in our unique and welcoming guest house.
      </p>
    </div>
  );
};

export default Home;
