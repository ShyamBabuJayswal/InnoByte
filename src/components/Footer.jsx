import React from 'react';
import logo from '../assets/logo.png';
import instagram from  '../assets/instagram.png';
import facebook from  '../assets/facebook.png';
import google from  '../assets/google.png';

import twitter from  '../assets/twitter.png';
import youtube from  '../assets/youtube.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()

    const handleBookNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank');
    };
    const openInstagram = () => {
        window.open('https://www.instagram.com/kingsukhguesthouse/', '_blank');
    };
    
    const openFacebook = () => {
        window.open('https://www.facebook.com/100075774561245/videos/kingsukh-guest-house-barhanti-purulia/1380103232635384/', '_blank');
    };
    const openGoogleMap = () => {
        window.open('https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863324,86.8597904,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
    };
    
    const openYoutube = () => {
        window.open('https://www.youtube.com/watch?v=nVxvSMeWXuY', '_blank');
    };
   

    const openTwitter = () => {
        window.open('  https://x.com/TourismBengal/status/1407640974696742913', '_blank');
    };
    



    return (
        <div className='md:mx-10 -mt-20'>
            <div className='flex flex-col md:flex-row gap-7 my-10 mt-40 text-sm'>
                {/*-----Left Section------ */}
                <div className='flex-1'>
                    <img className='mb-5 w-40 bg-primary' src={logo} alt='KingSukh Guest House Logo' />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 text-base'>
                        Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
                    </p>
                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNowClick}
                        className="bg-primary text-white font-semibold text-base py-2 px-4 mt-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Book Now
                    </button>
                </div>

                {/*----Center Section------ */}
                <div className='flex-1'>
                    <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/*-----Right Section------ */}
                <div className='flex-1'>
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
