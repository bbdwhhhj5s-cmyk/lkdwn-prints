import FadeIn from "@/components/ui/FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  body,
}) {
  return (
    <FadeIn>

      <div className="mx-auto max-w-4xl px-8 py-28">

        <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
          {eyebrow}
        </p>

        <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          {title}
        </h2>

        {body && (
          <p className="mt-8 text-lg leading-9 text-white/70">
            {body}
          </p>
        )}

      </div>

    </FadeIn>
  );
}