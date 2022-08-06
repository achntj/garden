import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

// import 'prismjs/themes/prism-tomorrow.css'

import ImageComp from "../../components/ImageComp";
import Base from "components/Base";
import Container from "components/Container";

const MDXcomponents = {
  // Image: ImageComp,
  ImageComp,
};

export default function PostPage({ post }) {
  const MDXComponent = useMDXComponent(post.body.code);
  const readingTime = Math.round(post.body.raw.split(" ").length / 200) || 1;
  return (
    <>
      <Container
        title={post.title}
        description={post.description}
        image={post.cover}
      >
        <article>
          <div>
            <h1>{post.title}</h1>
            <p className="flex flex-col sm:flex-row justify-between">
              <span>{post.date}</span>
              <span>{post.location && post.location}</span>
            </p>
            <p className="bg-yellow-100 inline-block px-2 dark:text-neutral-800 rounded-lg">
              — {readingTime} minute read
            </p>
          </div>
          <div className="entry">
            <MDXComponent components={MDXcomponents} />
          </div>
        </article>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
