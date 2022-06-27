import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="flex rounded bg-[#f2f1f3] dark:bg-[#2b2b2e] p-1">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className=" rounded-lg flex justify-center transition-all w-9 h-9 p-2 sm:hover:bg-zinc-300 sm:dark:hover:bg-zinc-700"
        onClick={() => {
          setTheme("dark");
        }}
      >
        {mounted && (
          <>
            <MoonIcon />
          </>
        )}
      </button>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className=" rounded-lg flex justify-center transition-all w-9 h-9 p-2 sm:hover:bg-zinc-300 sm:dark:hover:bg-zinc-700"
        onClick={() => {
          setTheme("light");
        }}
      >
        {mounted && (
          <>
            <SunIcon />
          </>
        )}
      </button>
    </div>
  );
}
//className="w-5 h-5 text-gray-800 dark:text-gray-200"
