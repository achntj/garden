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
      <div className="entry">
        <div className="img_div">
          <img className="me_home" src="images/me.jpeg" alt="Achintya Jha" />
        </div>
        <p>
          <b>Hi, I&lsquo;m Achintya!</b>
          <br />
          I&lsquo;m a high school senior at Ahlcon International School,
          studying Computer Science. Currently, I am an Artificial Intelligence
          intern at{" "}
          <a href="https://www.techmahindra.com/en-in/innovation/makers-lab/">
            Tech Mahindra
          </a>
          , where I&lsquo;m mostly working on Natural Language Processing and
          Machine Learning.
          <br />
          You can find some of my projects <Link href="/projects/">
            here
          </Link>{" "}
          and the others at my{" "}
          <a href="https://github.com/achintyajha">GitHub</a> profile.
          <br />
          You can contact me through
          <a
            className="special_link twitter"
            href="https://www.twitter.com/achintyajha05"
          >
            Twitter
          </a>
          ,{" "}
          <a
            className="special_link github"
            href="https://github.com/achintyajha"
          >
            GitHub
          </a>
          ,{" "}
          <a
            className="special_link linkedin"
            href="https://linkedin.com/in/achintyajha"
          >
            LinkedIn
          </a>{" "}
          or via
          <a
            className="special_link mail"
            href="mailto:achintya@achintyajha.com"
          >
            Email
          </a>
          .
          <br />
        </p>
      </div>
      <div className="posts">
        <h2>Posts</h2>
        <p>
          Lately, I have also been writing about tech on my blog. My most recent
          posts are listed here, for all posts check out-
          <Link href="/posts">Posts</Link>
        </p>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>
          This is the place where you will find me talking about what I have
          been making, writing, and thinking over the week. Consider signing up
          for my newsletter to hear about programming, data science, and some
          old school stuff!
        </p>
        <a className="button" href="https://newsletter.achintyajha.in">
          Join
        </a>
      </div>
      <NowPlaying />
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
