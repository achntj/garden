import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavItems from "./NavItems";

function Nav() {
  return (
    <div className="space-x-0 shadow-2xl z-10 fixed bottom-0 top-0 flex flex-col py-10 px-5 dark:bg-neutral-900 dark:border-r-[1px] dark:border-neutral-800 bg-white bg-opacity-20 dark:bg-opacity-100 drop-shadow-lg backdrop-blur-lg w-56 h-full overflow-scroll">
      <div className="space-x-0 flex flex-col text-sm text-gray-700 dark:text-neutral-200 antialiased">
        <NavItems />
      </div>

      <div className="flex items-center justify-center mt-10">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Nav;
