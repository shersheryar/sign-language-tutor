// import { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Practise = () => {
//   const videoRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const letter = location.state?.letter || "";
//   const index = location.state?.index;
//   const letterImage = location.state?.letterImage; // Receiving the alphabet image

//   const [capturedImage, setCapturedImage] = useState(null);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing webcam:", error);
//       }
//     };

//     startWebcam();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const captureImage = () => {
//     setCapturedImage("captured_image_placeholder");
//     setResult(Math.random() > 0.5 ? "correct" : "incorrect");
//   };

//   const handleGoBack = () => {
//     navigate("/learn", { state: { result, index } });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

// <div className="flex flex-row justify-center items-center gap-10 h-screen">
//   {/* Left Side - video and button */}
//   <div className="flex flex-col items-center">
//     <video ref={videoRef} autoPlay playsInline className="border w-1rem h-1rem" />
//     <button onClick={captureImage} className="w-56 mt-2 p-2 bg-yellow-200 text-black rounded font-bold hover:scale-110">
//       Capture
//     </button>
//   </div>

//   {/* Right Side - Letter and Image */}
  
//   <div className="flex flex-col items-center">
//     <h1 className="text-2xl font-bold">Practise "{letter}"</h1>
//     {letterImage && <img src={letterImage} alt={letter} className="w-[50vh] h-[40vh] mt-4" />}
//   </div>
// </div>


//       {capturedImage && (
//         <div className="my-4 mb-10 font-bold">
//           <p className="text-2xl">Feedback</p>
//           <p className="w-96 p-5 bg-slate-300">Result: <strong>{result}</strong></p>
//           <button onClick={handleGoBack} className="mt-2 ml-20 p-2 bg-yellow-200 text-black rounded hover:scale-110">
//             Go Back to Alphabet Page
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practise;

// =============================================================================


// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Webcam from "react-webcam";
// import axios from "axios";

// const Practise = () => {
//   const webcamRef = useRef(null);
//   const navigate = useNavigate();
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [feedback, setFeedback] = useState(""); // Stores backend response
//   const [loading, setLoading] = useState(false); // Shows loading while processing

//   const captureImage = async () => {
//     if (!webcamRef.current) return alert("Webcam not available!");

//     // Capture image from webcam as base64
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc); // Display captured image

//     // Convert base64 to Blob
//     const blob = await fetch(imageSrc).then((res) => res.blob());

//     // Convert Blob to File format
//     const file = new File([blob], "gesture.jpg", { type: "image/jpeg" });

//     // Create FormData and append image
//     const formData = new FormData();
//     formData.append("image", file);

//     // Send to backend for prediction
//     await sendToBackend(formData);
//   };

//   const sendToBackend = async (formData) => {
//     setLoading(true); // Start loading

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/gestures/recognize/", // ✅ Update if needed
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("📨 Response from backend:", response.data);
//       setFeedback(response.data.prediction); // ✅ Display predicted letter
//     } catch (error) {
//       console.error("❌ Error sending image:", error);
//       setFeedback("Error in prediction");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
//       {/* Camera Section */}
//       <h2 className="text-2xl font-bold mb-6">Practice Your Sign</h2>
//       <div className="flex flex-col md:flex-row items-start w-full max-w-fit gap-8">
        
//         {/* Webcam Capture */}
//         <div className="rounded-lg shadow-lg border bg-white p-4 w-fit">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="rounded-lg"
//             width={500}
//             height={400}
//           />
//           <button
//             onClick={captureImage}
//             className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Capture & Predict"}
//           </button>
//         </div>

//         {/* Display Captured Image */}
//         {capturedImage && (
//           <div className="mt-6 text-center h-full">
//             <h3 className="text-lg font-medium mb-2">Captured Image:</h3>
//             <img
//               src={capturedImage}
//               alt="Captured"
//               className="border rounded-lg shadow-lg"
//             />
//           </div>
//         )}
//       </div>

//       {/* Feedback Section */}
//       <div className="w-1/2 mt-5 p-8">
//         <h3 className="text-2xl font-bold mb-3">Feedback</h3>
//         <div className="border-2 p-8 rounded-lg shadow-lg bg-white text-center">
//           {loading ? (
//             <p className="text-blue-500 font-semibold">Processing...</p>
//           ) : feedback ? (
//             <p className="text-lg font-semibold">{feedback}</p>
//           ) : (
//             <p className="text-gray-500">Waiting for result...</p>
//           )}
//         </div>
//       </div>

//       {/* Go Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default Practise;


// import { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const Practise = () => {
//   const videoRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const letter = location.state?.letter || "";
//   const index = location.state?.index;
//   const letterImage = location.state?.letterImage;

//   const [capturedImage, setCapturedImage] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false); // Show loading state

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing webcam:", error);
//       }
//     };

//     startWebcam();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   // Function to capture image from webcam
//   const captureImage = async () => {
//     const video = videoRef.current;
//     if (!video) return;

//     // Create a canvas to capture the frame
//     const canvas = document.createElement("canvas");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext("2d");

//     // Draw video frame to canvas
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Convert canvas to image data (base64)
//     const imageSrc = canvas.toDataURL("image/jpeg");
//     setCapturedImage(imageSrc); // Store captured image

//     // Convert base64 to Blob
//     const blob = await fetch(imageSrc).then(res => res.blob());

