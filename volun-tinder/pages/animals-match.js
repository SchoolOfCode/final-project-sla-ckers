import React from 'react';
import ReactSwipeCard from '../components/swipeComponents/ReactSwipeCard/index';

//import the array of animal orgs and then pass it down through the orgs prop to the swipe component below
import { sampleAnimalOrgs } from '../libs/sampleOrgProfs';

export default function AnimalsSwipe() {
  return (
    <div className="container">
      <ReactSwipeCard category="Animals" orgs={sampleAnimalOrgs} />
    </div>
  );
}
