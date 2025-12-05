"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AlertStatusReport from "../assets/demo/alert-strategy-report.jpg";
import createPlan from "../assets/demo/create-plan-screen.jpg";
import strategyMap from "../assets/demo/strategy-map.jpg";
import beaconLogo from "../assets/icons/beacon_logo.png";
import AnimatedBackground from "./AnimatedBackground";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function Products() {
  const images = [createPlan, strategyMap, AlertStatusReport];
  const sectionRef = useRef(null);

  const beaconFeatures = [
    "Create your strategic plan following a systematic process",
    "Evolve strategic planning into a continuous progress model",
    "Increase visibility of all initiatives, objectives and strategies",
    "Make planning and review meetings efficient and effective",
    "Increase accountability across all teams",
    "Surface key metrics and adjust strategies in real-time",
    "Engage and inform staff and community stakeholders",
    "Increase the probability of achieving district goals and vision",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".feature-card, .image-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Professional Animated Background */}
      <AnimatedBackground intensity="low" />

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center mt-7">
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Transform Your District's Strategic Planning
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The strategic planning process for K-12 districts is broken —
              scattered spreadsheets, inconsistent updates, and low visibility.
              Beacon solves this with a powerful, unified platform built
              specifically for district leaders.
            </p>
          </ScrollReveal>
        </div>
      </section>

          {/* INTRODUCTION SECTION */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="down" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Introducing <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-gradient-shift">Beacon</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            </div>
          </ScrollReveal>

          {/* Beacon Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-teal-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <button
                onClick={() => window.open("https://beaconplan.com/", "_blank")}
                className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={beaconLogo}
                  alt="Beacon Logo"
                  width={240}
                  height={90}
                  className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_8px_30px_rgba(0,142,170,0.6)]"
                />
              </button>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            The first K-12 dedicated strategic planning platform designed to
            simplify, streamline, and elevate your district's planning workflow.
          </p>

          {/* VIDEO */}
          <div className="mb-16 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200/50 group-hover:border-cyan-300/50 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ImGh3k43aWY?start=3"
                title="Beacon Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 gap-8 mt-16 max-w-5xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className="image-card group relative opacity-0"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={img}
                    alt="Beacon Screenshot"
                    className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Beacon empowers district leaders to:
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beaconFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card group relative opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300 flex-1">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Content card */}
            <div className="relative bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100/50 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Ready to Transform Strategic Planning?
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Beacon brings clarity, accountability, and real-time visibility to
                your district's strategic planning process.
              </p>
              <MagneticButton
                onClick={() =>
                  window.open("https://www.theceso.com/beacon", "_blank")
                }
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Demo</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .feature-card.animate-fade-in,
        .image-card.animate-fade-in {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
