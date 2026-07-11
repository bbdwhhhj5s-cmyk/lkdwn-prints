"use client";

export default function Diptych({
  left,
  right,
}) {
  return (
    <section className="bg-[#090D12] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="group overflow-hidden rounded-sm">

            <img
              src={left.image}
              alt={left.title}
              className="
                w-full
                h-[80vh]
                object-cover
                transition-transform
                duration-[2500ms]
                ease-out
                group-hover:scale-[1.03]
              "
            />

            <div className="pt-6">

              <p className="text-[#B8965A] uppercase tracking-[0.35em] text-xs mb-3">
                {left.location}
              </p>

              <h3 className="text-3xl font-serif text-white">
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
                h-[80vh]
                object-cover
                transition-transform
                duration-[2500ms]
                ease-out
                group-hover:scale-[1.03]
              "
            />

            <div className="pt-6">

              <p className="text-[#B8965A] uppercase tracking-[0.35em] text-xs mb-3">
                {right.location}
              </p>

              <h3 className="text-3xl font-serif text-white">
                {right.title}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}