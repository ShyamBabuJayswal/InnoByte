import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cancel from "../assets/cancel_icon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  
  const handleBookNowClick = () => {
    window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank');
  };

  return (
    <div className="flex items-center justify-between text-lg py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img 
        onClick={() => navigate('/')} 
        className='bg-primary w-44 cursor-pointer' 
        src={logo} 
        alt="Logo" 
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-medium justify-center w-full">
      <NavLink to='/' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer " : "py-1 cursor-pointer ")}>
          {({ isActive }) => (
            <>
              Home
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
      
        
        <NavLink to='/about' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}>
          {({ isActive }) => (
            <>
              About
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
        
        <NavLink to='/services' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}>
          {({ isActive }) => (
            <>
              Services
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
        
        <NavLink to='/rooms' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}>
          {({ isActive }) => (
            <>
              Rooms
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
        
        <NavLink to='/gallary' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}>
          {({ isActive }) => (
            <>
              Gallary
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
        
        <NavLink to='/contact' className={({ isActive }) => (isActive ? "active py-1 cursor-pointer" : "py-1 cursor-pointer")}>
          {({ isActive }) => (
            <>
              Contact
              <hr className={`${isActive ? "block" : "hidden"} w-full mt-1 bg-primary h-1`} />
            </>
          )}
        </NavLink>
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
          {/* Hamburger Icon */}
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
          <li className="relative group w-full text-center">
            <NavLink to="/" onClick={() => setShowMenu(false)} className="py-2 block">
              Home
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
          
          <li className="relative group w-full text-center">
            <NavLink to="/about" onClick={() => setShowMenu(false)} className="py-2 block">
              About
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
          
          <li className="relative group w-full text-center">
            <NavLink to="/services" onClick={() => setShowMenu(false)} className="py-2 block">
              Services
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
          
          <li className="relative group w-full text-center">
            <NavLink to="/rooms" onClick={() => setShowMenu(false)} className="py-2 block">
              Rooms
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
          
          <li className="relative group w-full text-center">
            <NavLink to="/gallery" onClick={() => setShowMenu(false)} className="py-2 block">
              Gallery
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
          
          <li className="relative group w-full text-center">
            <NavLink to="/contact" onClick={() => setShowMenu(false)} className="py-2 block">
              Contact
            </NavLink>
            <hr className="absolute left-1/2 transform -translate-x-1/2 w-0 transition-all duration-300 bg-primary h-1 group-hover:w-1/6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
