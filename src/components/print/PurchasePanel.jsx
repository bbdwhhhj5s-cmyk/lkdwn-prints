"use client";

export default function PurchasePanel({
  medium = "Fine Art Giclée Print",
  sizes = [],
}) {
  return (
    <aside className="bg-[#11161C] border border-white/10 rounded-sm p-8">

      <p className="uppercase tracking-[0.35em] text-xs text-[#B8965A]">
        Fine Art Print
      </p>

      <h2 className="text-3xl font-serif mt-4">
        {medium}
      </h2>

      <p className="text-white/60 mt-6 leading-8">
        Professionally printed using archival pigment inks on museum-quality
        fine art paper for exceptional colour accuracy and longevity.
      </p>

      <div className="mt-10">

        <h3 className="uppercase tracking-[0.25em] text-xs text-white/50 mb-4">
          Available Sizes
        </h3>

        <div className="grid grid-cols-2 gap-3">

          {sizes.map((size) => (
            <button
              key={size}
              className="
                border
                border-white/20
                py-3
                transition
                hover:border-[#B8965A]
                hover:text-[#B8965A]
              "
            >
              {size}
            </button>
          ))}

        </div>

      </div>

      <div className="mt-10 space-y-4">

        <button
          className="
            w-full
            bg-[#B8965A]
            text-black
            py-4
            uppercase
            tracking-[0.3em]
            text-xs
            font-medium
            transition
            hover:opacity-90
          "
        >
          Add to Basket
        </button>

        <button
          className="
            w-full
            border
            border-white/20
            py-4
            uppercase
            tracking-[0.3em]
            text-xs
            transition
            hover:border-white
          "
        >
          Contact About This Print
        </button>

      </div>

      <div className="mt-10 pt-8 border-t border-white/10 text-sm text-white/60 space-y-3">

        <p>✓ Museum-quality Giclée printing</p>
        <p>✓ Archival fine art paper</p>
        <p>✓ Secure worldwide shipping</p>
        <p>✓ Printed to order</p>

      </div>

    </aside>
  );
}