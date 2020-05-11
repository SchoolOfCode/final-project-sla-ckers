import React from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import Link from 'next/link';
import Head from 'next/head';
import css from './header.module.css';

import { routes } from '../../libs/config';

const menu = (
  <Menu>
    <Menu.Item>
      <a className={css.menuItem} href={routes.quiz}>
        Take the Quiz
      </a>
    </Menu.Item>
    <Menu.Item>
      <a className={css.menuItem} href={routes.knowledgeBase}>
        Volunteering Guide
      </a>
    </Menu.Item>
    <Menu.Item>
      <a className={css.menuItem} href={routes.orgDashboard}>
        Organisation Dashboard
      </a>
    </Menu.Item>
    <Menu.Item>
      <a className={css.menuItem} href={routes.orgList}>
        Organisations List
      </a>
    </Menu.Item>
  </Menu>
);

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

        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />

        <link
          href="favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          href="/VOLT_512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link
          href="/VOLT_192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link rel="icon" href="icon.png"></link>

        <meta name="theme-color" content="#81ffef" />
      </Head>

      <div id="navLinks" className={css.navLinksContainer}>
        <img id={css.logoNav} src="/VOLT_192.png" alt="logo" />

        <Dropdown overlay={menu}>
          <a id={css.menuLink} onClick={(e) => e.preventDefault()}>
            Menu <DownOutlined />
          </a>
        </Dropdown>

        {/* <Link href={routes.home}>
          <a className={css.navLink}>Home</a>
        </Link>
        <Link href={routes.quiz}>
          <a className={css.navLink}>Take the Quiz</a>
        </Link>
        <Link href={routes.knowledgeBase}>
          <a className={css.navLink}>Volunteering Guide</a>
        </Link>
        <Link href={routes.orgDashboard}>
          <a className={css.navLink}>Organisation Dashboard</a>
        </Link>
        <Link href={routes.orgList}>
          <a className={css.navLink}>Organisations List</a>
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
