import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Link from "next/link";
import HeadContainer from "../components/HeadContainer";
import { InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';

export default function Posts({ posts }) {
  return (
    <>
      <HeadContainer
        title="Posts"
        description="My thoughts on tech, design, and workflow."
      >
        <div>
          <h1>Posts</h1>
          {posts.map(({ title, description, slug }, index) => (
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
              hover:shadow-md
              dark:hover:shadow-none"
              >
                <Link passHref key={index} href={`posts/${slug}`}>
                  <div>
                    <span className="text-sky-400">
                      <b>{title}</b>
                    </span>
                    <span className="ml-2 transition-[margin] sm:group-hover:ml-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block text-slate-600 dark:text-slate-400"
                        width="18"
                        height="18"
                        viewBox="0 0 16 26"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                      </svg>
                    </span>
                    <br />
                    {description}
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

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  return {
    props: {
      posts,
    },
  }
}