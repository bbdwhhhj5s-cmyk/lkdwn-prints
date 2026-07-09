export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1600px]
        px-6
        sm:px-8
        md:px-12
        lg:px-20
        xl:px-24
        ${className}
      `}
    >
      {children}
    </div>
  );
}