import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/';
import { routes } from '../libs/config';

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
          <p id="homeCopy">
            Welcome to VOLT, the app that aims to match volunteers and
            organisations for a long-term volunteering relationship.
            {/* TODO: See what you think of this? I was just thinking that the home page needs more of a snappy strapline than a description. This is just my suggestion; feel free to tweak.*/}
          </p>
        </section>
        <section id="homeButtons">
          <Link id="quizLink" href={routes.quiz}>
            <button className="homePageButton">
              I want to volunteer. Take me to the quiz!
            </button>
          </Link>
          <Link id="quizLink" href={routes.quiz}>
            <button className="homePageButton">
              I'm an organisation. Take me to the dashboard!
            </button>
          </Link>
        </section>
      </Layout>
    </div>
  );
}
