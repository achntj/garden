import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, href, name }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link passHref href={href}>
      <div
        className={`${
          isActive ? "font-semibold dark:text-white dark:bg-neutral-600" : " "
        } navLink flex items-center space-x-4 cursor-pointer hover:bg-white dark:hover:bg-neutral-600 rounded-lg transition p-2`}
      >
        {children}
        <p className="hidden sm:block">{name}</p>
      </div>
    </Link>
  );
}
