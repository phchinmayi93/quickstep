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

export default function SAPHANACourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Best SAP HANA Training in RT Nagar Bangalore";
  const courseImage = "/What-is-Sap-Hana1.jpg";

  const syllabusPdf1 = "/syllabus/SAP HANA (2).pdf";
  const syllabusPdf2 = "/syllabus/sap-s4-hana-simple-logistics.pdf";

  const syllabus = [
    "Introduction to SAP HANA",
    "SAP S/4 HANA",
    "Introduction to SAP Activate Methodology",
    "Overview of SAP HANA Cloud Solutions",
    "Key Innovations of SAP Simple Logistics",
    "Changes in SAP Simple Logistics Processes",
    "Industry Specific Solutions for Logistics Functions",
    "Migration to SAP S/4 HANA",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>Best SAP HANA Training in RT Nagar Bangalore | Quickstep</title>
        <meta
          name="description"
          content="Join the best SAP HANA and SAP S/4 HANA training in RT Nagar Bangalore. Get hands-on experience, real-time projects, and placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{courseTitle}</h1>

          <button
            onClick={() => setShowForm(true)}
            className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Download Course Syllabus
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-xl border relative">
              <Image
                src={courseImage}
                alt="Best SAP HANA Training in RT Nagar Bangalore - Quickstep"
                width={1200}
                height={500}
                priority
                className="w-full object-cover"
              />

              <div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                170 SEATS
              </div>
            </div>

            {/* COURSE CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700 hover:shadow-2xl transition">

              <h3 className="text-xl font-bold">
                <Highlight>
                  Best SAP HANA Training in RT Nagar Bangalore
                </Highlight>
              </h3>

              <h3 className="text-xl font-bold">
                Course Description – SAP HANA / SAP S4 HANA Logistics
              </h3>

              <p>
                Quickstep offers the{" "}
                <Highlight>
                  Best SAP HANA Training in RT Nagar Bangalore
                </Highlight>
                , designed for IT professionals, analysts, developers, and SAP
                consultants.
              </p>

              <p>
                SAP HANA acts as the foundation for <strong>SAP S4 HANA</strong>,
                the latest ERP suite used globally.
              </p>

              <p>
                As one of the{" "}
                <Highlight>
                  Best SAP S4 HANA Training Institutes in RT Nagar Bangalore
                </Highlight>
                , Quickstep ensures practical knowledge on HANA architecture and
                real-time reporting.
              </p>

              <h4 className="text-lg font-semibold">
                What You Will Learn in SAP HANA / S4 HANA Training
              </h4>

              <ul className="list-disc pl-6 space-y-1">
                <li>Fundamentals of SAP HANA and in-memory database concepts</li>
                <li>SAP S4 HANA overview and architecture</li>
                <li>SAP Activate Methodology</li>
                <li>SAP HANA Cloud solutions</li>
                <li>Simple Logistics innovations</li>
                <li>Business Partner concept</li>
                <li>SAP SLT Replication</li>
                <li>Migration from ECC to SAP S4 HANA</li>
              </ul>
            </div>

            {/* BACK BUTTON */}
            <div className="mt-10">
              <Link
                href="/courses"
                className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
              >
                ← Back to Courses
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24">

            <h3 className="text-xl font-bold text-[#ffb000] mb-6">
              Course Syllabus
            </h3>

            <div className="space-y-3 mb-6">

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-[#ffb000] text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                SAP S4 HANA Download Syllabus
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-gray-200 text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                SIMPLE LOGISTICS Download Syllabus
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
              className="block text-center mt-6 bg-[#ffb000] text-black font-semibold py-3 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* FLOATING BUTTON (MOBILE UX BOOST) */}
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
          pdfs={[syllabusPdf1, syllabusPdf2]}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}