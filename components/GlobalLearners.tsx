"use client";

import { Globe, GraduationCap, Users } from "lucide-react";

export default function GlobalLearners() {
  return (
    <section className="bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl font-bold text-[#00006c] mb-6">
            A Trusted Institution for
            <span className="text-yellow-500"> Global Learners</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With decades of proven excellence, Quickstep stands as a leading
            destination for learners across the world.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We empower learners with practical skills, advanced technical
            knowledge, and globally relevant competencies.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We eagerly look forward to welcoming students from around the globe
            who aspire to build a successful future.
          </p>

        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-1 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-[#00006c] text-white p-3 rounded-lg">
              <Globe size={26} />
            </div>
            <p className="text-gray-700 font-medium">
              Students from multiple countries
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-yellow-500 text-white p-3 rounded-lg">
              <GraduationCap size={26} />
            </div>
            <p className="text-gray-700 font-medium">
              Industry-oriented practical training
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-[#00006c] text-white p-3 rounded-lg">
              <Users size={26} />
            </div>
            <p className="text-gray-700 font-medium">
              Thousands of successful learners
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}