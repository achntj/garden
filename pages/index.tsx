import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Link from "next/link";
import HeadContainer from "../components/HeadContainer";

export default function Home({ posts }) {
  return (
    <HeadContainer title="Home">
      <div>
        <p>
          {/* <img
          className="rounded w-[120px] h-[120px] mt-[10px] mb-5"
          src="images/me.jpeg"
          alt="Achintya Jha"
        /> */}
          <b>Hi, I{"'"}m Achintya.</b>{" "}
          {/* <span className="hidden sm:inline">&rarr; </span>
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
          </span> */}
          <br />I{"'"}m a high school senior at Ahlcon International School,
          studying Computer Science. Currently, I am working on NLP at{" "}
          <a href="https://www.techmahindra.com/en-in/innovation/makers-lab/">
            Tech Mahindra
          </a>{" "}
          and building <a href="https://sentimate.org/">SentiMate</a> alongside.
        </p>
        <p>
          You can find some of my other side projects{" "}
          <Link href="/projects">here</Link> and the others at my{" "}
          <a href="https://github.com/achintyajha">Github</a> profile. Apart
          from programming, I have been doing some{" "}
          <Link href="/extras">other stuff</Link>- primarily Taekwondo, music,
          and writing.
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
        {/* TODO - CTAs */}
        <div className="flex gap-6 sm:flex-row flex-col mt-10 w-fit sm:w-full">
          <div
            className="shadow-lg bg-emerald-100 dark:bg-zinc-800 p-4 sm:py-2 sm:px-4 rounded-xl sm:w-full group transition
              ease-in-out
              hover:cursor-pointer"
          >
            <Link passHref href="/projects">
              <h2 className="text-emerald-800 m-0">
                Projects
                <span className="transition-[margin] sm:group-hover:ml-5">
                  <svg
                    className="inline-block mx-4 text-slate-600 dark:text-slate-400"
                    width="20"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8125 6.00391C13.8125 5.80078 13.7344 5.61328 13.5781 5.46484L8.69531 0.589844C8.52344 0.425781 8.35156 0.355469 8.16406 0.355469C7.76562 0.355469 7.46094 0.644531 7.46094 1.04297C7.46094 1.23828 7.53125 1.41797 7.66406 1.54297L9.32031 3.23047L11.6875 5.39453L9.92969 5.28516H0.710938C0.296875 5.28516 0 5.58203 0 6.00391C0 6.41797 0.296875 6.71484 0.710938 6.71484H9.92969L11.6953 6.60547L9.32031 8.76953L7.66406 10.457C7.53906 10.582 7.46094 10.7617 7.46094 10.957C7.46094 11.3555 7.76562 11.6445 8.16406 11.6445C8.35156 11.6445 8.51562 11.5742 8.67969 11.4258L13.5781 6.53516C13.7344 6.38672 13.8125 6.19922 13.8125 6.00391Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </h2>
            </Link>
          </div>
          <div
            className="shadow-lg bg-teal-100 dark:bg-zinc-800 p-4 sm:py-2 sm:px-4 rounded-xl sm:w-full group
              transition
              ease-in-out
              hover:cursor-pointer"
          >
            <Link passHref href="/posts">
              <h2 className="text-teal-800 m-0">
                Essays
                <span className="transition-[margin] sm:group-hover:ml-5">
                  <svg
                    className="inline-block mx-4 text-slate-600 dark:text-slate-400"
                    width="20"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8125 6.00391C13.8125 5.80078 13.7344 5.61328 13.5781 5.46484L8.69531 0.589844C8.52344 0.425781 8.35156 0.355469 8.16406 0.355469C7.76562 0.355469 7.46094 0.644531 7.46094 1.04297C7.46094 1.23828 7.53125 1.41797 7.66406 1.54297L9.32031 3.23047L11.6875 5.39453L9.92969 5.28516H0.710938C0.296875 5.28516 0 5.58203 0 6.00391C0 6.41797 0.296875 6.71484 0.710938 6.71484H9.92969L11.6953 6.60547L9.32031 8.76953L7.66406 10.457C7.53906 10.582 7.46094 10.7617 7.46094 10.957C7.46094 11.3555 7.76562 11.6445 8.16406 11.6445C8.35156 11.6445 8.51562 11.5742 8.67969 11.4258L13.5781 6.53516C13.7344 6.38672 13.8125 6.19922 13.8125 6.00391Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </HeadContainer>
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

// Home.getLayout = function getLayout(page) {
//   return <Base title="Home">{page}</Base>;
// };
