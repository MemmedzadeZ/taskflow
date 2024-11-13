import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page not found</h2>
        <p className="error-description">
          We can't seem to find the page you're looking for.
        </p>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
      <div className="animation-container">
        <img
          src="/path-to-your-image/astronaut.png"
          alt="Astronaut floating"
          className="floating-image"
        />
      </div>
    </div>
  );
};

export default Error;
