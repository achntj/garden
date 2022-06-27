import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavLink from "./NavLink";
import {
  CodeIcon,
  HomeIcon,
  PencilAltIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

function Nav() {
  return (
    <div className="shadow-2xl z-10 fixed top-auto bottom-0 w-full h-20 sm:top-0 flex items-center sm:flex-col py-5 sm:py-10 px-5 sm:dark:bg-neutral-900 sm:dark:border-r-[1px] dark:border-neutral-800 bg-white bg-opacity-20 drop-shadow-lg backdrop-blur-lg sm:w-auto sm:h-full justify-between">
      <div className="space-x-4 sm:space-x-0 sm:space-y-4 flex sm:flex-col">
        <NavLink href="/" name="Home">
          <HomeIcon className="h-6 w-6" />
        </NavLink>
        <NavLink href="/projects" name="Projects">
          <CodeIcon className="h-6 w-6" />
        </NavLink>
        <NavLink href="/posts" name="Posts">
          <PencilAltIcon className="h-6 w-6" />
        </NavLink>

        <NavLink href="/design" name="Design">
          <SparklesIcon className="h-6 w-6" />
        </NavLink>
      </div>

      <ThemeSwitcher />
    </div>
  );
}

export default Nav;
