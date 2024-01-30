import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Home.css";

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='startPage'>
        <div className='quiz-app'>
          <h3>Quiz App</h3>
        </div>
        <div className='play-second'>
          <NavLink to="/Quiz">
            <button className='play-button'>Play</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
