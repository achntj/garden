// components/Base.js
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Base({ children, ...pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
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
      <Nav />
      <div id="main" role="main" className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}
