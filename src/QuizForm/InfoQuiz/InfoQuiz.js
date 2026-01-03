import React, { useState } from "react";
import "./InfoQuiz.css"; // CSS faylını əlavə et
import { useNavigate } from "react-router-dom";
import quizjson from "../../animations/tradequiz.json";
import Lottie from "lottie-react";
import { fetchOccupation } from "../../utils/fetchUtils/quizUtils";
import { fetchAddingOccupationDuringQuiz } from "../../utils/fetchUtils/profileUtils";

function InfoQuiz() {
  const [selectedOption, setSelectedOption] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    setErrorMessage(""); // Seçim edildikdə error mesajını təmizlə
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectedOption);
    if (!selectedOption) {
      // Əgər heç bir seçim edilməyibsə, xəbərdarlıq mesajını göstər
      setErrorMessage("Please select an option before submitting.");
      return;
    }
    console.log(localStorage.getItem("token"));
    console.log("Selected option:", selectedOption); //
    const response = await fetchOccupation();

    // if (response) {
    // const data = await fetchAddingOccupationDuringQuiz(selectedOption);
    navigate("/quiztrade");
    // } else {
    //   setErrorMessage("Failed to submit occupation. Please try again.");
    // }
  };

  return (
    <>
      <div className="quiz-container">
        <div className="lottie-welcomee">
          <Lottie animationData={quizjson} loop={true} />
        </div>
        <form onSubmit={handleSubmit} className="quiz-form">
          <h2>What field do you want to work in?</h2>
          <div className="options-grid">
            {[
              "IT (Programming, Systems)",
              "Design (Graphic, UI/UX)",
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

          {/* <Link to="/quiztrade"> */}
          <button type="submit" className="submit-button">
            Submit
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default InfoQuiz;
