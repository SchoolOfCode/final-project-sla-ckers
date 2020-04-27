import React from "react";
import Link from "next/link";
import css from "./header.module.css";

function Header() {
  return (
    <>
      <div className={css.h1}>
        {/* <img alt="logo" /> */}
        <h1>Volun-Tinder</h1>
      </div>
      <div className={css.links}>
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
    </>
  );
}

export default Header;
