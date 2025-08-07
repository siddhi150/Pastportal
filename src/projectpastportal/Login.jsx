
// export default Login;
// Login.jsx 

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase"; // ✅ Adjust path if needed


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (username === "" || password === "") {
      setMessage("All fields are required.");
      return;
    }

    const user = storedUsers.find(user => user.username === username && user.password === password);
    if (user) {
      onLogin(username);
      setMessage("Login successful!");

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    onLogin(user.displayName); // or user.email
    setMessage("Google login successful!");

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  } catch (error) {
    console.error("Google login failed:", error);
    setMessage("Google login failed.");
  }
};


  return (
    <div className="login-page"> {/* ✅ Page wrapper */}
      <div className="map-background"></div> {/* ✅ Animated background */}
      
      <div className="login-container">
        <h2>Welcome Back to PastPortals</h2>
        <p>Please log in to continue exploring the mysteries of time and innovation</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
        <h3>Log In</h3>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="show-pass" onClick={togglePassword}>Show</span>
          </div>
        </div>

        <button onClick={validateLogin}>Log In</button>
        {message && <div id="message">{message}</div>}

        <hr />
        <p>Or log in with</p>

        <button className="social-btn" onClick={handleGoogleLogin}>
  <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
  Continue with Google
</button>
        {/* <button className="social-btn">
          <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
          Continue with Facebook
        </button> */}

        <div className="signup-prompt">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;