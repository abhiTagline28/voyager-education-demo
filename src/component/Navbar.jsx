"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import voyager_slim from "../assets/icons/voyager_slim.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full left-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "fixed shadow-xl bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 animate-slideDown"
          : "fixed bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md"
      }`}
    >
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced styling */}
          <Link 
            href="/" 
            className="flex items-center no-underline group relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <Image 
                  src={voyager_slim} 
                  alt="Voyager Logo" 
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu with enhanced styling */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`relative px-5 py-2.5 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                isActive("/")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive("/") && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg" />
              )}
              <span className="relative z-10">Home</span>
            </Link>

            <Link
              href="/about"
              className={`relative px-5 py-2.5 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                isActive("/about")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive("/about") && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg" />
              )}
              <span className="relative z-10">About</span>
            </Link>

            <Link
              href="/products"
              className={`relative px-5 py-2.5 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                isActive("/products")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive("/products") && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg" />
              )}
              <span className="relative z-10">Products</span>
            </Link>

            <Link
              href="/white-paper"
              className={`relative px-5 py-2.5 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                isActive("/white-paper")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive("/white-paper") && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg" />
              )}
              <span className="relative z-10">White Paper</span>
            </Link>
          </nav>

          {/* Mobile Menu Button with enhanced styling */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 top-3" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-6 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 top-3" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with enhanced styling */}
      {menuOpen && (
        <div className="md:hidden relative border-t border-slate-800/50 bg-slate-900/98 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <nav className="relative flex flex-col gap-1 px-4 pt-4 pb-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold text-[17px] transition-all duration-300 ${
                isActive("/")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold text-[17px] transition-all duration-300 ${
                isActive("/about")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold text-[17px] transition-all duration-300 ${
                isActive("/products")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              Products
            </Link>

            <Link
              href="/white-paper"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-semibold text-[17px] transition-all duration-300 ${
                isActive("/white-paper")
                  ? "text-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              White Paper
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
