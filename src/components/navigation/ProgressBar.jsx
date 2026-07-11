"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = (scrollTop / height) * 100;

      setProgress(percent);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-full
        h-[2px]
        z-[100]
        bg-white/5
      "
    >
      <div
        className="h-full bg-[#D6B36A] transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}