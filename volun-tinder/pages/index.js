import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/";
import { routes } from "../libs/config";

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
        <section>
          <img id="homeLogo" src="/Volt_512.png" alt="Volt Logo" />
        </section>
        <section>
          <p>
            Welcome to VOLT, the app that aims to match individual volunteers to
            a charity that they can pursue a long-term relationship with. This
            app combines volunteering with dating app functionality.
          </p>
        </section>
        <section>
          <Link href={routes.quiz}>Take me to the quiz!</Link>
        </section>
      </Layout>
    </div>
  );
}
