import React from "react";
import Layout from "../components/Layout";

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


      <h1>Useful advice about volunteering</h1>

      <p>
        Welcome to the knowledge base. Here you'll find useful links to
        resources about volunteering.
      </p>

      <div className="Benefits">
        <p>
          There are a number of advantages to being a volunteer both for you
          personally and for your community.
        </p>
        <img
          src="Benefits-of-volunteering-infographic.png"
          alt="Benefits of being a volunteer infographic"
        />
        <p>Image Credit: Staffordshire County Council</p>
      </div>

      <ul>
        <li>
          <a href="https://www.ncvo.org.uk/ncvo-volunteering">Why Volunteer?</a>
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
</Layout>
    </div>
  );
}
