import React, { useState } from 'react';
import './App.css';

import Quiz from '../Quiz/index';

function App() {
  //state that holds the highest-counted category at end of quiz:
  const [highestCat, setHighestCat] = useState('');
  //state to check if quiz is done:
  const [quizOver, setQuizOver] = useState(false);

  return (
    <div className="App">
      {!quizOver && (
        <Quiz setHighestCat={setHighestCat} setQuizOver={setQuizOver} />
      )}

      {highestCat === 'animals' && (
        <h1>
          You matched to the animals category! This is a placeholder page which
          will be replaced with the organisations that fit this category.
        </h1>
      )}

      {highestCat === 'environment' && (
        <h1>
          You matched to the environment category! This is a placeholder page
          which will be replaced with the organisations that fit this category.
        </h1>
      )}

      {highestCat === 'localGroups' && (
        <h1>
          You matched to the local groups category! This is a placeholder page
          which will be replaced with the organisations that fit this category.
        </h1>
      )}

      {highestCat === 'events' && (
        <h1>
          You matched to the events category! This is a placeholder page which
          will be replaced with the organisations that fit this category.
        </h1>
      )}
    </div>
  );
}

export default App;
