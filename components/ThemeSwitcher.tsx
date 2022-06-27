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
    <div className="flex rounded-lg bg-zinc-300 dark:bg-[#2b2b2e] p-1 space-x-1">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className={`${
          theme === "dark" && "bg-zinc-600"
        } rounded-lg flex justify-center transition-all w-9 h-9 p-2 sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-700`}
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
        className={`${
          theme === "light" && "bg-white"
        } rounded-lg flex justify-center transition-all w-9 h-9 p-2 sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-700`}
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
