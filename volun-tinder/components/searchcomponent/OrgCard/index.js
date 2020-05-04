import React from "react";

function ContactCard({ org }) {
  return (
    <div>
      <h3>{org.orgName}</h3>
      <img alt={org.briefBio} src={org.img} />
      <p>About: {org.briefBio}</p>
      <p>{org.opportunities.oppDescrip}</p>
      <p>Time required: {org.opportunities.timeReq}</p>
      <p>
        Sounds like a keeper? contact {org.contactName} at the below address!
      </p>
      <p>{org.contactDetails}</p>
    </div>
  );
}

export default ContactCard;
