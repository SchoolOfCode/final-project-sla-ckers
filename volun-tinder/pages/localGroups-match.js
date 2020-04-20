import React from 'react';
import ReactSwipeCard from '../components/swipeComponents/ReactSwipeCard/index';

//import the array of animal orgs and then pass it down through the orgs prop to the swipe component below
import { sampleLocalGroupsOrgs } from '../libs/sampleOrgProfs';

export default function LocalGroupsSwipe() {
  return (
    <div className="container">
      <ReactSwipeCard
        category={'Local Community Groups'}
        orgs={sampleLocalGroupsOrgs}
      />
    </div>
  );
}
