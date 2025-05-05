import React from 'react';
import { useNavigate } from 'react-router-dom';
import forhero from "./assets/hand2.jpg";

export const HeroSection = ({ username }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-white h-screen px-8">
      {/* Left section: Text and Button */}
      <div className=" w-full md:w-1/2">
      <h1 className="md:text-5xl sm:text-6xl text-4xl bg-gradient-to-r from-black to-yellow-400 bg-clip-text font-extrabold text-transparent mb-4">
      PAKISTAN SPECIFIC SIGN LANGUAGE TUTOR WITH WEB-CAM INTERACTION FOR REAL-TIME LEARNING
        </h1>
        <h3 className="md:text-3xl sm:text-6xl text-4xl font-bold mb-4">
          Welcome, {username}!<br />
          <span className="block text-lg mt-2">
    Click the Learn Sign Language button to learn and practice signs.
  </span>
        </h3>
        <button
          className="bg-yellow-200 w-[200px] rounded-3xl hover:border-4 hover:border-red-600 hover:scale-105 duration-300 font-medium py-3 text-black mb-6"
          onClick={() => navigate('/learn')}
        >
          Learn Sign Language
        </button>
      </div>
      
      {/* Right section: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={forhero} // Replace with your image URL
          alt=""
          className="w-[70%] h-full ml-20 object-cover rounded-md"
        />
      </div>
    </div>
    
  );
};

const Hero = () => {
  return <HeroSection username="User" />;
};

export default Hero;
