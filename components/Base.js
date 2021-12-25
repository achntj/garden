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
      <div className="border-t-4 border-accent">
        <div className="max-w-[700px] mx-auto">
          <Nav />
          <div className="px-4 text-gray-700 prose hover:prose-a:underline">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
