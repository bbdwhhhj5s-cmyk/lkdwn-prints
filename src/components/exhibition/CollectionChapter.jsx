"use client";

export default function CollectionChapter({
  number,
  title,
  subtitle,
}) {
  return (
    <section className="bg-[#090D12] py-40">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[0.5em] text-[#D6B36A] text-xs mb-8">
          Chapter {number}
        </p>

        <h2 className="font-serif text-6xl text-white mb-8">
          {title}
        </h2>

        <div className="w-20 h-px bg-[#D6B36A] mx-auto mb-10" />

        <p className="text-white/70 leading-9 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>

      </div>
    </section>
  );
}