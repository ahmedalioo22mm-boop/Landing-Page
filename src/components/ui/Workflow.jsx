import { ClipboardList, Layers, Smartphone, Rocket } from "lucide-react";

export default function Workflow() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Header */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          Workflow
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          How I Build Your Landing Page
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-20">
          A clear, simple process to deliver high-quality and conversion-focused landing pages.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Receive Requirements
            </h3>
            <p className="text-gray-600 text-sm">
              I review your idea, goals, and any design or reference materials.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6">
              <Layers size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Build Components
            </h3>
            <p className="text-gray-600 text-sm">
              I develop clean, reusable components using Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6">
              <Smartphone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Optimize & Responsive
            </h3>
            <p className="text-gray-600 text-sm">
              I ensure fast loading, mobile responsiveness, and cross-browser compatibility.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Final Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              You receive the final landing page with full source code.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
