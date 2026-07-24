"use client";

import Image from "next/image";

const DEFAULT_LABELS = [
  "Hero Photograph",
  "Gallery View",
  "Print Detail",
  "Framed Edition",
  "Collector Packaging",
];

export default function Filmstrip({
  images = [],
  active = 0,
  onSelect,
}) {
  if (images.length <= 1) return null;

  return (
    <section className="mt-12">

      {/* Heading */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#D6B36A]">
            Exhibition Gallery
          </p>

          <p className="mt-2 text-sm text-white/45">
            Explore the artwork beyond the hero image.
          </p>

        </div>

        <div className="text-sm text-white/40">

          {String(active + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}

        </div>

      </div>

      {/* Filmstrip */}

      <div className="flex gap-5 overflow-x-auto pb-2">

        {images.map((image, index) => {

          const selected = active === index;

          return (

            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              className="
                group
                w-48
                shrink-0
                text-left
                transition-all
                duration-300
              "
            >

              <div
                className={`
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-xl
                  bg-[#050608]
                  transition-all
                  duration-300
                  ${
                    selected
                      ? "ring-2 ring-[#D6B36A]"
                      : "ring-1 ring-white/10 group-hover:ring-white/30"
                  }
                `}
              >

                <Image
                  src={image}
                  alt={DEFAULT_LABELS[index] || `Image ${index + 1}`}
                  fill
                  sizes="200px"
                  className={`
                    object-cover
                    transition-all
                    duration-700
                    ${
                      selected
                        ? "scale-105"
                        : "opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    }
                  `}
                />

                <div
                  className={`
                    absolute
                    inset-0
                    transition-opacity
                    duration-300
                    ${
                      selected
                        ? "bg-transparent"
                        : "bg-black/25"
                    }
                  `}
                />

              </div>

              <div className="mt-3">

                <p
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    ${
                      selected
                        ? "text-[#D6B36A]"
                        : "text-white/35"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h4
                  className={`
                    mt-1
                    text-sm
                    transition-colors
                    duration-300
                    ${
                      selected
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }
                  `}
                >
                  {DEFAULT_LABELS[index] || `Image ${index + 1}`}
                </h4>

              </div>

            </button>

          );

        })}

      </div>

    </section>
  );
}