import React from 'react';
import Layout from '../components/Layout';
//import Infographic from "../libs/Images/volunteer.jpg";

//Plan - Static knowledgeBase page
//TODO: Create a page that displays info about being a volunteer
//TODO: Section should include:
//What are the advantages of volunteering? - done
//Use a stock image - advantages of volunteering - done
//What is volunteering? - done
//Types of volunteering? - done
//Volunteers' Week - done
//Content should be sourced from the internet - YoungMinds contact suggested NVCO.

export default function knowledgeBase() {
  return (
    <div>
      <Layout>
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

        {/* </div> */}
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
      </Layout>
    </div>
  );
}
