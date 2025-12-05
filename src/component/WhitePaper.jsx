// app/research/page.jsx
"use client";

const researchArticles = [
  {
    title: "How to Create a Flexible Strategic Plan with a Long-Term Focus",
    subtitle: "A Plan without Flexibility is Doomed for Failure",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Dec 2023",
    href: "https://voyagered.com/docs/create-flexible-strategic-plan.pdf",
  },
  {
    title: "Strategic Flexibility: The Critical Aspect of School Planning",
    subtitle: "Being Locked into a Single Path = Likely Failure",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Dec 2023",
    href: "https://voyagered.com/docs/strategic-flexibility.pdf",
  },
  {
    title: "Beyond Big Data in K-12 Strategic Planning",
    subtitle: "Balancing Analytical and Intuitive Thinking",
    author: "Founder & CEO, Christopher Balow, PhD",
    date: "Nov 2024",
    href: "https://voyagered.com/docs/beyond-big-data.pdf",
  },
];

export default function WhitePaper() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-60"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center mt-7">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            White Papers & Research
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Insights, frameworks, and deep-dive analysis from education
            researchers and leadership experts.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Decorative Background */}
          <div className="absolute right-0 top-[700px] w-40 h-40 bg-cyan-200 opacity-20 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {researchArticles.map((article, index) => (
              <div
                key={index}
                onClick={() => window.open(article.href, "_blank")}
                className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {article.subtitle}
                  </p>
                </div>

                <div className="text-gray-400 text-xs">
                  <p className="font-medium">{article.author}</p>
                  <p>{article.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Section for Visual Balance */}
          <div className="mt-20 text-center opacity-90">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              More Research Coming Soon
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our team is actively working on new white papers, frameworks, and
              research on educational leadership and strategic planning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
