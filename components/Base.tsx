// components/Base.tsx
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import HeadContainer from "../components/HeadContainer";
import NowPlaying from "./now-playing";

export default function Base({ children, ...pageProps }) {
  return (
    <>
      {/* Although most pages already use the more verbose Head Component,
          this exists as a fallback for pages which don't use that component. 
          Don't delete this. */}
      <Head>
        <title>
          {pageProps.title
            ? `${pageProps.title} | Achintya Jha`
            : "Achintya Jha"}
        </title>
        <meta
          name="description"
          content={
            pageProps.description
              ? pageProps.description
              : "Personal Website and Blog of Achintya Jha."
          }
        />
      </Head>
      <div className="dark:bg-[#050505] dark:bg-none prose-a:text-cyan-600 prose-a:no-underline prose-a:transition dark:prose-a:text-zinc-300 hover:prose-a:text-cyan-800 dark:hover:prose-a:text-pink-600 dark:prose-headings:text-slate-200 dark:prose-strong:text-zinc-300 prose-blockquote:border-emerald-400 dark:prose-blockquote:text-zinc-300">
        <Nav />
        <div className="flex flex-col sm:ml-52 min-h-screen px-8 sm:px-4 overflow-y-auto max-h-screen">
          <div className="text-gray-700 prose flex-grow dark:text-zinc-400 prose-p:font-body">
            <div className="max-w-[700px] mx-auto pt-10 pb-20 sm:pt-20">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
