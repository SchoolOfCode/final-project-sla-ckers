import React from 'react';
// import handleClose from "../Search";
import css from './orgCard.module.css';

function OrgCard({ org, handleClose }) {
  return (
    <div className={css.card}>
      <h3 className={css.orgHeader}>{org.orgName}</h3>
      <img alt={org.briefBio} src={org.img} className={css.orgImg} />
      <p className={css.briefBio}>{org.briefBio}</p>
      <p>{org.opportunities.oppDescrip}</p>
      <p>Ideal Qualities :</p>
      <p>
        {org.qualities.map((org) => (
          <li>{org}</li>
        ))}
      </p>

      <p>Time required: {org.opportunities.timeReq} hours per week</p>
      <p>
        Sound like a keeper? Contact {org.contactName} at{' '}
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
      <br />
      <button className={css.button} onClick={handleClose}>
        X
      </button>
    </div>
  );
}

export default OrgCard;
