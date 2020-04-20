/* -----------------------------PLAN:-------------------------------------

//SETUP AND TEST:
//TODO: Install/import TinderCard and set up code ✅ 
//TODO: Test out component with dummyOrgs data array so that the names come through and the swiping works ✅ 
//TODO: Pull the test images through into the test component to make sure we know how to make images display

//MAKE INTO USABLE COMPONENT WITH OUR PROPER TEST DATA:
//TODO: Set up a prop to take in the sampleOrgProfs array of data for the relevant category (will be passed in where the component is called), and change const orgs to equal that array 
//TODO: Design card to pull out and display each category of info for each org individually for swiping 
//TODO: Set up state (or reducer??) to record orgs that have been swiped right on (with function to do this on the right direction's swipe) - **NOTE: This may or may not need to be on this level or higher up... We'll see how it goes.**

--------------------------------------------------------------------------*/

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import css from './reactSwipeCard.module.css';

const dummyOrgs = [
  { name: 'Pistols for Pandas', url: '../sampleImgs/sample-img-panda.jpg' },
  { name: 'Hedgehogs', url: '../sampleImgs/sample-img-swan.jpg' },
  { name: 'Swans', url: '../sampleImgs/sample-img-hedgie.jpg' },
];

function ReactSwipeCard() {
  const [lastDirection, setLastDirection] = useState();
  const orgs = dummyOrgs;

  function swiped(direction, nameToDelete) {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  }

  function outOfFrame(name) {
    //We can have a version of this function for swiping right and add the charity to the list that we display at the end
    //can take in the direction (along with name) and then if direction === right, add to a state or reducer
    console.log(name + ' left the screen!');
  }

  return (
    <div className={css.swipeCard}>
      <h1>Meet or Yeet!</h1>
      <h2>Yeet Some Charities</h2>
      <div className="cardContainer">
        {orgs.map((org) => (
          <TinderCard
            className="swipe"
            key={org.name}
            onSwipe={(dir) => swiped(dir, org.name)}
            onCardLeftScreen={() => outOfFrame(org.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + org.url + ')' }}
              className="card"
            >
              <h3>{org.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You yeeted it {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default ReactSwipeCard;
