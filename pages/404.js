import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div id="main" role="main" className="container">
        <h1>404 - Page Not Found</h1>
        <p>
          That page doesn&lsquo;t exist🙀. You can try again by going{" "}
          <Link href="/">back to the homepage</Link>.
        </p>
        <img
          src="/images/404.gif"
          alt="Error Image"
          style={{ width: "400px" }}
        />
      </div>
    </>
  );
}
