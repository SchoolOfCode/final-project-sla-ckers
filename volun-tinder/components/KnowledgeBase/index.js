import React from "react";

import css from "./knowledgeBase.module.css";

function KnowledgeBase() {
  return (
    <div>
      <div>
        <h1>Volunteer Guide</h1>

        <p>
          In this section you'll find useful links to guides and resources about
          volunteering.
        </p>

        <section className="Benefits">
          <h3>Benefits of being a volunteer</h3>

          <p>
            There are numerous reasons to be a volunteer. See the infographic
            below to learn more.
          </p>

          <img
            id="knowledgeBaseImage"
            src="/Infographic.png"
            alt="Benefits of being a volunteer infographic"
          />

          <p className="imageCredit">
            Image Credit: Staffordshire County Council
          </p>
        </section>
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
