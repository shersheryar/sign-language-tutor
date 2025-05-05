// // import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Signup from "./Components/auth/register/Signup";
// import Signin from "./Components/auth/login/Signin";
// import Home from "./Home";
// import Navbar from "./Components/header/Navbar";
// import Learnpage from "./Learnpage";
// import Practise from "./Components/Practise";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { AuthProvider, useAuth } from "./contexts/authContext";

// // ✅ Protect Routes Based on Authentication
// const ProtectedRoute = ({ element }) => {
//   const { userLoggedIn } = useAuth();
//   return userLoggedIn ? element : <Navigate to="/signin" replace />;
// };

// function App() {
//   const location = useLocation(); // ✅ Get current route
//   const hideNavbarRoutes = ["/signin", "/signup"]; // ✅ Define routes where Navbar should be hidden

//   return (
//     <AuthProvider>
//       {/* ✅ Show Navbar only if not on Signin or Signup page */}
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

//       <Routes>
//         {/* Redirect based on authentication */}
//         <Route path="/" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/learn" element={<ProtectedRoute element={<Learnpage />} />} />
//         <Route path="/practise" element={<ProtectedRoute element={<Practise />} />} />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;



import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Signup from "./Components/auth/register/Signup";
import Signin from "./Components/auth/login/Signin";
import Home from "./Home";
import Navbar from "./Components/header/Navbar";
import Learnpage from "./Learnpage";
import Practise from "./Components/Practise";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider, useAuth } from "./contexts/authContext";

// ✅ Protect Routes Based on Authentication
const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? children : <Navigate to="/signin" replace />;
};

function App() {
  const location = useLocation(); // ✅ Get current route
  const hideNavbarRoutes = ["/signin", "/signup"]; // ✅ Define routes where Navbar should be hidden

  return (
    <AuthProvider>
      {/* ✅ Show Navbar only if not on Signin or Signup page */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/learn" element={<ProtectedRoute><Learnpage /></ProtectedRoute>} />
        <Route path="/practise" element={<ProtectedRoute><Practise /></ProtectedRoute>} />

        {/* ✅ Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
