// ********************** PLAN: *****************************

//---PSEUDOCODE:---

// const questions = [
//     {q1: "question one"},
//     {q2: "question two"},
//     {q3: "question three"}
//     ]

//     const answers = [
//     {q1: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]},
//     {q2: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]},
//     {q3: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]}
//     ]

//     //useReducer with a state to store the keys from each answer chosen at each question:
//     results = ["animals", "animals", "environment"]

//     //Function to count up each choice w/in the results array and spit out which has the most

//     //Conditionally render the appropriate category page!

//---THE GUTS:---

//Create questions and answers ✅

//Use useReducer hook; create state to store choice categories (empty array) ✅
//Reducer function for onClick event when answer choice is clicked: should access answer category and set that to the end of the results array (with the rest of the array spread out) ✅
//Hand reducer's dispatch down through to answer choice via a function executed onClick ✅

//Create function to count choices after all questions are answered and return category with the highest total ✅
//Deploy this function once the last question is answered ✅

//---MAPCEPTION:---

//Use questions array to render each question ✅
//Use answers array to display each answer (using the question number to pick the right answer set!) ✅
//Map over answer choices to display each choice (with category number) ✅
//Once the functions above are working, add a questionNumber state and conditional render to show one question at a time ✅

// **********************************************************

import React, { useState, useReducer } from 'react';

import QuestionDisplay from '../QuestionDisplay';

import {
  ADD_ANIMAL_CHOICE,
  ADD_ENVIRONMENT_CHOICE,
  ADD_LOCALGROUPS_CHOICE,
  ADD_EVENTS_CHOICE,
} from './actionTypes';

import { questions, answers } from '../../../libs/questionData';

const answerKey = { animals: 0, environment: 1, localGroups: 2, events: 3 };

//initial state for array that stores answer categories
const initialState = { quizResults: [] };

//reducer function to add category for each answer choice:
export function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case ADD_ANIMAL_CHOICE:
      return { quizResults: [...state.quizResults, 'animals'] };
    case ADD_ENVIRONMENT_CHOICE:
      return { quizResults: [...state.quizResults, 'environment'] };
    case ADD_LOCALGROUPS_CHOICE:
      return { quizResults: [...state.quizResults, 'localGroups'] };
    case ADD_EVENTS_CHOICE:
      return { quizResults: [...state.quizResults, 'events'] };
    default:
      return state;
  }
}

function Quiz({ setHighestCat, setQuizOver }) {
  //useReducer that adds the category of each answer:
  const [state, dispatch] = useReducer(reducer, initialState);

  //state that tracks which question to display:
  const [questionToShow, setQuestionToShow] = useState(0);

  //function that adds the category and then counts the answer (and, once questionToShow reaches 4, triggers calculateResults):
  function handleClick(category) {
    if (category === 0) {
      dispatch({ type: ADD_ANIMAL_CHOICE });
    }
    if (category === 1) {
      dispatch({ type: ADD_ENVIRONMENT_CHOICE });
    }
    if (category === 2) {
      dispatch({ type: ADD_LOCALGROUPS_CHOICE });
    }
    if (category === 3) {
      dispatch({ type: ADD_EVENTS_CHOICE });
    }
    console.log(state.quizResults);
    // FIXME: It's not liking questions.length below... Need to diagnose! Set it back to a hard-coded 4 just to get it working in the interim.
    //questionToShow < questions.length
    questionToShow < 4
      ? //now if adding another question, still works
        setQuestionToShow(questionToShow + 1)
      : calculateResults();
  }

  function calculateResults() {
    console.log('button pressed');
    const categoryResults = state.quizResults.reduce(
      (tally, cur) => {
        const categoryIndex = answerKey[cur];
        if (typeof categoryIndex === 'undefined') {
          return tally;
        }
        return [
          ...tally.slice(0, categoryIndex),
          { ...tally[categoryIndex], count: tally[categoryIndex].count + 1 },
          ...tally.slice(categoryIndex + 1),
        ];
      },
      //FIXME: refactor tally array below based on answerKey rather than hard-coded categories
      //My start on it:
      //array(n).fill({answerKey[n], count: 0})
      //TODO: Finish once put/edit is sorted
      [
        { category: 'animals', count: 0 },
        { category: 'environment', count: 0 },
        { category: 'localGroups', count: 0 },
        { category: 'events', count: 0 },
      ]
    );
    console.log(categoryResults);
    //return the category with the highest count:
    let highestCatSoFar = 0;
    let result;
    for (let i = 0; i < categoryResults.length; i++) {
      //checks if each count is higher than the last; if so, it overwrites that object in the results variable
      if (categoryResults[i].count > highestCatSoFar) {
        result = categoryResults[i];
        highestCatSoFar = categoryResults[i].count;
      }
    }
    console.log(result.category);
    setHighestCat(result.category);
    setQuizOver(true);
  }
  //FIXME: refactor so that the quesiton numbers aren't hard coded
  return (
    <div>
      {questionToShow === 0 && (
        <QuestionDisplay
          question={questions[0]}
          answers={answers}
          i={0}
          key={0}
          handleClick={handleClick}
        />
      )}

      {questionToShow === 1 && (
        <QuestionDisplay
          question={questions[1]}
          answers={answers}
          i={1}
          key={1}
          handleClick={handleClick}
        />
      )}

      {questionToShow === 2 && (
        <QuestionDisplay
          question={questions[2]}
          answers={answers}
          i={2}
          key={2}
          handleClick={handleClick}
        />
      )}

      {questionToShow === 3 && (
        <QuestionDisplay
          question={questions[3]}
          answers={answers}
          i={3}
          key={3}
          handleClick={handleClick}
        />
      )}

      {questionToShow === 4 && (
        <QuestionDisplay
          question={questions[4]}
          answers={answers}
          i={4}
          key={4}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default Quiz;
