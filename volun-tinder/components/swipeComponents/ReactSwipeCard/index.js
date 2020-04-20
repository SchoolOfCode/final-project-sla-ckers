/* -----------------------------PLAN:-------------------------------------

//SETUP AND TEST:
//TODO: Install/import TinderCard and set up code ✅ 
//TODO: Test out component with dummyOrgs data array so that the names come through and the swiping works ✅ 

//MAKE INTO USABLE COMPONENT WITH OUR PROPER TEST DATA:
//TODO: Set up a prop to take in the sampleOrgProfs array of data for the relevant category (will be passed in where the component is called), and change const orgs to equal that array ✅ 
//TODO: Have a category prop to feed into header/description ✅  
//TODO: Design card to pull out and display each category of info for each org individually for swiping 
//TODO: Set up state (or reducer??) to record orgs that have been swiped right on (with function to do this on the right direction's swipe) - **NOTE: This may or may not need to be on this level or higher up... We'll see how it goes.**
//TODO: Need a way to progress to the match page (button or triggered on last swipe...?)

--------------------------------------------------------------------------*/

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import css from './reactSwipeCard.module.css';

// const dummyOrgs = [
//   { name: 'Pistols for Pandas', url: '../sampleImgs/sample-img-panda.jpg' },
//   { name: 'Hedgehogs', url: '../sampleImgs/sample-img-swan.jpg' },
//   { name: 'Swans', url: '../sampleImgs/sample-img-hedgie.jpg' },
// ];

function ReactSwipeCard({ category, orgs }) {
  const [lastDirection, setLastDirection] = useState();

  function swiped(direction, nameToDelete) {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  }

  function outOfFrame(name) {
    //We can have a version of this function for swiping right and add the charity to the list that we display at the end
    //can take in the direction (along with name) and then if direction === right, add to a state or reducer
    //This needs to happen at a level above this component I think...
    console.log(name + ' left the screen!');
  }

  return (
    <div className={css.swipeInterface}>
      {/* Title and intro: */}
      <h1>Organisations About {category} Who'd Love to Meet You</h1>
      <h2>
        Here are some organisations looking for a volunteer passionate about{' '}
        {category.toLowerCase()} too. If you like how they sound, swipe right to
        add them to your matches list. If they aren't for you, no problem. Swipe
        left to send them on their way.
      </h2>

      {/* Message that renders based on swipe direction: */}
      {lastDirection ? (
        lastDirection === 'right' ? (
          <h2 className={css.infoText}>
            It's a match! We've added this organisation to your list.
          </h2>
        ) : (
          <h2 className={css.infoText}>
            Not a match? That's alright. See if the next one strikes your fancy!
          </h2>
        )
      ) : (
        <h2 className={css.infoText}>Get swiping!</h2>
      )}

      {/* Renders the cards: */}
      <div className={css.cardContainer}>
        {orgs.map((org) => (
          <TinderCard
            className={css.card}
            key={org.name}
            onSwipe={(dir) => swiped(dir, org.name)}
            onCardLeftScreen={() => outOfFrame(org.name)}
          >
            <div style={{ backgroundImage: 'url(' + org.url + ')' }}>
              <h3>Hi, we're {org.orgName}!</h3>
              <p>{org.briefBio}</p>
              <p>
                Is it us you're looking for? Swipe right if this sounds like
                something you'd enjoy:
              </p>
              <p>{org.opportunities[0].oppDescrip}</p>

              <p>Time requirement: {org.opportunities[0].timeReq}</p>
              <p>What we're looking for in a match:</p>
              <ul className={css.qualitiesList}>
                {org.threeThingsVolsCantDoWithout.map((thing) => (
                  <li>{thing}</li>
                ))}
              </ul>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default ReactSwipeCard;
