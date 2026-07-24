"use client";

import { useEffect, useState } from "react";

import GalleryImage from "./GalleryImage";
import Filmstrip from "./Filmstrip";
import ExhibitionViewer from "./ExhibitionViewer";

export default function ProductGallery({
  images = [],
  title,
  orientation = "Landscape",
}) {
  const [active, setActive] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {
    setActive(0);
    setViewerOpen(false);
  }, [images]);

  const currentImage =
    images[active] || images[0] || "/images/placeholder.jpg";

  function previousImage() {
    setActive((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function nextImage() {
    setActive((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="w-full">

      {/* Hero Artwork */}

      <GalleryImage
        src={currentImage}
        alt={title}
        orientation={orientation}
        priority
        onClick={() => setViewerOpen(true)}
      />

      {/* Caption */}

      <div className="mt-8 flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h2 className="font-serif text-4xl tracking-tight">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">
            Museum-quality archival Giclée print produced on
            Hahnemühle Photo Rag 308gsm using archival pigment inks
            for exceptional colour accuracy, tonal depth and longevity.
          </p>

        </div>

        <div className="text-left lg:text-right">

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Fine Art Print
          </p>

        </div>

      </div>

      {/* Filmstrip */}

      <Filmstrip
        images={images}
        active={active}
        onSelect={setActive}
      />

      {/* Fullscreen Exhibition */}

      <ExhibitionViewer
        open={viewerOpen}
        image={currentImage}
        title={title}
        current={active}
        total={images.length}
        onClose={() => setViewerOpen(false)}
        onPrevious={previousImage}
        onNext={nextImage}
      />

    </section>
  );
}