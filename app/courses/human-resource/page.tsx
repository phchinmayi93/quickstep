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

export default function HRCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "HR Training Course in RT Nagar Bangalore";

  const courseImage = "/HR-career1.jpg";

  const syllabusPdf = "/syllabus/Industry Synchronized H.pdf";

  const syllabus = [
    "The Human Resource",
    "Recruitment & Selection Process Life Cycle",
    "Working with Job Boards",
    "The HR Dashboard",
    "Employee On Boarding Process",
    "Joining Formalities",
    "Induction & Orientation Process",
    "Employee Off Boarding & Exit Formalities",
    "Employee Engagement Activities & Games",
    "The Business HR and HR Partner",
    "Introduction to Payroll Process",
    "Payroll Management & Administration",
    "Statutory Compliance & Taxes",
    "Training & Development",
    "Cloud HR / SAP-HR Platform Exposure",
    "HR Analytics",
    "MIS Reports with Advanced Excel",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join HR Training Course in RT Nagar Bangalore. Learn recruitment, payroll, HR analytics, and real-time HR practices with placement support."
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

              <h3 className="text-lg font-semibold">Course Description</h3>

              <p>
                Human resources is the set of people who make up the workforce of an organization,
                business sector, industry, or economy. It focuses on managing employee lifecycle,
                recruitment, payroll, compliance, and organizational growth.
              </p>

              <p>
                This course provides practical exposure to{" "}
                <Highlight>HR processes, payroll, recruitment, and HR analytics</Highlight>,
                making you job-ready in the HR domain.
              </p>

              <h4 className="font-semibold">What You Will Learn</h4>

              <ul className="list-disc pl-6 space-y-2">
                {syllabus.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
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

          {/* SIDEBAR */}
          <div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24 self-start h-fit">

            <h3 className="text-xl font-bold text-[#ffb000] mb-6">
              Course Syllabus
            </h3>

            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#ffb000] text-black py-3 rounded-lg font-semibold mb-4"
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