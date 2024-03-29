import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { motion } from "framer-motion";
import PageIntro from "../components/PageIntro";
import Container from "components/Container";

export default function Posts({ posts }) {
  return (
    <>
      <Container
        title="Posts"
        description="My opinions on tech, design, and workflow."
      >
        <div>
          <PageIntro header="Posts" darkTo="dark:to-cyan-600">
            My thoughts on tech, design, and workflow.
          </PageIntro>
          {posts.map(({ title, description, slug }, index) => (
            <Link passHref key={index} href={`/posts/${slug}`}>
              <motion.div
                className="
                    group
                    rounded-lg
                    px-4
                    py-2
                    font-medium
                    mb-4
                    hover:cursor-pointer
                    hover:bg-white
                    hover:drop-shadow-lg
                    dark:hover:bg-neutral-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 + (index + 1) / 10 }}
              >
                <h3 className="text-cyan-600 dark:text-gray-200 m-0">
                  {title}
                </h3>
                <p className="m-0">{description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
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
