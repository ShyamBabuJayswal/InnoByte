import React, { useContext } from 'react';
import large from "../assets/large.jpg";
import small from "../assets/small.jpg";
import { AppContext } from '../context/AppContext';

const Rooms = () => {
  const {handleBookNowClick} =useContext(AppContext);
  return (
    <div className="p-6 md:p-12 -mt-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">OUR LIVING ROOM</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">The Most Memorable Rest Time Starts Here.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cozy Haven Room */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-center md:text-left">
          <img src={small} alt="Cozy Haven Room" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Cozy Haven Room</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Starting from <span className="text-primary font-bold">Rs. 1000/night</span>
          </p>
          <button onClick={handleBookNowClick} className="bg-primary mt-5 text-white py-3 px-6 rounded-lg hover:bg-gray-600 text-lg md:text-xl">
            Book Now
          </button>
        </div>
        {/* Spacious Serenity Suite */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-center md:text-left">
          <img src={large} alt="Spacious Serenity Suite" className="w-full h-auto rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Spacious Serenity Suite</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            Starting from <span className="text-primary font-bold">Rs. 1500/night</span>
          </p>
          <button onClick={handleBookNowClick} className="bg-primary mt-5 text-white py-3 px-6 rounded-lg hover:bg-gray-600 text-lg md:text-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
