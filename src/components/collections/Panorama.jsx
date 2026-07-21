"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Panorama({
  image,
  title,
  location,
  height = "h-[92vh]",
}) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slow cinematic zoom while scrolling
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.12, 1]
  );

  // Subtle upward movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-3%", "3%"]
  );

  // Fade text slightly as it leaves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 1, 0.65]
  );

  return (
    <section
      ref={sectionRef}
      className={`relative my-36 w-full overflow-hidden ${height}`}
    >
      {/* Background Image */}

      <motion.div
        style={{
          scale,
          y,
        }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#090D12]" />

      {/* Content */}

      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-24 mx-auto max-w-7xl px-8"
      >
        {location && (
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            {location}
          </p>
        )}

        <h2 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl xl:text-8xl">
          {title}
        </h2>
      </motion.div>

      {/* Decorative Line */}

      <div className="absolute bottom-0 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent" />
    </section>
  );
}