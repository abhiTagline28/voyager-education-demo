"use client";

export const valuesData = [
  {
    title: "Innovation",
    description:
      "We strive for innovation in our software solutions, constantly seeking ways to improve and enhance the strategic planning process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "We embrace feedback and iterate to provide the best possible experience for our users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v6h6M20 20v-6h-6M20 4l-9 9"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We operate with the utmost integrity, maintaining transparency and honesty in all our interactions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM12 11v6m6-6c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM6 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions and decisions, holding ourselves accountable to deliver on our promises.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2l4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        />
      </svg>
    ),
  },
  {
    title: "Adaptability",
    description:
      "In a rapidly changing educational landscape, we embrace adaptability and resilience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12h16M12 4l8 8-8 8"
        />
      </svg>
    ),
  },
  {
    title: "Resilience",
    description:
      "We are open to new ideas, flexible in our approach, and ready to overcome challenges to ensure the success of our users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-cyan-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    ),
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Values
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          The principles that guide our work and help us deliver exceptional
          outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {valuesData.map((item, i) => (
            <div
              key={i}
              className="group bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
