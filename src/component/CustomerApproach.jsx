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
  },
  {
    imgSrc: trustedPartnership,
    title: "Trusted Partnerships",
    paragraph:
      "We value trusted partnerships. We are dedicated to deeply understanding the needs, challenges, and aspirations of our customers. By putting our customers first, we consistently deliver effective solutions that exceed expectations and drive success. We are committed to building long-lasting partnerships based on trust, open communication, and shared goals.",
  },
  {
    imgSrc: strongerRelationship,
    title: "Strong Relationships",
    paragraph:
      "We value relationships and are committed to fostering strong relationships built on transparency, open communication, and a shared commitment to driving positive change in education.",
  },
];

export default function CustomerApproach() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Approach</h1>

        <p className="text-lg text-gray-600 mt-4 mb-12">
          How we support districts and build partnerships that last.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerApproachData.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <Image
                src={item.imgSrc}
                width={130}
                height={130}
                alt={item.title}
                className="rounded-xl mb-5"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
