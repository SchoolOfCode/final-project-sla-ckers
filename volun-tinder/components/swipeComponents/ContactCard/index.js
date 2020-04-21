import React from 'react';

function ContactCard({ org }) {
  return (
    <dev className="contactCard">
      <h3>{org.orgName}</h3>
      <p>card contents</p>
    </dev>
  );
}

export default ContactCard;
