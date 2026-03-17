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

export default function RevitCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best Revit Architecture Training in RT Nagar Bangalore";

  const syllabus = [
    "Introduction BIM",
    "Levels",
    "Walls",
    "Doors & Windows",
    "Place Components",
    "Create & Manage",
    "Camera Settings",
    "Floor & Ceilings",
    "Stairs",
    "Models",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best Revit Architecture Training in RT Nagar Bangalore. Learn BIM, 3D modeling, rendering, and architectural design with real-time projects."
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
                src="/Revit 1.png"
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
                <Highlight>Revit Architecture training</Highlight> prepares you
                to use advanced designing technology for modern construction projects.
              </p>

              <p>
                This course helps learners understand the{" "}
                <Highlight>Building Information Modeling (BIM)</Highlight>{" "}
                process and apply it to real-world projects.
              </p>

              <p>
                The training is divided into{" "}
                <Highlight>Essential and Advanced modules</Highlight> to ensure
                complete knowledge.
              </p>

              <p>
                The advanced module focuses on{" "}
                <Highlight>import/export, linking files, and collaboration</Highlight>{" "}
                between teams.
              </p>

              {/* SKILLS */}
              <h3 className="text-lg font-semibold mt-4">
                Skills You Will Gain
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Understanding BIM concepts</li>
                <li>Creating building models (walls, doors, windows)</li>
                <li>Working with floors, stairs, railings</li>
                <li>3D views and rendering</li>
                <li>Documentation and drawing sheets</li>
                <li>Importing and linking project files</li>
                <li>Parametric and nested families</li>
                <li>Team collaboration using Revit</li>
              </ul>

              <p>
                If you are searching for{" "}
                <Highlight>Best Revit Training in Bangalore</Highlight>, this course
                provides industry-ready skills.
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
          pdf={"/syllabus/Revit Architectural 1 (1).pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}