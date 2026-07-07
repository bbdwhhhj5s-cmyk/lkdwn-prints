import Link from "next/link";

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center uppercase tracking-[0.28em] text-[11px] md:text-xs transition-all duration-500 ease-out";

  const styles = {
    primary:
      "border border-[#B8965A] text-[#B8965A] px-10 py-4 hover:bg-[#B8965A] hover:text-[#081722]",

    secondary:
      "border border-white/20 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#081722]",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}