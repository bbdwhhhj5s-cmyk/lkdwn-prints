"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-700
        ${
          scrolled
            ? "bg-[#071019]/85 backdrop-blur-xl border-b border-white/10"
            : "bg-[#071019]/40 backdrop-blur-md"
        }
      `}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">

        <Link href="/">
          <img
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            className="w-28 transition-transform duration-500 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">

          <Link
            href="/collections"
            className="uppercase tracking-[0.32em] text-[11px] text-white transition-colors hover:text-[#B8965A]"
          >
            Collections
          </Link>

          <Link
            href="/journal"
            className="uppercase tracking-[0.32em] text-[11px] text-white transition-colors hover:text-[#B8965A]"
          >
            Journal
          </Link>

          <Link
            href="/about"
            className="uppercase tracking-[0.32em] text-[11px] text-white transition-colors hover:text-[#B8965A]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="uppercase tracking-[0.32em] text-[11px] text-white transition-colors hover:text-[#B8965A]"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}
