export default function QuoteBlock({
  quote,
  author,
}) {
  return (
    <section className="bg-[#0B1016] text-white">

      <div className="max-w-5xl mx-auto px-8 py-52">

        <div className="w-20 h-px bg-[#B8965A] mb-14" />

        <blockquote
          className="
            text-4xl
            lg:text-6xl
            font-light
            leading-[1.25]
            tracking-tight
            max-w-4xl
          "
        >
          “{quote}”
        </blockquote>

        {author && (
          <p
            className="
              mt-12
              uppercase
              tracking-[0.35em]
              text-[#B8965A]
              text-xs
            "
          >
            {author}
          </p>
        )}

      </div>

    </section>
  );
}