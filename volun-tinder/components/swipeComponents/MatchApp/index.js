/*---------------------------------PLAN-----------------------------------------------

//**Imported to QuizApp level and rendered there**
//**This contains the swipe and match components!**

//IMPORTING ORG DATA:
//TODO: Import all four sample data arrays from the file in libs at this level
//TODO: Take in category as a prop from where the MatchApp component is called ✅ 
//TODO: Have logic in the component that uses this category to pull the right data object in 
//TODO: Can potentially do what Alexa did with the highestCat state!! Yes, if calling it at the QuizApp component! :)

//GETTING SWIPE RESULTS:
//TODO: Make a state high enough that it can see both the swipe component and match component as an empty array to store the swipe results - here at MatchApp level??
//TODO: Pass setState fx from this down to swipe component and finish fx in swipe component that uses this to populate the state with the orgs swiped right on  
//TODO: Take in the state into this match component as a prop; this should (when rendered in the right order) now have all the swiped right orgs 
//TODO: In this component, render a nice list of all the org names and contact info for these (map fx again?)

--------------------------------------------------------------------------------*/

import React, { useReducer, useState } from 'react';
import ReactSwipeCard from '../ReactSwipeCard/index';
import MatchList from '../MatchList/index';

//import the array of animal orgs and then pass it down through the orgs prop to the swipe component below, depending on the category
import { sampleAnimalOrgs } from '../../../libs/sampleOrgProfs';
//FIXME: Testing for animals first! Will then adjust for the other categories' data after.

//initial state for array that stores matches
const initialMatchState = { matchResults: [] };

export function matchReducer(matchState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'swipe-right':
      //on swipe right, adds the match at the end of the existing list
      //FIXME: test string in for now to set up the reducer mechanism; once reducer is working, then refactor to include the org info obj
      console.log('swipe-right action fired');
      console.log(matchState);
      return { matchResults: [...matchState.matchResults, payload] };
    default:
      //for anything else, just returns existing list w/o adding a match
      return { matchResults: [matchState.matchResults] };
  }
}

export default function MatchApp({ category }) {
  //state to handle cond rendering of match list after swiping:
  const [swipesDone, setSwipesDone] = useState(false);

  //reducer that stores the matches from swipe-rights:
  const [matchState, matchDispatch] = useReducer(
    matchReducer,
    initialMatchState
  );

  function swipeRight(org) {
    matchDispatch({ type: 'swipe-right', payload: org });
  }

  function showMatchList() {
    setSwipesDone(true);
  }

  return (
    <div className="container">
      {/* While swipesDone is false, show swipe interface: */}
      {!swipesDone && (
        <ReactSwipeCard
          category={category}
          orgs={sampleAnimalOrgs}
          swipeRight={swipeRight}
          showMatchList={showMatchList}
          matchesList={matchState.matchResults}
          key="0"
        />
      )}
      {/* Once swiping is finished and button is pressed, show match list: */}
      {swipesDone && (
        <MatchList
          category={category}
          orgs={sampleAnimalOrgs}
          matchesList={matchState.matchResults}
        />
      )}
    </div>
  );
}