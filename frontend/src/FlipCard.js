// import React from "react";
// import ahad from "./assets/ahad.png";
// import abrar from "./assets/abrar.png";
// import shery from "./assets/shery.png";

// const FlipCard = () => {
//   return (
//     <div className="w-full py-24 px-4 flex justify-center gap-10 ">
//       {/* Card 1 */}
//       <div className="group w-80 shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 bg-gray-700 perspective-1000">
//         <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
//           {/* Front Side */}
//           <div className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden">
//             <img className="w-64 h-80 mx-auto" src={ahad} alt="Ahad" />
//           </div>
//           {/* Back Side */}
//           <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center rotate-y-180 backface-hidden p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Ahad</h3>
//             <p className="text-center">Web Developer and Designer</p>
//             <p className="text-sm mt-2">Email: ahad@example.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div className="group w-80 shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 bg-gray-700 perspective-1000">
//         <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
//           <div className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden">
//             <img className="w-64 h-80 mx-auto" src={abrar} alt="Abrar" />
//           </div>
//           <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center rotate-y-180 backface-hidden p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Abrar</h3>
//             <p className="text-center">UI/UX Designer</p>
//             <p className="text-sm mt-2">Email: abrar@example.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Card 3 */}
//       <div className="group w-80 shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 bg-gray-700 perspective-1000">
//         <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
//           <div className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden">
//             <img className="w-64 h-80 mx-auto" src={shery} alt="Shery" />
//           </div>
//           <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center rotate-y-180 backface-hidden p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">Shery</h3>
//             <p className="text-center">Full-Stack Developer</p>
//             <p className="text-sm mt-2">Email: shery@example.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;
import React from "react";
 import ahad from "./assets/ahad.png";
 import abrar from "./assets/abrar.png";
 import shery from "./assets/shery.png";

export default function TeamSection() {
  return (
    <section id="flipCard" className="py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Meet Our Team</h2>
      </div>
      <div className="max-w-full ml-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {/* Alex Smith */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img
            src={ahad}
            alt="Alex Smith"
            className="w-32 h-32 object-cover rounded-full border-4 border-orange-300"
          />
          <h3 className="text-lg font-semibold mt-4">Ahad Malik</h3>
          <p className="text-gray-600">ML Engineer</p>
          <p className="text-gray-500 text-sm mt-2">
          Transforming raw data into intelligent models! Passionate about fine-tuning AI to perfection and pushing the limits of machine learning.
          </p>
          <div className="mt-4 flex space-x-3">


  {/* Instagram */}
  <a href="https://www.instagram.com/ahad_327/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/abdul-ahad-malik-015b99289/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* GitHub */}
  <a href="https://github.com/ABDUL-AHAD327" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>
</div>

        </div>

        {/* May Brown */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img
            src={shery}
            alt="May Brown"
            className="w-32 h-32 object-cover rounded-full border-4 border-orange-300"
          />
          <h3 className="text-lg font-semibold mt-4">Sheryyar Sher</h3>
          <p className="text-gray-600">Backend Developer</p>
          <p className="text-gray-500 text-sm mt-2">
          Building the backbone of innovation! Crafting powerful, scalable, and secure backend solutions for seamless digital experiences.
          </p>
          <div className="mt-4 flex space-x-3">
  

  {/* Instagram */}
  <a href="https://www.instagram.com/shersheryar/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/sheryar-sher-340911270/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* GitHub */}
  <a href="https://github.com/shersheryar" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>
</div>

        </div>
        
        {/* Ann Richmond */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img
            src={abrar}
            alt="Ann Richmond"
            className="w-32 h-32 object-cover rounded-full border-4 border-orange-300"
          />
          <h3 className="text-lg font-semibold mt-4">M.Abrar Ul Haque</h3>
          <p className="text-gray-600">Front-end Developer</p>
          <p className="text-gray-500 text-sm mt-2">
          Bringing ideas to life with stunning UI/UX! Creating sleek, interactive, and user-friendly web experiences that captivate and engage.
          </p>
          <div className="mt-4 flex space-x-3">

  {/* Instagram */}
  <a href="https://www.instagram.com/m_abrar_9/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/muhammad-abrar-ul-haque-140288228/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>

  {/* GitHub */}
  <a href="https://github.com/MAbrarulhaq" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github text-gray-500 hover:text-orange-500 text-lg"></i>
  </a>
</div>


        </div>
      </div>
    </section>
  );
}
