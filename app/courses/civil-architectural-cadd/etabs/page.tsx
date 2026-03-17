"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LeadForm from "@/components/LeadForm";

// Highlight Component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded">
    {children}
  </span>
);

export default function ETABSCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best ETABS Training in RT Nagar Bangalore";

  const syllabus = [
    "Overview of ETABS",
    "Modelling Process & Techniques",
    "Analysis Process",
    "Design Process",
    "Reporting",
    "User Interface",
    "Import & Export",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best ETABS Training in RT Nagar Bangalore. Learn structural modelling, analysis, and design with real-time projects."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          <Highlight>{courseTitle}</Highlight>
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
        >
          Download Course Syllabus
        </button>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/etabs1.jpg"
                alt="Best ETABS Training in RT Nagar Bangalore"
                width={1200}
                height={500}
                className="w-full object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
                20 SEATS
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow-md text-gray-700 space-y-5 leading-relaxed">

              <h2 className="text-xl font-bold">
                Course Description
              </h2>

              <p>
                <Highlight>ETABS training</Highlight> provides advanced
                knowledge in{" "}
                <Highlight>structural modeling, analysis, and design</Highlight>.
              </p>

              <p>
                ETABS offers powerful{" "}
                <Highlight>3D object-based modeling and visualization tools</Highlight>,
                along with linear and nonlinear analysis capabilities.
              </p>

              <p>
                The software supports{" "}
                <Highlight>design for multiple materials</Highlight> and provides
                graphical reports and drawings to easily understand results.
              </p>

              <p>
                This course helps engineers gain practical skills in{" "}
                <Highlight>building analysis, structural design, and reporting</Highlight>.
              </p>

              <p>
                If you are looking for{" "}
                <Highlight>Best ETABS Training in Bangalore</Highlight>,
                Quickstep provides industry-ready training.
              </p>

            </div>

            {/* BACK BUTTON */}
            <Link
              href="/courses"
              className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              ← Back to Courses
            </Link>

          </div>

          {/* SIDEBAR */}
          <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 sticky top-24 h-fit">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#ffb000]">
                Course Syllabus
              </h3>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ffb000] text-black px-3 py-1 rounded"
              >
                Download Syllabus
              </button>
            </div>

            <ul className="space-y-3">
              {syllabus.map((item, index) => (
                <li key={index} className="border-b border-white/20 pb-2">
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center mt-6 bg-[#ffb000] text-black py-2 rounded font-semibold"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-6 py-3 rounded-full shadow-lg"
        >
          Get Syllabus
        </button>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdf={"/syllabus/ETABS.pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}