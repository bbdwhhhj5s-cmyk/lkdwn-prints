"use client";

import Link from "next/link";

export default function CollectionNav({
  title = "Scotland",
}) {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-[#081722]/75
        border-b
        border-white/5
      "
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="
            text-white/70
            hover:text-white
            transition-colors
            tracking-wide
          "
        >
          ← LKDWN Prints
        </Link>

        <h1
          className="
            text-white
            uppercase
            tracking-[0.35em]
            text-xs
          "
        >
          {title}
        </h1>

        <Link
          href="/#collections"
          className="
            text-white/70
            hover:text-white
            transition-colors
            tracking-wide
          "
        >
          Collections →
        </Link>

      </div>
    </nav>
  );
}