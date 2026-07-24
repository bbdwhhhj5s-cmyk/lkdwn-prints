import Image from "next/image";
import Navbar from "./layout/Navbar";
import Button from "./ui/Button";
import ScrollIndicator from "./hero/ScrollIndicator";
import { routes } from "../lib/routes";

export default function HeroComponent() {

  return (

    <section

      className="relative h-screen flex items-center justify-center overflow-hidden"

    >

      <Image
        src="/images/hero/Hero.jpg"
        alt=""
        fill
        preload
        quality={85}
        sizes="100vw"
        className="object-cover"
      />

      <Navbar />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 text-center">

        <Image
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          width={320}
          height={124}
          sizes="320px"
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

          <Button href={routes.collections}>

            Explore Collections

          </Button>

        </div>

      </div>

      <ScrollIndicator />

    </section>

  );

}
