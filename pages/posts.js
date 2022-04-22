import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Link from "next/link";
import HeadContainer from "../components/HeadContainer";

export default function Posts({ posts }) {
  return (
    <>
      <HeadContainer
        title="Posts"
        description="My thoughts on tech, design, and workflow."
      >
        <div>
          <h1>Posts</h1>
          {posts.map((post, index) => (
            <>
              <p
                className="
              group
              rounded
              p-2
              font-medium
              transition
              ease-in-out
              mb-2
              hover:cursor-pointer
              hover:shadow-md"
              >
                <Link passHref key={index} href={`posts/${post.slug}`}>
                  <div>
                    <span className="text-sky-400">
                      <b>{post.frontmatter.title}</b>
                    </span>
                    <span className="ml-2 transition-[margin] group-hover:ml-5">
                      &rarr;
                    </span>
                    <br />
                    {post.frontmatter.description}
                  </div>
                </Link>
              </p>
            </>
          ))}
        </div>
      </HeadContainer>
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
