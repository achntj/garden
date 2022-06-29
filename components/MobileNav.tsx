import ThemeSwitcher from "./ThemeSwitcher";
import { XIcon } from "@heroicons/react/outline";
import NavItems from "./NavItems";

function MobileNav({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <div
      className={`${
        open ? "" : "-translate-x-96"
      } transition-all ease-in-out duration-150 space-x-0 shadow-2xl z-10 fixed bottom-0 top-0 flex flex-col pt-20 px-5 dark:bg-neutral-900 dark:border-r-[1px] dark:border-neutral-800 bg-white bg-opacity-60 dark:bg-opacity-100 drop-shadow-lg backdrop-blur-lg w-56 h-full overflow-scroll`}
    >
      <XIcon
        onClick={() => setOpen(false)}
        className="absolute top-0 left-0 m-5 h-6 w-6 sm:hidden"
      />
      <div
        onClick={() => setOpen(false)}
        className="space-x-0 flex flex-col text-sm text-gray-700 dark:text-neutral-200 antialiased"
      >
        <NavItems />
      </div>

      <div className="flex items-center justify-center mt-10">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default MobileNav;
