export default function StoryBlock({
  heading,
  text,
  image,
  reverse = false,
}) {
  return (
    <section className="bg-[#0B1016] text-white py-40">

      <div
        className={`
          max-w-7xl
          mx-auto
          px-8
          grid
          lg:grid-cols-2
          gap-24
          items-center

          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >

        {/* Image */}

        <div className="overflow-hidden rounded-sm">

          <img
            src={image}
            alt={heading}
            className="
              w-full
              h-[720px]
              object-cover
              transition-transform
              duration-[1800ms]
              ease-out
              hover:scale-[1.03]
            "
          />

        </div>

        {/* Text */}

        <div className="max-w-xl">

          <h2
            className="
              text-5xl
              md:text-6xl
              font-light
              leading-none
              tracking-tight
              mb-10
            "
          >
            {heading}
          </h2>

          <div
            className="
              w-16
              h-px
              bg-[#B8965A]
              mb-10
            "
          />

          <p
            className="
              text-[#CFCFCF]
              text-lg
              leading-9
            "
          >
            {text}
          </p>

        </div>

      </div>

    </section>
  );
}