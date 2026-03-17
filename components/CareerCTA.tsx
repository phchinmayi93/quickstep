"use client";

import Link from "next/link";

export default function CareerCTA() {
  return (
    <section className="bg-[#00006c] pt-24 pb-28 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Your Career <span className="text-yellow-400">Starts Here</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          At Quickstep, we believe education should be accessible, affordable,
          and impactful. Whether you are starting your career or upgrading
          your skills, we provide all the support you need to succeed.
        </p>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Enhance your potential. Upgrade your skills. Build a brighter future
          with <span className="font-semibold text-white">Quickstep</span>.
          We prepare learners for today’s competitive job market with
          real-time skills, hands-on projects, and placement support.
        </p>

      
{/* Buttons */}
<div className="flex justify-center gap-6 flex-wrap">

  <Link href="/courses">
    <button className="bg-yellow-400 text-[#0f172a] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition">
      Explore Courses
    </button>
  </Link>

  <Link href="/contact">
    <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0f172a] transition">
      Contact Us
    </button>
  </Link>

</div>

      </div>

    </section>
  );
}