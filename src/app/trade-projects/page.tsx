import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { routes } from "@/lib/routes";

const enquiryHref =
  "mailto:john@lkdwnprints.co.uk?subject=Trade%20and%20project%20enquiry";

export const metadata: Metadata = {
  title: "Trade & Projects",
  description:
    "Fine art photography for interior designers, architects, property developers, hotels and workplace installations.",
  alternates: {
    canonical: routes.tradeProjects,
  },
  openGraph: {
    title: "Trade & Projects | LKDWN Prints",
    description:
      "Fine art photography for interior designers, architects, property developers, hotels and workplace installations.",
    type: "website",
    images: [
      {
        url: "/images/mockups/cathedral-under-storm-realistic-light/executive-office.jpg",
        alt: "Fine art photography presented in a contemporary executive interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade & Projects | LKDWN Prints",
    description:
      "Fine art photography for interior designers, architects, property developers, hotels and workplace installations.",
    images: [
      "/images/mockups/cathedral-under-storm-realistic-light/executive-office.jpg",
    ],
  },
};

const audiences = [
  "Interior designers",
  "Architects",
  "Property developers",
  "Hotels & hospitality",
  "Workplace interiors",
  "Large office installations",
];

const services = [
  {
    number: "01",
    title: "Curated selections",
    copy: "A considered group of photographs selected to suit the atmosphere, palette and character of a particular interior.",
  },
  {
    number: "02",
    title: "Coordinated sets",
    copy: "Related works drawn from one collection—or combined across several—to create a consistent visual rhythm throughout a project.",
  },
  {
    number: "03",
    title: "Project quantities",
    copy: "Direct discussion of quantities, framing and delivery for hotels, developments, offices and multi-room installations.",
  },
  {
    number: "04",
    title: "Bespoke enquiries",
    copy: "A2, A1 and A0 formats are available through the standard collection. Larger or unusual requirements can be discussed as a bespoke project before any commitment is made.",
  },
];

export default function TradeProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#090D12] text-white">
        <section className="relative min-h-[92svh] overflow-hidden">
          <Image
            src="/images/mockups/cathedral-under-storm-realistic-light/executive-office.jpg"
            alt="Fine art photography presented in a contemporary executive interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-transparent to-black/35" />

          <header className="absolute inset-x-0 bottom-16 px-8 md:bottom-24">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                  For professional interiors
                </p>
                <h1 className="heading mt-7 text-6xl leading-[0.95] md:text-8xl">
                  Trade &amp;
                  <br />
                  Projects.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
                  Fine art photography for spaces designed to be remembered.
                  Curated for hospitality, residential development and the
                  modern workplace.
                </p>
              </div>
            </div>
          </header>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-28 md:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Who we work with
              </p>
              <h2 className="heading mt-7 text-5xl leading-tight md:text-6xl">
                Art with a sense
                <br />
                of place.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-xl leading-10 text-white/70">
                LKDWN collections can be specified as individual statement
                pieces or developed into coordinated installations. Each
                project begins with the space: its architecture, light, colour
                and the people who will experience it.
              </p>

              <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <p
                    key={audience}
                    className="bg-[#0D1218] px-7 py-6 text-sm uppercase tracking-[0.2em] text-white/65"
                  >
                    {audience}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#070A0E]">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="bg-[#070A0E] px-8 py-16 md:p-16"
              >
                <p className="text-xs tracking-[0.3em] text-[#D6B36A]">
                  {service.number}
                </p>
                <h2 className="heading mt-6 text-4xl">{service.title}</h2>
                <p className="mt-7 max-w-xl leading-8 text-white/60">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-28 md:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-white/10">
              <Image
                src="/images/mockups/castle-stalker-by-moonlight/boutique-hotel.jpg"
                alt="Framed fine art photography in a boutique hotel interior"
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Start a conversation
              </p>
              <h2 className="heading mt-7 text-5xl leading-tight md:text-6xl">
                Tell me about
                <br />
                your space.
              </h2>
              <p className="mt-9 text-lg leading-9 text-white/65">
                Share the project type, location, approximate quantity and any
                early thoughts on scale or atmosphere. I&apos;ll respond
                personally to discuss a suitable direction.
              </p>
              <a
                href={enquiryHref}
                className="mt-12 inline-flex border border-[#D6B36A] px-8 py-5 text-xs uppercase tracking-[0.28em] text-[#D6B36A] transition hover:bg-[#D6B36A] hover:text-black"
              >
                Email john@lkdwnprints.co.uk
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
