import Link from "next/link";

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    uppercase
    tracking-[0.32em]
    text-[11px]
    transition-all
    duration-500
    ease-out
  `;

  const variants = {
    primary: `
      border
      border-[#B8965A]
      text-[#B8965A]
      px-10
      py-4
      hover:bg-[#B8965A]
      hover:text-[#081019]
      hover:tracking-[0.38em]
    `,

    secondary: `
      border
      border-white/20
      text-white
      px-10
      py-4
      hover:bg-white
      hover:text-[#081019]
    `,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}