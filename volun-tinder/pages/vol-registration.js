import React from "react";

//Create a basic form for volunteers to log their details following the swipe component.
//Details provided by the volunteer will be used to populate individual profiles/cards
//TODO: Create a form that captures the following data:  firstName, lastName, location, charityType, hrCommitment, bio.
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

        <label for="charityType">Charity Type:</label>
        <input
          type="text"
          id="location"
          onChange={takeInData}
          value={volunteerData.charityType}
          name="charityType"
        ></input>

        <label for="hours">Hours available a week:</label>
        <input
          type="text"
          id="hours"
          onChange={takeInData}
          value={volunteerData.hours}
          name="hours"
        ></input>

        <label for="bio">Volunteer Bio:</label>
        <input
          type="text"
          id="bio"
          onChange={takeInData}
          value={volunteerData.bio}
          name="bio"
        ></input>
      </form>
    </div>
  );
}
