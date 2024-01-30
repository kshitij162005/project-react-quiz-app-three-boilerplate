import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/Quiz" element={<QuizComponent/>} />
        <Route path="/Result" element={<ResultComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
