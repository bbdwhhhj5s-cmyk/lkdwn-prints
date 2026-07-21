export default function EditorialQuote({
  quote,
  author,
}) {
  return (
    <section className="mx-auto max-w-5xl px-8 py-32">

      <blockquote className="font-serif text-5xl leading-tight lg:text-6xl">
        “{quote}”
      </blockquote>

      {author && (
        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#D6B36A]">
          {author}
        </p>
      )}

    </section>
  );
}