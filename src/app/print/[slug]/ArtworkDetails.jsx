export default function ArtworkDetails({
  story,
  location,
  paper,
  camera,
  lens,
  dateTaken,
}) {
  const details = [
    { label: "Location", value: location },
    { label: "Print", value: "Museum Quality Giclée" },
    { label: "Paper", value: paper },
    { label: "Camera", value: camera },
    { label: "Lens", value: lens },
    { label: "Captured", value: dateTaken },
  ];

  return (
    <section className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#B8965A] mb-4">
              About This Artwork
            </p>

            <h2 className="font-serif text-5xl mb-8">
              The Story
            </h2>

            <p className="text-lg leading-9 text-white/70">
              {story}
            </p>

          </div>

          <div className="border border-white/10 divide-y divide-white/10">

            {details.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center px-8 py-6"
              >
                <span className="uppercase tracking-[0.25em] text-xs text-white/40">
                  {item.label}
                </span>

                <span className="text-white">
                  {item.value}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}