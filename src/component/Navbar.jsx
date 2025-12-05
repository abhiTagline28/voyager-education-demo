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
      className={`w-full left-0 top-0 z-50 bg-black backdrop-blur-md transition-all duration-700 ${
        scrolled ? "shadow-md animate-slideDown fixed" : "fixed"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <Image src={voyager_slim} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-white font-semibold text-[17px]">
            <Link
              href="/"
              className={`transition ${
                isActive("/")
                  ? "text-[#008EAA] underline underline-offset-8"
                  : "hover:text-[#008EAA]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`transition ${
                isActive("/about")
                  ? "text-[#008EAA] underline underline-offset-8"
                  : "hover:text-[#008EAA]"
              }`}
            >
              About
            </Link>

            <Link
              href="/products"
              className={`transition ${
                isActive("/products")
                  ? "text-[#008EAA] underline underline-offset-8"
                  : "hover:text-[#008EAA]"
              }`}
            >
              Products
            </Link>

            <Link
              href="/white-paper"
              className={`transition ${
                isActive("/white-paper")
                  ? "text-[#008EAA] underline underline-offset-8"
                  : "hover:text-[#008EAA]"
              }`}
            >
              White Paper
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 pt-4 pb-6">
          <nav className="flex flex-col gap-4 text-[17px] font-semibold">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`${
                isActive("/") ? "text-[#008EAA]" : "hover:text-[#008EAA]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`${
                isActive("/about") ? "text-[#008EAA]" : "hover:text-[#008EAA]"
              }`}
            >
              About
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className={`${
                isActive("/products")
                  ? "text-[#008EAA]"
                  : "hover:text-[#008EAA]"
              }`}
            >
              Products
            </Link>

            <Link
              href="/white-paper"
              onClick={() => setMenuOpen(false)}
              className={`${
                isActive("/white-paper")
                  ? "text-[#008EAA]"
                  : "hover:text-[#008EAA]"
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
