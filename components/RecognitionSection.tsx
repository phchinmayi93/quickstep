"use client";

import { FaAward } from "react-icons/fa";

const recognitions = [
  "Best Computer Training Institute in Bengaluru",
  "Best Data Science Training Institute in Bengaluru",
  "Best Data Analytics Training Institute in Bengaluru",
  "Best SAP Training Institute in Bengaluru",
  "Best Full Stack Developer Training Institute in Bengaluru",
  "Best Digital Marketing Training Institute in Bengaluru",
  "Best Cyber Security Training Institute in Bengaluru",
  "Best Python, Java, J2EE, .Net Training Institute",
  "Best Software Testing Training Institute in Bengaluru",
  "Best CADD Training Institute in Bengaluru",
  "Best Interior Design Training Institute in Bengaluru",
];

export default function RecognitionSection() {
  return (
    <section className="bg-[#00006c] py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          Recognitions & <span className="text-yellow-400">Reputation</span>
        </h2>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">

          <p className="text-gray-300 mb-6 leading-relaxed">
            These accreditations validate our institutional authenticity and ensure recognition
            by the Government of India and various state authorities.
          </p>

          <p className="text-gray-300 leading-relaxed">
            For over three decades, Quickstep has stood as one of the most trusted and leading
            computer training institutes in Bengaluru. With a legacy of <strong>30+ years</strong>
            in delivering high-quality, industry-focused training, we have empowered thousands of
            students and professionals with the skills required to succeed in today’s competitive world.
          </p>

        </div>

        {/* Recognition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {recognitions.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#0f172a] rounded-xl shadow-lg p-6 flex items-start gap-4 hover:scale-105 transition"
            >
              <FaAward className="text-yellow-500 text-xl mt-1" />

              <p className="font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Description */}
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-gray-300 mb-6 leading-relaxed">
            Our strong foundation, expert faculty, and commitment to practical learning
            have made Quickstep the <strong>Best Computer Training Centre in Bengaluru and RT Nagar.</strong>
            We offer a wide range of in-demand courses designed to meet modern industry requirements,
            ensuring every learner gains real-time knowledge, hands-on experience, and the confidence
            to build a successful career.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Quickstep, we believe in shaping futures through quality training,
            personalized attention, and continuous support. Our long-standing reputation,
            association with reputed companies, and consistent placement success make us
            the preferred choice for students across India and abroad.
          </p>

        </div>

      </div>

    </section>
  );
}