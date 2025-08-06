// import React, { useState } from 'react';
// import './SignUp.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const togglePassword = () => {
//     const passwordField = document.getElementById("password");
//     passwordField.type = passwordField.type === "password" ? "text" : "password";
//   };

//   const validateSignUp = () => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!username || !email || !password) {
//       setMessage("All fields are required.");
//     } else if (username.length < 4) {
//       setMessage("Username must be at least 4 characters.");
//     } else if (!emailRegex.test(email)) {
//       setMessage("Please enter a valid email address.");
//     } else if (!passwordRegex.test(password)) {
//       setMessage("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
//     } else if (storedUsers.some(user => user.username === username)) {
//       setMessage("Username already exists. Please choose another.");
//     } else {
//       storedUsers.push({ username, email, password });
//       localStorage.setItem('users', JSON.stringify(storedUsers));
//       setMessage("Sign up successful!");

//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Welcome to PastPortals</h2>
//       <p>Create your account to explore the mysteries of time and innovation</p>
//       <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
//       <h3>Create Account</h3>

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
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <div style={{ position: 'relative' }}>
//           <input
//             type="password"
//             id="password"
//             placeholder="Min 8 chars, 1 Upper, 1 Lower, 1 Num, 1 Symbol"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span className="show-pass" onClick={togglePassword}>Show</span>
//         </div>
//       </div>

//       <button onClick={validateSignUp}>Sign Up</button>
//       {message && <div id="message">{message}</div>}

//       <hr />
//       <p>Or sign up with</p>

//       <button className="social-btn">
//         <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
//         Continue with Google
//       </button>
//       <button className="social-btn">
//         <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
//         Continue with Facebook
//       </button>

//       <div className="login-prompt">
//         <p>Already have an account? <a href="/login">Log In</a></p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
//import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase"; // adjust path if needed
import {
  getRedirectResult,
  signInWithRedirect
} from 'firebase/auth';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

  const validateSignUp = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username || !email || !password) {
      setMessage("All fields are required.");
    } else if (username.length < 4) {
      setMessage("Username must be at least 4 characters.");
    } else if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
    } else if (!passwordRegex.test(password)) {
      setMessage("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    } else if (storedUsers.some(user => user.username === username)) {
      setMessage("Username already exists. Please choose another.");
    } else {
      storedUsers.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(storedUsers));
      setMessage("Sign up successful!");
      setTimeout(() => navigate('/login'), 2000);
    }
  };

useEffect(() => {
  getRedirectResult(auth)
    .then((result) => {
      if (result?.user) {
        const user = result.user;
        console.log("User signed in with redirect:", user.email);

        // Save user info to localStorage
        localStorage.setItem("loggedInUser", user.displayName || user.email);

        // Navigate to home
        navigate("/Home");
      }
    })
    .catch((error) => {
      console.error("Redirect login failed:", error);
    });
}, [navigate]);



  const handleGoogleLogin = async () => {
  // try {
  //   const result = await signInWithPopup(auth, googleProvider);
  //   const user = result.user;
  //   onLogin(user.displayName); // or user.email
  //   setMessage("Google login successful!");
  //   setTimeout(() => {
  //     navigate('/home');
  //   }, 2000);
  // } catch (error) {
  //   setMessage("Google login failed.");
  //   console.error(error);
  // }
  signInWithRedirect(auth, googleProvider);
};

const handleFacebookLogin = async () => {
  // try {
  //   const result = await signInWithPopup(auth, facebookProvider);
  //   const user = result.user;
  //   onLogin(user.displayName); // or user.email
  //   setMessage("Facebook login successful!");
  //   setTimeout(() => {
  //     navigate('/home');
  //   }, 2000);
  // } catch (error) {
  //   setMessage("Facebook login failed.");
  //   console.error(error);
  // }

    signInWithRedirect(auth, facebookProvider)
};

  return (
    <div className="signup-page">
      {/* Optional texture background layer */}
      {/* <div className="paper-fiber-texture"></div> */}

      {/* Animated historical map layer */}
      <div className="map-background"></div>

      <div className="signup-container">
        <h2>Welcome to PastPortals</h2>
        <p>Create your account to explore the mysteries of time and innovation</p>
        <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
        <h3>Create Account</h3>

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              id="password"
              placeholder="Min 8 chars, 1 Upper, 1 Lower, 1 Num, 1 Symbol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="show-pass" onClick={togglePassword}>Show</span>
          </div>
        </div>

        <button onClick={validateSignUp}>Sign Up</button>
        {message && <div id="message">{message}</div>}

        <hr />
        <p>Or sign up with</p>

        <button className="social-btn" onClick={handleGoogleLogin}>
          <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
          Continue with Google
        </button>
        <button className="social-btn" onClick={handleFacebookLogin}>
          <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '8px' }} />
          Continue with Facebook
        </button>

        <div className="login-prompt">
          <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
