// components/Base.js
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

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
      <div className="bg-gradient-to-r from-[#d7ffe98f] to-[#ffffff] via-[#f2d2ff75] animate-gradient-x">
        <div className="max-w-[700px] shadow-lg mx-auto flex flex-col min-h-screen bg-white">
          <Nav />
          <div className="px-4 text-gray-700 prose flex-grow">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
