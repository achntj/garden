import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

function Nav() {
  return (
    <div className="rounded-b drop-shadow-lg py-4 mt-2">
      <div className="sm:flex justify-between items-center">
        <div className="">
          <Link passHref href="/">
            <svg
              width="20"
              height="20"
              viewBox="10 10 44 44"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer text-base"
            >
              <path
                fillRule="evenodd"
                fill="currentColor"
                d="M48.01 10.02H48c1.1-.01 2 .89 2 1.99v8.52l0-.01c-.01.41-.34.74-.76.74 -.2-.01-.39-.08-.53-.22l-6.14-6.14 -.01-.01c-.38-.38-.59-.89-.59-1.42v-1.51l0 0c-.01-1.11.89-2.01 1.99-2.01Zm0 44h-9H39c-1.11-.01-2-.9-2-2.01v-12 0c0-1.11-.9-2-2-2h-6 -.01c-1.11 0-2 .89-2 2v12 0c0 1.1-.9 2-2 2h-9 -.01c-1.11-.01-2-.9-2-2.01V33.98H9.99l-.01-.001c-1.11-.01-2.01-.9-2-2.01 0-.54.21-1.04.58-1.42L30.55 8.53l-.01 0c.78-.79 2.04-.79 2.82-.01 0 0 0 0 0 0l21.994 22 0 0c.78.78.78 2.04-.01 2.82 -.38.37-.89.58-1.42.58h-4v18.01l0 0c0 1.1-.9 2-2 2 -.01 0-.01 0-.01-.001Z"
              ></path>
            </svg>
          </Link>
        </div>

        <nav
          className="
            flex
            text-gray-700
            text-base
            space-x-5
            font-medium
            overflow-scroll
            mt-3
            sm:mt-0
            dark:text-zinc-400
            not-prose
            items-center
            dark:!bg-clip-text 
            dark:!text-transparent
            dark:!bg-gradient-to-r
            dark:from-cyan-600
            dark:to-teal-300"
        >
          <Link href="/projects">Projects</Link>
          <Link href="/posts">Posts</Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
}

export default Nav;
