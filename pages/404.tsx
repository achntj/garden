import Container from "components/Container";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <h1>404 - Page Not Found</h1>
        <p>
          That page doesn&lsquo;t exist🙀. You can try again by going{" "}
          <Link href="/">
            <a className="hover:underline">back to the homepage</a>
          </Link>
          .
        </p>
        <img className="w-[400px]" src="/images/404.gif" alt="Error Image" />
      </Container>
    </>
  );
}
