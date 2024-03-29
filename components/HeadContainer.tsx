import Head from "next/head";

export default function HeadContainer({ ...pageProps }) {
  const title = pageProps.title
    ? `${pageProps.title} | Achintya Jha`
    : "Achintya Jha";

  const description = pageProps.description
    ? pageProps.description
    : "Achintya Jha is an incoming freshman at Arizona State University, studying Computer Science and Mathematics.";

  const image = pageProps.image
    ? `https://achintyajha.com/images/posts/${pageProps.image}`
    : "https://achintyajha.com/images/avatar.png";

  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://achintyajha.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Achintya Jha" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="achintyajha.com" />
      <meta property="twitter:url" content="https://achintyajha.com/" />
      <meta property="twitter:creator" content="@achntj" />
      <meta name="twitter:site" content="@achntj" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
