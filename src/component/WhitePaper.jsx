// app/research/page.jsx
"use client";

import { useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import ScrollReveal from "./ScrollReveal";

const researchArticles = [
  {
    title: "How to Create a Flexible Strategic Plan with a Long-Term Focus",
    subtitle: "A Plan without Flexibility is Doomed for Failure",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Dec 2023",
    href: "https://voyagered.com/docs/create-flexible-strategic-plan.pdf",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
    icon: "📋",
  },
  {
    title: "Strategic Flexibility: The Critical Aspect of School Planning",
    subtitle: "Being Locked into a Single Path = Likely Failure",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Dec 2023",
    href: "https://voyagered.com/docs/strategic-flexibility.pdf",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 via-pink-50 to-rose-50",
    icon: "🎯",
  },
  {
    title: "Beyond Big Data in K-12 Strategic Planning",
    subtitle: "Balancing Analytical and Intuitive Thinking",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Nov 2024",
    href: "https://voyagered.com/docs/beyond-big-data.pdf",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    icon: "📊",
  },
];

export default function WhitePaper() {
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

    const cards = document.querySelectorAll(".article-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Professional Animated Background */}
      <AnimatedBackground intensity="low" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center mt-7">
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              White Papers & Research
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Insights, frameworks, and deep-dive analysis from education
              researchers and leadership experts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={sectionRef} className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchArticles.map((article, index) => (
              <div
                key={index}
                onClick={() => window.open(article.href, "_blank")}
                className="article-card group relative opacity-0 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${article.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100/50 p-8 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02] h-full flex flex-col">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10`}></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${article.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {article.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {article.subtitle}
                      </p>
                    </div>

                    {/* Author & Date */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <p className="text-gray-500 text-xs md:text-sm font-medium mb-1">
                        {article.author}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {article.date}
                      </p>
                    </div>
                  </div>

                  {/* Download icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-5 rounded-tr-3xl transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-20 md:mt-28 text-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100/50">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  More Research Coming Soon
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Our team is actively working on new white papers, frameworks, and
                  research on educational leadership and strategic planning.
                </p>
              </div>
            </div>
          </div>
          </ScrollReveal>
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

        .article-card.animate-fade-in {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
