import React from 'react';
import ContactCard from '../ContactCard/index';
import Link from 'next/link';
import css from './matchList.module.css';

//TODO: render list of orgs matched with via swiping ✅
//TODO: show org name, contact name, img, and contact info for each org ✅

function MatchList({ category, orgs, matchesList }) {
  console.log({ matchesList });

  return (
    <div id={css.matchList}>
      <h1 id={css.matchListHeader}>
        One last step toward your volunteering happy ever after!
      </h1>
      <section id={css.matchListIntro}>
        <h2>Get in touch with your matches with the information below:</h2>
      </section>

      {matchesList.map((org) => (
        <ContactCard org={org} key={org.orgName} />
      ))}
      <p className={css.resetP}>
        Would you like to have another go at the quiz? Click{' '}
        <Link href="/">
          <a id={css.resetLink}>here</a>
        </Link>{' '}
        to go back to the home page where you can start again.
      </p>
    </div>
  );
}

export default MatchList;
