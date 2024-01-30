import React from 'react';
import '../Components/Result.css';
import { NavLink, useLocation } from 'react-router-dom';

function FinalResultComponent() {
  const locn = useLocation();
  const score = locn.state.score;
  const attempted = locn.state.attempted;
  const questionAttempt = attempted.length;

  return (
    <div className='mainContainer'>
      <h1 className='result'>Result</h1>
      <div className='resultPageContainer'>
        <div className='statements'>
          <h2>
              {score < 6
                ? 'You need more practice!'
                : score >= 6 && score < 11
                ? 'Good job You can do better'
                : 'Great job Keep it up'}
          </h2>
        </div>
        <div className='score'>
          <h1>
            <strong>Your score is {Math.round((score / 15) * 100)}%</strong>
          </h1>
        </div>
        <div className='questionCount'>
          <div className='questionNumber'>
            <div>
              <h3>
                Total number of questions
              </h3>
            </div>
            <div>
              <h3>
                <strong> 15 </strong>
                
              </h3>
            </div>
          </div>
          <div className='questionNumber'>
            <div>
              <h3>
                Number of attempted questions
              </h3>
            </div>
            <div>
              <h3>
                <strong>{questionAttempt}</strong>
              </h3>
            </div>
          </div>
          <div className='questionNumber'>
            <div>
              <h3>
                Number of correct answers
              </h3>
            </div>
              <h3>
                <strong>{score}</strong>
              </h3>
          </div>
          <div className='questionNumber'>
              <h3>
                Number of wrong answers
              </h3>
              <h3>
                <strong>{questionAttempt - score}</strong>
              </h3>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div>
          <NavLink to='/Quiz'>
            <button className='playAgainButton'>Play Again</button>
          </NavLink>
        </div>
        <div>
          <NavLink to='/'>
            <button className='backButton'>Back to home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FinalResultComponent;