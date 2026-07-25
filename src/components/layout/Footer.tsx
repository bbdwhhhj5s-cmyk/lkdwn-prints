import Link from "next/link";
import { routes } from "@/lib/routes";

const footerLinks = [
  { label: "Home", href: routes.home },
  { label: "Collections", href: routes.collections },
  { label: "The Photographer", href: `${routes.home}#photographer` },
  { label: "Print & Delivery", href: routes.printDelivery },
  { label: "Cart", href: routes.cart },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A0E] text-white">
      <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              LKDWN Prints
            </p>
            <p className="heading mt-5 text-3xl leading-tight text-white/90 md:text-4xl">
              Fine art photography by John McHugh.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/50">
              Photographed in Scotland and across Europe. Printed to order on
              museum-quality fine art paper.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex max-w-xl flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.22em] text-white/65 md:justify-end"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-[#D6B36A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[11px] uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} John McHugh</p>
          <p>Glasgow, Scotland</p>
        </div>
      </div>
    </footer>
  );
}
