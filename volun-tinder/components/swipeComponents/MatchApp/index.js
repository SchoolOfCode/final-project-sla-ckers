/*---------------------------------PLAN-----------------------------------------------

//**Imported to QuizApp level and rendered there**
//**This contains the swipe and match components!**

//IMPORTING ORG DATA:
//Import all four sample data arrays from the file in libs at this level ✅ 
//Take in category as a prop from where the MatchApp component is called ✅ 
//Have logic in the component that uses this category to pull the right data object in ✅ 

//GETTING SWIPE RESULTS:
//Make a state high enough that it can see both the swipe component and match component as an empty array to store the swipe results ✅ 
//Pass setState fx from this down to swipe component and finish fx in swipe component that uses this to populate the state with the orgs swiped right on  ✅ 
//Take in the state into this match component as a prop; this should (when rendered in the right order) now have all the swiped right orgs ✅ 
//In this component, render a nice list of all the org names and contact info for these (map fx again?) ✅ 

//FIXME: have a look into beforeEach and afterEach for tests - might help as each test should be completely stand alone, and there is some potential here for stuff to "leak" between tests

//HOOKING UP TO DB:
//import api url and use it in a useEffect to fetch ✅  
//TODO: make state to hold the data that's fetched and ensure that comes through correctly 
//TODO: pass this down as props to ReactSwipeCard and MatchList
--------------------------------------------------------------------------------*/

import React, { useReducer, useState, useEffect } from 'react';
import ReactSwipeCard from '../ReactSwipeCard/index';
import MatchList from '../MatchList/index';
import { apiUrl } from '../../../libs/config';
import { SWIPE_RIGHT, SWIPE_LEFT } from './actiontypes';

//initial state for array that stores matches
const initialMatchState = { matchResults: [], swipeRights: 0 };

export function matchReducer(matchState, action) {
  const { type, payload } = action;
  switch (type) {
    case SWIPE_RIGHT:
      //on swipe right, adds the match at the end of the existing list
      console.log('swipe-right action fired');
      console.log(matchState);
      return {
        matchResults: [...matchState.matchResults, payload],
        swipeRights: matchState.swipeRights + 1,
      };
    case SWIPE_LEFT:
      //for left swipe,
      console.log('swipe-left action fired');
      return matchState;
    default:
      //for anything else, just returns existing list w/o adding a match
      console.log('weird swipe yo');
      return matchState;
  }
}

export default function MatchApp({ category }) {
  //state to store orgs from fetch:
  const [allOrgs, setAllOrgs] = useState([]);
  //state to store orgs matching specific category:
  const [categoryOrgs, setCategoryOrgs] = useState([]);
  //state to handle cond rendering of match list after swiping:
  const [swipesDone, setSwipesDone] = useState(false);

  //reducer that stores the matches from swipe-rights:
  const [matchState, matchDispatch] = useReducer(
    matchReducer,
    initialMatchState
  );

  //fetches the data:
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //data is an array of objects -> [{org}, {org}, {org}]
        //map through array of objects, and for each object, puts it into the allOrgs array:
        const orgs = data.map((org) => org);
        setAllOrgs(orgs);
      });
  }, []); //ignore the warning - want it to stay [] so it acts on mount!

  //filters the fetched data by category:
  useEffect(() => {
    const categoryData = allOrgs.filter((org) => {
      if (org.category === category) {
        return org;
      }
    });
    console.log({ categoryData });
    setCategoryOrgs(categoryData);
  }, [allOrgs, category]);

  function swipeRight(org) {
    matchDispatch({ type: SWIPE_RIGHT, payload: org });
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
          orgs={categoryOrgs}
          swipeRight={swipeRight}
          showMatchList={showMatchList}
          matchesList={matchState.matchResults}
          swipeRights={matchState.swipeRights}
          key="0"
        />
      )}
      {/* Once swiping is finished and button is pressed, show match list: */}
      {swipesDone && (
        <MatchList
          category={category}
          orgs={categoryOrgs}
          matchesList={matchState.matchResults}
        />
      )}
    </div>
  );
}
