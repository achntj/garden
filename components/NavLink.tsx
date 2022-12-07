import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, href, name }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link passHref href={href}>
      <div
        title={name}
        className={`${
          isActive
            ? "font-semibold text-zinc-600 dark:text-white bg-neutral-100 dark:bg-neutral-600"
            : ""
        } navLink flex items-center space-x-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 rounded-lg p-2`}
      >
        {children}
        <p className="block">{name}</p>
      </div>
    </Link>
  );
}
