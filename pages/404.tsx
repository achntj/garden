import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-[700px] mx-auto">
        <div className="px-4 text-gray-700 prose hover:prose-a:underline dark:text-zinc-400 prose-a:text-sky-500 prose-a:no-underline prose-a:transition dark:prose-a:text-zinc-300 dark:hover:prose-a:text-sky-600 dark:prose-headings:text-slate-200">
          <h1>404 - Page Not Found</h1>
          <p>
            That page doesn&lsquo;t exist🙀. You can try again by going{" "}
            <Link href="/">back to the homepage</Link>.
          </p>
          <img className="w-[400px]" src="/images/404.gif" alt="Error Image" />
        </div>
      </div>
    </>
  );
}
