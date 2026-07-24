import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[#07131C] px-8 py-20 text-white">
      <div className="mx-auto w-full max-w-2xl border border-white/10 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#C9A567]">
          404 · Page not found
        </p>
        <h1 className="heading mt-6 text-5xl md:text-7xl">
          This view has moved beyond the frame.
        </h1>
        <p className="mt-7 max-w-xl leading-relaxed text-[#9AA4AE]">
          The page or artwork you requested is not available. Return to the
          collections to continue exploring LKDWN Prints.
        </p>
        <Link
          href={routes.collections}
          className="mt-9 inline-block border border-[#D6B36A] px-8 py-4 uppercase tracking-[0.25em] text-[#D6B36A] transition hover:bg-[#D6B36A] hover:text-black"
        >
          Explore collections
        </Link>
      </div>
    </main>
  );
}
