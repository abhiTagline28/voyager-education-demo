"use client";

import Image from "next/image";
import heroBanner from "../assets/voyagerLogo.jpg";
import AnimatedBackground from "./AnimatedBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 py-20 md:py-32">
      {/* Professional Animated Background */}
      <AnimatedBackground intensity="medium" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 shadow-sm ring-1 ring-cyan-100 mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              Strategic Planning Platform
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight">
                Innovative software
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
                    {" "}solutions
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-indigo-400/30 blur-xl" />
                </span>
              </h1>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight">
                that transform strategic planning
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering K-12 districts and schools with modern tools that drive
              meaningful impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() =>
                  window.open("https://theceso.com/beacon-demo/", "_blank")
                }
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-cyan-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium text-slate-600">
                  Trusted by 500+ Schools
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-600">
                  Modern Technology
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl ring-1 ring-slate-200/50 group-hover:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-indigo-50/50 rounded-3xl" />
                <Image
                  src={heroBanner}
                  alt="Voyager Education Platform"
                  className="relative rounded-2xl w-full max-w-lg object-cover"
                  priority
                />
              </div>

              {/* Floating decoration */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Award Winning
                        </p>
                        <p className="text-xs text-slate-600">Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
