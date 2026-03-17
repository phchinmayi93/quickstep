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

export default function HyperMeshCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Best HyperMesh Training in RT Nagar Bangalore";

  const courseImage = "/Hypermesh 1.jpg";

  const syllabusPdf = "/syllabus/HyperMesh 1.pdf";

  const syllabus = [
    "Introduction",
    "Tools & Menu Bar",
    "FEA",
    "Strategic Planning",
    "Art of Modeling",
    "Analysis Types",
    "Shell Meshing",
    "Topology & Topography",
    "2D & 3D Shape Optimization",
    "1D & 2D Size Optimization",
    "Model Clean up",
    "Meshing",
    "Static Analysis",
    "Thermal Analysis",
    "Optimization",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best HyperMesh Training in RT Nagar Bangalore. Learn FEA, meshing, optimization, and CAE simulation with placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{courseTitle}</h1>

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

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-xl border relative">
              <Image
                src={courseImage}
                alt={courseTitle}
                width={1200}
                height={500}
                className="w-full object-cover"
              />

              <div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                170 SEATS
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow-xl border space-y-6 text-gray-700">

              <h2 className="text-xl font-bold text-gray-900">
                Course Description
              </h2>

              <p>
                The <Highlight>HyperMesh Training course</Highlight> enables participants
                to work on CAE simulation and <Highlight>Finite Element Analysis (FEA)</Highlight>.
              </p>

              <p>
                This training helps learners create high-quality meshes,
                perform simulations, and prepare CAD models for analysis.
              </p>

              <p>
                Participants will gain knowledge in{" "}
                <Highlight>Batch Meshing, geometry cleanup, and optimization</Highlight>,
                which are essential for engineering analysis.
              </p>

              {/* LEARNING */}
              <h3 className="text-xl font-semibold text-gray-900">
                What You Will Learn
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Finite Element Analysis (FEA)</li>
                <li>Shell, Tetra & HyperMeshing</li>
                <li>Hexa and Penta meshing</li>
                <li>Assembly & Welding techniques</li>
                <li>Topology & Topography optimization</li>
                <li>Thermal & Static Analysis</li>
                <li>Mesh preparation and cleanup</li>
                <li>2D & 3D Shape Optimization</li>
                <li>Results visualization</li>
              </ul>

            </div>

            {/* BACK */}
            <Link
              href="/courses"
              className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              ← Back to Courses
            </Link>

          </div>

          {/* SIDEBAR */}
          <div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24 self-start h-fit">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-xl font-bold text-[#ffb000]">
                Course Syllabus
              </h3>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold"
              >
                Download
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
              className="block text-center mt-6 bg-[#ffb000] text-black font-semibold py-3 rounded-md"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-5 right-5 z-50">
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
          pdf={syllabusPdf}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}