/* -----------------------------PLAN:-------------------------------------

//SETUP AND TEST:
//Install/import TinderCard and set up code ✅ 
//Test out component with dummyOrgs data array so that the names come through and the swiping works ✅ 

//MAKE INTO USABLE COMPONENT WITH OUR PROPER TEST DATA:
//Set up a prop to take in the sampleOrgProfs array of data for the relevant category (will be passed in where the component is called), and change const orgs to equal that array ✅ 
//Have a category prop to feed into header/description ✅  
//Incorporate images into cards!
//Design card to pull out and display each category of info for each org individually for swiping ✅ 
//Refactor opportunities section re: Chris's note below
//Set up state (or reducer??) to record orgs that have been swiped right on (with function to do this on the right direction's swipe) - **NOTE: This may or may not need to be on this level or higher up... We'll see how it goes.** ✅ 
//Need a way to progress to the match page (button or triggered on last swipe...?); conditionally render so it's not showing until the swiping is done (if button!) -> hook up to match page (or placeholder until match page is designed) ✅ 

--------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import css from './reactSwipeCard.module.css';
import Link from 'next/link';

function ReactSwipeCard({
  category,
  orgs,
  swipeRight,
  showMatchList,
  matchesList,
  swipeRights,
}) {
  const [lastDirection, setLastDirection] = useState();

  function swiped(direction, org) {
    setLastDirection(direction);
    if (direction === 'right') {
      console.log('right yeet is meet');
      swipeRight(org);
    } else {
      console.log('left yeet is YOTE');
    }
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
      {/* FIXME: Chris's comment: If you're happy with this nested ternary then that's fine - if not how could you refactor this to make more sense at a glance? */}
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
        <h2 className={css.infoText}>Start swiping!</h2>
      )}

      {/* Renders the cards: */}
      <div className={css.cardContainer}>
        {orgs.map((org) => (
          <TinderCard
            key={org.name}
            onSwipe={(dir) => swiped(dir, org)}
            // onCardLeftScreen={() => outOfFrame(org)}
            preventSwipe={['up', 'down']}
          >
            <div className={css.card}>
              <h3>Hi, we're {org.orgName}!</h3>
              <img alt={org.briefBio} src={org.img} className={css.orgImg} />
              <p>{org.briefBio}</p>
              <p>
                Is it us you're looking for? Swipe right if this sounds like
                something you'd enjoy:
              </p>
              {/* FIXME: Chris's comment: What happens if opportunities is empty here, or doesn't exist? Need to think about error handling (remember the new ?. syntax - could help) */}
              <p>
                {org.opportunities.oppDescrip} - {org.opportunities.timeReq}{' '}
                hours per week
              </p>
              <p>What we're looking for in a match:</p>
              <ul className={css.qualitiesList}>
                {org.qualities.map((quality) => (
                  <li>{quality}</li>
                ))}
              </ul>
            </div>
          </TinderCard>
        ))}
      </div>

      {/* After swiping, if you've matched, button shows that takes you to your matches; if not, you get an option to go back to the home page: */}
      {swipeRights === 0 ? (
        <p className={css.resetP}>
          Not feeling the spark with any of these? Click{' '}
          <Link href="/">
            <a id={css.resetLink}>here</a>
          </Link>{' '}
          to go back to the home page where you can start again.
        </p>
      ) : (
        <button onClick={showMatchList}>
          Your matches can't wait to hear from you! See how to get in touch.
        </button>
      )}
    </div>
  );
}

export default ReactSwipeCard;
