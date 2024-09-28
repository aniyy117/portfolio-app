"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            DittoSays<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop */}
        <div className="hidden xl:flex items-center gap-9">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile */}
        <div className="block xl:hidden">mobile</div>
      </div>
    </header>
  );
};

export default Header;
