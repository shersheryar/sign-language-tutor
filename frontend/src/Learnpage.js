import React from 'react';

import Navbar from "./Components/header/Navbar";
import Footer from "./Footer";
import Cards from './Components/Cards';



const Learnpage = () => {
  return (
    <div id="learn" className="bg-white min-h-screen mt-24">
        <Navbar/>

        <div className="text-center">
          <h1 className="text-black text-4xl bg-gradient-to-r from-black to-yellow-400 bg-clip-text font-extrabold text-transparent">
           Urdu Alphabets
          </h1>
        </div>


        <Cards />
      <Footer/>
    </div>
  );
};

export default Learnpage;
