// components/OurVisionSection.jsx
"use client";

import Image from "next/image";
import alignImage from "../assets/landingPage/align.png";
import collaborateImage from "../assets/landingPage/collaborate.png";
import measureImage from "../assets/landingPage/measure.png";
import monitorImage from "../assets/landingPage/monitor.png";
import visualizeImage from "../assets/landingPage/visualize.png";

export const dashboardKeyFeatures = [
  {
    imgSrc: visualizeImage,
    heading: "Visualize",
    paragraph:
      "Easier access to strategic initiatives and objectives for all staff through a shared digital platform with unlimited users and plans.",
  },
  {
    imgSrc: alignImage,
    heading: "Align",
    paragraph:
      "Increased understanding of how individual work supports the strategic plan through strategy maps, the design framework, ecological assessments, and resource integration.",
  },
  {
    imgSrc: monitorImage,
    heading: "Monitor",
    paragraph:
      "Improved transparency of strategic goal attainment with real-time tracking through status updates and checkpoints.",
  },
  {
    imgSrc: collaborateImage,
    heading: "Collaborate",
    paragraph:
      "Enhanced communication between your staff, school board, and community with dashboards, board reports, calendar syncing, and more.",
  },
  {
    imgSrc: measureImage,
    heading: "Measure",
    paragraph:
      "Focused school metrics for strengthened confidence in the plan’s results and impact shown with customizable reports.",
  },
];

export default function OurVision() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Vision
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We empower educational institutions with modern strategic planning
          tools that enhance clarity, collaboration, measurement, and results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {dashboardKeyFeatures.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center px-4 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Hover circle + zoom image */}
              <div
                className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-md mb-4 
                  transition-all duration-300 group-hover:shadow-xl group-hover:bg-cyan-50"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.heading}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Heading hover color */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-cyan-700">
                {item.heading}dsfsd
              </h3>

              <p className="text-sm text-gray-500">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
