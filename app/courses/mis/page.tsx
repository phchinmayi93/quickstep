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

export default function CoursePage() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "MIS Training in RT Nagar Bangalore";

  const syllabus = [
    "Advance Excel",
    "Tally ERP",
    "SQL Server",
    "RDBMS",
    "MS Access",
    "Visual Basic",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join MIS Training in RT Nagar Bangalore. Learn Excel, SQL, Tally, and data management with placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#00006c] to-indigo-800 text-white py-16 text-center">
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
            <div className="rounded-xl overflow-hidden shadow-xl border">
              <Image
                src="/MIS1 (1).jpg"
                alt="MIS Course"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="bg-white p-8 rounded-xl shadow-xl space-y-6 text-gray-700">

              <h2 className="text-xl font-bold">
                <Highlight>{courseTitle}</Highlight>
              </h2>

              <h3 className="text-lg font-semibold">Course Description</h3>

              <p>
                A <Highlight>Management Information System (MIS)</Highlight> is used for decision-making,
                coordination, control, and analysis of information in an organization.
              </p>

              <p>
                This course focuses on <Highlight>data management, reporting, and business insights</Highlight>,
                helping students become job-ready in MIS roles.
              </p>

              <h4 className="font-semibold">What You Will Learn</h4>

              <ul className="list-disc pl-6 space-y-2">
                {syllabus.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          </div>

          {/* SIDEBAR */}
          <div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl sticky top-24 self-start h-fit">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#ffb000]">
                Course Syllabus
              </h3>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ffb000] text-black px-4 py-1 rounded-md font-semibold hover:bg-white transition"
              >
                Download Syllabus
              </button>
            </div>

            <ul className="space-y-4">
              {syllabus.map((item, i) => (
                <li key={i} className="border-b border-white/20 pb-2">
                  • {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center mt-8 bg-[#ffb000] text-black font-semibold py-3 rounded-md hover:bg-white transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* BACK */}
        <div className="mt-12">
          <Link
            href="/courses"
            className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
          >
            ← Back to Courses
          </Link>
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
          pdfs={["/syllabus/mis.pdf"]}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}