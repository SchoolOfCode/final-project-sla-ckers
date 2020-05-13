import React, { useState, useEffect } from 'react';

import css from './quizResults.module.css';

//This component will show the user their ideal category based on the answers they gave
//on the personality quiz.
//The result needs to take in the highest scoring category from the quiz and render in the h1.
//Once this is displayed the button will then take the user to the swipe cards in order to narrow down and find
//an organisation to match to!

//H1 needs to be able to take in the highest scoring category as a prop - DONE
//button on click should render the swipe cards?

function QuizResults({ highestCat, handleClick }) {
  //state to translate JS category names to more grammatically displayable ones
  //FIXME: potential to change this to a reducer to make it more robust later!
  const [displayCat, setDisplayCat] = useState('');

  const [imgLink, setImgLink] = useState('');

  useEffect(() => {
    switch (highestCat) {
      case 'animals':
        setDisplayCat('animals');
        setImgLink('https://i.ibb.co/8xbXmFg/animals-Img.jpg');
        // setImgLink('/animalsImg.jpeg');
        break;
      case 'environment':
        setDisplayCat('the environment');
        setImgLink('https://i.ibb.co/HP4r0yZ/environment-Img.jpg');
        // setImgLink('/environmentImg.jpeg');
        break;
      case 'localGroups':
        setDisplayCat('local community groups and organisations');
        setImgLink('https://i.ibb.co/3my9Wxc/local-Groups-Img.jpg');
        // setImgLink('/localGroupsImg.jpeg');
        break;
      case 'events':
        setDisplayCat('festivals and events');
        setImgLink('https://i.ibb.co/FbscvZw/events-Img.jpg');
        // setImgLink('/eventsImg.jpeg');
        break;
      default:
        return highestCat;
    }
  }, [highestCat]);

  return (
    <div id={css.resultsPage}>
      <h3>
        We've calculated your answers, and we think your ideal match might be an
        organisation crazy about...
      </h3>
      <h2>{displayCat}!</h2>
      <p>
        <img alt={highestCat} className={css.catImg} src={imgLink} />
      </p>
      <button id={css.resultsBtn} onClick={handleClick}>
        Could any of these be the one?
      </button>
    </div>
  );
}

export default QuizResults;
