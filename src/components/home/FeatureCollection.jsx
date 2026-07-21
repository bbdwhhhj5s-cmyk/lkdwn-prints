import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollection() {
  return (
    <section className="py-12">

      <div className="mx-auto max-w-7xl px-8">

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0D1218]">

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[650px]">

              <Image
                src="/images/scotland/glencoe-editorial.jpg"
                alt="Scotland Collection"
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-[4000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />

            </div>

            {/* Editorial */}

            <div className="flex items-center">

              <div className="p-12 lg:p-20">

                <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                  Featured Exhibition
                </p>

                <h2 className="mt-6 font-serif text-6xl leading-none">
                  Scotland
                </h2>

                <p className="mt-4 text-lg text-white/50">
                  Volume I
                </p>

                <div className="mt-10 h-px w-24 bg-[#D6B36A]" />

                <p className="mt-12 text-xl leading-10 text-white/72">
                  Twelve photographs exploring mountains, coastlines and
                  changing weather across Scotland.
                </p>

                <p className="mt-8 text-lg leading-9 text-white/65">
                  Rather than documenting one journey, this exhibition
                  brings together photographs made across multiple years,
                  revealing the changing relationship between landscape,
                  atmosphere and memory.
                </p>

                <p className="mt-8 text-lg leading-9 text-white/65">
                  Every artwork is available as a museum-quality archival
                  print, carefully produced using Hahnemühle Photo Rag
                  paper and pigment inks.
                </p>

                <div className="mt-14 flex flex-wrap gap-5">

                  <Link
                    href="/collections/scotland"
                    className="rounded-full bg-[#D6B36A] px-10 py-5 text-sm font-medium uppercase tracking-[0.35em] text-black transition-all duration-300 hover:scale-[1.03]"
                  >
                    Enter Exhibition
                  </Link>

                  <Link
                    href="/collections"
                    className="rounded-full border border-white/15 px-10 py-5 text-sm uppercase tracking-[0.35em] transition-all duration-300 hover:border-[#D6B36A]"
                  >
                    View All Collections
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}