"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LeadForm from "@/components/LeadForm";

// Highlight Component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-blue-600 text-white px-2 py-1 rounded-md font-semibold">
    {children}
  </span>
);

export default function SAPPPCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Best SAP PP Training in RT Nagar Bangalore";
  const courseImage = "/SAP-PP 1.jpg";

  const syllabusPdf = "/syllabus/SAP PP (1).pdf";

  const syllabus = [
    "Master Data",
    "Sales and Operational Planning (SOP)",
    "Master Planning",
    "Material Requirement Planning (MRP)",
    "Goods Movement in PP",
    "Batch Management",
    "Variant Configuration",
    "Availability Check",
    "Repetitive & Discrete Manufacturing",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best SAP PP Training in RT Nagar Bangalore with real-time projects and placement support."
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

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border">
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

              <h2 className="text-xl font-bold">
                <Highlight>{courseTitle}</Highlight>
              </h2>

              <h3 className="text-lg font-semibold">
                Course Description – SAP Production Planning
              </h3>

              <p>
                Quickstep offers the{" "}
                <Highlight>Best SAP PP Training in RT Nagar Bangalore</Highlight>,
                designed for students and professionals.
              </p>

              <p>
                This is one of the{" "}
                <Highlight>Best SAP PP Courses in Bangalore</Highlight> with real-time training.
              </p>

              <h4 className="font-semibold">What You Will Learn</h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>ERP & SAP PP Architecture</li>
                <li>Master Data, BOM, Work Centers</li>
                <li>Demand Management</li>
                <li>Material Requirement Planning</li>
                <li>Production Orders</li>
                <li>Capacity Planning</li>
                <li>Integration with MM, SD, QM</li>
              </ul>

              <h4 className="font-semibold">Why Choose Quickstep?</h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>Certified SAP Trainers</li>
                <li>Real-time projects</li>
                <li>Placement support</li>
                <li>Flexible timings</li>
              </ul>

            </div>

            {/* BACK BUTTON */}
            <Link
              href="/courses"
              className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              ← Back to Courses
            </Link>

          </div>

          {/* SIDEBAR (FIXED HEIGHT ISSUE) */}
          <div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24 self-start h-fit">

            <h3 className="text-xl font-bold text-[#ffb000] mb-6">
              Course Syllabus
            </h3>

            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#ffb000] text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition mb-4"
            >
              Download Syllabus
            </button>

            <ul className="space-y-3">
              {syllabus.map((item, i) => (
                <li key={i} className="border-b border-white/20 pb-2">
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
        >
          Get Syllabus
        </button>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdfs={[syllabusPdf]}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}