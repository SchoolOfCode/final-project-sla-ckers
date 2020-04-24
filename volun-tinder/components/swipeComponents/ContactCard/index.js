import React from 'react';

import css from './contactCard.module.css';

function ContactCard({ org }) {
  return (
    <div className={css.contactCard}>
      <h3>{org.orgName}</h3>
      <img alt={org.briefBio} src={org.img} className={css.orgImg} />
      <p>
        {org.contactName} from {org.orgName} is waiting to hear from you! You
        can get in touch via:
      </p>
      <p>{org.contactDetails}</p>
    </div>
  );
}

export default ContactCard;
