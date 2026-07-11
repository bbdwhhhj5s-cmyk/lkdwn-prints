export default function ChapterDivider({
  number,
  title,
  subtitle,
  quote,
}) {
  return (
    <section className="bg-[#0B1016] text-white py-40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8">

        <div className="flex items-center gap-6 mb-10">

          <span className="text-[#B8965A] uppercase tracking-[0.45em] text-xs">
            Chapter {number}
          </span>

          <div className="flex-1 h-px bg-white/10" />

        </div>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-tight
            leading-none
            max-w-4xl
          "
        >
          {title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 mt-16">

          <p
            className="
              text-2xl
              leading-relaxed
              text-white/90
              max-w-xl
            "
          >
            {subtitle}
          </p>

          <blockquote
            className="
              text-white/45
              italic
              leading-9
              text-lg
              self-end
              border-l
              border-[#B8965A]
              pl-8
            "
          >
            “{quote}”
          </blockquote>

        </div>

      </div>
    </section>
  );
}<ExhibitionImage
  number="01"
  title="Buachaille Etive Mòr"
  location="Glencoe"
  image="/images/scotland/buachaille-waterfall.jpg"
  description="Morning mist rolled across Rannoch Moor before the mountain slowly emerged from cloud. The light lasted less than a minute, but it transformed an ordinary morning into one I'll never forget."
/>