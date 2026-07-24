import Link from "next/link";

export default function Button({ children, href }) {
  const className = `
    inline-block
    border
    border-[#D6B36A]
    text-[#D6B36A]
    px-10
    py-4
    uppercase
    tracking-[0.35em]
    transition-all
    duration-500
    hover:bg-[#D6B36A]
    hover:text-black
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}
