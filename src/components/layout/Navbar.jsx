import Link from "next/link";
import Image from "next/image";

import { routes } from "../../lib/routes";
import CartLink from "../cart/CartLink";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href={routes.home} aria-label="LKDWN Prints home">
          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={103}
            height={40}
            sizes="103px"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden gap-10 text-sm uppercase tracking-[0.25em] text-white md:flex">
          <Link href={routes.home}>Home</Link>
          <Link href={routes.collections}>Collections</Link>
          <Link href={routes.journal}>Journal</Link>
          <CartLink />
        </nav>

        <nav className="flex gap-5 text-xs uppercase tracking-[0.2em] text-white md:hidden">
          <Link href={routes.home}>Home</Link>
          <Link href={routes.journal}>Journal</Link>
          <CartLink />
        </nav>
      </div>
    </header>
  );
}