import React from 'react';
import palash from '../assets/palash.webp';

const Services = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 rounded-lg shadow-lg">
      {/* Services Text Section */}
      <div className="w-full text-center md:text-left mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Services</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-2">
          Strive Only For The Best
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Services List Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <ul className="text-gray-600 space-y-6">
            <li className="flex items-center gap-4 text-lg md:text-xl">
              <span className="text-primary text-2xl md:text-3xl">
                <i className="fas fa-shield-alt"></i>
              </span>
              <p>High-Class Security</p>
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl">
              <span className="text-primary text-2xl md:text-3xl">
                <i className="fas fa-concierge-bell"></i>
              </span>
              <p>24-Hour Room Service</p>
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl">
              <span className="text-primary text-2xl md:text-3xl">
                <i className="fas fa-utensils"></i>
              </span>
              <p>In-House Restaurant</p>
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl">
              <span className="text-primary text-2xl md:text-3xl">
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <p>Tourist Guide Support</p>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={palash} alt="Service" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:justify-between gap-8 mt-10 bg-white p-6 rounded-lg shadow-md">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">100+</p>
          <p className="text-gray-600 text-xl">Bookings Completed</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">150+</p>
          <p className="text-gray-600 text-xl">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
