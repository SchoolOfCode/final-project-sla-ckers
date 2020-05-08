import React from 'react';

//NOTE: still importing CSS from the level above - seemed easier this way.
import css from '../inputComponent.module.css';

function Form({
  orgData,
  handleChangeOpp,
  handleChangeQualities,
  handleChangeOther,
  handleSubmit,
}) {
  return (
    <div>
      <form className="orgForm">
        <section className={css.section}>
          <h3 className={css.sectionHeader}>About Your Organisation</h3>

          <label className={css.label}>
            Organisation name:
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
          </label>

          <label>
            Category:
            <p>
              {/* FIXME: Doesn't show selected category on front end! */}
              <select
                name="category"
                onChange={handleChangeOther}
                value={orgData.category}
                id="category"
                className={css.dropdown}
              >
                <option value="animals">Animals</option>
                <option value="environment">Environment</option>
                <option value="localGroups">
                  Local Community Organisation
                </option>
                <option value="events">Festivals and Events</option>
              </select>
            </p>
          </label>

          <label>
            About your organisation:
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
          </label>

          <p>
            <label>
              URL to your organisation's image (ending in .jpg or .png):
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
            </label>
          </p>
        </section>
        <section className={css.section}>
          {/* FIXME: Refactor opportunities to be an object in an array in the next iteration, functioning like the qualities array! */}
          <h3 className={css.sectionHeader}>
            Volunteering Opportunities Available
          </h3>

          <label className={css.label}>
            Opportunity:
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

          <label className={css.label}>
            Hours per week of commitment required:
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
        <section className={css.section}>
          <h3 className={css.sectionHeader}>
            Three essential qualities in volunteers to be a match{' '}
          </h3>
          {orgData.qualities.map((value, index) => (
            <label key={index} className={css.label}>
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
        <section className={css.section}>
          <h3 className={css.sectionHeader}>Contact Information</h3>
          <p>
            <label className={css.label}>Contact Name:</label>
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
            <label className={css.label}>Email:</label>
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
        <input
          type="submit"
          className={css.button}
          id={css.submitButton}
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
}

export default Form;
