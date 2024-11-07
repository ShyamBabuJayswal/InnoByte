import React from 'react';
import header from '../assets/header.jpg';
import img2 from '../assets/service.jpg';


const Home = () => {
  return (
    <div
      className="h-[80vh] sm:h-[90vh] ml-5 mr-5 -mt-5 md:h-screen lg:h-[110vh] bg-cover bg-primary bg-center "
      style={{
        backgroundImage: `url(${img2})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' 
      }}
    >
    
    </div>
  );
};

export default Home;
