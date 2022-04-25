import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import ImageComp from "../../components/ImageComp";
import HeadContainer from "../../components/HeadContainer";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostPage({
  frontmatter: { title, date, description, location, cover },
  slug,
  content,
}) {
  return (
    <>
      <HeadContainer
        title={title}
        description={description}
        image={cover.image}
      >
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
          <ImageComp props={cover} />
          <div
            className="entry"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </article>
      </HeadContainer>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/posts"));

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
    path.join("content/posts", slug + ".md"),
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
