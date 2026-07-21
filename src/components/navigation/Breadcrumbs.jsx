import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 border-b border-white/10 pb-6"
    >
      <ol className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-3"
          >
            {index > 0 && (
              <span className="text-white/20">/</span>
            )}

            {item.href ? (
              <Link
                href={item.href}
                className="text-white/50 transition-colors duration-300 hover:text-[#D6B36A]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#D6B36A]">
                {item.label}
              </span>
            )}
          </li>
        ))}

      </ol>
    </nav>
  );
}