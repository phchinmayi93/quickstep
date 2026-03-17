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

export default function StaadCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best STAAD Pro Training in RT Nagar Bangalore";

  const syllabus = [
    "Introduction",
    "Model Generation",
    "Assigning Loads",
    "Automatic Load Generation",
    "Concrete Design",
    "Seismology",
    "Response Spectrum Analysis",
    "Steel Design",
    "Pushover Analysis",
    "Foundation Design",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best STAAD Pro Training in RT Nagar Bangalore. Learn structural analysis, load calculation, steel & concrete design with real-time projects."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          <Highlight>{courseTitle}</Highlight>
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
        >
          Download Course Syllabus
        </button>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/staad.jpg"
                alt={courseTitle}
                width={1200}
                height={500}
                className="w-full object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
                170 SEATS
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow-md text-gray-700 space-y-5 leading-relaxed">

              <h2 className="text-xl font-bold">
                Course Description
              </h2>

              <p>
                <Highlight>STAAD.Pro training</Highlight> is designed for civil
                and structural engineers to gain hands-on experience in
                <Highlight> structural analysis and design</Highlight>.
              </p>

              <p>
                This course helps learners develop skills to create,
                maintain, and implement{" "}
                <Highlight>high-quality structural designs</Highlight>.
              </p>

              <p>
                It is widely used in{" "}
                <Highlight>engineering consultancies and infrastructure projects</Highlight>.
              </p>

              {/* SKILLS */}
              <h3 className="text-lg font-semibold mt-4">
                Skills You Will Gain
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Understanding STAAD Pro software concepts</li>
                <li>2D and 3D modeling techniques</li>
                <li>Load calculation and combinations</li>
                <li>Structural analysis methods</li>
                <li>Concrete and steel design</li>
                <li>Seismic and dynamic analysis</li>
                <li>Foundation design</li>
                <li>Isometric and 3D visualization</li>
              </ul>

              <p>
                If you are searching for{" "}
                <Highlight>Best STAAD Pro Training in Bangalore</Highlight>,
                Quickstep provides industry-level training.
              </p>

            </div>

            {/* BACK */}
            <Link
              href="/courses"
              className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white"
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
              {syllabus.map((item, i) => (
                <li key={i} className="border-b border-white/20 pb-2">
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center mt-6 bg-[#ffb000] text-black py-2 rounded"
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
          className="bg-[#ffb000] text-black px-6 py-3 rounded-full shadow"
        >
          Get Syllabus
        </button>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdf={"/syllabus/STAD PRO (1).pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}