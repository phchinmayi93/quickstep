"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LeadForm from "@/components/LeadForm";

// Highlight component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded">
    {children}
  </span>
);

export default function CivilAutoCADCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best Civil Architectural AutoCAD Training in RT Nagar Bangalore";

  const syllabusPdf = "/syllabus/Autocad civil.pdf";

  const syllabus = [
    "Introduction to CAD Industry",
    "Drawing Settings",
    "Orthographic Drawings",
    "Isometric Drawings",
    "Perspective Drawings",
    "Editing the drawings",
    "Annotations and Dimensions",
    "Layer management",
    "Project Planning and Management",
    "Selection Methods",
    "Creating and Updating Repeated Elements",
    "Parametric Drawings",
    "Preparing Joinery Details / BOM",
    "Presenting the Project",
    "Working with a team",
    "Layout Management",
    "Scale setting and Plotting",
    "Import and Export",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best Civil Architectural AutoCAD Training in RT Nagar Bangalore. Learn 2D drafting, 3D modeling, site planning, and real-time projects with placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{courseTitle}</h1>

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
                src="/ACAD civil 1.jpg"
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
            <div className="bg-white p-8 rounded-xl shadow-md space-y-6 text-gray-700">

              <h2 className="text-xl font-bold">
                <Highlight>
                  Civil Architectural AutoCAD Training in Bengaluru
                </Highlight>
              </h2>

              <p>
                In today’s <strong>Construction</strong> and{" "}
                <strong>Design Industry</strong>,{" "}
                <Highlight>AutoCAD skills</Highlight> are highly in demand.
              </p>

              <p>
                Quickstep offers the{" "}
                <Highlight>
                  Best Civil and Architectural AutoCAD Training in Bangalore
                </Highlight>{" "}
                with real-time projects and practical learning.
              </p>

              <h3 className="text-lg font-semibold">
                Why Choose AutoCAD?
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Civil AutoCAD Technician</li>
                <li>Architectural Drafter</li>
                <li>Structural Detailer</li>
                <li>Interior Designer</li>
                <li>Project Coordinator</li>
              </ul>

              <h3 className="text-lg font-semibold">
                Course Highlights
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Live project training</li>
                <li>Hands-on labs</li>
                <li>Real-world case studies</li>
                <li>Industry-based curriculum</li>
                <li>Placement support</li>
              </ul>

              <h3 className="text-lg font-semibold">
                Who Can Join?
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Civil Engineering Students</li>
                <li>Architecture Students</li>
                <li>Diploma Holders</li>
                <li>Working Professionals</li>
              </ul>

              <h3 className="text-lg font-semibold">
                Career Opportunities
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>Civil AutoCAD Drafter</li>
                <li>Architectural Assistant</li>
                <li>3D Modeler</li>
                <li>Design Technician</li>
              </ul>

              <p>
                Quickstep provides{" "}
                <Highlight>30+ years of training excellence</Highlight> with
                real-time projects and placement support.
              </p>

              <p>
                If you are searching for{" "}
                <Highlight>
                  Best Civil Architectural AutoCAD Training in RT Nagar Bangalore
                </Highlight>
                , this is the right place.
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
          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg sticky top-24 self-start h-fit">

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
          pdf={syllabusPdf}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}