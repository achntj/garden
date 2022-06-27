import Link from "next/link";
export default function NavLink({ children, href, name }) {
  return (
    <Link passHref href={href}>
      <div className="flex items-center space-x-4 cursor-pointer hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition p-2">
        {children}
        <p className="hidden sm:block">{name}</p>
      </div>
    </Link>
  );
}
