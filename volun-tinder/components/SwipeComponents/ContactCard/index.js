import React from 'react';

import css from './contactCard.module.css';

function ContactCard({ org }) {
  return (
    <div className={css.contactCard}>
      <h3 className={css.contactHeader}>{org.orgName}</h3>
      <img alt={org.briefBio} src={org.img} className={css.orgImg} />
      <p className={css.contactInfo}>
        {org.contactName} from {org.orgName} is waiting to hear from you! You
        can get in touch via:{' '}
        <a className={css.contactLink} href={`mailto:${org.contactDetails}`}>
          {org.contactDetails}
        </a>
      </p>
      <p className={css.contactInfo}>Or visit their website:</p>
      <a
        href={org.link}
        target="_blank"
        rel="noopener noreferrer"
        className={css.contactLink}
      >
        {org.link}
      </a>
    </div>
  );
}

export default ContactCard;
