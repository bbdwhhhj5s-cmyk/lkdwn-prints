import Link from "next/link";
import { routes } from "../../lib/routes";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <img
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          className="h-10"
        />

        <nav className="hidden md:flex gap-10 uppercase tracking-[0.25em] text-sm text-white">

          <Link href={routes.collections}>Collections</Link>

          <a href="#">Journal</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </nav>

      </div>
    </header>
  );
}
