"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href="/">
            <SheetTrigger>
              <h1 className="text-4xl font-semibold">
                DittoSays<span className="text-accent">.</span>
              </h1>
            </SheetTrigger>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 justify-center items-center">
          {link.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              <SheetTrigger> {item.name}</SheetTrigger>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
