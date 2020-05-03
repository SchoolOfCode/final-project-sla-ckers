import React, { useState, useReducer } from 'react';
import css from './inputComponent.module.css';
//Create a basic form for orgs to log their opportunity details.
//Details provided by the volunteer will be used to populate individual cards about volunteer opportunities (to be used in the swipe functionality)
//TODO: Create a form that captures the following data:  orgName, briefBio, opportunities {oppDescription, timeReq}, qualities, contactName and contactDetails.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file

import { OPP_CHANGE, OTHER_CHANGE, QUALITIES_CHANGE } from './actionTypes';
import { apiUrl } from '../../libs/config';

const intialOrgData = {
  orgName: '',
  category: '',
  briefBio: '',
  opportunities: {
    oppDescrip: '',
    timeReq: '',
  },

  qualities: ['', '', ''],
  contactName: '',
  contactDetails: '',
  img: '',
};

function formReducer(orgData, action) {
  const { type, payload } = action;

  switch (type) {
    case OPP_CHANGE:
      console.log('OPP_CHANGE in reducer', { payload });
      return {
        ...orgData,
        opportunities: {
          ...orgData.opportunities,
          [payload.name]: payload.input,
        },
      };
    case QUALITIES_CHANGE:
      console.log('QUALITIES_CHANGE in reducer');
      //payload has index and value
      //spreading the array makes a proper copy instead of just a reference
      const qualities = [...orgData.qualities];
      qualities[payload.index] = payload.input;
      return { ...orgData, qualities };
    case OTHER_CHANGE:
      console.log('OTHER_CHANGE in reducer', { payload });
      return {
        ...orgData,
        [payload.name]: payload.input,
      };
    default:
      return orgData;
  }
}

function InputComponent() {
  const [orgData, formDispatch] = useReducer(formReducer, intialOrgData);

  function handleChangeOpp(event) {
    let input = event.target.value;
    let name = event.target.name;
    formDispatch({ type: OPP_CHANGE, payload: { name, input } });
    console.log({ name, input });
  }

  function handleChangeQualities(event, index) {
    let input = event.target.value;
    formDispatch({ type: QUALITIES_CHANGE, payload: { input, index } });
  }

  function handleChangeOther(event) {
    let name = event.target.name;
    let input = event.target.value;
    formDispatch({ type: OTHER_CHANGE, payload: { name, input } });
    console.log({ name, input });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ orgData });

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(orgData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('posted: ', data))
      .catch((error) => console.log('failed to fetch: ', error));
  }

  return (
    <div className={css.form}>
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
              onChange={handleChangeOther}
              value={orgData.orgName}
              placeholder="Name of organisation"
              name="orgName"
            />
          </p>
          <p>
            <label>Category:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="org-name"
              onChange={handleChangeOther}
              value={orgData.category}
              placeholder="Category"
              name="category"
            />
          </p>
          <p>
            <label>Brief Bio of Organisation:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="briefBio"
              onChange={handleChangeOther}
              value={orgData.briefBio}
              placeholder="Give a brief bio of the organisation"
              name="briefBio"
            />
          </p>
          <p>
            <label>Image link:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="img"
              onChange={handleChangeOther}
              value={orgData.img}
              placeholder="Image link (ending in .jpg for example)"
              name="img"
            />
          </p>
        </section>
        <section>
          {/* FIXME: Refactor opportunities to be an object in an array in the next iteration, functioning like the qualities array! */}
          <h3>Volunteering Opportunities Available</h3>

          <label>
            <p>Description of opportunity:</p>
            <p>
              <input
                className={css.input}
                type="text"
                id="oppDescrip"
                onChange={handleChangeOpp}
                value={orgData.opportunities.oppDescrip}
                placeholder="Describe the opportunity available"
                name="oppDescrip"
              />
            </p>
          </label>

          <label>
            <p>Weekly hourly commitment required:</p>
            <p>
              <input
                className={css.input}
                type="text"
                id="timeReq"
                onChange={handleChangeOpp}
                value={orgData.opportunities.timeReq}
                placeholder="Indicate the number of hours a week"
                name="timeReq"
              />
            </p>
          </label>
        </section>
        <section>
          <h3>
            Identify three essential qualities the volunteer needs to be a match
            with your organisation.{' '}
          </h3>
          {orgData.qualities.map((value, index) => (
            <label key={index}>
              <p>Quality {index + 1}</p>
              <input
                className={css.input}
                type="text"
                onChange={function (event) {
                  handleChangeQualities(event, index);
                }}
                value={value}
                placeholder="Identify essential quality here"
              />
            </label>
          ))}
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
              onChange={handleChangeOther}
              value={orgData.contactName}
              placeholder="Contact Name"
              name="contactName"
            />
          </p>
          <p>
            <label>Email:</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="contactDetails"
              onChange={handleChangeOther}
              value={orgData.contactDetails}
              placeholder="Email"
              name="contactDetails"
            />
          </p>
        </section>
      </form>
      <section className={css.submitBtnSection}>
        <input type="submit" className={css.button} onClick={handleSubmit} />
      </section>
    </div>
  );
}
export default InputComponent;
