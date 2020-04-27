import React from "react";

//Create a basic form for volunteers to log their details following the swipe component.
//Details provided by the volunteer will be used to populate individual profiles/cards
//TODO: Create a form that captures the following data:  firstName, lastName, location, charityCategory, hrCommitment, tasks, bio.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file

function VolunteerRegistration({ takeInData }, { volunteerData }) {
  return (
    <div>
      <form className="volunteerForm">
        <label for="contact-fname">First Name:</label>
        <input
          type="text"
          id="contact-fname"
          onChange={takeInData}
          value={volunteerData.firstName}
          name="firstName"
        ></input>

        <label for="contact-lname">Last Name:</label>
        <input
          type="text"
          id="contact-lname"
          onChange={takeInData}
          value={volunteerData.lastName}
          name="lastName"
        ></input>

        <label for="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={takeInData}
          value={volunteerData.location}
          name="location"
        ></input>
      </form>
    </div>
  );
}
