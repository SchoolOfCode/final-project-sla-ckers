import React from "react";

import css from "./inputComponent.module.css";

//Create a basic form for orgs to log their opportunity details.
//Details provided by the volunteer will be used to populate individual cards about volunteer opportunities (to be used in the swipe functionality)
//TODO: Create a form that captures the following data:  orgName, briefBio, opportunities {oppDescription, timeReq}, threeThings, contactName and contactDetails.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file

function InputComponent({ takeInData, orgData }) {
  return (
    <div id={css.InputComponent}>
      <form className="orgForm">
        <h1>Post your voluntary opportunities</h1>

        <h3>
          Please complete the form below with details about your opportunities.
        </h3>

        <section>
          <h3>About the Organisation</h3>

          <label htmlFor="org-name">Name of organisation:</label>
          <input
            type="text"
            id="org-name"
            onChange={takeInData}
            placeholder="Name of organisation"
            name="orgName"
          ></input>

          <label htmlFor="briefBio">Brief Bio of Organisation:</label>
          <input
            type="text"
            id="briefBio"
            onChange={takeInData}
            placeholder="Give a brief bio of the organisation"
            name="BriefBio"
          ></input>
        </section>

        <section>
          <h3>Opportunities Available</h3>

          <label htmlFor="oppDescrip">Description of opportunity:</label>
          <input
            type="text"
            id="oppDescrip"
            onChange={takeInData}
            placeholder="Describe the opportunity available"
            name="oppDescrip"
          ></input>

          <label htmlFor="timeReq">Weekly hourly commitment required:</label>
          <input
            type="text"
            id="timeReq"
            onChange={takeInData}
            placeholder="Indicate the number of hours a week"
            name="timeReq"
          ></input>
        </section>
        <section>
          <h3>
            Identify three essential qualities the volunteer needs to be a match
            with your organisation.{" "}
          </h3>

          <label htmlFor="threeThings">Quality 1</label>
          <input
            type="text"
            id="threethings1"
            onChange={takeInData}
            placeholder="Identify essential quality here"
            name="threethings1"
          ></input>

          <label htmlFor="threeThings">Quality 2</label>
          <input
            type="text"
            id="threethings2"
            onChange={takeInData}
            placeholder="Identify essential quality here"
            name="threethings2"
          ></input>

          <label htmlFor="threeThings">Quality 3</label>
          <input
            type="text"
            id="threethings3"
            onChange={takeInData}
            placeholder="Identify essential quality here"
            name="threethings1"
          ></input>
        </section>
        <section>
          <h3>Contact Information</h3>

          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            onChange={takeInData}
            placeholder="Contact Name"
            name="contactName"
          ></input>

          <label htmlFor="contactDetails">Email:</label>
          <input
            type="text"
            id="contactDetails"
            onChange={takeInData}
            placeholder="Email"
            name="contactDetails"
          ></input>
        </section>
      </form>
      <section className="buttons">
        <button className="button">Post opportunity</button>
      </section>
    </div>
  );
}

export default InputComponent;
