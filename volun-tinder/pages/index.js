import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

//Need to build a layout for this page?
//Header
//Welcome message and brief explanation of what Volun-Tinder is all about
//Link/button to take to the quiz
//Link to knowledge base
//Directory of orgs?? - Stretch

export default function Home() {
  return (
    <div>
      <Layout>
        <p>
          Welcome to VOLT, the app that aims to match individual volunteers to a
          charity that they can pursue a long-term relationship with. This app
          combines volunteering with dating app functionality.
        </p>
        <Link href="/quiz">
          <a>Take me to the quiz!</a>
        </Link>
      </Layout>
    </div>
  );
}
