/** @format */

import Link from "next/link";
import { Button } from "./button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      {/* Background effects */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-36 text-center text-white">
        <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold bg-white/10 rounded-full">
          Modern Web Solutions
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-snug mb-8">
          Modern Landing Page <br />
          <span className="text-blue-200">Next.js & Tailwind CSS</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-12">
          High-performance, responsive, and conversion-focused landing pages
          built with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 font-semibold rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            <Link href="#get-started">Get Started</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="text-white font-semibold border border-white/40 rounded-full bg-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <Link href="#features">View Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
