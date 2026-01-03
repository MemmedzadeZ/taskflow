import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import {
  registerUser,
  loginUser,
  createUser,
} from "../Functions/UserEntryFunctions";
import { Link } from "react-router-dom";
import welcomejson from "../animations/welcome.json";
import Lottie from "lottie-react";
import ErrorSpan from "../StyledComponent/ErrorComponents";
import OTPInput from "./OTP";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchConfirmPassword,
  fetchEmailConfirmation,
  fetchResetPassword,
} from "../utils/fetchUtils/profileUtils";
import { fetchNewRecentActivity } from "../utils/fetchUtils/notificationUtils";

function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [infoDetails, setInfoDetail] = useState(false);
  const [reqStep, setReqStep] = useState(1);
  const [confirmcode, setConfirmcode] = useState("");
  const [step, setStep] = useState(1);
  // const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleOtpMatch = (isMatch) => {
    if (isMatch) {
      toast.success("OTP Verified Successfully!");
      handleSkipStep();
    } else {
      toast.error("OTP did not match.");
    }
  };

  const handleEmailConfirm = (isMatch) => {
    if (isMatch) {
      toast.success("OTP Verified Successfully!");
      setIsLogin(true);
      setReqStep(0);
      createUser(firstname, lastname, email, password, username);
    } else {
      toast.error("OTP did not match.");
    }
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsForgotPassword(false);
    setStep(1);
  };

  const toggleInfoDetail = () => {
    setInfoDetail(!infoDetails);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setIsForgotPassword(false);
    setStep(1);
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setStep(1);
  };
  const handleLogin = async (e) => {
    loginUser(e, username, password);
    const activityData = {
      text: "User logged in.",
      type: "login",
    };

    await fetchNewRecentActivity(activityData);
  };

  const handleSkipStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handleRegister = async (e) => {
    if (
      registerUser(
        e,
        email,
        firstname,
        lastname,
        username,
        password,
        confirmPassword
      )
    ) {
      console.log("step set to 2");
      const result = await fetchEmailConfirmation(email);
      if (result) {
        toast.success(result.message);
        setReqStep(2);
      } else {
        toast.error("Something went wrong. Try again later!");
      }
    } else {
      console.log("registerUser returned false");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      $("#new-confirm-password").text("Passwords Should Match!");
    }
    const payload = {
      email: email,
      newPassword: newPassword,
    };
    const data = await fetchResetPassword(payload);
    if (data) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    setIsForgotPassword(false);
    setIsLogin(true);
  };

  const handleEmailCheck = async (e) => {
    e.preventDefault();
    document.getElementById("email-input-fp").disabled = true;

    console.log(email);
    const data = await fetchConfirmPassword(email);
    if (data) {
      toast.success(data.message);
      handleSkipStep();
    } else {
      toast.error("Something went wrong. Try again later!");
      document.getElementById("email-input-fp").disabled = false;
    }
  };

  return (
    <div className="div">
      <grid>
        <ToastContainer />

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
              style={{ display: "none" }}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin && !isForgotPassword}
              onChange={handleSignupClick}
              style={{ display: "none" }}
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
                onSubmit={(e) => handleLogin(e)}
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
                  <a
                    onClick={handleForgotPasswordClick}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot password?
                  </a>
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
                  handleEmailCheck(e);
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
                    id="email-input-fp"
                    className="btn btn-primary"
                    type="submit"
                    value="Next"
                  />
                </div>
              </form>
            )}

            {isForgotPassword && step === 2 && (
              <div className="confirmation-message">
                <OTPInput onMatch={handleOtpMatch} email={email}></OTPInput>
              </div>
            )}

            {isForgotPassword && step === 3 && (
              <form
                className="forgot-password"
                id="forgot-password-form"
                onSubmit={handleResetPassword}
              >
                <div className="field">
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    required
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                  <ErrorSpan id="new-confirm-password"></ErrorSpan>
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
            {!isLogin && !isForgotPassword && reqStep === 1 && (
              <form
                className="signup"
                id="signup-form"
                onSubmit={(e) => handleRegister(e)}
              >
                <div id="email-div" className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ErrorSpan id="email-span"></ErrorSpan>
                </div>

                <div id="firstname-div" className="field">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <ErrorSpan id="firstname-span"></ErrorSpan>
                </div>

                <div id="lastname-div" className="field">
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <ErrorSpan id="lastname-span"></ErrorSpan>
                </div>

                <div id="username-div" className="field">
                  <input
                    type="text"
                    placeholder="Username "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <ErrorSpan id="username-span"></ErrorSpan>
                </div>

                <div id="password-div" className="field">
                  <button
                    onClick={() => toggleInfoDetail()}
                    style={{
                      backgroundColor: "transparent",
                      width: "10px",
                      height: "15px",
                      borderColor: "transparent",
                    }}
                  >
                    <img
                      src="./images/icon/info.png"
                      alt="info"
                      style={{ width: "15px", height: "15px" }}
                    />
                  </button>
                  {infoDetails ? (
                    <div className="password-info-details">
                      <p>
                        Password MUST include at least one uppercase letter.
                      </p>
                      <p>Password MUST be longet than 6 symbols.</p>
                      <p>Password MUST include at least one symbol.</p>
                      <p>Password MUST include at least one number.</p>
                    </div>
                  ) : null}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <ErrorSpan id="password-span"></ErrorSpan>
                </div>
                <div
                  id="confirmPassword-div"
                  className="field"
                  style={{ marginTop: "4vh" }}
                >
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <ErrorSpan id="confirmPassword-span"></ErrorSpan>
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
            {/* Confirm Email */}
            {!isLogin && !isForgotPassword && reqStep === 2 && (
              <OTPInput onMatch={handleEmailConfirm} email={email}></OTPInput>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
