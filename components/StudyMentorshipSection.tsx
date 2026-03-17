"use client";

import Link from "next/link";

export default function StudyMentorshipSection() {
return ( <section className="bg-gray-100 py-28">

```
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}

    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20">
      Learn why{" "}
      <span className="text-sky-500">
        Quickstep Computer Centre Training Programs
      </span>{" "}
      are simply the best choice for building your career
    </h2>


    <div className="grid md:grid-cols-2 gap-14 items-start">

      {/* LEFT CARD */}

      <div className="relative">

        {/* Ribbon */}

        <div className="absolute -top-4 left-6 rotatey-[-6deg] bg-yellow-400 px-4 py-1 text-sm font-semibold shadow">
          Study Materials
        </div>

        {/* Main Card */}

        <div className="bg-gradient-to-r from-cyan-400 to-green-400 text-white p-10 rounded-lg shadow-xl text-left">

          <h3 className="text-2xl font-bold mb-4">
            Our Industry-Focused Study Materials
          </h3>

          <p className="opacity-90 leading-relaxed">
            Easy to understand learning material with real industry
            examples, step-by-step explanations, and practical projects
            designed to make students job-ready.
          </p>

        </div>

        {/* Comparison Card */}

        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 text-left rotate-[-2deg]">

          <h4 className="font-semibold text-gray-700 mb-2">
            Other Study Materials available in market
          </h4>

          <p className="text-gray-500 text-sm">
            Often outdated, overly theoretical, and difficult for students
            to understand without real-world practical exposure.
          </p>

        </div>

      </div>


      {/* RIGHT CARD */}

      <div className="relative">

        {/* Ribbon */}

        <div className="absolute -top-4 left-6 rotate-[-6deg] bg-yellow-400 px-4 py-1 text-sm font-semibold shadow">
          Expert Mentorship
        </div>

        {/* Main Card */}

        <div className="bg-gradient-to-r from-cyan-400 to-green-400 text-white p-10 rounded-lg shadow-xl text-left">

          <h3 className="text-2xl font-bold mb-4">
            Our Expert Mentorship & Training
          </h3>

          <p className="opacity-90">
            Learn directly from experienced trainers with personalized
            guidance, real project training, and career support that helps
            students build confidence and industry-ready skills.
          </p>

        </div>

        {/* Comparison */}

        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 text-left rotate-[2deg]">

          <h4 className="font-semibold text-gray-700 mb-2">
            Other training institutes
          </h4>

          <p className="text-gray-500 text-sm">
            Generic classroom training with limited mentoring and minimal
            real project exposure.
          </p>

        </div>

      </div>

    </div>


    {/* CTA */}

    <div className="mt-20">

      <Link
        href="/contact"
        className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
      >
        📅 Book A Free Demo Class
      </Link>

    </div>

  </div>

</section>


);
}
