import React from 'react';
// import handleClose from "../Search";
import css from './orgCard.module.css';

function OrgCard({ org, handleClose }) {
  return (
    <div className={css.card}>
      <h3>{org.orgName}</h3>
      <br />
      <img alt={org.briefBio} src={org.img} className={css.orgImg} />
      <p>About: {org.briefBio}</p>
      <p>{org.opportunities.oppDescrip}</p>
      <p>
        Ideal Qualities :
        <br />
        {org.qualities.map((org) => (
          <li>{org}</li>
        ))}
      </p>
      <p>Time required: {org.opportunities.timeReq} hours per week</p>
      <p>
        Sounds like a keeper? contact {org.contactName} at the below address!
      </p>
      <p>{org.contactDetails}</p>
      <button className={css.button} onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default OrgCard;
