import Link from "next/link";
import Image from "next/image";
import { routes } from "../../lib/routes";
import CartLink from "../cart/CartLink";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Image
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          width={103}
          height={40}
          sizes="103px"
          className="h-10"
        />

        <nav className="hidden md:flex gap-10 uppercase tracking-[0.25em] text-sm text-white">

          <Link href={routes.collections}>Collections</Link>

          <CartLink />

        </nav>

        <div className="md:hidden uppercase tracking-[0.2em] text-xs text-white">
          <CartLink />
        </div>

      </div>
    </header>
  );
}
