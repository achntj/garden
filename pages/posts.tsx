import Link from "next/link";
import HeadContainer from "../components/HeadContainer";
import { allPosts } from "contentlayer/generated";
import { motion } from "framer-motion";
import PageIntro from "../components/PageIntro";

export default function Posts({ posts }) {
  return (
    <>
      <HeadContainer
        title="Posts"
        description="My thoughts on tech, design, and workflow."
      >
        <div>
          <PageIntro header="Posts" darkTo="dark:to-cyan-600">
            Soon-to-be digital garden
          </PageIntro>
          {posts.map(({ title, description, slug }, index) => (
            <Link passHref key={index} href={`/posts/${slug}`}>
              <motion.div
                className="
                    group
                    rounded
                    p-2
                    font-medium
                    mb-4
                    hover:cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 + (index + 1) / 10 }}
              >
                <h3 className="text-violet-500 dark:text-gray-200 m-0">
                  {title}
                </h3>
                <p className="m-0">{description}</p>
              </motion.div>
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
