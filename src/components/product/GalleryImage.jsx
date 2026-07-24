"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryImage({
  src,
  alt,
  orientation = "Landscape",
  priority = false,
  onClick,
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const aspect =
    orientation === "Portrait"
      ? "aspect-[4/5]"
      : "aspect-[16/9]";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-zoom-in"
    >
      <div
        className={`
          relative
          ${aspect}
          overflow-hidden
          rounded-[24px]
          bg-[#050608]
        `}
      >
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width:1024px)100vw,68vw"
          onLoadingComplete={() => setLoaded(true)}
          className={`
            object-contain
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.015]
            ${
              loaded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.02]"
            }
          `}
        />

        {/* soft vignette */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* museum frame */}

        <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-white/10" />
      </div>
    </button>
  );
}