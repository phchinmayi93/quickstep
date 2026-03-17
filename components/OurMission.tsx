"use client";

import { Target, Eye } from "lucide-react";

export default function OurMission() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a]">
            Our <span className="text-yellow-500">Mission & Vision</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Empowering students with skills, knowledge, and career opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">

            <div className="w-14 h-14 bg-[#00006c] text-white flex items-center justify-center rounded-xl mb-6">
              <Target size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to make quality education accessible and affordable
              for all. At Quickstep, we strive to create a powerful learning
              platform where individuals can strengthen both their hard and soft
              skills, empowering them to grow with confidence.

              Through practical training, expert guidance, and a supportive
              learning environment, we prepare students to become
              industry-ready professionals capable of achieving long-term
              career success.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">

            <div className="w-14 h-14 bg-yellow-500 text-white flex items-center justify-center rounded-xl mb-6">
              <Eye size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to empower generations with the knowledge, skills,
              and confidence needed to succeed in an evolving global workforce.

              We strive to be the most trusted and preferred training provider
              by delivering industry-relevant programs, nurturing talent, and
              fostering lifelong learning while building brighter futures and
              transforming aspirations into achievements.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}