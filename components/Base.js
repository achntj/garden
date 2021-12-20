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
      <Nav />
      <div id="main" role="main" className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}
