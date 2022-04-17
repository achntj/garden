import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="rounded-b drop-shadow-lg p-4 mb-5">
      <div className="sm:flex justify-between items-center">
        <div className="">
          <p className="">
            <Link passHref href="/">
              <a>
                <img
                  className="sm:mb-0 mb-3 w-10 rounded"
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
          <Link href="/projects">Projects</Link>{" "}
          <Link href="/posts">Posts</Link> <Link href="/extras">Extras</Link>{" "}
        </nav>
      </div>
    </div>
  );
}

export default Nav;
