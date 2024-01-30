import React, { useState } from "react";
import "../Components/Quiz.css";
import questions from "../resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

function MainQuizComponent() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempt] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (num <= 13) {
      setNum(num + 1);
    }
  };

  const handlePrev = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleOpn = (e) => {
    if (e.target.innerText === questions[num].answer) {
      alert("Correct Answer");

      if (!attempted.includes(num)) {
        setAttempt((prevAttempted) => [...prevAttempted, num]);
        setScore((prevScore) => prevScore + 1);
      }
      handleNext();
      
    } else {
      alert("Incorrect answer");
      if (!attempted.includes(num)) {
        setAttempt((prevAttempted) => [...prevAttempted, num]);
      }
      handleNext();
    }
  };

  const handleEnd = () => {
    navigate("/Result", {state: {score, attempted}});
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit the Quiz?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="quizContainer">
      <div className="questionText">
        <h2>Question</h2>
      </div>
      <div className="pageNumber">
        <h4>{num + 1} of 15</h4>
      </div>
      <div className="question">
        <h3>{questions[num].question}</h3>
      </div>
      <div className="options">
        <div className="option-1">
          <button className="optionButton" onClick={handleOpn}>
            {questions[num].optionA}
          </button>
        </div>
        <div className="option-2">
          <button className="optionButton" onClick={handleOpn}>
            {questions[num].optionB}
          </button>
        </div>
        <div className="option-3">
          <button className="optionButton" onClick={handleOpn}>
            {questions[num].optionC}
          </button>
        </div>
        <div className="option-4">
          <button className="optionButton" onClick={handleOpn}>
            {questions[num].optionD}
          </button>
        </div>
      </div>
      <div className="actions">
        <div className="previous">
          <button className="previous-button" onClick={handlePrev}>
            Previous
          </button>
        </div>
        <div className="next">
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="quit">
          <button className="quit-button" onClick={handleQuit}>
            Quit
          </button>
        </div>
        <div className="finish">
          <button className="finish-button" onClick={handleEnd}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainQuizComponent;