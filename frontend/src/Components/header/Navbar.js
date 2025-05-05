// import React from 'react';
// import { BarsOutlined } from '@ant-design/icons';

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white text-black px-4 py-6">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-3xl font-bold text-black-600">
//           <span>Pakistan Sign Language Tutor</span>
//         </div>
        
//         {/* Navbar Links */}
//         <div className="hidden md:flex space-x-5">
//           <a href="#home" className="text-lg hover:text-blue-600">Home</a>
          
//           <a href="#about" className="text-lg  hover:text-blue-600">About</a>
//           <a 
//     href="#contacts" 
//     className="text-lg px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//   >
//     Signin
//   </a>

//         </div>
        
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <BarsOutlined className="text-2xl" />
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import pk from "./assets/pk.jpg";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Don't render navbar on these pages
//   if (location.pathname === "/signin" || location.pathname === "/signup") {
//     return null;
//   }

//   return (
//     <nav className="bg-white fixed w-full z-20 top-0 border-b pt-5 border-gray-100">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        
//         {/* Left: Website Name with Pakistani Flag (Aligned to Left) */}
//         <div className="absolute left-0 flex items-center space-x-1 pl-4">
//           <h1 className="text-2xl font-extrabold">
//             PAKISTAN SIGN LANGUAGE TUTOR
//           </h1>
//           <img src={pk} alt="Pak Flag" className="w-8 h-8" />
//         </div>

//         {/* Center: Navigation Links */}
//         <div className="flex-grow flex justify-center">
//           <ul className="hidden md:flex space-x-10 font-extrabold text-lg">
//             <li><a href="#Hero" className="text-gray-900 hover:text-yellow-400">Home</a></li>
//             <li><a href="#About" className="text-gray-900 hover:text-yellow-400">About</a></li>
//             <li><a href="#Services" className="text-gray-900 hover:text-yellow-400">Services</a></li>
//             <li><a href="#flipCard" className="text-gray-900 hover:text-yellow-400">Contact</a></li>
//           </ul>
//         </div>

//         {/* Right: Sign In Button (Aligned to Right) */}
//         <div className="absolute right-0 pr-4">
//           <button 
//             onClick={() => navigate("/")} 
//             className="text-black bg-yellow-200 hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
//           >
//             Sign In
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// ==============================================================
import React from "react";
import { useAuth } from "../../contexts/authContext"; // Ensure correct import
import { doSignOut } from "../../firebase/auth"; // Ensure correct import
import { useNavigate } from "react-router-dom";
// import pk from "./assets/pk.jpg";
import pk from "../../assets/pk.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  if (!auth) {
    return null; // Prevent crash if context is undefined
  }

  const { userLoggedIn } = auth;

  return (
    <nav className="bg-white fixed w-full z-20 top-0 border-b pt-5 border-gray-100">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Left: Website Name with Pakistani Flag */}
        <div className="absolute left-0 flex items-center space-x-1 pl-4">
          <h1 className="text-2xl font-extrabold">PAKISTAN SIGN LANGUAGE TUTOR</h1>
          <img src={pk} alt="Pak Flag" className="w-8 h-8" />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex space-x-10 font-extrabold text-lg">
            <li><a href="/home" className="text-gray-900 hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-gray-900 hover:text-yellow-400">About</a></li>
            <li><a href="#about" className="text-gray-900 hover:text-yellow-400">Services</a></li>
            <li><a href="#flipCard" className="text-gray-900 hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Right: Logout Button */}
        <div className="absolute right-0 pr-4">
          {userLoggedIn ? (
            <button 
              onClick={() => doSignOut().then(() => navigate("/signin"))}
              className="text-black bg-yellow-200 hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={() => navigate("/signin")} 
              className="text-black bg-yellow-200 hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


