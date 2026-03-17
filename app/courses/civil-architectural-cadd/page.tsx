"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// Highlight Component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded">
    {children}
  </span>
);

export default function CivilArchitecturalCADD() {
  const courseTitle =
    "Best Civil Architectural CADD Training in RT Nagar Bangalore";

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best Civil Architectural CADD Training in RT Nagar Bangalore. Learn AutoCAD, Revit, STAAD Pro, ETABS with real-time projects and placement support."
        />
      </Head>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ACAD civil 1.jpg"
              alt={courseTitle}
              width={1200}
              height={500}
              className="w-full object-cover"
            />

            <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
              170 <span className="text-sm">SEATS</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-white p-8 rounded-xl shadow-md mt-6 text-gray-700 space-y-4">

            <h1 className="text-2xl font-bold">
              <Highlight>{courseTitle}</Highlight>
            </h1>

            <h2 className="text-xl font-semibold">
              Course Description – Civil Architectural CADD
            </h2>

            <p>
              Quickstep offers the{" "}
              <Highlight>
                Best Civil and Architectural CADD Training in RT Nagar Bangalore
              </Highlight>{" "}
              designed for engineers and designers.
            </p>

            <p>
              This course covers{" "}
              <Highlight>AutoCAD, Revit, SketchUp, STAAD Pro, ETABS</Highlight>{" "}
              for real-world building design.
            </p>

            <p>
              As one of the{" "}
              <Highlight>
                Best Civil CADD Training Institutes in Bangalore
              </Highlight>
              , we ensure practical skills.
            </p>

            {/* LEARNING */}
            <h3 className="text-lg font-semibold">
              What You Will Learn
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>2D drafting using AutoCAD</li>
              <li>3D modeling & rendering</li>
              <li>Building plan design</li>
              <li>BIM using Revit</li>
              <li>Structural analysis</li>
            </ul>

            {/* SOFTWARE */}
            <h3 className="text-lg font-semibold">
              Software Covered
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>AutoCAD</li>
              <li>3Ds Max</li>
              <li>SketchUp</li>
              <li>Revit</li>
              <li>STAAD Pro</li>
              <li>ETABS</li>
            </ul>

            {/* WHY */}
            <h3 className="text-lg font-semibold">
              Why Choose Quickstep?
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>Industry expert trainers</li>
              <li>Real-time projects</li>
              <li>Hands-on training</li>
              <li>Flexible batches</li>
              <li>Placement support</li>
            </ul>

            <p>
              If you are searching for{" "}
              <Highlight>
                Best Civil Architectural CADD Course in RT Nagar Bangalore
              </Highlight>
              , Quickstep is the best choice.
            </p>

          </div>

          {/* BACK BUTTON */}
          <div className="mt-10">
            <Link
              href="/courses"
              className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white"
            >
              ← Back to Courses
            </Link>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 h-fit sticky top-24">

          <h4 className="text-xl font-semibold mb-6 text-[#ffb000]">
            Course Syllabus
          </h4>

          <ul className="space-y-4">

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/autocadd" className="text-white hover:text-yellow-400">
                AutoCAD Isometric – 2D – 3D
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/3dsmax" className="text-white hover:text-yellow-400">
                3Ds Max
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/sketchup" className="text-white hover:text-yellow-400">
                Google SketchUp
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/revit" className="text-white hover:text-yellow-400">
                Revit Architecture
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/revit-mep" className="text-white hover:text-yellow-400">
                Revit MEP
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/staadpro" className="text-white hover:text-yellow-400">
                STAAD Pro
              </Link>
            </li>

            <li className="border-b border-white/20 pb-2">
              <Link href="/courses/civil-architectural-cadd/etabs" className="text-white hover:text-yellow-400">
                ETABS with SAFE
              </Link>
            </li>

          </ul>

          <div className="mt-6">
            <Link href="/contact">
              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500">
                Contact Us
              </button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}