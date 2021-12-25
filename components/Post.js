import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <article
        className="border border-gray-100
              rounded
              p-2
              font-medium
              hover:bg-gray-100
              mb-2"
      >
        <Link passHref href={`posts/${post.slug}`}>
          <div className="cursor-pointer">
            <p className="text-accent mt-0 mb-0">{post.frontmatter.title}</p>
            <span className="text-gray-400 text-sm">
              {post.frontmatter.date}{" "}
            </span>
            <div className="text-gray-600">{post.frontmatter.oneline}</div>
          </div>
        </Link>
      </article>
    </>
  );
}
