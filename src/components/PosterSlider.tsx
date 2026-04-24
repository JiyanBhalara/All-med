"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTERS = [
  { src: "/posters/slider-1.jpg", alt: "All Med Urgent Care" },
  { src: "/posters/Slide-3.jpg", alt: "All Med Urgent Care" },
];

export default function PosterSlider() {
  const [current, setCurrent] = useState(0);
  const count = POSTERS.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[580px] overflow-hidden bg-foreground">
      {POSTERS.map((poster, i) => (
        <div
          key={poster.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {POSTERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/55 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
