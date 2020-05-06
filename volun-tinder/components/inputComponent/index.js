//--------------PLAN:-----------------------------------
//Create a basic form for orgs to log their opportunity details.
//Details provided by the volunteer will be used to populate individual cards about volunteer opportunities (to be used in the swipe functionality)
//TODO: Create a form that captures the following data:  orgName, briefBio, opportunities {oppDescription, timeReq}, qualities, contactName and contactDetails.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file
//--------------------------------------------------------
//
import React, { useReducer } from 'react';

import css from './inputComponent.module.css';
import Form from './Form';

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

//FIXME:From Chris re: qualities array:
// "Last bit of refactoring you could do is a dynamic array here based on a variable:
// qualities: Array(n).fill('')"

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
      <h1>Post your volunteering opportunities</h1>
      <h3>
        Please complete the form below with details about your organisation and
        opportunities. Volunteers-to-be will see this information and be
        enchanted and eager to connect!
      </h3>
      <Form
        orgData={orgData}
        handleChangeOpp={handleChangeOpp}
        handleChangeQualities={handleChangeQualities}
        handleChangeOther={handleChangeOther}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default InputComponent;
