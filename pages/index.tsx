import Link from "next/link";
import { motion } from "framer-motion";
import Container from "components/Container";
import University from "components/University";
import {
  BookOpenIcon,
  CodeBracketIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import { useState } from "react";
import NowPlaying from "components/now-playing";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  return (
    <Container title="Home">
      <div className="">
        {/*
        <motion.div
          className="relative float-right w-48 h-60 mb-5 mt-[10px]"
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
        </motion.div>
        */}

        <div className="">
          <div className="mb-10">
            <h1 className="text-4xl text-zinc-700 mb-0 antialiased">
              Achintya Jha
            </h1>
            <h3 className="my-0">Programmer &#x2022; Designer</h3>
          </div>
          <div className="mt-0 text-xl font-bold">
            <p>
              I{"'"}m a{" "}
              <span className="text-teal-600 dark:text-amber-400 whitespace-nowrap">
                full stack developer
              </span>{" "}
              and software engineer.{" "}
            </p>
            <p>
              I{"'"}m currently a freshman at <University />, studying Computer
              Science and Mathematics.
            </p>

            <p>
              I've worked on{" "}
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
              </a>
            </p>
            <p>
              Previously, I built{" "}
              <a target="_blank" rel="noreferrer" href="https://sentimate.org/">
                <span className="dark:underline dark:underline-offset-4 dark:decoration-cyan-600 dark:decoration-2 dark:hover:text-cyan-600">
                  SentiMate
                </span>
              </a>
              , a suite of mental health tools.
            </p>
          </div>
          <div className="flex gap-6 justify-between lg:flex-row flex-col-reverse mt-10 md:w-full">
            <div className="bg-white shadow-lg dark:bg-neutral-800 rounded-lg py-2 px-10 w-fit lg:w-[40%] hidden sm:block">
              <h2>Quick Links</h2>
              <div className="text-xl space-y-4 quickLinksDiv">
                <Link href="/Achintya_Jha_Resume.pdf">
                  <div className="">
                    <DocumentTextIcon
                      title="Resume (PDF)"
                      className="h-6 w-6 !text-neutral-900 dark:!text-neutral-400"
                    />
                    <span>Resume</span>
                  </div>
                </Link>
                <Link href="/projects">
                  <div>
                    {" "}
                    <CodeBracketIcon
                      title="Link to Projects"
                      className="h-6 w-6 !text-neutral-900 dark:!text-neutral-400"
                    />
                    <span>Projects</span>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    {" "}
                    <div
                      title="GitHub Profile"
                      className="flex items-center space-x-2 cursor-pointer hover:underline underline-offset-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                        data-v-77f39053=""
                        className="dark:text-white h-6 w-6 text-[#171515]"
                      >
                        <path
                          d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z"
                          fillRule="evenodd"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </div>
                </Link>
                <Link href="/coursework">
                  <div>
                    {" "}
                    <BookOpenIcon
                      title="Link to Course Work"
                      className="h-6 w-6 !text-neutral-900 dark:!text-neutral-400"
                    />
                    <span>Course Work</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-[60%] w-full max-w-lg space-y-10 sm:space-y-4 flex flex-col justify-around">
              <Link href="/contact">
                <div className="flex justify-center h-full shadow-lg items-center bg-emerald-200 group hover:bg-emerald-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer rounded-lg px-10 py-6 sm:py-5">
                  <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl underline underline-offset-4 decoration-amber-400 group-hover:decoration-yellow-500 decoration-8">
                    Get in Touch
                  </h1>
                </div>
              </Link>
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
