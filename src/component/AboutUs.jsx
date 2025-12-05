"use client";

import Image from "next/image";
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
  },
  {
    name: "Bruce Bourman",
    role: "Chief Technology Officer",
    imgSrc: chrisSr,
  },
  {
    name: "Chris M. Balow",
    role: "VP of Engineering",
    imgSrc: chrisJr,
  },
  {
    name: "Mary Thomas",
    role: "VP of Marketing",
    imgSrc: mary,
  },
  {
    name: "Charlenne Gonzalez",
    role: "VP of Sales",
    imgSrc: charlenne,
  },
];
const AboutUs = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 mt-7">
            Mission & Vision
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Working in educational leadership for over 30 years, we found that
            most school districts were using antiquated methods to accomplish
            strategic planning. Having been involved in strategic planning, we
            observed that most times a plan would lay dust-covered on a shelf
            with actual implementation weak at best. District leaders were
            frustrated with the lack of follow through and the inability to
            track progress in real time.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            At Voyager Education we wanted to fix this problem and improve
            outcomes for all students, as well as staff, by evolving strategic
            planning from a static yearly endeavor into a continuous progress
            and action-oriented process.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className=" w-28 h-28 mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-700">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-900">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
