import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Base from "../../components/Base";

export default function PostPage({
  frontmatter: { title, date, description, location },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title} | Achintya Jha</title>
        <meta name="description" content={description} />
      </Head>
      <article className="all_posts">
        <div className="hero">
          <h1>{title}</h1>
          <p className="meta">
            <span>{date} • 10 mins</span>
            <span style={{ float: "right" }}>
              {location ? location : "New Delhi, India"}
            </span>
          </p>
        </div>
        <br />
        <div
          className="entry"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
PostPage.getLayout = function getLayout(page) {
  return <Base>{page}</Base>;
};
