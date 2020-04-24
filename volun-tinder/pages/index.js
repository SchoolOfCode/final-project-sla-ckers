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
        <p>This is to explain what it do</p>
        <Link href="/quiz">
          <a>Take me to the quiz!</a>
        </Link>
      </Layout>
    </div>
  );
}
