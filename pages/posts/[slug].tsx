import HeadContainer from "../../components/HeadContainer";

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

// import 'prismjs/themes/prism-tomorrow.css'

import ImageComp from "../../components/ImageComp"

const MDXcomponents = {
  // Image: ImageComp,
  ImageComp,
};


export default function PostPage({
  post
}) {
  const MDXComponent = useMDXComponent(post.body.code)
  return (
    <>
      <HeadContainer
        title={post.title}
        description={post.description}
        image={post.cover.image}
      >
        <article className="all_posts">
          <div className="hero">
            <h1>{post.title}</h1>
            <p className="meta">
              <span>{post.date}</span>
              <span style={{ float: "right" }}>
                {post.location ? post.location : "New Delhi, India"}
              </span>
            </p>
          </div>
          <div
            className="entry"
          >
            <MDXComponent components={MDXcomponents}/>
          </div>
        </article>
      </HeadContainer>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find(p => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}
