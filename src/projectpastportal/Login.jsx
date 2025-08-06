// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider, facebookProvider } from "./firebase"; // adjust path if needed


// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const validateLogin = () => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Validate input fields
//     if (username === "" || password === "") {
//       setMessage("All fields are required.");
//       return;
//     }

//     const user = storedUsers.find(user => user.username === username && user.password === password);
//     if (user) {
//       onLogin(username); // Call the onLogin function passed as a prop
//       setMessage("Login successful!");

//       // Redirect to home page after a short delay
//       setTimeout(() => {
//         navigate('/home'); // Redirect to home page after successful login
//       }, 2000);
//     } else {
//       setMessage("Invalid username or password.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;
//     onLogin(user.displayName); // or user.email
//     setMessage("Google login successful!");
//     setTimeout(() => {
//       navigate('/home');
//     }, 2000);
//   } catch (error) {
//     setMessage("Google login failed.");
//     console.error(error);
//   }
// };

// const handleFacebookLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, facebookProvider);
//     const user = result.user;
//     onLogin(user.displayName); // or user.email
//     setMessage("Facebook login successful!");
//     setTimeout(() => {
//       navigate('/home');
//     }, 2000);
//   } catch (error) {
//     setMessage("Facebook login failed.");
//     console.error(error);
//   }
// };


//   return (
//     <div className="login-container">
//       <h2>Welcome Back to PastPortals</h2>
//       <p>Please log in to continue exploring the mysteries of time and innovation</p>
//       <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
//       <h3>Log In</h3>

//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <div style={{ position: 'relative' }}>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span className="show-pass" onClick={() => {
//             const passwordField = document.getElementById("password");
//             passwordField.type = passwordField.type === "password" ? "text" : "password";
//           }}>Show</span>
//         </div>
//       </div>

//       <button onClick={validateLogin}>Log In</button>
//       {message && <div id="message">{message}</div>}

//       <hr />
//       <p>Or log in with</p>

//       <button className="social-btn" onClick={handleGoogleLogin}>
//         <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
//         Continue with Google
//       </button>
//       <button className="social-btn" onClick={handleFacebookLogin}>
//         <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
//         Continue with Facebook
//       </button>

//       <div className="signup-prompt">
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </div>

//        <style jsx>{`
//         .login-container {
//           background-color: #ffffff; /* White background for the form */
//           padding: 40px; /* Increased padding */
//           border-radius: 12px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//           width: 500px; /* Increased width */
//           text-align: center;
//           margin: 40px auto;
//           font-family: 'Arial', sans-serif; /* Consistent font */
//         }

//         .login-container h2 {
//           margin-bottom: 10px;
//           font-size: 2.5rem; /* Increased font size */
//           color: #2c3e50; /* Dark text */
//         }

//         .login-container p {
//           color: #666;
//           margin-bottom: 20px;
//           font-size: 1.5rem; /* Increased font size */
//         }

//         .form-group {
//           margin-bottom: 20px;
//           text-align: left;
//         }

//         .form-group label {
//           font-size: 1.4rem; /* Increased font size */
//           color: #2c3e50; /* Dark text */
//           display: block;
//           margin-bottom: 5px;
//         }

//         .login-container input[type="text"],
//         .login-container input[type="password"] {
//           width: 100%;
//           padding: 14px; /* Increased padding */
//           margin: 10px 0;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 1.2rem; /* Increased font size */
//         }

//         .show-pass {
//           float: right;
//           margin-top: -28px;
//           margin-right: 10px;
//           font-size: 14px;
//           cursor: pointer;
//           color: #007bff; /* Blue color for show password */
//         }

//         .login-container button {
//           width: 100%;
//           padding: 14px; /* Increased padding */
//           background-color: #eb9449; /* Amber button */
//           color: white;
//           border: none;
//           border-radius: 6px;
//           font-size: 1.5rem; /* Increased font size */
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         .login-container button:hover {
//           background-color: #d38841; /* Darker amber on hover */
//         }

//         #message {
//           margin-top: 15px;
//           font-size: 16px; /* Increased font size */
//           color: red;
//         }

//         .social-btn {
//           width: 100%;
//           padding: 14px; /* Increased padding */
//           margin: 5px 0;
//           border: 1px solid #ccc;
//           background-color: white;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//           font-size: 1.2rem; /* Increased font size */
//         }

//         .social-btn:hover {
//           background-color: #f0f0f0; /* Light gray on hover */
//         }

//         .signup-prompt {
//           margin-top: 20px;
//           font-size: 1.2rem; /* Increased font size */
//         }

//         .signup-prompt a {
//           color: #e67e22; /* Amber link */
//           text-decoration: none;
//         }

//         .signup-prompt a:hover {
//           color: #d35400; /* Darker amber on hover */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Login;
// Login.jsx 

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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

        <button className="social-btn">
          <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
          Continue with Google
        </button>
        <button className="social-btn">
          <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
          Continue with Facebook
        </button>

        <div className="signup-prompt">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;