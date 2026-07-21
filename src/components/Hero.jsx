
import Button from "./ui/Button";
import ScrollIndicator from "./hero/ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero/Hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

        <img
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          className="mx-auto mb-12 w-72 lg:w-80"
        />

        <h1
          className="
            font-light
            text-white
            tracking-[-0.035em]
            leading-[0.96]
            text-5xl
            md:text-7xl
            xl:text-[6.5rem]
          "
        >
          Collected Landscapes.
          <br />
          Timeless Prints.
        </h1>

        <p
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-lg
            leading-9
            text-white/80
          "
        >
          Museum-quality landscape photography from Scotland and Europe,
          carefully produced as archival fine art prints for collectors,
          interiors and contemporary spaces.
        </p>

        <div className="mt-16">
          <Button href="#collections">
            Explore Collections
          </Button>
        </div>

      </div>

      <ScrollIndicator />

    </section>
  );
}