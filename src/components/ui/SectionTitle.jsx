export default function SectionTitle({
  children,
  className = "",
}) {
  return (
    <h2
      className={`
        font-light
        text-white
        tracking-[-0.03em]
        leading-[0.95]
        text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-[5.25rem]
        max-w-4xl
        ${className}
      `}
    >
      {children}
    </h2>
  );
}