import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <Link passHref href={`posts/${post.slug}`}>
        <article
          className="border border-gray-100
          cursor-pointer
              rounded
              p-2
              font-medium
              hover:bg-gray-100
              mb-2"
        >
          <div>
            <p className="antialiased text-accent mt-0 mb-0">
              {post.frontmatter.title}
            </p>
            <span className="text-gray-400 text-sm">
              {post.frontmatter.date}{" "}
            </span>
            <div className="text-gray-600">{post.frontmatter.oneline}</div>
          </div>
        </article>
      </Link>
    </>
  );
}
