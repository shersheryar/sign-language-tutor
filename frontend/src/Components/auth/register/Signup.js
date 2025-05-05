// import React , {useState } from "react";
// import { useNavigate, Link, Navigate } from "react-router-dom"




// const SignUp = () => {
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Add your sign-up logic here
//     navigate("/signin"); // Redirect to Sign In page
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div className="w-1/2 bg-white flex items-center justify-center">
//         <img
//           src="https://www.tailwindtap.com/assets/common/marketing.svg"
//           alt=""
//           className="w-3/4"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 bg-white flex flex-col justify-center p-16">
//         <h2 className="text-3xl font-bold text-black mb-4">Student Sign up</h2>
//         <p className="text-gray-500 mb-8">
//           Hey enter your details to create your account
//         </p>
//         <form onSubmit={handleSignUp}>
     
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//           />
  
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center"
//           >
//             <i className="fas fa-user-plus mr-2"></i> Sign Up
//           </button>
//         </form>
//         <p className="text-gray-500 text-center mt-4">
//           Already have an account?{" "}
//           <a href="/signin" className="text-blue-600">
//             Sign in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
// import { useAuth } from "../../../contexts/authContext";
import { useAuth } from "../../../contexts/authContext";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth"; // Ensure correct Firebase imports

const SignUp = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth(); // Access authentication context

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle email/password signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error

    // Validate passwords
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/home"); // Redirect after successful signup
    } catch (error) {
      setErrorMessage(error.message);
      setIsRegistering(false);
    }
  };

  // Handle Google signup
  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      navigate("/home"); // Redirect after successful Google signup
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Redirect if user is already logged in
  if (userLoggedIn) return <Navigate to="/home" replace={true} />;

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img
          src="https://www.tailwindtap.com/assets/common/marketing.svg"
          alt="Signup Illustration"
          className="w-3/4"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-16">
        <h2 className="text-3xl font-bold text-black mb-4">Student Sign Up</h2>
        <p className="text-gray-500 mb-8">Enter your details to create an account</p>

        {/* Signup Form */}
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />
          
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />
          
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />

          {errorMessage && <p className="text-red-600 font-bold">{errorMessage}</p>}

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center ${
              isRegistering ? "bg-gray-300 cursor-not-allowed" : "hover:bg-blue-700 transition"
            }`}
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-red-700 transition"
        >
          <i className="fab fa-google mr-2"></i> Sign Up with Google
        </button>

        <p className="text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

