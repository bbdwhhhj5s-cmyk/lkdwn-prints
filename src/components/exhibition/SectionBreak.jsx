export default function SectionBreak({
  title,
  text,
}) {
  return (
    <section className="bg-[#090D12] py-48">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="font-serif text-6xl text-white mb-10">
          {title}
        </h2>

        <div className="w-20 h-px bg-[#D6B36A] mx-auto mb-10" />

        <p className="text-white/70 leading-9 text-xl">
          {text}
        </p>

      </div>
    </section>
  );
}