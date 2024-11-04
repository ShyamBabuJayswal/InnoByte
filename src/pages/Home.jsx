import React from 'react';
import header from '../assets/header.jpg';

const Home = () => {
  return (
    <div
      className="h-[80vh] sm:h-[90vh] md:h-screen lg:h-[110vh] bg-cover bg-center -mt-8"
      style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' 
      }}
    >
     <p className='text-center text-2xl pt-10 text-[#707070]-700 ml-5'> 
      Enjoy A Perfect Getaway In Our Unique And Welcoming <span className='text-gray-800 font-semibold'>Guest House</span> .
      </p>
    </div>
  );
};

export default Home;
