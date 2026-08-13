import Link from "next/link";
import Image from "next/image";
import { routes } from "../../lib/routes";
import CartLink from "../cart/CartLink";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link href={routes.home} aria-label="LKDWN Prints home">
          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={103}
            height={40}
            sizes="103px"
            className="h-10"
          />
        </Link>

        <nav className="hidden md:flex gap-10 uppercase tracking-[0.25em] text-sm text-white">

          <Link href={routes.home}>Home</Link>

          <Link href={routes.collections}>Collections</Link>

          <Link href={routes.journal}>Journal</Link>

          <CartLink />

        </nav>

        <nav className="flex gap-5 uppercase tracking-[0.2em] text-xs text-white md:hidden">
          <Link href={routes.home}>Home</Link>
          <Link href={routes.journal}>Journal</Link>
          <CartLink />
        </nav>

      </div>
    </header>
  );
}
