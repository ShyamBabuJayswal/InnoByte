import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cancel from "../assets/cancel_icon.svg";
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  
  const { handleBookNowClick } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between text-lg py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img 
        onClick={() => navigate('/')} 
        className="bg-primary w-44 cursor-pointer" 
        src={logo} 
        alt="Logo" 
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-medium justify-center w-full">
        {['/', '/about', '/services', '/rooms', '/gallary', '/contact'].map((path, index) => (
          <NavLink 
            key={index} 
            to={path} 
            className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}
          >
            {({ isActive }) => (
              <>
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Book Now Button */}
      <button
        onClick={handleBookNowClick}
        className="bg-primary text-white font-semibold text-base py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 mr-4 hidden md:flex items-center justify-center whitespace-nowrap"
      >
        Book Now
      </button>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl focus:outline-none"
        >
          {showMenu ? (
            <img src={cancel} alt="Close Menu" className="w-7" />
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 bg-white transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="flex justify-between items-center px-5 py-6">
          {/* Logo */}
          <img className="w-36" src={logo} alt="Logo" />
          {/* Close Button */}
          <img 
            className="w-7 cursor-pointer" 
            onClick={() => setShowMenu(false)} 
            src={cancel} 
            alt="Close Menu" 
          />
        </div>
        
        <ul className="flex flex-col items-center gap-5 mt-10 text-lg font-medium">
          {['/', '/about', '/services', '/rooms', '/gallary', '/contact'].map((path, index) => (
            <li key={index} className="relative group w-full text-center">
              <NavLink 
                to={path} 
                onClick={() => setShowMenu(false)} 
                className={({ isActive }) => `py-2 block ${isActive ? 'text-primary font-semibold' : ''}`}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
              <hr 
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 bg-primary h-1 
                ${window.location.pathname === path ? 'w-1/6' : 'w-0'} group-hover:w-1/6`} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
