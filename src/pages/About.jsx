import out from '../assets/out.jpg';

const About = () => {
  const handleBookNowClick = () => {
    window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank');
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:ml-10 -mt-5">
        <img src={out} alt="Kingsukh Guest House" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left md:ml-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 -mt-2">About Us</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">The Best Holidays Start Here!</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature, beauty, and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
        </p>
        <div className="mt-10">
          <p className="text-gray-600 text-lg leading-relaxed">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">Contact us: +91 9007062180</p>
          <button onClick={handleBookNowClick} className="bg-primary mt-5 text-white py-3 px-6 rounded-lg hover:bg-gray-600 text-lg md:text-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
