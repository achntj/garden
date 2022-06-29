// components/Base.tsx
import Nav from "./Nav";

export default function Base({ children, ...pageProps }) {
  return (
    <>
      <div className="dark:bg-[#101010] dark:bg-none prose-a:text-cyan-600 prose-a:no-underline prose-a:transition dark:prose-a:text-zinc-300 hover:prose-a:text-cyan-800 dark:hover:prose-a:text-pink-600 dark:prose-headings:text-slate-200 dark:prose-strong:text-zinc-300 prose-blockquote:border-emerald-400 dark:prose-blockquote:text-zinc-300">
        <Nav />
        {children}
      </div>
    </>
  );
}
