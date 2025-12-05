// components/OurVisionSection.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import alignImage from "../assets/landingPage/align.png";
import collaborateImage from "../assets/landingPage/collaborate.png";
import measureImage from "../assets/landingPage/measure.png";
import monitorImage from "../assets/landingPage/monitor.png";
import visualizeImage from "../assets/landingPage/visualize.png";
import AnimatedBackground from "./AnimatedBackground";

export const dashboardKeyFeatures = [
  {
    imgSrc: visualizeImage,
    heading: "Visualize",
    accentFrom: "from-cyan-500/30",
    accentTo: "to-cyan-500/0",
    glowFrom: "from-cyan-100",
    glowTo: "to-cyan-50",
    ring: "ring-cyan-100",
    paragraph:
      "Easier access to strategic initiatives and objectives for all staff through a shared digital platform with unlimited users and plans.",
  },
  {
    imgSrc: alignImage,
    heading: "Align",
    accentFrom: "from-emerald-500/30",
    accentTo: "to-emerald-500/0",
    glowFrom: "from-emerald-100",
    glowTo: "to-emerald-50",
    ring: "ring-emerald-100",
    paragraph:
      "Increased understanding of how individual work supports the strategic plan through strategy maps, the design framework, ecological assessments, and resource integration.",
  },
  {
    imgSrc: monitorImage,
    heading: "Monitor",
    accentFrom: "from-sky-500/30",
    accentTo: "to-sky-500/0",
    glowFrom: "from-sky-100",
    glowTo: "to-sky-50",
    ring: "ring-sky-100",
    paragraph:
      "Improved transparency of strategic goal attainment with real-time tracking through status updates and checkpoints.",
  },
  {
    imgSrc: collaborateImage,
    heading: "Collaborate",
    accentFrom: "from-indigo-500/30",
    accentTo: "to-indigo-500/0",
    glowFrom: "from-indigo-100",
    glowTo: "to-indigo-50",
    ring: "ring-indigo-100",
    paragraph:
      "Enhanced communication between your staff, school board, and community with dashboards, board reports, calendar syncing, and more.",
  },
  {
    imgSrc: measureImage,
    heading: "Measure",
    accentFrom: "from-fuchsia-500/30",
    accentTo: "to-fuchsia-500/0",
    glowFrom: "from-fuchsia-100",
    glowTo: "to-fuchsia-50",
    ring: "ring-fuchsia-100",
    paragraph:
      "Focused school metrics for strengthened confidence in the plan’s results and impact shown with customizable reports.",
  },
];

export default function OurVision() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(dashboardKeyFeatures.length / cardsPerView);

  // Auto-play infinite loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const start = currentIndex * cardsPerView;
    return dashboardKeyFeatures.slice(start, start + cardsPerView);
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 py-20">
      {/* Professional Animated Background */}
      <AnimatedBackground intensity="low" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-cyan-700 shadow-sm ring-1 ring-cyan-100">
            Strategic clarity
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Our Vision
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            We empower educational institutions with modern strategic planning
            tools that enhance clarity, collaboration, measurement, and results.
          </p>
        </div>

        <div
          className="mt-14 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 lg:flex"
                aria-label="Previous slide"
              >
                <svg
                  className="h-6 w-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 lg:flex"
                aria-label="Next slide"
              >
                <svg
                  className="h-6 w-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Cards Container */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-in-out">
            {getVisibleCards().map((item) => (
              <div
                key={item.heading}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${item.accentFrom} ${item.accentTo} opacity-80 transition duration-300 group-hover:opacity-100`}
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-b ${item.glowFrom} ${item.glowTo} opacity-0 transition duration-300 group-hover:opacity-60`}
                />

                <div className="relative flex h-full flex-col items-center gap-5 px-8 py-10 text-center">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    Focus area
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute inset-2 rounded-full bg-linear-to-br ${item.glowFrom} ${item.glowTo} blur-2xl opacity-80`}
                    />
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 group-hover:scale-105 group-hover:${item.ring}`}
                    >
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
                      {item.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-cyan-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
