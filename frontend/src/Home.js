import React from 'react';
import ProfileCard from './FlipCard';
import {HeroSection} from './Hero';
import Navbar from "./Components/header/Navbar";
import Footer from "./Footer";
import About from "./About";

const Home = () => {
    const username = "Abrar"; // Replace with dynamic username if needed
  
    return (
      <div id="Hero" className='w-full'>
         <Navbar/>
         <HeroSection username={username} />

         <div className='my-12'>
        <About/>

         <div className='my-12'></div>
         

         <ProfileCard/>

          </div>
        

         <Footer/>
      </div>
    );
  };

export default Home;
