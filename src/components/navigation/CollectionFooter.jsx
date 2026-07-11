"use client";

import Link from "next/link";

export default function CollectionFooter({
  previous = "/",
  previousTitle = "Home",

  next = "/collections/paris",
  nextTitle = "Paris",
}) {
  return (
    <section className="bg-[#090D12] border-t border-white/5">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="flex justify-between items-center">

          <Link
            href={previous}
            className="
              text-white/70
              hover:text-white
              transition
            "
          >
            ← {previousTitle}
          </Link>

          <Link
            href={next}
            className="
              text-white/70
              hover:text-white
              transition
            "
          >
            Continue to {nextTitle} →
          </Link>

        </div>

      </div>

    </section>
  );
}