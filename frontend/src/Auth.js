// Auth.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {isLogin ? <Login /> : <Signup />}
          <p>
            {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
            <Link to="#" onClick={handleToggle}>
              {isLogin ? 'Signup' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}