import React from "react";

//This component will show the user their ideal category based on the answers they gave
//on the personality quiz.
//The result needs to take in the highest scoring category from the quiz and render in the h1.
//Once this is displayed the button will then take the user to the swipe cards in order to narrow down and find
//an organisation to match to!

//H1 needs to be able to take in the highest scoring category as a prop
//button on click should render the swipe cards? (speak to Liz about linking this in)

function QuizResults({ highestCat }) {
  console.log();
  return (
    <div>
      <h3>
        We have calculated your answers and we think your ideal category is...
      </h3>
      <h1>{highestCat}!</h1>
      <button>Could any of these be the one?</button>
    </div>
  );
}

export default QuizResults;
