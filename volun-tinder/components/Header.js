import React from "react";
import Link from "next/link";
import Head from "next/head";

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
        <title>Volun-Tinder</title>

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
      <h1>Volun-Tinder</h1>
      <div id="navLinks">
        <Link href="./">
          <a className="navLinks">Home</a>
        </Link>
        <Link href="/quiz">
          <a className="navLinks">Take the Quiz</a>
        </Link>
        <Link href="/knowledge-base">
          <a className="navLinks">Knowledge Base</a>
        </Link>
        <Link href="/org-form">
          <a className="navLinks">Organisation Form</a>

        <Link href="/orgsList">
          <a className="navLinks">Organisations List</a>

        </Link>
      </div>
    </div>
  );
}

export default Header;
