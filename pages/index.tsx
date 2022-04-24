import Link from "next/link";
import HeadContainer from "../components/HeadContainer";

export default function Home() {
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
        {/* <div className="flex gap-6 sm:flex-row flex-col mt-10">
          <div className="shadow-lg bg-emerald-100 dark:bg-zinc-800 py-2 px-4 rounded-xl w-full">
            <h2 className="text-emerald-800 m-0">Projects</h2>
          </div>
          <div className="shadow-lg bg-teal-100 dark:bg-zinc-800 py-2 px-4 rounded-xl w-full">
            <h2 className="text-teal-800 m-0">Essays</h2>
          </div>
        </div> */}
      </div>
    </HeadContainer>
  );
}