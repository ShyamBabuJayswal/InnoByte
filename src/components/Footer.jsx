import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import instagram from  '../assets/instagram.png';
import facebook from  '../assets/facebook.png';
import google from  '../assets/google.png';

import twitter from  '../assets/twitter.png';
import youtube from  '../assets/youtube.png';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Footer = () => {
    const navigate = useNavigate()

    const {handleBookNowClick, 
        openInstagram, 
        openFacebook,
        openGoogleMap,
        openYoutube,
        openTwitter} = useContext(AppContext);
    



    return (
        <div className='md:mx-5 -mt-20 bg-primary'>
            <div className='flex flex-col md:flex-row gap-7 my-10 mt-40 text-sm'>
                {/*-----Left Section------ */}
                <div className='flex-1'>
                    <img className='mb-5 w-40 ml-5 mt-5  bg-primary' src={logo} alt='KingSukh Guest House Logo' />
                    <p className='w-full ml-5  md:w-2/3 text-gray-600 leading-6 text-base'>
                        Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
                    </p>
                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNowClick}
                        className="bg-primary text-white font-semibold px-4 mt-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  ml-5 py-3  hover:bg-gray-600 text-lg md:text-xl"
                    >
                        Book Now
                    </button>
                </div>

                {/*----Center Section------ */}
                <div className='flex-1'>
                    <p className='text-xl font-medium mb-5 ml-5'>QUICK LINKS</p>
                    <ul className='flex flex-col gap-2 text-gray-600 ml-5'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/*-----Right Section------ */}
                <div className='flex-1 ml-5'>
                    <p className='text-xl font-medium mb-5'>CONTACT US</p>
                   
                    <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9007062180</li>
              <li>
           <a href="mailto:kkghosh0099@gmail.com" className="text-gray-600 hover:underline">
            kkghosh0099@gmail.com
        </a>
           </li>
                    </ul>
                    <div className='flex-1 items-end'>
                   
                    <div className='flex flex-row gap-4 mt-5 text-gray-600'>
                 <img onClick={openInstagram} className="w-10 h-10 mb-5  rounded-md shadow-md cursor-pointer" src={instagram} alt='instagram logo'/>
         <img onClick={openFacebook}  className="w-10 h-10 mb-5 rounded-md shadow-md cursor-pointer" src={facebook} alt='facebook logo'/>
         <img onClick={openTwitter} className="w-10 h-10 mb-5 rounded-md shadow-md  cursor-pointer" src={twitter} alt="twitter logo" />
         <img onClick={openYoutube}  className="w-10 h-10 mb-5  rounded-md shadow-md  cursor-pointer" src={youtube} alt='youtube logo'/>
         <img onClick={openGoogleMap} className="w-10 h-10 mb-5 rounded-md shadow-md cursor-pointer" src={google} alt='googlemap logo'/>
                        
                    </div>
                </div>
                </div>
                
                
            </div>

            <div>
                {/*------Copyright Text---*/}
                <p className='py-5 text-sm text-center text-base'>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
