// components/SocialLoginButtons.js
import React from "react";

const SocialLoginButtons = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <button className="bg-blue-600 text-white p-2 rounded-full">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button className="bg-blue-400 text-white p-2 rounded-full">
        <i className="fab fa-twitter"></i>
      </button>
      <button className="bg-blue-700 text-white p-2 rounded-full">
        <i className="fab fa-linkedin-in"></i>
      </button>
    </div>
  );
};

export default SocialLoginButtons;
