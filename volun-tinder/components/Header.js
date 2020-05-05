import React from "react";
import Link from "next/link";
import Head from "next/head";
import { routes } from "../libs/config";

function Header() {
  return (
    <div id="header">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>VOLT</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="../public/heart_hands.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link
          href="../public/heart_hands192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link rel="icon" href="icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      {/* <img alt="logo" /> */}

      <h1>VOLT</h1>

      <div id="navLinks">
        <Link href={routes.home}>
          <a className="navLinks">Home</a>
        </Link>
        <Link href={routes.quiz}>
          <a className="navLinks">Take the Quiz</a>
        </Link>
        <Link href={routes.knowledgeBase}>
          <a className="navLinks">Knowledge Base</a>
        </Link>
        <Link href={routes.orgDashboard}>
          <a className="navLinks">Organisations Dashboard</a>
        </Link>
        <Link href={routes.orgList}>
          <a className="navLinks">Organisations List</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
