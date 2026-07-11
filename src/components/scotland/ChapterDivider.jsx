export default function ChapterDivider({
  number,
  title,
 subtitle,
  quote,
}) {
  return (
    <section className="bg-[#090D12] text-white py-36 lg:py-48 border-t border-white/5 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8">

        {/* Chapter Number */}

        <p className="uppercase tracking-[0.45em] text-[#B8965A] text-xs mb-8">
          Chapter {number}
        </p>

        {/* Divider */}

        <div className="w-24 h-px bg-[#B8965A] mb-10"></div>

        {/* Title */}

        <h2 className="font-serif text-6xl lg:text-8xl leading-none mb-8">
          {title}
        </h2>

        {/* Subtitle */}

        <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-9">
          {subtitle}
        </p>

        {/* Quote */}

        {quote && (
          <div className="mt-20 max-w-xl">
            <p className="italic text-white/35 text-2xl leading-relaxed">
              "{quote}"
            </p>
          </div>
        )}

      </div>
    </section>
  );
}