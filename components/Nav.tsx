import ThemeSwitcher from "./ThemeSwitcher";
import NavItems from "./NavItems";
import { XIcon } from "@heroicons/react/outline";

function Nav({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <div
      className={`${
        open ? "" : "sm:translate-x-0 -translate-x-full"
      } transition-all ease-in-out duration-200 space-x-0 shadow-2xl z-10 fixed bottom-0 top-0 flex flex-col pt-20 sm:pt-10 px-5 dark:bg-neutral-900 dark:border-r-[1px] dark:border-neutral-800 bg-white bg-opacity-60 sm:bg-opacity-20 dark:bg-opacity-100 drop-shadow-lg backdrop-blur-lg w-56 h-full overflow-scroll`}
    >
      <XIcon
        onClick={() => setOpen(false)}
        className="fixed top-0 left-0 m-5 h-6 w-6 sm:hidden"
      />
      <div
        onClick={() => setOpen(false)}
        className="space-x-0 flex flex-col text-sm text-gray-700 dark:text-neutral-200 antialiased"
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
