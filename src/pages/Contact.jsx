import React, { useState, useContext } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';


const Contact = () => {
  const { openInstagram, openTwitter, openYoutube, openGoogleMap } = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setResponseMessage("Your message has been sent!");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row my-10 justify-between items-start gap-10 mb-28 text-sm">
      <div className="bg-primary w-80 h-[80vh] flex flex-col justify-center items-start gap-4 p-8 rounded-lg shadow-lg ml-8 -mt-5">
        <p className="font-semibold text-xl text-gray-600 ml-10">CONTACT INFO</p>
        
        <div className="text-gray-500 flex items-center gap-2 mt-10">
          <FaMapMarkerAlt className="text-gray-600 text-2xl" />
          <button 
            onClick={openGoogleMap}
            className=" -ml-2 mt-5 text-lg text-gray-600 hover:underline"
          >
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </button>
        </div>
        
        <div className="text-gray-600 flex items-center gap-2">
          <FaPhone className="text-gray-600 text-xl" />
          <span className="text-lg">+91 9007062180</span>
        </div>
        
        <div className="text-gray-600 flex items-center gap-2">
          <FaEnvelope className="text-gray-600 text-xl" />
          <a 
            href="mailto:kkghosh0099@gmail.com" 
            className="text-lg text-gray-600 hover:underline"
          >
            kkghosh0099@gmail.com
          </a>
        </div>
        
        {/* Social Media Icons Row */}
        <div className="flex space-x-4 mt-[30px]">
          <button onClick={openInstagram}>
            <FaInstagram className="text-gray-600 hover:text-gray-500 text-2xl" />
          </button>
          <button onClick={openTwitter}>
            <FaTwitter className="text-gray-600 hover:text-gray-500 text-2xl" />
          </button>
          <button onClick={openYoutube}>
            <FaYoutube className="text-gray-600 hover:text-gray-500 text-2xl" />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-2 mr-40">
        <p className="font-semibold text-xl text-gray-600 -mt-5 mb-4">Send a message</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border rounded-lg p-2 text-lg"
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border rounded-lg p-2 text-lg"
            />
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 text-lg"
          />
          <input 
            type="tel" 
            name="mobile" 
            placeholder="Mobile No" 
            value={formData.mobile}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 text-lg"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 text-lg"
            rows="4"
          />
          <button 
            type="submit" 
            className="bg-primary mt-5 text-white py-2 rounded-lg hover:bg-gray-600 text-lg"
          >
            Send
          </button>
        </form>
        {responseMessage && <p className="text-gray-500 mt-4">{responseMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
