import React, { useState } from "react";

import Quiz from "../Quiz/index";
import QuizResults from "../QuizResults";

function QuizApp() {
  //state that holds the highest-counted category at end of quiz:
  const [highestCat, setHighestCat] = useState("");
  //state to check if quiz is done:
  const [quizOver, setQuizOver] = useState(false);

  return (
    <div className="App">
      {!quizOver && (
        <Quiz setHighestCat={setHighestCat} setQuizOver={setQuizOver} />
      )}

      {quizOver && <QuizResults highestCat={highestCat} />}
    </div>
  );
}

export default QuizApp;
