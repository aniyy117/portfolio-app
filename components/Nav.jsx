"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {link.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${
            pathname === item.href && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
