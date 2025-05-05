import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (if needed)
    navigate("/home"); // Redirect to Home page
  };

  return (
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign in with</h2>
        <div className="flex space-x-4 mb-8">
          <button className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i className="fab fa-facebook-f text-sm"></i>
          </button>
          <button className="bg-blue-700 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i className="fab fa-twitter text-sm"></i>
          </button>
          <button className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i className="fab fa-linkedin-in text-sm"></i>
          </button>
        </div>
        <div className="flex items-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-blue-600">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            LOGIN
          </button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-600">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
