import Navbar from "./layout/Navbar";
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
      <Navbar />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

        <img
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          className="mx-auto mb-10 w-72 lg:w-80"
        />

        <h1 className="
          text-white
          font-light
          tracking-[-0.04em]
          leading-[0.92]
          text-5xl
          md:text-7xl
          xl:text-[6.5rem]
        ">
          Collected Landscapes.
          <br />
          Timeless Prints.
        </h1>

        <p className="
          mx-auto
          mt-10
          max-w-2xl
          text-lg
          leading-9
          text-[#D5D5D5]
        ">
          Museum-quality landscape photography from Scotland and Europe,
          carefully prepared as archival fine art prints for homes,
          interiors and collectors.
        </p>

        <div className="mt-14">
          <Button href="#collections">
            Explore Collections
          </Button>
        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
}