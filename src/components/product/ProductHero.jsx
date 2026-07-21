"use client";

export default function ProductHero({
  image,
  title,
  location,
  description,
  price,
}) {
  const sizes = ["A4", "A3", "A2", "A1"];

  return (
    <section className="bg-[#090D12] text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-24 items-start">

          {/* IMAGE */}

          <div className="lg:col-span-3">

            <div className="overflow-hidden shadow-2xl rounded-sm">

              <img
                src={image}
                alt={title}
                className="
                  w-full
                  object-cover
                  transition
                  duration-[2000ms]
                  hover:scale-[1.02]
                "
              />

            </div>

          </div>

          {/* PURCHASE PANEL */}

          <div className="lg:col-span-2 lg:sticky lg:top-28">

            <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-5">
              Fine Art Print
            </p>

            <h1 className="font-serif text-6xl xl:text-7xl leading-[0.95] mb-6">
  {title}
</h1>

            <p className="uppercase tracking-[0.35em] text-white/50 text-sm mb-10">
              {location}
            </p>

            <div className="w-16 h-px bg-[#D6B36A] mb-10" />

            <p className="text-white/75 leading-8 mb-12">
              {description}
            </p>

            {/* SIZE */}

            <div className="mb-12">

              <h3 className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-5">
                Choose Size
              </h3>

              <div className="grid grid-cols-2 gap-3">

                {sizes.map((size) => (

                  <button
                    key={size}
                    className="
                      border
                      border-white/15
                      py-4
                      transition
                      hover:border-[#D6B36A]
                      hover:text-[#D6B36A]
                    "
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* SPECIFICATION */}

            <div className="border-y border-white/10 py-8 mb-10">

              <div className="space-y-3 text-white/65">

                <p>Museum Quality Giclée Print</p>

                <p>Archival Pigment Inks</p>

                <p>Fine Art Cotton Paper</p>

                <p>Printed to Order</p>

              </div>

            </div>

            {/* PRICE */}

            <div className="flex items-center justify-between mb-8">

              <span className="text-white/60">
                From
              </span>

              <span className="text-4xl font-light">
                {price}
              </span>

            </div>

            {/* BUTTON */}

            <button
              className="
                w-full
                py-6
                bg-[#D6B36A]
                text-black
                uppercase
                tracking-[0.30em]
                text-sm
                transition
                hover:bg-white
              "
            >
              Add to Basket
            </button>

            {/* REASSURANCE */}

            <div className="mt-12 space-y-4 text-sm text-white/55">

              <p>✓ Printed in the UK</p>

              <p>✓ Secure Checkout</p>

              <p>✓ Carefully Packaged</p>

              <p>✓ Museum Quality Materials</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}