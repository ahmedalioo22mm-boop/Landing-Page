import { Zap, ShieldCheck, Code2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Header */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
          Features
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Why Choose This Landing Page?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Built with performance, scalability, and clean design to deliver
          modern, high-converting landing pages.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
            <Zap className="h-10 w-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              High Performance
            </h3>
            <p className="text-gray-600">
              Fast-loading pages optimized with Next.js for smooth performance.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
            <ShieldCheck className="h-10 w-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Secure & Clean Code
            </h3>
            <p className="text-gray-600">
              Well-structured, secure, and maintainable code following best practices.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
            <Code2 className="h-10 w-10 text-blue-600 mb-6 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Modern Tech Stack
            </h3>
            <p className="text-gray-600">
              Built with Next.js, Tailwind CSS, and modern frontend technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
