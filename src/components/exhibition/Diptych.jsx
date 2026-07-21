"use client";

export default function Diptych({
  left,
  right,
}) {
  return (
    <section className="bg-[#090D12] py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="group overflow-hidden rounded-sm">

            <img
              src={left.image}
              alt={left.title}
              className="
                w-full
                h-[82vh]
                object-cover
                transition-transform
                duration-[2200ms]
                ease-out
                group-hover:scale-[1.02]
              "
            />

            <div className="pt-8">

              <p className="text-[#B8965A] uppercase tracking-[0.40em] text-xs mb-3">
                {left.location}
              </p>

              <h3 className="font-serif text-3xl lg:text-4xl text-white leading-tight">
                {left.title}
              </h3>

            </div>

          </div>

          {/* RIGHT */}

          <div className="group overflow-hidden rounded-sm">

            <img
              src={right.image}
              alt={right.title}
              className="
                w-full
                h-[82vh]
                object-cover
                transition-transform
                duration-[2200ms]
                ease-out
                group-hover:scale-[1.02]
              "
            />

            <div className="pt-8">

              <p className="text-[#B8965A] uppercase tracking-[0.40em] text-xs mb-3">
                {right.location}
              </p>

              <h3 className="font-serif text-3xl lg:text-4xl text-white leading-tight">
                {right.title}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}