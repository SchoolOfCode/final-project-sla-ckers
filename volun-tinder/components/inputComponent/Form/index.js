import React from 'react';

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
          <h3>About the Organisation</h3>
          <p>
            <label className={css.label}>Name of organisation:</label>
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
            <label>Brief bio of the organisation:</label>
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
        <section className={css.section}>
          {/* FIXME: Refactor opportunities to be an object in an array in the next iteration, functioning like the qualities array! */}
          <h3>Volunteering Opportunities Available</h3>

          <label className={css.label}>
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
        <section className={css.section}>
          <h3>
            Identify three essential qualities the volunteer needs to be a match
            with your organisation.{' '}
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

export default Form;
