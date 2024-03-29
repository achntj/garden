import ThemeSwitcher from "./ThemeSwitcher";
import NavItems from "./NavItems";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

function Nav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        open ? "" : "sm:translate-x-0 -translate-x-full"
      } nav font-title transition-transform justify-between overflow-x-hidden space-x-0 z-10 fixed bottom-0 top-0 flex flex-col sm:pt-10 px-5 w-64 h-full overflow-scroll sm:bg-transparent sm:dark:bg-transparent bg-white dark:bg-black`}
    >
      <div className="sticky top-0 py-5 sm:hidden bg-white dark:bg-black">
        <XMarkIcon onClick={() => setOpen(false)} className="h-6 w-6" />
      </div>
      <div
        onClick={() => setOpen(false)}
        className="transition-none space-x-0 flex flex-col text-sm text-gray-700 dark:text-neutral-400 antialiased"
      >
        <NavItems />
      </div>

      <div className="flex sm:items-center sm:justify-center my-10">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Nav;
