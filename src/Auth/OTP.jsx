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
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
              width: "60px",
              height: "60px",
              textAlign: "center",
              fontSize: "24px",
              borderRadius: "40px",
              border: "1px solid #ccc",
              outline: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
          marginTop: "16px",
          padding: "10px 20px",
          borderRadius: "40px",
          backgroundColor: otp.includes("") ? "#ddd" : "#6852ff",
          color: otp.includes("") ? "#aaa" : "#fff",
          border: "none",
          cursor: otp.includes("") ? "not-allowed" : "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInput;
