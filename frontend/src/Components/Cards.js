// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { app } from "../firebase"; // assuming you have firebase.js that exports 



import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AlphabetPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result || "";
  const index = location.state?.index;

  const urduAlphabets = [
    // { name: "Alif", image: require("../assets/alif.jpg") },
    { name: "Bay", image: require("../assets/bay.jpg") },
    { name: "Ain", image: require("../assets/ain.jpg") },
    { name: "Ghain", image: require("../assets/ghain.jpg") },
    { name: "Lam", image: require("../assets/lam.jpg") },
    // { name: "Dochahay", image: require("../assets/dochahay.jpg") },
    { name: "Hamza", image: require("../assets/hamza.jpg") },
    { name: "Khay", image: require("../assets/khay.jpg") },
    { name: "Meem", image: require("../assets/meem.jpg") },
    { name: "Pay", image: require("../assets/pay.jpg") },
    { name: "Byeh", image: require("../assets/byeh.jpg") },
    { name: "Chay", image: require("../assets/chay.jpg") },
    { name: "Cyeh", image: require("../assets/cyeh.jpg") },
    { name: "Daal", image: require("../assets/daal.jpg") },
    { name: "Dal", image: require("../assets/dal.jpg") },
    { name: "Fay", image: require("../assets/fay.jpg") },
    { name: "Gaaf", image: require("../assets/gaaf.jpg") },
    { name: "Hay", image: require("../assets/hay.jpg") },
    // { name: "Jeem", image: require("../assets/jeem.jpg") },
    { name: "Kaf", image: require("../assets/kaf.jpg") },
    { name: "Kiaf", image: require("../assets/kiaf.jpg") },
    { name: "Nuun", image: require("../assets/nuun.jpg") },
    { name: "Nuungh", image: require("../assets/nuungh.jpg") },
    { name: "Ray", image: require("../assets/ray.jpg") },
    { name: "Say", image: require("../assets/say.jpg") },
    { name: "Seen", image: require("../assets/seen.jpg") },
    { name: "Sheen", image: require("../assets/sheen.jpg") },
    { name: "Suad", image: require("../assets/suad.jpg") },
    { name: "Taay", image: require("../assets/taay.jpg") },
    // { name: "Tay", image: require("../assets/tay.jpg") },
    // { name: "Tuey", image: require("../assets/tuey.jpg") },
    // { name: "Wao", image: require("../assets/wao.jpg") },
    // { name: "Zaal", image: require("../assets/zaal.jpg") },
    // { name: "Zaey", image: require("../assets/zaey.jpg") },
    // { name: "Zay", image: require("../assets/zay.jpg") },
    // { name: "Zuad", image: require("../assets/zuad.jpg") },
    // { name: "Zuey", image: require("../assets/zuey.jpg") },
  ];

  const [unlockedAlphabets, setUnlockedAlphabets] = useState(() => {
    const savedProgress = JSON.parse(localStorage.getItem("unlockedAlphabets"));
    return savedProgress || [true, ...Array(urduAlphabets.length - 1).fill(false)];
  });

  useEffect(() => {
    localStorage.setItem("unlockedAlphabets", JSON.stringify(unlockedAlphabets));
  }, [unlockedAlphabets]);

  useEffect(() => {
    if (result === "correct" && index !== undefined) {
      setUnlockedAlphabets((prevUnlocked) => {
        const newUnlocked = [...prevUnlocked];
        newUnlocked[index] = true;

        if (index + 1 < urduAlphabets.length) {
          newUnlocked[index + 1] = true;
        }

        localStorage.setItem("unlockedAlphabets", JSON.stringify(newUnlocked));
        return newUnlocked;
      });
    }
  }, []);

  const handlePractice = (idx) => {
    if (unlockedAlphabets[idx]) {
      navigate("/practise", { 
        state: { 
          letter: urduAlphabets[idx].name, 
          index: idx,
          letterImage: urduAlphabets[idx].image, // Sending the alphabet image
        } 
      });
    }
  };

  const resetProgress = () => {
    const resetState = [true, ...Array(urduAlphabets.length - 1).fill(false)];
    localStorage.setItem("unlockedAlphabets", JSON.stringify(resetState));
    setUnlockedAlphabets(resetState);
    window.location.reload(); // Force UI reset if needed
  };
  

   // Calculate progress percentage
   const progressPercentage = (unlockedAlphabets.filter(Boolean).length / urduAlphabets.length) * 100;



  return (
    <div className="p-4">

      
       {/* Reset Button */}
       <button
        onClick={resetProgress}
        className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset Progress
      </button>

       {/* Progress Bar */}
       <div className="w-full bg-gray-300 rounded-lg overflow-hidden mb-4">
        <div
          className="bg-green-500 text-xs text-white text-center py-1 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        >
          {Math.round(progressPercentage)}% Learned
        </div>
      </div>

      
      <div className="grid grid-cols-4 gap-4">
        {urduAlphabets.map((letter, idx) => (
          <div className="border-black border-4">
          <div key={idx} className="flex flex-col items-center">
            <img
              src={letter.image}
              alt={letter.name}
              className={`w-56 h-56 object-fit ${unlockedAlphabets[idx] ? "" : "opacity-50"}`}
            />
            <button
              onClick={() => handlePractice(idx)}
              className={`w-56 p-4 text-2xl font-bold border rounded ${
                unlockedAlphabets[idx] ? "bg-yellow-200 text-black hover:scale-105" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!unlockedAlphabets[idx]}
            >
              {letter.name}
            </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default AlphabetPage;






// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { auth, db } from "../firebase"; // Adjust the path as needed
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// const AlphabetPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const result = location.state?.result || "";
//   const index = location.state?.index;

//   const urduAlphabets = [
//   { urdu: "ب", image: require("../assets/bay.jpg") },
//   { urdu: "ع", image: require("../assets/ain.jpg") },
//   { urdu: "غ", image: require("../assets/ghain.jpg") },
//   { urdu: "ل", image: require("../assets/lam.jpg") },
//   { urdu: "خ", image: require("../assets/khay.jpg") },
//   { urdu: "م", image: require("../assets/meem.jpg") },
//   { urdu: "پ", image: require("../assets/pay.jpg") },
//   { urdu: "ٻ", image: require("../assets/byeh.jpg") },
//   { urdu: "چ", image: require("../assets/chay.jpg") },
//   { urdu: "ڃ", image: require("../assets/cyeh.jpg") },
//   { urdu: "ڈ", image: require("../assets/daal.jpg") },
//   { urdu: "د", image: require("../assets/dal.jpg") },
//   { urdu: "ف", image: require("../assets/fay.jpg") },
//   { urdu: "گ", image: require("../assets/gaaf.jpg") },
//   { urdu: "ح", image: require("../assets/hay.jpg") },
//   { urdu: "ک", image: require("../assets/kaf.jpg") },
//   { urdu: "ق", image: require("../assets/kiaf.jpg") },
//   { urdu: "ن", image: require("../assets/nuun.jpg") },
//   { urdu: "ں", image: require("../assets/nuungh.jpg") },
//   { urdu: "ر", image: require("../assets/ray.jpg") },
//   { urdu: "ث", image: require("../assets/say.jpg") },
//   { urdu: "س", image: require("../assets/seen.jpg") },
//   { urdu: "ش", image: require("../assets/sheen.jpg") },
//   { urdu: "ص", image: require("../assets/suad.jpg") },
//   { urdu: "ط", image: require("../assets/taay.jpg") },
// ];


//   const [unlockedAlphabets, setUnlockedAlphabets] = useState(
//     Array(urduAlphabets.length).fill(false)
//   );

//   const [loading, setLoading] = useState(true);

//   const fetchProgress = async (uid) => {
//     try {
//       const docRef = doc(db, "progress", uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setUnlockedAlphabets(docSnap.data().unlocked || [true, ...Array(urduAlphabets.length - 1).fill(false)]);
//       } else {
//         // First time user
//         const initial = [true, ...Array(urduAlphabets.length - 1).fill(false)];
//         await setDoc(docRef, { unlocked: initial });
//         setUnlockedAlphabets(initial);
//       }
//     } catch (error) {
//       console.error("Error fetching progress:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateProgress = async (uid, index) => {
//     const updated = [...unlockedAlphabets];
//     updated[index] = true;
//     if (index + 1 < updated.length) {
//       updated[index + 1] = true;
//     }
//     setUnlockedAlphabets(updated);

//     const docRef = doc(db, "progress", uid);
//     await updateDoc(docRef, { unlocked: updated });
//   };

//   const resetProgress = async () => {
//     const uid = auth.currentUser?.uid;
//     if (!uid) return;

//     const resetState = [true, ...Array(urduAlphabets.length - 1).fill(false)];
//     await setDoc(doc(db, "progress", uid), { unlocked: resetState });
//     setUnlockedAlphabets(resetState);
//   };

//   useEffect(() => {
//     const uid = auth.currentUser?.uid;
//     if (uid) {
//       fetchProgress(uid);
//     }
//   }, []);

//   useEffect(() => {
//     const uid = auth.currentUser?.uid;
//     if (result === "correct" && index !== undefined && uid) {
//       updateProgress(uid, index);
//     }
//   }, []);

//   const handlePractice = (idx) => {
//     if (unlockedAlphabets[idx]) {
//       navigate("/practise", {
//         state: {
//           letter: urduAlphabets[idx].name,
//           index: idx,
//           letterImage: urduAlphabets[idx].image,
//         },
//       });
//     }
//   };

//   const progressPercentage =
//     (unlockedAlphabets.filter(Boolean).length / urduAlphabets.length) * 100;

//   if (loading) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="p-4">
//       <button
//         onClick={resetProgress}
//         className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//       >
//         Reset Progress
//       </button>

//       <div className="w-full bg-gray-300 rounded-lg overflow-hidden mb-4">
//         <div
//           className="bg-green-500 text-xs text-white text-center py-1 transition-all duration-500"
//           style={{ width: `${progressPercentage}%` }}
//         >
//           {Math.round(progressPercentage)}% Learned
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-4">
//         {urduAlphabets.map((letter, idx) => (
//           <div key={idx} className="border-black border-4">
//             <div className="flex flex-col items-center">
//               <img
//                 src={letter.image}
//                 alt={letter.name}
//                 className={`w-56 h-56 object-fit ${
//                   unlockedAlphabets[idx] ? "" : "opacity-50"
//                 }`}
//               />
//               <button
//                 onClick={() => handlePractice(idx)}
//                 className={`w-56 p-4 text-2xl font-bold border rounded ${
//                   unlockedAlphabets[idx]
//                     ? "bg-yellow-200 text-black hover:scale-105"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//                 disabled={!unlockedAlphabets[idx]}
//               >
//                 {letter.name}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AlphabetPage;