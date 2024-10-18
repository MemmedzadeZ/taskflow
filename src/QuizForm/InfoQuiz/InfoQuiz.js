import React, { useState } from "react";
import "./InfoQuiz.css"; // CSS faylını əlavə et
import { Link } from "react-router-dom";

function InfoQuiz() {
  const [selectedOption, setSelectedOption] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>What field do you want to work in?</h2>
      <div className="options-grid">
        {[
          "IT (Programming, Systems)",
          "Marketing",
          "Design (Graphic, UI/UX)",
          "Finance",
          "Human Resources",
          "Software Programming",
          "Backend Developer",
          "Frontend Developer",
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

      <Link to="/quiztrade">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Link>
    </form>
  );
}

export default InfoQuiz;
