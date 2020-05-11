import React from "react";
import Footer from "../components/Footer";
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

import KnowledgeBase from "../components/KnowledgeBase/index";
import Layout from "../components/Layout";

export default function knowledgeBase() {
  return (
    <Layout>
      <KnowledgeBase />
      <Footer />
    </Layout>
  );
}
