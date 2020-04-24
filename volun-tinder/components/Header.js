import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      {/* <img alt="logo" /> */}
      <h1>Volun-Tinder</h1>
      <Link href="./">
        <a>Home</a>
      </Link>
      <Link href="/quiz">
        <a>Quiz</a>
      </Link>
      <Link href="/knowledge-base">
        <a>Knowledge Base</a>
      </Link>
    </div>
  );
}

export default Header;
