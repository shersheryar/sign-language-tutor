// import React from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here (if needed)
//     navigate("/home"); // Redirect to Home page
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div className="w-1/2 bg-blue-50 flex items-center justify-center">
//         <img
//           src="https://www.tailwindtap.com/assets/common/marketing.svg"
//           alt="Sign In Illustration"
//           className="w-3/4"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 bg-white flex flex-col justify-center p-16">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign in with</h2>

//         <div className="flex items-center mb-8">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500">Or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg p-3 mb-4"
//           />
//           <div className="flex items-center justify-between mb-4">
//             <label className="flex items-center">
//               <input type="checkbox" className="form-checkbox" />
//               <span className="ml-2 text-gray-700">Remember me</span>
//             </label>
//             <a href="/forgot-password" className="text-blue-600">
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg"
//           >
//             LOGIN
//           </button>
//         </form>
        
//         <p className="text-gray-500 text-center mt-4">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-red-600">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







// import React, { useState } from "react";
// import { Navigate, Link, useNavigate } from "react-router-dom";
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";
// import { useAuth } from "../../../contexts/authContext";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { userLoggedIn } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSigningIn, setIsSigningIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle email & password login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithEmailAndPassword(email, password);
//         navigate("/home"); // Redirect to Home page
//       } catch (error) {
//         setErrorMessage(error.message);
//       }
//       setIsSigningIn(false);
//     }
//   };

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     setErrorMessage("");
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithGoogle();
//         navigate("/home");
//       } catch (error) {
//         setErrorMessage(error.message);
//       }
//       setIsSigningIn(false);
//     }
//   };

//   return (
//     <>
//       {userLoggedIn && <Navigate to={"/home"} replace={true} />}

//       <main className="w-full h-screen flex self-center place-content-center place-items-center">
//         <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
//           <div className="text-center mb-6">
//             <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Sign in to Your Account</h3>
//           </div>

//           {/* Social Login Button */}
//           <button
//             onClick={handleGoogleSignIn}
//             disabled={isSigningIn}
//             className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
//           >
//             <i className="fab fa-google"></i>
//             <span>Sign in with Google</span>
//           </button>

//           {/* Separator */}
//           <div className="flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-4 text-gray-500">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           {/* Email & Password Form */}
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-600 font-bold">Email</label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600 font-bold">Password</label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
//               />
//             </div>

//             {/* Error Message */}
//             {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}

//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2 text-gray-700">Remember me</span>
//               </label>
//               <Link to={"/forgot-password"} className="text-blue-600 hover:underline font-bold">
//                 Forgot password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               disabled={isSigningIn}
//               className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
//                 isSigningIn ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
//               }`}
//             >
//               {isSigningIn ? "Signing In..." : "Login"}
//             </button>

//             <div className="text-sm text-center">
//               Don’t have an account?{" "}
//               <Link to={"/signup"} className="text-center text-sm hover:underline font-bold">
//                 Register
//               </Link>
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// };

// export default SignIn;















import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignIn = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle email & password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/home"); // Redirect to Home page
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsSigningIn(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setErrorMessage("");
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/home");
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsSigningIn(false);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <div className="flex h-screen">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center">
          <img
            src="https://www.tailwindtap.com/assets/common/marketing.svg"
            alt="Sign In Illustration"
            className="w-3/4"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white flex flex-col justify-center p-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign in to Your Account</h2>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isSigningIn}
            className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 mb-4"
          >
            <i className="fab fa-google"></i>
            <span>Sign in with Google</span>
          </button>

          {/* Separator */}
          <div className="flex items-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email & Password Form */}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
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

            {/* Error Message */}
            {errorMessage && <p className="text-red-600 font-bold mb-4">{errorMessage}</p>}

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <Link to={"/forgot-password"} className="text-blue-600 font-bold">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full text-white py-3 rounded-lg ${
                isSigningIn
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 transition duration-300"
              }`}
            >
              {isSigningIn ? "Signing In..." : "LOGIN"}
            </button>
          </form>

          <p className="text-gray-500 text-center mt-4">
            Don’t have an account?{" "}
            <Link to={"/signup"} className="text-red-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
