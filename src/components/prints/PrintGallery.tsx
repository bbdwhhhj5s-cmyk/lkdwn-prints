"use client";

import { useCallback, useEffect, useState } from "react";
import type { Artwork } from "@/data/catalog";

const galleryLabels = [
  "Artwork",
  "Living room",
  "Boutique hotel",
  "Executive office",
  "Collector detail",
];

export default function PrintGallery({ artwork }: { artwork: Artwork }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageAspectRatios, setImageAspectRatios] = useState<
    Record<string, number>
  >({});
  const [viewerOpen, setViewerOpen] = useState(false);

  const gallery =
    artwork.gallery.length > 0 ? artwork.gallery : [artwork.image];

  const activeImage = gallery[activeIndex] ?? artwork.image;
  const activeAspectRatio = imageAspectRatios[activeImage];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  }, [gallery.length]);

  useEffect(() => {
    gallery.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });
  }, [gallery]);

  useEffect(() => {
    if (!viewerOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewerOpen(false);
      if (event.key === "ArrowLeft" && gallery.length > 1) showPrevious();
      if (event.key === "ArrowRight" && gallery.length > 1) showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gallery.length, showNext, showPrevious, viewerOpen]);

  return (
    <section
      aria-label={`${artwork.title} gallery`}
      className="min-w-0 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setViewerOpen(true)}
        className="group block w-full cursor-zoom-in"
        aria-label={`Open fullscreen view of ${artwork.title}`}
      >
        <div
          className="relative overflow-hidden rounded-[24px] bg-[#050608] transition-[aspect-ratio] duration-300"
          style={{
            aspectRatio:
              activeAspectRatio ??
              (artwork.orientation === "portrait" ? "4 / 5" : "16 / 10"),
          }}
        >
          <img
            key={activeImage}
            src={activeImage}
            alt={`${artwork.alt} — ${
              galleryLabels[activeIndex] ?? "gallery view"
            }`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain transition duration-700 group-hover:scale-[1.015]"
            onLoad={(event) => {
              const { naturalHeight, naturalWidth } = event.currentTarget;

              if (naturalHeight > 0 && naturalWidth > 0) {
                const aspectRatio = naturalWidth / naturalHeight;

                setImageAspectRatios((current) =>
                  current[activeImage] === aspectRatio
                    ? current
                    : { ...current, [activeImage]: aspectRatio },
                );
              }
            }}
          />

          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
        </div>
      </button>

      {gallery.length > 1 ? (
        <div className="mt-8">
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#D6B36A]">
                Exhibition gallery
              </p>

              <p className="mt-2 text-sm text-white/45">
                View the artwork in curated interiors.
              </p>
            </div>

            <p className="text-sm text-white/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-36 shrink-0 text-left"
                aria-label={`Show ${
                  galleryLabels[index] ?? `image ${index + 1}`
                }`}
                aria-pressed={activeIndex === index}
              >
                <span
                  className={`relative block aspect-[4/3] overflow-hidden rounded-xl bg-[#050608] ${
                    activeIndex === index
                      ? "ring-2 ring-[#D6B36A]"
                      : "ring-1 ring-white/10"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </span>

                <span
                  className={`mt-3 block text-[10px] uppercase tracking-[0.25em] ${
                    activeIndex === index
                      ? "text-[#D6B36A]"
                      : "text-white/50"
                  }`}
                >
                  {galleryLabels[index] ?? `Image ${index + 1}`}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {viewerOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} fullscreen viewer`}
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md"
        >
          <header className="flex items-center justify-between p-6 md:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#D6B36A]">
                Exhibition viewer
              </p>

              <h2 className="heading mt-2 text-2xl">{artwork.title}</h2>
            </div>

            <button
              type="button"
              onClick={() => setViewerOpen(false)}
              className="rounded-full border border-white/20 px-5 py-3"
              aria-label="Close fullscreen viewer"
            >
              ✕
            </button>
          </header>

          <div className="relative flex-1">
            <img
              key={`viewer-${activeImage}`}
              src={activeImage}
              alt={artwork.alt}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <footer className="flex items-center justify-between gap-4 p-6 md:p-8">
            {gallery.length > 1 ? (
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-full border border-white/20 px-5 py-3 text-sm"
              >
                ← Previous
              </button>
            ) : (
              <span />
            )}

            <span className="text-sm text-white/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>

            {gallery.length > 1 ? (
              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-white/20 px-5 py-3 text-sm"
              >
                Next →
              </button>
            ) : (
              <span />
            )}
          </footer>
        </div>
      ) : null}
    </section>
  );
}