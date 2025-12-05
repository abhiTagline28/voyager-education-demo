"use client";

import Image from "next/image";
import heroBanner from "../assets/voyagerLogo.jpg";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Innovative software
            <span className="text-[#008EAA]"> solutions</span>
          </h1>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            that transform strategic planning
          </h2>

          <p className="text-xl text-gray-700">
            Empowering K-12 districts and schools with modern tools that drive
            meaningful impact.
          </p>

          <button
            onClick={() =>
              window.open("https://theceso.com/beacon-demo/", "_blank")
            }
            className="bg-[#008EAA] text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#005566] transition"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={heroBanner}
            alt="Hero Banner"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
