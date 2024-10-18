import React, { useState } from "react";
import "./Auth.css";
import { registerUser } from "../Functions/UserEntryFunctions";
import { Link } from "react-router-dom";
import welcomejson from "../animations/welcome.json";

import Lottie from "lottie-react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsForgotPassword(false);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setIsForgotPassword(false);
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  return (
    <div className="div">
      <grid>
        <div className="titlE">
          <h1 className="titleH2">
            {isLogin ? "Log In to TaskFlow" : "Sign Up to TaskFlow"}
          </h1>
          <h5>Welcome back! We missed you.</h5>
        </div>

        <div className="lottie-welcome">
          <Lottie animationData={welcomejson} loop={true} />
        </div>
      </grid>
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? "login" : "signup"}`}>
            {isLogin ? "Login Form" : "Signup Form"}
          </div>
        </div>

        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLogin && !isForgotPassword}
              onChange={handleLoginClick}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin && !isForgotPassword}
              onChange={handleSignupClick}
            />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {/* Login Form */}
            {isLogin && !isForgotPassword && (
              <form className="login" id="login-form">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a onClick={handleForgotPasswordClick}>Forgot password?</a>
                </div>
                <div className="field btn">
                  {/* <div className="btn-layer"></div> */}

                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div className="signup-link">
                  Not a member? <a onClick={handleSignupClick}>Signup now</a>
                </div>
              </form>
            )}

            {/* Forgot Password Form */}
            {isForgotPassword && (
              <form className="forgot-password" id="forgot-password-form">
                <div className="field">
                  <input type="password" placeholder="New Password" required />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    required
                  />
                </div>
                <div className="field btn">
                  <input
                    className="btn-layer"
                    type="submit"
                    value="Reset Password"
                  />
                </div>
              </form>
            )}

            {/* Signup Form */}
            {!isLogin && !isForgotPassword && (
              <form
                className="signup"
                id="signup-form"
                onSubmit={(e) =>
                  registerUser(e, email, password, confirmPassword, username)
                }
              >
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field">
                  <input
                    type="text"
                    placeholder="Username "
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {/* <div className="btn-layer"></div> */}
                <Link to="/quiz">
                  <div className="field btn">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Signup"
                    />
                  </div>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
