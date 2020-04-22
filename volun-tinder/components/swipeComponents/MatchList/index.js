import React from 'react';
import ContactCard from '../ContactCard/index';

import css from './matchList.module.css';

//TODO: render list of orgs matched with via swiping
//TODO: show org name, contact name, and contact info for each org (and picture perhaps?)

function MatchList({ category, orgs, matchesList }) {
  console.log({ matchesList });

  return (
    <div>
      {matchesList.map((org) => (
        <ContactCard org={org} key={org.orgName} />
      ))}
    </div>
  );
}

export default MatchList;
