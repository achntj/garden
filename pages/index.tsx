import Link from "next/link";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import Container from "components/Container";

//import Image from "next/image";
//import { useState } from "react";
//function cn(...classes) {
//return classes.filter(Boolean).join(" ");
//}

export default function Home() {
  //const [isLoading, setLoading] = useState(true);
  return (
    <Container title="Home">
      {/* <motion.div
        className="relative w-[120px] h-[150.72px] mb-5 mt-[10px]"
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/me.jpeg"
          alt="Picture of Achintya Jha"
          layout="fill"
          objectFit="cover"
          className={cn(
            "rounded select-none",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
          priority
        />
      </motion.div> */}
      <div>
        <div className="mb-10">
          <h1 className="text-2xl text-zinc-700 mb-0 antialiased">
            Achintya Jha
          </h1>
          <p className="my-0">Programmer, Designer, Writer.</p>
          <Socials />
        </div>
        <p className="mt-0">
          I{"'"}m an incoming freshman at Arizona State University studying
          Computer Science and Mathematics. Previously, I worked on{" "}
          <span className="text-orange-600 dark:text-emerald-500">
            Natural Language Processing{" "}
          </span>
          and{" "}
          <span className="text-pink-600 dark:text-blue-400 whitespace-nowrap">
            Machine Learning
          </span>{" "}
          at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.techmahindra.com/en-in/innovation/makers-lab/"
          >
            <span className="dark:underline dark:underline-offset-4 dark:decoration-pink-600 dark:decoration-2">
              {" "}
              Tech Mahindra
            </span>
          </a>{" "}
          and built{" "}
          <a target="_blank" rel="noreferrer" href="https://sentimate.org/">
            <span className="dark:underline dark:underline-offset-4 dark:decoration-cyan-600 dark:decoration-2 dark:hover:text-cyan-600">
              SentiMate
            </span>
          </a>{" "}
          alongside.
        </p>
        <p>
          You can find some of my side projects{" "}
          <Link href="/projects">here</Link> and the rest at my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/achintyajha"
          >
            <span className="dark:underline dark:underline-offset-4 dark:decoration-green-600 dark:decoration-2 dark:hover:text-green-600">
              Github
            </span>
          </a>{" "}
          profile. Apart from programming, I have been doing some{" "}
          <Link href="/extras">other stuff</Link>- primarily Taekwondo, music,
          and writing. (<Link href="/now">Here&#39;s</Link> a list of things I
          {"'"}m doing now.)
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.contentlayer.dev/"
          >
            Contentlayer
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
        <motion.div
          className="flex gap-6 sm:flex-row flex-col mt-10 w-fit sm:w-full"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link passHref href="/projects">
            <div
              className="bg-white bg-opacity-50 dark:bg-opacity-100 backdrop-blur-lg drop-shadow-lg dark:bg-zinc-800 p-4 sm:py-2 sm:px-4 rounded-xl sm:w-full group
              hover:cursor-pointer"
            >
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
            </div>
          </Link>
          <Link passHref href="/posts">
            <div
              className="bg-white bg-opacity-50 dark:bg-opacity-100 backdrop-blur-lg drop-shadow-lg dark:bg-zinc-800 p-4 sm:py-2 sm:px-4 rounded-xl sm:w-full group
              hover:cursor-pointer"
            >
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
            </div>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
}
