"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import bruce from "../assets/img/bruce.jpg";
import charlenne from "../assets/img/charlenne.jpg";
import chrisJr from "../assets/img/jr.jpg";
import mary from "../assets/img/mary.jpg";
import chrisSr from "../assets/img/sr.jpg";

const leadershipTeam = [
  {
    name: "Christopher E. Balow, Ph.D.",
    role: "Founder & CEO",
    imgSrc: bruce,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
  },
  {
    name: "Bruce Bourman",
    role: "Chief Technology Officer",
    imgSrc: chrisSr,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 via-pink-50 to-rose-50",
  },
  {
    name: "Chris M. Balow",
    role: "VP of Engineering",
    imgSrc: chrisJr,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
  },
  {
    name: "Mary Thomas",
    role: "VP of Marketing",
    imgSrc: mary,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
  },
  {
    name: "Charlenne Gonzalez",
    role: "VP of Sales",
    imgSrc: charlenne,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50",
  },
];

const AboutUs = () => {
  const sectionRef = useRef(null);
  const teamRef = useRef(null);

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

    const cards = document.querySelectorAll(".team-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mission & Vision Section */}
      <section ref={sectionRef} className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Mission & Vision
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100/50">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Working in educational leadership for over 30 years, we found that
                  most school districts were using antiquated methods to accomplish
                  strategic planning. Having been involved in strategic planning, we
                  observed that most times a plan would lay dust-covered on a shelf
                  with actual implementation weak at best. District leaders were
                  frustrated with the lack of follow through and the inability to
                  track progress in real time.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100/50">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  At Voyager Education we wanted to fix this problem and improve
                  outcomes for all students, as well as staff, by evolving strategic
                  planning from a static yearly endeavor into a continuous progress
                  and action-oriented process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section ref={teamRef} className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Meet the passionate leaders driving innovation in educational strategic planning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="team-card group relative opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10`}></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

                  <div className="relative flex flex-col items-center text-center">
                    {/* Profile Image Container */}
                    <div className="relative mb-6">
                      {/* Outer glow ring */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      
                      {/* Image container */}
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={member.imgSrc}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" style={{ transitionDelay: '100ms' }}></div>
                    </div>

                    {/* Name */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {member.name}
                    </h3>

                    {/* Role */}
                    <div className="relative">
                      <p className="text-gray-600 text-sm md:text-base font-medium group-hover:text-gray-800 transition-colors duration-300">
                        {member.role}
                      </p>
                      {/* Underline accent */}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${member.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 rounded-tr-3xl transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
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

        .team-card.animate-fade-in {
          opacity: 1;
        }
      `}</style>
    </main>
  );
};

export default AboutUs;
