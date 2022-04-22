// components/Base.js
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import HeadContainer from "../components/HeadContainer";

export default function Base({ children, ...pageProps }) {
  return (
    <>
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
      <div className="bg-gradient-to-r from-[#e6dfffec] via-[#dcfff7d0] to-[#fff] animate-gradient-x dark:bg-zinc-900 dark:bg-none prose-a:text-sky-500 prose-a:no-underline prose-a:transition dark:prose-a:text-zinc-300 dark:hover:prose-a:text-sky-600 dark:prose-headings:text-slate-200">
        <div className="max-w-[700px] mx-auto flex flex-col min-h-screen">
          <Nav />
          <div className="px-4 text-gray-700 prose flex-grow dark:text-zinc-400">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
