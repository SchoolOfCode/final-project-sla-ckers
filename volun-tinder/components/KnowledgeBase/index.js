import React from 'react';

function KnowledgeBase() {
  return (
    <div>
      <div>
        <h1>Knowledge Base: Become a Volunteer</h1>
        <img
          src="https://www.tmc.ac.uk/sites/default/files/volunteer.jpg"
          alt="Benefits of being a volunteer infographic"
        />
        <p>Image Credit: Staffordshire County Council</p>

        <p>
          Here you'll find useful links to guidances and resources about
          volunteering.
        </p>

        {/* <div className="Benefits"> */}
        {/* <h3>Benefits of being a volunteer</h3> */}
        {/* <p> */}
        {/* There are numerous reasons to be a volunteer. See the infographic */}
        {/* below to learn more. */}
        {/* </p> */}

        {/*</div> */}
        <section className="VolunteerLinks">
          <h3>Useful links</h3>
          <ul>
            <li>
              <a href="https://www.ncvo.org.uk/ncvo-volunteering">
                Why Volunteer?
              </a>
            </li>
            <li>
              <a href="https://www.ncvo.org.uk/ncvo-volunteering/i-want-to-volunteer">
                Types of voluntary work
              </a>
            </li>
            <li>
              <a href="https://www.ncvo.org.uk/ncvo-volunteering/volunteers-week-2">
                Volunteer Week
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default KnowledgeBase;
