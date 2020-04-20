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

//TODO: Create questions and answers ✅

//TODO: Use useReducer hook; create state to store choice categories (empty array) ✅
//TODO: Reducer function for onClick event when answer choice is clicked: should access answer category and set that to the end of the results array (with the rest of the array spread out) ✅
//TODO: Hand reducer's dispatch down through to answer choice via a function executed onClick ✅

//TODO: Create function to count choices after all questions are answered and return category with the highest total ✅
//TODO: Deploy this function once the last question is answered ✅

//---MAPCEPTION:---

//TODO: Use questions array to render each question ✅
//TODO: Use answers array to display each answer (using the question number to pick the right answer set!) ✅
//TODO: Map over answer choices to display each choice (with category number) ✅
//TODO: Once the functions above are working, add a questionNumber state and conditional render to show one question at a time ✅

// **********************************************************

import React, { useState, useReducer } from 'react';

import QuestionDisplay from '../QuestionDisplay/index';

import { questions, answers } from '../../libs/questionData';

//initial state for array that stores answer categories
const initialState = { quizResults: [] };

//reducer function to add category for each answer choice:
function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'add-animal-choice':
      return { quizResults: [...state.quizResults, 'animals'] };
    case 'add-environment-choice':
      return { quizResults: [...state.quizResults, 'environment'] };
    case 'add-localGroups-choice':
      return { quizResults: [...state.quizResults, 'localGroups'] };
    case 'add-events-choice':
      return { quizResults: [...state.quizResults, 'events'] };
    default:
      return { quizResults: [state.quizResults] };
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
      dispatch({ type: 'add-animal-choice' });
    }
    if (category === 1) {
      dispatch({ type: 'add-environment-choice' });
    }
    if (category === 2) {
      dispatch({ type: 'add-localGroups-choice' });
    }
    if (category === 3) {
      dispatch({ type: 'add-events-choice' });
    }
    console.log(state.quizResults);
    questionToShow < 4
      ? setQuestionToShow(questionToShow + 1)
      : calculateResults();
  }

  function calculateResults() {
    console.log('button pressed');
    //array w/ objects w/ counters for each category:
    let categoryResults = [
      { category: 'animals', count: 0 },
      { category: 'environment', count: 0 },
      { category: 'localGroups', count: 0 },
      { category: 'events', count: 0 },
    ];
    //for loop that iterates through results array to count categories:
    for (let i = 0; i < state.quizResults.length; i++) {
      switch (state.quizResults[i]) {
        case 'animals':
          categoryResults[0].count = categoryResults[0].count + 1;
          break;
        case 'environment':
          categoryResults[1].count = categoryResults[1].count + 1;
          break;
        case 'localGroups':
          categoryResults[2].count = categoryResults[2].count + 1;
          break;
        case 'events':
          categoryResults[3].count = categoryResults[3].count + 1;
          break;
        default:
          return;
      }
    }
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
