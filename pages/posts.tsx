import Link from "next/link";
import HeadContainer from "../components/HeadContainer";
import { allPosts } from "contentlayer/generated";

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
            <Link passHref key={index} href={`/posts/${slug}`}>
              <div
                className="
                    group
                    rounded
                    p-2
                    font-medium
                    mb-4
                    hover:cursor-pointer"
              >
                <p className="m-0">
                  <span className="text-violet-500 dark:text-gray-200">
                    <b>{title}</b>
                  </span>
                  <br />
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </HeadContainer>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};
