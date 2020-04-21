/* -----------------------------PLAN:-------------------------------------

//SETUP AND TEST:
//TODO: Install/import TinderCard and set up code ✅ 
//TODO: Test out component with dummyOrgs data array so that the names come through and the swiping works ✅ 

//MAKE INTO USABLE COMPONENT WITH OUR PROPER TEST DATA:
//TODO: Set up a prop to take in the sampleOrgProfs array of data for the relevant category (will be passed in where the component is called), and change const orgs to equal that array ✅ 
//TODO: Have a category prop to feed into header/description ✅  
//TODO: Incorporate images into cards!
//TODO: Design card to pull out and display each category of info for each org individually for swiping 
//TODO: Set up state (or reducer??) to record orgs that have been swiped right on (with function to do this on the right direction's swipe) - **NOTE: This may or may not need to be on this level or higher up... We'll see how it goes.**
//TODO: Need a way to progress to the match page (button or triggered on last swipe...?); conditionally render so it's not showing until the swiping is done (if button!) -> hook up to match page (or placeholder until match page is designed)

--------------------------------------------------------------------------*/

import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import css from './reactSwipeCard.module.css';

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
    console.log(name + ' has been swiped!');
  }

  return (
    <div className={css.swipeInterface}>
      {/* Title and intro: */}
      <h1>
        Organisations About{' '}
        {category.charAt(0).toUpperCase() + category.slice(1)} Who'd Love to
        Meet You
      </h1>
      <h2>
        Here are some organisations looking for a volunteer passionate about{' '}
        {category.toLowerCase()} too. If you like how they sound, swipe right to
        add them to your matches list. If they aren't for you, there are plenty
        more fish in the sea. Swipe left to send them on their way.
      </h2>

      {/* Message that renders based on swipe direction: */}
      {/* TODO: Chris's comment: If you're happy with this nested ternary then that's fine - if not how could you refactor this to make more sense at a glance? */}
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
            {/* TODO: Link to image property in data! */}
            <div style={{ backgroundImage: `${org.url}` }}>
              <h3>Hi, we're {org.orgName}!</h3>
              <p>{org.briefBio}</p>
              <p>
                Is it us you're looking for? Swipe right if this sounds like
                something you'd enjoy:
              </p>
              {/* TODO: Chris's comment: What happens if opportunities is empty here, or doesn't exist? Need to think about error handling (remember the new ?. syntax - could help) */}
              <p>{org.opportunities[0].oppDescrip}</p>

              <p>Time requirement: {org.opportunities[0].timeReq}</p>
              <p>What we're looking for in a match:</p>
              <ul className={css.qualitiesList}>
                {/* TODO: Consider shortening this property name! */}
                {org.threeThingsVolsCantDoWithout.map((thing) => (
                  <li>{thing}</li>
                ))}
              </ul>
            </div>
          </TinderCard>
        ))}
      </div>

      {/* After swiping, takes you to your matches (need to think through rendering/when this shows) */}
      <button>
        Your matches can't wait to hear from you! See how to get in touch.
      </button>
    </div>
  );
}

export default ReactSwipeCard;