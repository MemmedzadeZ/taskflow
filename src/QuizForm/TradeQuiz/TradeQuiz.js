import React, { useState } from "react";
import "./TradeQuiz.css"; // CSS faylını əlavə et
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TradeQuiz() {
  const [selectedOption, setSelectedOption] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setErrorMessage(""); // Seçim edildikdə error mesajını təmizlə
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedOption) {
      // Əgər heç bir seçim edilməyibsə, xəbərdarlıq mesajını göstər
      setErrorMessage("Please select an option before submitting.");
      return;
    }
    console.log("Selected option:", selectedOption);
    fetch("https://localhost:7268/api/Quiz/Profession", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOption),
    }).then((response) => {
      if (response.ok) {
        navigate("/auth?");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>Which field are you currently working in?</h2>
      <div className="options-grid">
        {[
          "Programming",
          "Marketing",
          "Accounting",
          "Education",
          "Other (please specify)",
        ].map((option) => (
          <label key={option} className="option-label">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default TradeQuiz;
