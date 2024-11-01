import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleBookNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank');
    };

    return (
        <div className='md:mx-10'>
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
                        <li>kkghosh0099@gmail.com</li>
                    </ul>
                    <div className='flex-1 items-end'>
                   
                    <ul className='flex flex-row gap-2 mt-2 text-gray-600'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                        <li>Privacy Policy</li>
                    </ul>
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
