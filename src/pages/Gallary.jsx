import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/ayodhya.webp';
import img3 from '../assets/baranti.webp';
import img4 from '../assets/flower.jpg';
import img5 from '../assets/mithonDam.webp';
import img6 from '../assets/palash.webp';
import img7 from '../assets/recep.jpg';
import img8 from '../assets/service.jpg';
import img9 from '../assets/room1.jpg';
import img10 from '../assets/out.jpg';
import img11 from '../assets/large.jpg';

const Gallary = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
  
  return (
    <div className="p-6 md:p-12 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 -mt-10">Gallary</h1>
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md w-full h-60 sm:h-72 md:h-80 lg:h-96"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
