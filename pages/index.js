import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import Link from "next/link";
import Base from "../components/Base";
import NowPlaying from "../components/now-playing";

export default function Home({ posts }) {
  return (
    <>
      <div>
        <img
          className="rounded-full float-right w-[120px] h-[120px] mt-[10px] mb-0"
          src="images/me.jpeg"
          alt="Achintya Jha"
        />
        <p>
          <b>Hi, I&lsquo;m Achintya!</b>
          <br />
          I&lsquo;m a high school senior at Ahlcon International School,
          studying Computer Science. Currently, I am working on NLP at{" "}
          <a href="https://www.techmahindra.com/en-in/innovation/makers-lab/">
            Tech Mahindra
          </a>{" "}
          and building <a href="https://sentimate.org/">Sentimate</a> alongside.
          <br />
          You can contact me through{" "}
          <a
            className="!text-sky-600"
            href="https://www.twitter.com/achintyajha_"
          >
            Twitter
          </a>
          ,{" "}
          <a
            className="!text-emerald-500"
            href="https://github.com/achintyajha"
          >
            GitHub
          </a>
          ,{" "}
          <a
            className="!text-blue-500"
            href="https://linkedin.com/in/achintyajha"
          >
            LinkedIn
          </a>
          , or via{" "}
          <a className="!text-rose-500" href="mailto:achintya@achintyajha.com">
            Email
          </a>
          .
          <br />
          <b>FAQ- Built With:</b> Next.JS, React, MDX, Tailwind, Vercel.
        </p>
      </div>
      <div>
        <h2>Posts</h2>
        <p>
          Lately, I have also been writing about tech on my blog. My most recent
          posts are listed here, for all posts check out-{" "}
          <Link href="/posts">Posts</Link>
        </p>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <hr />
      <div>
        <NowPlaying />
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

Home.getLayout = function getLayout(page) {
  return <Base title="Home">{page}</Base>;
};
