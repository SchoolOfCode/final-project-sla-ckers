import React from 'react';
import css from './answerChoice.module.css';

function AnswerChoice({ answerChoice, category, handleClick }) {
  return (
    <li className={css.answerChoice} onClick={() => handleClick(category)}>
      {answerChoice[category]}
    </li>
  );
}

export default AnswerChoice;
