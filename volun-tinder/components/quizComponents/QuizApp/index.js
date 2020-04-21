import React, { useState } from "react";

import Quiz from "../Quiz/index";
import QuizResults from "../QuizResults";

function QuizApp() {
  //state that holds the highest-counted category at end of quiz:
  const [highestCat, setHighestCat] = useState("");
  //state to check if quiz is done:
  const [quizOver, setQuizOver] = useState(false);
  //state to hide quiz results and show swipy cards
  const [showCards, setShowCards] = useState(false);

  function handleClick() {
    setShowCards(true);
    console.log("I'm working!");
  }

  return (
    <div className="App">
      {!quizOver && (
        <Quiz setHighestCat={setHighestCat} setQuizOver={setQuizOver} />
      )}

      {quizOver && (
        <QuizResults highestCat={highestCat} handleClick={handleClick} />
      )}

      {/* {!showCards &&(
        <LizsAwesomeComponent />
      )} */}
    </div>
  );
}

export default QuizApp;
