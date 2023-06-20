// components/Base.tsx
import Nav from "./Nav";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Base({ children, ...pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sm:bg-white sm:bg-opacity-60 dark:bg-opacity-100 sm:backdrop-blur-lg dark:bg-neutral-900 sm:dark:bg-black dark:bg-none prose-a:text-cyan-600 prose-a:no-underline prose-a:transition dark:prose-a:text-zinc-300 hover:prose-a:text-cyan-800 dark:hover:prose-a:text-pink-600 prose-headings:font-title dark:prose-headings:text-slate-200 dark:prose-strong:text-zinc-300 prose-blockquote:border-emerald-400 dark:prose-blockquote:text-zinc-300 prose-li:font-body">
        <div className="p-5 sm:hidden">
          <Bars3Icon onClick={() => setOpen(true)} className="h-6 w-6" />
        </div>
        <Nav open={open} setOpen={setOpen} />
        {children}
      </div>
    </>
  );
}
