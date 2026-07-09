import Navbar from "./layout/Navbar";
import Button from "./ui/Button";
import ScrollIndicator from "./hero/ScrollIndicator";

export default function Hero() {

  return (

    <section

      className="relative h-screen flex items-center justify-center overflow-hidden"

      style={{
        backgroundImage:"url('/images/hero/Hero.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}

    >

      <Navbar />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 text-center">

        <img
          src="/logo/lkdwn logo white.png"
          className="w-80 mx-auto mb-10"
        />

  <h1 className="heading text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95]">

    Collected Landscapes.

    <br />

    Timeless Prints.

</h1>

<p className="body-text mt-8 text-lg md:text-xl text-[#D9D7D2] max-w-xl mx-auto leading-relaxed">

          Museum quality photography across Scotland and Europe.

        </p>

        <div className="mt-12">

          <Button>

            Explore Collections

          </Button>

        </div>

      </div>

      <ScrollIndicator />

    </section>

  );

}