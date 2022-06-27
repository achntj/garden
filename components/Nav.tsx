import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import NavLink from "./NavLink";

function Nav() {
  return (
    <div className="shadow-2xl z-10 fixed top-auto bottom-0 w-full h-20 sm:top-0 flex items-center sm:flex-col py-5 sm:py-10 px-5 dark:bg-zinc-900 bg-white bg-opacity-20 rounded drop-shadow-lg backdrop-blur-lg sm:w-auto sm:h-full justify-between">
      <div className="space-x-4 sm:space-x-0 sm:space-y-4 flex sm:flex-col">
        <NavLink href="/" name="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </NavLink>
        <NavLink href="/projects" name="Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </NavLink>
        <NavLink href="/posts" name="Posts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </NavLink>
      </div>

      <ThemeSwitcher />
    </div>
  );
}

export default Nav;
