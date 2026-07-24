"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ExhibitionViewer({
  open,
  image,
  title,
  current,
  total,
  onClose,
  onPrevious,
  onNext,
}) {
  // Lock page scrolling while viewer is open
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          onClose?.();
          break;

        case "ArrowLeft":
          onPrevious?.();
          break;

        case "ArrowRight":
          onNext?.();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onPrevious, onNext]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        bg-black/95
        backdrop-blur-md
        animate-in
        fade-in
        duration-300
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between p-8">

        <div>

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#D6B36A]">
            Exhibition Viewer
          </p>

          <h2 className="mt-2 font-serif text-2xl">
            {title}
          </h2>

        </div>

        <button
          onClick={onClose}
          className="
            rounded-full
            border
            border-white/15
            px-5
            py-3
            text-sm
            transition-colors
            hover:border-white/40
          "
        >
          ✕
        </button>

      </div>

      {/* Artwork */}

      <div className="relative flex-1">

        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between p-8">

        <button
          onClick={onPrevious}
          className="
            rounded-full
            border
            border-white/15
            px-6
            py-3
            text-sm
            transition-colors
            hover:border-white/40
          "
        >
          ← Previous
        </button>

        <div className="text-sm text-white/50">

          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}

        </div>

        <button
          onClick={onNext}
          className="
            rounded-full
            border
            border-white/15
            px-6
            py-3
            text-sm
            transition-colors
            hover:border-white/40
          "
        >
          Next →
        </button>

      </div>

    </div>
  );
}