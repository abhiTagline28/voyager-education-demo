"use client";

import { useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import ScrollReveal from "./ScrollReveal";

export const valuesData = [
  {
    title: "Innovation",
    description:
      "We strive for innovation in our software solutions, constantly seeking ways to improve and enhance the strategic planning process.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "We embrace feedback and iterate to provide the best possible experience for our users.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 via-pink-50 to-rose-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M4 4v6h6M20 20v-6h-6M20 4l-9 9"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We operate with the utmost integrity, maintaining transparency and honesty in all our interactions.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM12 11v6m6-6c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM6 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions and decisions, holding ourselves accountable to deliver on our promises.",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    bgGradient: "from-indigo-50 via-blue-50 to-cyan-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M9 12l2 2l4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        />
      </svg>
    ),
  },
  {
    title: "Adaptability",
    description:
      "In a rapidly changing educational landscape, we embrace adaptability and resilience.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M4 12h16M12 4l8 8-8 8"
        />
      </svg>
    ),
  },
  {
    title: "Resilience",
    description:
      "We are open to new ideas, flexible in our approach, and ready to overcome challenges to ensure the success of our users.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M9 19l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    ),
  },
];

export default function OurValues() {
  const sectionRef = useRef(null);

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

    const cards = document.querySelectorAll(".value-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 overflow-hidden"
    >
      {/* Professional Animated Background */}
      <AnimatedBackground intensity="low" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal direction="down" delay={100}>
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Our Values
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            The principles that guide our work and help us deliver exceptional
            outcomes.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesData.map((item, i) => (
            <div
              key={i}
              className="value-card group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-left border border-gray-100/50 hover:border-transparent hover:-translate-y-2 hover:scale-[1.02] opacity-0"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

              {/* Icon container with gradient */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-bl-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

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
      `}</style>
    </section>
  );
}
