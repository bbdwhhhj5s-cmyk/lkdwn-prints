"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#081722]/95 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={180}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#D6B36A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Basket */}
        <button
          className="rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/70 transition-all duration-300 hover:border-[#D6B36A] hover:text-[#D6B36A]"
        >
          Basket (0)
        </button>

      </div>
    </header>
  );
}