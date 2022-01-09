import React from "react";
import Link from "next/link";
import { useEffect } from "react";

function Nav() {
  return (
    <div className="bg-gray-100 rounded-b drop-shadow-lg p-4 mb-5 border-t-4 border-accent">
      <div className="container">
        <header className="masthead clearfix">
          <div className="site-info">
            <p className="site-name">
              <Link passHref href="/">
                <a>
                  <img
                    className="mb-3 w-10 rounded"
                    src="/images/avatar.png"
                    alt="site avatar"
                  />
                </a>
              </Link>
            </p>
          </div>

          <nav
            className="flex
            text-gray-700 text-base
            space-x-5
            font-medium
            overflow-scroll"
          >
            <Link href="/about">About</Link>{" "}
            <Link href="/projects">Projects</Link>{" "}
            <Link href="/posts">Posts</Link>{" "}
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Nav;
