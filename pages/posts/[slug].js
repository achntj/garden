import fs from "fs";
import path from "path";
import matter from "gray-matter";

import HeadContainer from "../../components/HeadContainer";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostPage({
  frontmatter: { title, date, description, location, cover },
  slug,
  source,
}) {
  return (
    <>
      <HeadContainer title={title} description={description} image={cover}>
        <article className="all_posts">
          <div className="hero">
            <h1>{title}</h1>
            <p className="meta">
              <span>{date}</span>
              <span style={{ float: "right" }}>
                {location ? location : "New Delhi, India"}
              </span>
            </p>
          </div>
          <div className="entry">
            <MDXRemote {...source} />
          </div>
        </article>
      </HeadContainer>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/posts", slug + ".mdx"),
    "utf-8"
  );

  // const { data: frontmatter, content } = matter(markdownWithMeta);

  // // MDX text - can be from a local file, database, anywhere
  // const source = content;
  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
  });

  const frontmatter = mdxSource.frontmatter;

  return {
    props: {
      frontmatter,
      slug,
      source: mdxSource,
    },
  };
}
