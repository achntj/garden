import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Link from "next/link";
import Base from "../components/Base";

export default function Home({ posts }) {
  return (
    <div>
      <p>
        {/* <img
          className="rounded w-[120px] h-[120px] mt-[10px] mb-5"
          src="images/me.jpeg"
          alt="Achintya Jha"
        /> */}
        <b>Hi, I{"'"}m Achintya!</b> &rarr;{" "}
        <span className="sm:inline-block block">
          pronounced [uh-chin-
          <a
            href="https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_plosives"
            target="_blank"
            rel="noreferrer"
          >
            t̪
          </a>
          -yaa]
        </span>
        <br />I{"'"}m a high school senior at Ahlcon International School,
        studying Computer Science. Currently, I am working on NLP at{" "}
        <a href="https://www.techmahindra.com/en-in/innovation/makers-lab/">
          Tech Mahindra
        </a>{" "}
        and building <a href="https://sentimate.org/">Sentimate</a> alongside.
      </p>
      <p>
        You can find some of my other side projects{" "}
        <Link href="/projects">here</Link> and the others at my{" "}
        <a href="https://github.com/achintyajha">Github</a> profile. Apart from
        programming, I have been doing some{" "}
        <Link href="/extras">other stuff</Link>- primarily Taekwondo, music, and
        writing.
      </p>
      {/* <p className="flex items-center">📍 &rarr; New Delhi, India 🇮🇳</p>
      <p classNames="flex items-center">
        🎓 &rarr; CS @ Ahlcon International School
      </p> */}
      <p>
        You can contact me through{" "}
        <a
          className="!text-sky-600"
          href="https://www.twitter.com/achintyajha_"
        >
          Twitter
        </a>
        ,{" "}
        <a className="!text-emerald-500" href="https://github.com/achintyajha">
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
      </p>
      <p className="text-sm">
        This website was built with{" "}
        <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
          Next.js
        </a>
        ,{" "}
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          React
        </a>
        ,{" "}
        <a target="_blank" rel="noreferrer" href="https://mdxjs.com/">
          MDX
        </a>
        , &{" "}
        <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        .
      </p>
    </div>
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
