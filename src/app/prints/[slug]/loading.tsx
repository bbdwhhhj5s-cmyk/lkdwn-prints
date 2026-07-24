export default function PrintLoading() {
  return (
    <main
      className="min-h-screen animate-pulse bg-[#07131C] px-8 pb-20 pt-32"
      aria-label="Loading artwork"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="aspect-[4/3] bg-[#102632]" />
        <div>
          <div className="h-3 w-36 bg-white/10" />
          <div className="mt-8 h-16 w-full bg-white/10" />
          <div className="mt-8 h-24 w-full bg-white/5" />
        </div>
      </div>
    </main>
  );
}
