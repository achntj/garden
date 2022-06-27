import Link from "next/link";
export default function NavLink({ children, href, name }) {
  return (
    <Link passHref href={href}>
      <div className="flex space-x-4 cursor-pointer">
        {children}
        <p className="hidden sm:block dark:text-white">{name}</p>
      </div>
    </Link>
  );
}
