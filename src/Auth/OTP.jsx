import React, { useState } from "react";

const OTPInput = ({ length = 4, onMatch, email }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [error, setError] = useState("");

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredCode = otp.join("");

    var response = await fetch(
      "https://localhost:7157/api/Profile/verify-code",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Code: enteredCode, Email: email }),
      }
    );

    var data = await response.json();

    if (data.result) {
      setError("");
      onMatch(true);
    } else {
      setError("Incorrect OTP. Please try again.");
      onMatch(false);
    }
  };

  const handleBackspace = (element, index) => {
    if (!element.value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) =>
              e.key === "Backspace" && handleBackspace(e.target, index)
            }
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
            }}
          />
        ))}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={otp.includes("")}
        className="btn btn-primary"
        style={{
          cursor: otp.includes("") ? "not-allowed" : "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInput;
