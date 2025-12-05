// components/CustomerApproachSection.jsx
"use client";

import Image from "next/image";
import customerCentricApproach from "../assets/landingPage/customerCentricApproach.png";
import strongerRelationship from "../assets/landingPage/strongerRelationship.jpeg";
import trustedPartnership from "../assets/landingPage/trustedPartnership.jpeg";

export const customerApproachData = [
  {
    imgSrc: customerCentricApproach,
    title: "Customer-Centric Approach",
    paragraph:
      "Our customers are at the heart of everything we do. We prioritize understanding their needs and delivering solutions that meet and exceed their expectations. With a relentless focus on customer satisfaction, we strive to be the trusted advisor, strategic partner and software platform that empowers educational institutions to thrive and achieve their goals.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    hoverColor: "group-hover:text-cyan-600",
  },
  {
    imgSrc: trustedPartnership,
    title: "Trusted Partnerships",
    paragraph:
      "We value trusted partnerships. We are dedicated to deeply understanding the needs, challenges, and aspirations of our customers. By putting our customers first, we consistently deliver effective solutions that exceed expectations and drive success. We are committed to building long-lasting partnerships based on trust, open communication, and shared goals.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    hoverColor: "group-hover:text-blue-600",
  },
  {
    imgSrc: strongerRelationship,
    title: "Strong Relationships",
    paragraph:
      "We value relationships and are committed to fostering strong relationships built on transparency, open communication, and a shared commitment to driving positive change in education.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    hoverColor: "group-hover:text-indigo-600",
  },
];

export default function CustomerApproach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 shadow-sm ring-1 ring-cyan-100 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Our Philosophy
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
            Our Approach
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            How we support districts and build partnerships that last.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {customerApproachData.map((item, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative h-full bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-lg ring-1 ring-slate-200/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:ring-cyan-200/50 flex flex-col items-center text-center">
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Image Container */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  />
                  <div className="relative bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl shadow-md ring-1 ring-slate-200/50 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      width={140}
                      height={140}
                      alt={item.title}
                      className="rounded-xl object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3
                    className={`text-xl lg:text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300 ${item.hoverColor}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed flex-1">
                    {item.paragraph}
                  </p>
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${item.gradient}`} />
                  <div className="h-1 w-1 rounded-full bg-cyan-500" />
                  <div className="h-1 w-1 rounded-full bg-blue-500" />
                  <div className="h-1 w-1 rounded-full bg-indigo-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
