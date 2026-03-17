"use client";

import { CheckCircle } from "lucide-react";

export default function LegacySection() {
  const features = [
    "Hands-on Training",
    "Project-Based Learning",
    "Interview Preparation",
    "Mock Tests & Q&A Sessions",
    "Placement Support",
    "Real-Time Professional Skill Development",
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl font-bold text-[#00006c] mb-6">
            A Legacy of <span className="text-yellow-500">Trust & Excellence</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Over the years, Quickstep has transformed the futures of thousands
            of Indian and international students. With high-quality teaching,
            extensive practical exposure, and updated course content, we have
            earned a reputation as one of the
            <span className="font-semibold text-[#00006c]">
              {" "}Best Computer Training Institutes in R.T. Nagar Bangalore.
            </span>
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our industry-oriented programs are designed to prepare learners for
            real-world challenges and ensure strong career growth.
          </p>

        </div>


        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
            >
              <CheckCircle className="text-yellow-500" size={20} />
              <span className="text-gray-700 font-medium">
                {feature}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}