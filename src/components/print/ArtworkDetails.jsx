export default function ArtworkDetails({
  story,
  location,
  paper = "Hahnemühle Photo Rag 308gsm",
  camera = "Sony A7R IV",
  lens = "24–70mm",
  dateTaken = "",
}) {
  return (
    <section className="border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#B8965A] mb-5">
              About This Artwork
            </p>

            <h2 className="font-serif text-5xl leading-tight text-white">
              The Story
            </h2>

            <p className="mt-10 text-lg leading-9 text-white/70">
              {story}
            </p>

          </div>

          <div className="border border-white/10">

            <div className="grid grid-cols-2">

              <InfoRow
                label="Location"
                value={location}
              />

              <InfoRow
                label="Print Process"
                value="Museum Giclée"
              />

              <InfoRow
                label="Paper"
                value={paper}
              />

              <InfoRow
                label="Camera"
                value={camera}
              />

              <InfoRow
                label="Lens"
                value={lens}
              />

              <InfoRow
                label="Captured"
                value={dateTaken}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="border border-white/10 p-8">

      <p className="uppercase tracking-[0.25em] text-[10px] text-white/40">
        {label}
      </p>

      <p className="mt-4 text-white text-lg">
        {value}
      </p>

    </div>
  );
}