"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#081722]/85 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-12">

          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xs uppercase tracking-[0.35em] transition-colors duration-300 ${
                  active
                    ? "text-[#D6B36A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[#D6B36A]" />
                )}
              </Link>
            );
          })}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-8">

          <button
            aria-label="Search"
            className="text-white/60 transition-colors hover:text-[#D6B36A]"
          >
            ⌕
          </button>

          <button
            aria-label="Basket"
            className="relative text-white/70 transition-colors hover:text-[#D6B36A]"
          >
            Basket

            <span className="absolute -right-5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D6B36A] text-[10px] font-semibold text-black">
              0
            </span>
          </button>

        </div>

      </div>
    </header>
  );
}