import React from 'react';

//PLAN FOR QUESTION DISPLAY COMPONENT:
//TODO: needs to take in the question string from the .map function along with the index and the answers array ✅
//TODO: then use this index to access the right answer set within the answers array for the question ✅
//TODO: then render an AnswerChoice component for each answer choice ✅
//TODO: needs to pass down a function to each answer choice to be clickable and collect the category ✅

import css from './questionDisplay.module.css';

import AnswerChoice from '../AnswerChoice/index';

function QuestionDisplay({ question, answers, i, handleClick }) {
  return (
    <div className={css.questionDisplay}>
      <h2>{question}</h2>
      <ul>
        <AnswerChoice
          answerChoice={answers[i]}
          category={0}
          handleClick={handleClick}
        />
        <AnswerChoice
          answerChoice={answers[i]}
          category={1}
          handleClick={handleClick}
        />
        <AnswerChoice
          answerChoice={answers[i]}
          category={2}
          handleClick={handleClick}
        />
        <AnswerChoice
          answerChoice={answers[i]}
          category={3}
          handleClick={handleClick}
        />
      </ul>
    </div>
  );
}

export default QuestionDisplay;
