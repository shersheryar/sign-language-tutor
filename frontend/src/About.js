import React from "react";
import sign  from "./assets/sign.jpg";
const AboutSection = () => {
  return (
    <section id="About" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Left: Image */}
        <div className="md:w-1/2 h-[20]">
          <img
            src={sign}
            alt="About"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-extrabold text-gray-900">About PSL</h2>
          <p className="text-gray-700 mt-4">
          Our platform is designed to help users learn and practice Pakistan Sign Language (PSL) in an easy and interactive way.
           Whether you're a beginner or looking to refine your skills, we provide step-by-step guidance through images, animations, 
           and real-time feedback. You can explore different signs, understand their meanings, and improve your signing skills at your own pace.
          </p>
          <p className="text-gray-700 mt-4">
          With our Practice Mode, you can use your webcam to perform signs and get instant feedback on whether you're doing them correctly. 
          Our system analyzes your gestures and helps you make adjustments for better accuracy. 
          This platform is a great tool for students, teachers, and anyone interested in learning PSL to improve communication with the Deaf community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
