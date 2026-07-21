import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#090D12]">

      <div className="mx-auto max-w-7xl px-8 py-24">

        {/* Logo */}

        <div className="flex justify-center">

          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={180}
            height={50}
            priority={false}
          />

        </div>

        {/* Quote */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <p className="font-serif text-3xl leading-relaxed text-white">

            "Every photograph begins long before
            the shutter is released."

          </p>

        </div>

        {/* Navigation */}

        <nav className="mt-20 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[0.35em] text-white/60">

          <Link
            href="/collections"
            className="transition-colors hover:text-[#D6B36A]"
          >
            Collections
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-[#D6B36A]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-[#D6B36A]"
          >
            Contact
          </Link>

          <Link
            href="/journal"
            className="transition-colors hover:text-[#D6B36A]"
          >
            Journal
          </Link>

        </nav>

        {/* Divider */}

        <div className="my-20 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-white/45 lg:flex-row">

          <p>
            © {year} LKDWN Prints. All Rights Reserved.
          </p>

          <p>
            Fine Art Landscape Photography • Printed to Museum Standards
          </p>

        </div>

      </div>

    </footer>
  );
}