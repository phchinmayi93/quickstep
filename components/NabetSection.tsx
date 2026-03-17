"use client";

import Image from "next/image";

export default function NabetSection() {
  return (
    <section className="bg-[#113488] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Quickstep – <span className="text-yellow-400">NABET Accredited</span>
        </h2>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side Logo */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Yellow Accent */}
              <div className="absolute -left-6 top-6 h-24 w-2 bg-yellow-400 rounded"></div>

              <Image
                src="/image_36.jpg"
                alt="NABET Accreditation"
                width={220}
                height={220}
                className="object-contain"
              />

            </div>

          </div>

          {/* Right Side Text */}
          <div>

            <h3 className="text-2xl font-bold text-[#234595] mb-4">
              National Accreditation Board for Education and Training
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Quickstep is proud to be accredited by the
              <strong> National Accreditation Board for Education and Training (NABET)</strong> –
              <strong> Quality Council of India</strong>, making us the only institute in the
              training and educational sector in <strong>Bangalore and Karnataka</strong>
              to hold this prestigious accreditation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Quickstep is the only private institute in Bangalore and among the few
              organizations in India to receive this prestigious recognition,
              demonstrating our commitment to <strong>quality education, industry standards,
              and professional training excellence.</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}