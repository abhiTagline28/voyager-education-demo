// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import voyagerLogo from "../assets/voyagerLogo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-4">
            <Image
              src={voyagerLogo}
              alt="Voyager Education"
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-sm">
            Voyager Education empowers educational institutions with innovative
            solutions for strategic planning, student success, and operational
            excellence.
          </p>
        </div>

        {/* Navigation links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/white-paper" className="hover:text-white transition">
                White Paper
              </Link>
            </li>
            <li>
              <Link
                href="https://theceso.com/beacon-demo/"
                target="_blank"
                className="hover:text-white transition"
              >
                Get Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: cebalow@voyagered.com</p>
          <p className="text-gray-400 text-sm mt-2">Phone: 651-210-5732</p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Voyager Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
