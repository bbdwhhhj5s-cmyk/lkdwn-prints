import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05080D] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="py-24 grid lg:grid-cols-[1.5fr_1fr_1fr] gap-16">

          {/* Brand */}
          <div>
            <img
              src="/logo/lkdwn logo white.png"
              alt="LKDWN Prints"
              className="w-40 mb-8"
            />

            <p className="max-w-md text-[#B7B7B7] leading-8">
              Fine art landscape photography from Scotland and Europe,
              printed using museum-quality archival papers and pigment inks.
            </p>
          </div>

          {/* Navigation */}
          <div>

            <h3 className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-8">
              Explore
            </h3>

            <nav className="space-y-4">

              <Link href="/collections" className="block text-white hover:text-[#B8965A] transition-colors">
                Collections
              </Link>

              <Link href="/journal" className="block text-white hover:text-[#B8965A] transition-colors">
                Journal
              </Link>

              <Link href="/about" className="block text-white hover:text-[#B8965A] transition-colors">
                About
              </Link>

              <Link href="/contact" className="block text-white hover:text-[#B8965A] transition-colors">
                Contact
              </Link>

            </nav>

          </div>

          {/* Contact */}
          <div>

            <h3 className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-8">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:info@lkdwn.co.uk"
                className="block text-white hover:text-[#B8965A] transition-colors"
              >
                info@lkdwn.co.uk
              </a>

              <a
                href="https://instagram.com/lkdwnprints"
                target="_blank"
                rel="noreferrer"
                className="block text-white hover:text-[#B8965A] transition-colors"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#7D7D7D]">
            © {new Date().getFullYear()} LKDWN Prints. All Rights Reserved.
          </p>

          <p className="text-sm text-[#7D7D7D]">
            Designed & Photographed by John McHugh
          </p>

        </div>

      </div>
    </footer>
  );
}