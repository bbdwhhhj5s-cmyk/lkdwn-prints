import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";

export default function FeaturedCollection() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Featured Exhibition
          </p>
          <h2 className="heading mt-6 text-6xl">Scotland</h2>
        </div>

        <Link
          href={routes.collection("scotland")}
          className="group block overflow-hidden rounded-[40px] border border-white/10 bg-[#0D1218]"
        >
          <article className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[32rem] overflow-hidden lg:min-h-[700px]">
              <Image
                src="/images/scotland/glencoe-editorial.jpg"
                alt="Scotland landscape photography exhibition"
                fill
                sizes="(max-width: 1023px) 100vw, 60vw"
                className="object-cover transition duration-[3500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
            </div>

            <div className="flex items-center">
              <div className="p-12 lg:p-20">
                <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                  Volume I
                </p>

                <h3 className="heading mt-6 text-5xl leading-tight">
                  Collected
                  <br />
                  Landscapes
                </h3>

                <div className="mt-10 h-px w-24 bg-[#D6B36A]" />

                <p className="mt-12 text-xl leading-10 text-white/70">
                  Twelve photographs exploring Scotland through changing
                  light, weather and atmosphere.
                </p>

                <p className="mt-8 text-lg leading-9 text-white/60">
                  This exhibition brings together photographs made over
                  several years, creating a visual narrative that evolves with
                  every return to the landscape.
                </p>

                <span className="mt-16 inline-flex items-center rounded-full border border-[#D6B36A] px-10 py-5 text-sm uppercase tracking-[0.35em] transition group-hover:bg-[#D6B36A] group-hover:text-black">
                  Enter Exhibition →
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
