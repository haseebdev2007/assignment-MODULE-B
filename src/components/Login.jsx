import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const goSignUp = () => {
    navigate("/signup");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // ⭐ FIXED LOGIN FUNCTION (NO REFRESH)
  const handleLogin = async (e) => {
    e.preventDefault(); // stop form refresh

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      alert("start game");
      navigate("/startgame"); // navigate to game page
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-image"></div>

      <div className="right-form">
        <div className="login-container">
          <h2>Login</h2>

          {/* ⭐ ADD onSubmit SO LOGIN WORKS WITHOUT RELOADING */}
          <form className="login-form" onSubmit={handleLogin}>
            
            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-field">
              <label>Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="eye-icon" onClick={togglePassword}>
                {showPassword ? "👁️" : "👁‍🗨️"}
              </span>
            </div>

            <div className="remember-me">
              <input 
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* ⭐ type="submit" works now because we used e.preventDefault() */}
              <button type="submit" className="button-primary">Login</button>

              <span>or</span>

              <button type="button" className="button-secondary" onClick={goSignUp}>
                Signup
              </button>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}




// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./StartGame.css";
// export default function StartGameSlide() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/startgame"); 
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="slide-container">
//       <div className="slide-box">
//         <h1 className="slide-title">Please Wait...</h1>
//         <p className="slide-subtitle">Game is starting within 5 seconds</p>
//       </div>
//     </div>
//   );
// }