import React from "react";
import Link from "next/link";
import ImageComp from "./ImageComp"
import ThemeSwitcher from "./ThemeSwitcher";

function Nav() {
  return (
    <div className="rounded-b drop-shadow-lg p-4 mb-5">
      <div className="sm:flex justify-between items-center">
        <div className="">
          <p className="">
            <Link passHref href="/">
              <a>
                {/* <img
                  className="sm:mb-0 mb-3 w-10 rounded"
                  src="/images/avatar.png"
                  alt="site avatar"
                  width="40px"
                  height="40px"
                /> */}
                <ImageComp
                props={
                {
                  alt: "site avatar",
                  image:"avatar.png",
                  width:40,
                  height:40,
                  classes: "sm:mb-0 rounded"
                }
                }
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
            overflow-scroll
            mt-3
            sm:mt-0
            dark:text-zinc-400
            not-prose
            items-center"
        >
          <Link href="/projects">Projects</Link>{" "}
          <Link href="/posts">Posts</Link> <Link href="/extras">Extras</Link>{" "}
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
}

export default Nav;
