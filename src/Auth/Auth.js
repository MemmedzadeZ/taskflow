import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Auth.css";
import { registerUser, loginUser } from "../Functions/UserEntryFunctions";
import { Link } from "react-router-dom";
import welcomejson from "../animations/welcome.json";
import Lottie from "lottie-react";
import ErrorSpan from "../StyledComponent/ErrorComponents";

function Auth() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmcode, setConfirmcode] = useState("");
  const [step, setStep] = useState(1); // Track the step in forgot password flow

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsForgotPassword(false);
    setStep(1); // Reset step
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setIsForgotPassword(false);
    setStep(1); // Reset step
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setStep(1); // Start from step 1
  };

  const handleSkipStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    setIsForgotPassword(false);
    setIsLogin(true);
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
              style={{ display: "none" }} // Hide the input
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin && !isForgotPassword}
              onChange={handleSignupClick}
              style={{ display: "none" }} // Hide the input
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
              <form
                className="login"
                id="login-form"
                onSubmit={(e) => loginUser(e, username, password)}
              >
                <div id="login-username-div" className="field">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <ErrorSpan id="login-username-span"></ErrorSpan>
                </div>
                <div id="login-password-div" className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pass-link">
                  <a onClick={handleForgotPasswordClick}>Forgot password?</a>
                </div>
                <div className="field btn">
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

            {/* Forgot Password Flow */}
            {isForgotPassword && step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSkipStep();
                }}
              >
                <div className="field">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="field btn">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Skip"
                  />
                </div>
              </form>
            )}

            {isForgotPassword && step === 2 && (
              <div className="confirmation-message">
                <p>
                  Skip to password reset Email sent with confirmation code.
                  Please check your inbox.
                </p>
                <div className="field">
                  <input
                    type="code"
                    placeholder="Confirmation code"
                    value={confirmcode}
                    onChange={(e) => setConfirmcode(e.target.value)}
                    required
                  />
                </div>
                <div className="field btn">
                  <input
                    className="btn btn-primary"
                    type="button"
                    value="Skip"
                    onClick={handleSkipStep}
                  />
                </div>
              </div>
            )}

            {isForgotPassword && step === 3 && (
              <form
                className="forgot-password"
                id="forgot-password-form"
                onSubmit={handleResetPassword}
              >
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
                    className="btn btn-primary"
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
                  registerUser(
                    e,
                    email,
                    firstname,
                    lastname,
                    username,
                    password,
                    confirmPassword
                  )
                }
              >
                <div id="email-div" className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div id="firstname-div" className="field">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div id="lastname-div" className="field">
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div id="username-div" className="field">
                  <input
                    type="text"
                    placeholder="Username "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div id="password-div" className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div id="confirmPassword-div" className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="field btn">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <div className="login-link">
                  Already a member? <a onClick={handleLoginClick}>Login now</a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
