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

export default function ThreeDsMaxCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Best 3ds Max Training in RT Nagar Bangalore";

  const syllabus = [
    "Introduction",
    "Standard Primitives",
    "Extended Primitives",
    "Customizing Units",
    "Basic Models",
    "AEC",
    "3D Boolean",
    "Compound Objects",
    "Standard Lighting",
    "Advanced Lighting",
    "Basic Texturing",
    "Particles",
    "Reactors",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best 3ds Max Training in RT Nagar Bangalore. Learn 3D modeling, rendering, animation, lighting, and visualization with real-time projects and placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center">
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
                src="/3ds max1.jpg"
                alt={courseTitle}
                width={1200}
                height={500}
                className="w-full object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
                20 SEATS
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white p-8 rounded-xl shadow-md text-gray-700 space-y-5">

              <h2 className="text-xl font-bold">Course Description</h2>

              <p>
                <Highlight>3ds Max training</Highlight> provides exposure to a
                powerful design visualization platform from Autodesk.
              </p>

              <p>
                This course prepares students for careers in{" "}
                <Highlight>graphics, animation, and architectural visualization</Highlight>.
              </p>

              <p>
                Students learn <Highlight>2D and 3D modeling</Highlight>, rendering,
                surface modeling, and procedural modeling techniques.
              </p>

              <p>
                The program also covers advanced methods to create{" "}
                <Highlight>complex objects and realistic visualizations</Highlight>.
              </p>

              {/* FEATURES */}
              <h3 className="text-lg font-semibold">
                What You Will Learn
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Navigate through 3ds Max interface</li>
                <li>Generate 3D models</li>
                <li>Create animations for objects and characters</li>
                <li>Character poly modeling</li>
                <li>Lighting effects</li>
                <li>Rendering techniques</li>
                <li>Manage controllers and constraints</li>
                <li>Use Photometric Lights & Daylight System</li>
              </ul>

              <p>
                If you are searching for{" "}
                <Highlight>Best 3ds Max Training in Bangalore</Highlight>,
                Quickstep offers industry-level training.
              </p>

            </div>

            {/* BACK BUTTON */}
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
          pdf={"/syllabus/3ds Max1.pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}