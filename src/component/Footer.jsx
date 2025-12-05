// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import voyagerLogo from "../assets/voyagerLogo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col items-start space-y-6">
            <Link 
              href="/" 
              className="group relative inline-block mb-2"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={voyagerLogo}
                  alt="Voyager Education"
                  className="h-14 w-auto brightness-110 contrast-110"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Voyager Education empowers educational institutions with innovative
              solutions for strategic planning, student success, and operational
              excellence.
            </p>
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Navigation links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/white-paper", label: "White Paper" },
                { href: "https://theceso.com/beacon-demo/", label: "Get Demo", external: true },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group relative inline-flex items-center text-gray-300 hover:text-white transition-all duration-300 text-base"
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-6 transition-all duration-300"></span>
                    <span className="ml-0 group-hover:ml-8 transition-all duration-300 relative z-10">
                      {link.label}
                    </span>
                    {link.external && (
                      <svg
                        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:cebalow@voyagered.com"
                className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-base"
              >
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  cebalow@voyagered.com
                </span>
              </a>

              <a
                href="tel:651-210-5732"
                className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-base"
              >
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-purple-500/50 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  651-210-5732
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Voyager Education. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Built with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>for education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
