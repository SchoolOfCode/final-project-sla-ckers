import React, { useState } from 'react';

import Quiz from '../Quiz';
import MatchApp from '../../swipeComponents/MatchApp';
import QuizResults from '../QuizResults';
import css from './quizApp.module.css';

function QuizApp() {
  //state that holds the highest-counted category at end of quiz:
  const [highestCat, setHighestCat] = useState('');
  //state to check if quiz is done:
  const [quizOver, setQuizOver] = useState(false);
  //state to hide quiz results and show swipy cards
  const [showCards, setShowCards] = useState(false);

  function handleClick() {
    setShowCards(true);
    console.log('Button on results page working!');
  }

  return (
    <div className={css.quizApp}>
      {!quizOver && (
        <Quiz setHighestCat={setHighestCat} setQuizOver={setQuizOver} />
      )}

      {quizOver && !showCards && (
        <QuizResults highestCat={highestCat} handleClick={handleClick} />
      )}

      {showCards && <MatchApp category={highestCat} />}
    </div>
  );
}

export default QuizApp;
