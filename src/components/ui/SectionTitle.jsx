export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  return (
    <div
      className={`
        flex
        flex-col
        ${alignment[align]}
        max-w-4xl
        mx-auto
        mb-20
      `}
    >
      {eyebrow && (
        <span
          className="
            uppercase
            tracking-[0.35em]
            text-[11px]
            text-[#B8965A]
            mb-5
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          font-heading
          text-5xl
          md:text-6xl
          lg:text-7xl
          leading-[1.05]
          tracking-[-0.02em]
          text-[#F5F2EC]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-white/65
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}