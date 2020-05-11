import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';

//PLAN FOR QUESTION DISPLAY COMPONENT:
//needs to take in the question string from the .map function along with the index and the answers array ✅
//then use this index to access the right answer set within the answers array for the question ✅
//then render an AnswerChoice component for each answer choice ✅
//needs to pass down a function to each answer choice to be clickable and collect the category ✅

import css from './questionDisplay.module.css';

import AnswerChoice from '../AnswerChoice/index';

function QuestionDisplay({
  question,
  answers,
  i,
  handleClick,
  totalQs,
  qsDone,
}) {
  const [progressPercent, setProgressPercent] = useState(0);
  //totalQs=questions.length and qsDone=questionToShow+1

  useEffect(() => {
    console.log({ qsDone, totalQs });
    setProgressPercent((qsDone / totalQs) * 100);
  }, [totalQs, qsDone]);

  return (
    <div className={css.qAndProgBar}>
      <Progress
        strokeColor={{
          '0%': '#81ffef',
          '100%': '#814987',
        }}
        percent={progressPercent}
      />
      <div className={css.questionDisplay}>
        <h2 className={css.questionText}>{question}</h2>
        <ul className={css.answerChoiceList}>
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
    </div>
  );
}

export default QuestionDisplay;
