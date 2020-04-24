import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div id="header">
      {/* <img alt="logo" /> */}
      <h1>Volun-Tinder</h1>
      <div id="navLinks">
        <Link href="./">
          <a className="navLinks">Home</a>
        </Link>
        <Link href="/quiz">
          <a className="navLinks">Quiz</a>
        </Link>
        <Link href="/knowledge-base">
          <a className="navLinks">Knowledge Base</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
