"use client";
import Image from "next/image";
import AlertStatusReport from "../assets/demo/alert-strategy-report.jpg";
import createPlan from "../assets/demo/create-plan-screen.jpg";
import strategyMap from "../assets/demo/strategy-map.jpg";
import beaconLogo from "../assets/icons/beacon_logo.png";

export default function Products() {
  const images = [createPlan, strategyMap, AlertStatusReport];

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

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-20 ">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-100 opacity-70"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center mt-7">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-5">
            Transform Your District’s Strategic Planning
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The strategic planning process for K-12 districts is broken —
            scattered spreadsheets, inconsistent updates, and low visibility.
            Beacon solves this with a powerful, unified platform built
            specifically for district leaders.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 opacity-20 blur-2xl rounded-full"></div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Introducing <span className="text-[#008EAA]">Beacon</span>
          </h2>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => window.open("https://beaconplan.com/", "_blank")}
              className="p-4 rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <Image
                src={beaconLogo}
                alt="Beacon Logo"
                width={220}
                height={80}
                className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_6px_25px_rgba(0,142,170,0.55)]"
              />
            </button>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            The first K-12 dedicated strategic planning platform designed to
            simplify, streamline, and elevate your district’s planning workflow.
          </p>
          {/* VIDEO */}
          <div className="mb-14 aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ImGh3k43aWY?start=3"
              title="Beacon Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* IMAGE SLIDER */}
          <div className="grid grid-cols-1 gap-10 mt-14 max-w-4xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={img}
                  alt="Beacon Screenshot"
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  width={1200}
                  height={800}
                />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Beacon empowers district leaders to:
          </h3>

          {/* FEATURES */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-3xl mx-auto">
            {beaconFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="text-[#008EAA] font-bold text-xl">✓</span>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Strategic Planning?
          </h2>
          <p className="text-gray-600 mb-8">
            Beacon brings clarity, accountability, and real-time visibility to
            your district’s strategic planning process.
          </p>
          <button
            onClick={() =>
              window.open("https://www.theceso.com/beacon", "_blank")
            }
            className="bg-[#008EAA] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#00758a] transition"
          >
            Get Demo
          </button>
        </div>
      </section>
    </main>
  );
}
