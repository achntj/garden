import React from "react";
import Link from "next/link";
import { useEffect } from "react";

function Nav() {
  return (
    <div className="wrapper-masthead noselect">
      <div className="container">
        <header className="masthead clearfix">
          <div className="site-info">
            <p className="site-name">
              <Link passHref href="/">
                <img
                  className="site-logo"
                  src="/images/avatar.png"
                  alt="site avatar"
                />
              </Link>
            </p>
          </div>

          <nav>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Nav;
