export default function PullQuote({
  quote,
}) {
  return (
    <section className="bg-[#0B1015] py-44">

      <div className="max-w-5xl mx-auto px-8">

        <blockquote
          className="
            font-serif
            text-5xl
            leading-tight
            text-white
            text-center
          "
        >
          “{quote}”
        </blockquote>

      </div>

    </section>
  );
}