import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <article className="post">
        <Link passHref href={`posts/${post.slug}`}>
          <div>
            <span className="span_header">{post.frontmatter.title}</span>
            <span className="meta"> • {post.frontmatter.date} </span>
            <div className="post-description">{post.frontmatter.oneline}</div>
          </div>
        </Link>
      </article>
    </>
  );
}
