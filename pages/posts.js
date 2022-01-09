import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import Link from "next/link";
import Base from "../components/Base";

export default function Posts({ posts }) {
  return (
    <>
      <div>
        <h1>Posts</h1>
        {posts.map((post, index) => (
          <>
            <p
              className="border border-gray-100
              rounded
              p-2
              font-medium
              hover:bg-gray-100
              mb-2
              hover:cursor-pointer"
            >
              <Link passHref key={index} href={`posts/${post.slug}`}>
                <div>
                  <span className="text-rose-500">
                    <b>{post.frontmatter.title}</b>
                  </span>
                  <br />
                  {post.frontmatter.description}
                </div>
              </Link>
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // get files from the posts directory
  const files = fs.readdirSync(path.join("content/posts"));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create-slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("content/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  // console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

Posts.getLayout = function getLayout(page) {
  return (
    <Base
      title="Posts"
      description="My thoughts on tech, design, and workflow."
    >
      {page}
    </Base>
  );
};
