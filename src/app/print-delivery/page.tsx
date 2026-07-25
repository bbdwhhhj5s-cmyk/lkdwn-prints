import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Print & Delivery",
  description:
    "Fine art print materials, available sizes, framing and UK delivery information for LKDWN Prints.",
  alternates: {
    canonical: routes.printDelivery,
  },
};

const details = [
  {
    number: "01",
    title: "Fine art printing",
    copy: "Each photograph is produced using 12-colour giclée printing on smooth, matte, FSC-certified 200 gsm fine art paper. The finish is designed for rich colour, subtle tonal detail and a clean, glare-free presentation.",
  },
  {
    number: "02",
    title: "Sizes & framing",
    copy: "Unframed prints are available in A2, A1 and A0. A2 and A1 prints can also be supplied ready to hang in a black or natural wood frame with shatterproof plexiglass. A0 is available unframed only.",
  },
  {
    number: "03",
    title: "Made to order",
    copy: "Prints are created especially for you rather than held as stock. Production is handled by Gelato's professional print network, with UK fulfilment available for these products.",
  },
  {
    number: "04",
    title: "UK delivery",
    copy: "Orders are currently available for UK delivery. Tracked shipping is £8.95 and becomes free when your order reaches £150. The delivery estimate shown at checkout is normally 5–10 business days.",
  },
];

export default function PrintDeliveryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#090D12] px-8 pb-28 pt-40 text-white md:pt-48">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              The finished artwork
            </p>
            <h1 className="heading mt-7 text-6xl leading-tight md:text-8xl">
              Print &amp;
              <br />
              Delivery.
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-9 text-white/65">
              Carefully produced fine art prints, made to order and delivered
              ready to become part of your space.
            </p>
          </header>

          <div className="mt-24 grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 md:grid-cols-2">
            {details.map((detail) => (
              <section key={detail.number} className="bg-[#0D1218] p-10 md:p-14">
                <p className="text-xs tracking-[0.3em] text-[#D6B36A]">
                  {detail.number}
                </p>
                <h2 className="heading mt-6 text-4xl">{detail.title}</h2>
                <p className="mt-7 text-base leading-8 text-white/60">
                  {detail.copy}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
