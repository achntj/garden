import Head from "next/head";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>Achintya Jha</title>
        <meta
          name="description"
          content="Personal Website and Blog of Achintya Jha."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
