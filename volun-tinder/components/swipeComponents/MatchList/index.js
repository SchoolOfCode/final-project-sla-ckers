import React from 'react';
import ContactCard from '../ContactCard/index';

//TODO: render list of orgs matched with via swiping
//TODO: show org name, contact name, and contact info for each org (and picture perhaps?)

function MatchList({ category, orgs, matchesList }) {
  console.log({ matchesList });

  return (
    <div>
      {matchesList.map((org) => (
        <ContactCard org={org} />
      ))}
    </div>
  );
}

export default MatchList;