//     // Convert Blob to File
//     const file = new File([blob], "gesture.jpg", { type: "image/jpeg" });

//     // Send to backend
//     await sendToBackend(file);
//   };

//   // Function to send captured image to the backend
//   const sendToBackend = async (imageFile) => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("image", imageFile);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/gestures/recognize/", // ✅ Adjust API endpoint if needed
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("📨 Response from backend:", response.data);
//       setResult(response.data.prediction); // ✅ Display predicted letter
//     } catch (error) {
//       console.error("❌ Error sending image:", error);
//       setResult("Error in prediction");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to navigate back
//   const handleGoBack = () => {
//     navigate("/learn", { state: { result, index } });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="flex flex-row justify-center items-center gap-10 h-screen">
        
//         {/* Left Side - Webcam and Capture Button */}
//         <div className="flex flex-col items-center">
//           <video ref={videoRef} autoPlay playsInline className="border w-1rem h-1rem" />
//           <button
//             onClick={captureImage}
//             className="w-56 mt-2 p-2 bg-yellow-200 text-black rounded font-bold hover:scale-110"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Capture & Predict"}
//           </button>
//         </div>

//         {/* Right Side - Letter and Image */}
//         <div className="flex flex-col items-center">
//           <h1 className="text-2xl font-bold">Practice "{letter}"</h1>
//           {letterImage && <img src={letterImage} alt={letter} className="w-[50vh] h-[40vh] mt-4" />}
//         </div>
//       </div>

//       {/* Feedback Section */}
//       {capturedImage && (
//         <div className="my-4 mb-10 font-bold text-center">
//           <p className="text-2xl">Feedback</p>
//           <p className="w-96 p-5 bg-slate-300">
//             Result: <strong>{loading ? "Processing..." : result}</strong>
//           </p>
          
       

//           {/* Go Back Button */}
//           <button
//             onClick={handleGoBack}
//             className="mt-4 p-2 bg-yellow-200 text-black rounded font-bold hover:scale-110"
//           >
//             Go Back to Alphabet Page
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practise;


// =================================================================================================


import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Practise = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const letter = location.state?.letter || ""; // Expected letter
  const index = location.state?.index;
  const letterImage = location.state?.letterImage;

  const [capturedImage, setCapturedImage] = useState(null);
  const [backendPrediction, setBackendPrediction] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // Show loading state

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Function to capture image from webcam
  const captureImage = async () => {
    const video = videoRef.current;
    if (!video) return;

    // Create a canvas to capture the frame
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to image data (base64)
    const imageSrc = canvas.toDataURL("image/jpeg");
    setCapturedImage(imageSrc); // Store captured image

    // Convert base64 to Blob
    const blob = await fetch(imageSrc).then(res => res.blob());

    // Convert Blob to File
    const file = new File([blob], "gesture.jpg", { type: "image/jpeg" });

    // Send to backend
    await sendToBackend(file);
  };

  // Function to send captured image to the backend
  const sendToBackend = async (imageFile) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/gestures/recognize/", // ✅ Adjust API endpoint if needed
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("📨 Response from backend:", response.data);
      const predictedLetter = response.data.prediction || "Unknown"; // Extract prediction

      setBackendPrediction(predictedLetter); // Store the backend response
      
      //  Check if predicted letter matches the expected letter
      if (predictedLetter.toLowerCase() === letter.toLowerCase()) {
        setResult("correct");
      } else {
        setResult("incorrect");
      }
    } catch (error) {
      console.error("Error sending image:", error);
      setResult("Error in prediction");
    } finally {
      setLoading(false);
    }
  };

  // Function to navigate back
  const handleGoBack = () => {
    navigate("/learn", { state: { result, index } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row justify-center items-center gap-10 h-screen">
        
        {/* Left Side - Webcam and Capture Button */}
        <div className="flex flex-col items-center">
          <video ref={videoRef} autoPlay playsInline className="border w-1rem h-1rem" />
          <button
            onClick={captureImage}
            className="w-56 mt-2 p-2 bg-yellow-200 text-black rounded font-bold hover:scale-110"
            disabled={loading}
          >
            {loading ? "Processing..." : "Capture & Predict"}
          </button>
        </div>

        {/* Right Side - Letter and Image */}
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-2xl font-bold">Practice "{letter}"</h1>
          {/* <h1 className="text-2xl font-bold">Practise "{letter}"</h1> */}
          {letterImage && <img src={letterImage} alt={letter} className="w-[50vh] h-[40vh] mt-4" />}
        </div>
      </div>

      {/* Feedback Section */}
      {capturedImage && (
        <div className="my-4 mb-10 font-bold text-center">
          <p className="text-2xl">Feedback</p>
          <p className="w-96 p-5 bg-slate-300 text-xl flex items-center gap-2">
  Result: <strong className="capitalize">{loading ? "Processing..." : result}</strong>
  {!loading && result === "correct" && <span className="text-7xl">👍</span>}
  {!loading && result === "incorrect" && <span className="text-7xl">👎</span>}
</p>

          {backendPrediction && (
            <p className="w-96 p-5 bg-gray-200">
              <strong>Model Predicted:</strong> {backendPrediction}
            </p>
          )}

          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="mt-4 p-2 bg-yellow-200 text-black rounded font-bold hover:scale-110"
          >
            Go Back to Alphabet Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Practise;
