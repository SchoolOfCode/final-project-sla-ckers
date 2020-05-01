import React, { useState, useReducer } from 'react';
import css from './inputComponent.module.css';
//Create a basic form for orgs to log their opportunity details.
//Details provided by the volunteer will be used to populate individual cards about volunteer opportunities (to be used in the swipe functionality)
//TODO: Create a form that captures the following data:  orgName, briefBio, opportunities {oppDescription, timeReq}, threeThings, contactName and contactDetails.
//TODO: Link to a profile picture
//TODO: Button that onClick saves the data in a JSON file

import {
  OPPDESCRIP_CHANGE,
  TIMEREQ_CHANGE,
  THING_ONE_CHANGE,
  THING_TWO_CHANGE,
  THING_THREE_CHANGE,
  OTHER_CHANGE,
} from './actionTypes';

const intialOrgData = {
  orgName: '',
  category: '',
  briefBio: '',
  opportunities: [
    {
      oppDescrip: '',
      timeReq: '',
    },
  ],
  threeThings: ['', '', ''],
  contactName: '',
  contactDetails: '',
  img: '',
};

function formReducer(orgData, action) {
  const { type, payload } = action;
  switch (type) {
    case OPPDESCRIP_CHANGE:
      return {
        ...orgData,
        [orgData.opportunities.oppDescrip]: payload.input,
      };
    case TIMEREQ_CHANGE:
      return {
        ...orgData,
        [orgData.opportunities.timeReq]: payload.input,
      };
    case THING_ONE_CHANGE:
      return {
        ...orgData,
        [orgData.threeThings[0]]: payload.input,
      };
    case THING_TWO_CHANGE:
      return {
        ...orgData,
        [orgData.threeThings[1]]: payload.input,
      };
    case THING_THREE_CHANGE:
      return {
        ...orgData,
        [orgData.threeThings[2]]: payload.input,
      };
    case OTHER_CHANGE:
      return {
        ...orgData,
        [payload.name]: payload.input,
      };
    default:
      return orgData;
  }
}

function InputComponent() {
  // const [orgData, setOrgData] = useState({
  //   orgName: '',
  //   category: '',
  //   briefBio: '',
  //   opportunities: [
  //     {
  //       oppDescrip: '',
  //       timeReq: '',
  //     },
  //   ],
  //   threeThings: ['', '', ''],
  //   contactName: '',
  //   contactDetails: '',
  //   img: '',
  // });

  // const [thing1, setThing1] = useState('');
  // const [thing2, setThing2] = useState('');
  // const [thing3, setThing3] = useState('');

  // const [threeThingsData, setThreeThingsData] = useState([]);

  // const [opportunitiesData, setOpportunitiesData] = useState({
  //   oppDescrip: '',
  //   timeReq: '',
  // });

  // function handleChange(event) {
  //   setOrgData({ ...orgData, threeThings: threeThingsData });
  //   setOrgData({ ...orgData, opportunities: [opportunitiesData] });
  //   console.log({ [event.target.name]: event.target.value });
  // }

  // function handleChangeThings(event) {
  //   //This is complicated and convoluted, I know! Will try and refactor to make it snappier soon... Just want to try and get it working for now!
  //   //FIXME: potential useReducer?
  //   switch (event.target.name) {
  //     case 'threeThings1':
  //       setThing1(event.target.value);
  //       break;
  //     case 'threeThings2':
  //       setThing2(event.target.value);
  //       break;
  //     case 'threeThings3':
  //       setThing3(event.target.value);
  //       break;
  //     default:
  //       return;
  //   }
  //   setThreeThingsData([thing1, thing2, thing3]);
  // }

  // function handleChangeOpportunities(event) {
  //   setOpportunitiesData({
  //     ...opportunitiesData,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  const [orgData, formDispatch] = useReducer(formReducer, intialOrgData);

  function handleChangeOpp(event) {
    let input = event.target.value;
    let name = event.target.name;
    if (name === 'oppDescrip') {
      formDispatch({ type: OPPDESCRIP_CHANGE, payload: input });
    } else {
      formDispatch({ type: TIMEREQ_CHANGE, payload: input });
    }
    console.log({ name, input });
  }
  function handleChangeThing(event) {
    let input = event.target.value;
    let name = event.target.name;
    switch (name) {
      case 'threeThings1':
        formDispatch({ type: THING_ONE_CHANGE, payload: input });
        break;
      case 'threeThings2':
        formDispatch({ type: THING_TWO_CHANGE, payload: input });
        break;
      case 'threeThings3':
        formDispatch({ type: THING_THREE_CHANGE, payload: input });
        break;
      default:
        return;
    }
    console.log({ name, input });
  }
  function handleChangeOther(event) {
    let name = event.target.name;
    let input = event.target.value;
    formDispatch({ type: OTHER_CHANGE, payload: { name, input } });
    console.log({ name, input });
  }

  function handleSubmit() {}

  return (
    <div className={css.form}>
      <form className="orgForm" onSubmit={handleSubmit}>
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
            ></input>
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
              onChange={handleChangeOther}
              value={orgData.briefBio}
              placeholder="Give a brief bio of the organisation"
              name="briefBio"
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
              onChange={handleChangeOpp}
              value={orgData.opportunities.oppDescrip}
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
              onChange={handleChangeOpp}
              value={orgData.opportunities.timeReq}
              placeholder="Indicate the number of hours a week"
              name="timeReq"
            ></input>
          </p>
        </section>
        <section>
          <h3>
            Identify three essential qualities the volunteer needs to be a match
            with your organisation.{' '}
          </h3>
          <p>
            <label>Quality 1</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threeThings1"
              onChange={handleChangeThing}
              value={orgData.threeThings[0]}
              placeholder="Identify essential quality here"
              name="threeThings1"
            ></input>
          </p>
          <p>
            <label>Quality 2</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threeThings2"
              onChange={handleChangeThing}
              value={orgData.threeThings[1]}
              placeholder="Identify essential quality here"
              name="threeThings2"
            ></input>
          </p>
          <p>
            <label>Quality 3</label>
          </p>
          <p>
            <input
              className={css.input}
              type="text"
              id="threeThings1"
              onChange={handleChangeThing}
              value={orgData.threeThings[2]}
              placeholder="Identify essential quality here"
              name="threeThings1"
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
              onChange={handleChangeOther}
              value={orgData.contactName}
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
              onChange={handleChangeOther}
              value={orgData.contactDetails}
              placeholder="Email"
              name="contactDetails"
            ></input>
          </p>
        </section>
      </form>
      <section className={css.submitBtnSection}>
        <button className={css.button}>Post opportunity</button>
      </section>
    </div>
  );
}
export default InputComponent;
