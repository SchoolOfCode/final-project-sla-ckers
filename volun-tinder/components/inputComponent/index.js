import React from "react";

import css from "./inputComponent.module.css";

//Create a basic form for orgs to log their opportunity details.
//Details provided by the volunteer will be used to populate individual cards about volunteer opportunities (to be used in the swipe functionality)
//TODO: Create a form that captures the following data:  orgName, briefBio, opportunities {oppDescription, timeReq}, threeThings, contactName and contactDetails.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file

function InputComponent({ takeInData, orgData }) {
  return (
    <div>
      <form className="orgForm">
        <h1>Post your voluntary opportunities</h1>

        <h3>
          Please complete the form below with details about your opportunities.
        </h3>

        <section>
          <h3>About the Organisation</h3>

          <p>
            <label>Name of organisation:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="org-name"
              onChange={takeInData}
              placeholder="Name of organisation"
              name="orgName"
            ></input>
          </p>

          <p>
            <label>Brief Bio of Organisation:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="briefBio"
              onChange={takeInData}
              placeholder="Give a brief bio of the organisation"
              name="BriefBio"
            ></input>
          </p>
        </section>

        <section>
          <h3>Opportunities Available</h3>

          <p>
            <label>Description of opportunity:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="oppDescrip"
              onChange={takeInData}
              placeholder="Describe the opportunity available"
              name="oppDescrip"
            ></input>
          </p>

          <label>Weekly hourly commitment required:</label>
          <p>
            <input
              className={css.input}
              type="text"
              id="timeReq"
              onChange={takeInData}
              placeholder="Indicate the number of hours a week"
              name="timeReq"
            ></input>
          </p>
        </section>

        <section>
          <h3>
            Identify three essential qualities the volunteer needs to be a match
            with your organisation.{" "}
          </h3>

          <p>
            <label>Quality 1</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threethings1"
              onChange={takeInData}
              placeholder="Identify essential quality here"
              name="threethings1"
            ></input>
          </p>

          <p>
            <label>Quality 2</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threethings2"
              onChange={takeInData}
              placeholder="Identify essential quality here"
              name="threethings2"
            ></input>
          </p>

          <p>
            <label>Quality 3</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threethings3"
              onChange={takeInData}
              placeholder="Identify essential quality here"
              name="threethings1"
            ></input>
          </p>
        </section>

        <section>
          <h3>Contact Information</h3>

          <p>
            <label>Contact Name:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="contactName"
              onChange={takeInData}
              placeholder="Contact Name"
              name="contactName"
            ></input>
          </p>

          <p>
            <label>Email:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="contactDetails"
              onChange={takeInData}
              placeholder="Email"
              name="contactDetails"
            ></input>
          </p>
        </section>
      </form>
      <br></br>
      <section>
        <button className={css.button}>Post opportunity</button>
      </section>
    </div>
  );
}

export default InputComponent;
