import Image from "next/image";

export default function FilmStrip({
  images = [],
}) {
  return (
    <section className="py-24">

      <div className="flex gap-6 overflow-x-auto px-8 pb-4">

        {images.map((image, index) => (

          <div
            key={index}
            className="relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-2xl"
          >

            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

          </div>

        ))}

      </div>

    </section>
  );
}