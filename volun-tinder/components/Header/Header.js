import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import css from './header.module.css';

import { routes } from '../../libs/config';

function Header() {
  return (
    <div id="header" className={css.headerContainer}>
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
        {/* FIXME: Still linking to heart_hands.png below! */}
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

      <div id="navLinks" className={css.navLinksContainer}>
        <Link href={routes.home}>
          <a className={css.navLink}>Home</a>
        </Link>
        <Link href={routes.quiz} className={css.navLink}>
          <a className={css.navLink}>Take the Quiz</a>
        </Link>
        <Link href={routes.knowledgeBase} className={css.navLink}>
          <a className={css.navLink}>Knowledge Base</a>
        </Link>
        <Link href={routes.orgDashboard} className={css.navLink}>
          <a className={css.navLink}>Organisation Dashboard</a>
        </Link>
        <Link href={routes.orgList} className={css.navLink}>
          <a className={css.navLink}>Organisations List</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
