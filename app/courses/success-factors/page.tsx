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

export default function SAPSuccessFactorsCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best SAP SuccessFactors Training in RT Nagar Bangalore";

  const courseImage =
    "/SAP-SuccessFactors-MarketPlace1.jpg";

  const syllabusPdf = "/syllabus/Success Factors.pdf";

  const syllabus = [
    "Introduction to Mastery",
    "Performance & Goals Management (PMGM)",
    "Recruitment Management",
    "Compensation",
    "Employee Central",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best SAP SuccessFactors Training in RT Nagar Bangalore with real-time cloud projects and placement support."
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

              <h3 className="text-lg font-semibold">
                Course Description – SAP SuccessFactors (Cloud HR Suite)
              </h3>

              <p>
                Quickstep offers the{" "}
                <Highlight>
                  Best SAP SuccessFactors Training in RT Nagar Bangalore
                </Highlight>
                , designed for HR professionals, consultants, students, and IT professionals.
              </p>

              <p>
                SAP SuccessFactors is a cloud-based HCM suite used globally to manage HR processes and employee lifecycle.
              </p>

              <p>
                As one of the{" "}
                <Highlight>
                  Best SAP SuccessFactors Training Institutes in RT Nagar Bangalore
                </Highlight>
                , Quickstep provides hands-on training with real-time cloud access.
              </p>

              <p>
                <strong>Best SAP Training in Bangalore</strong>
              </p>

              {/* LEARNING */}
              <h4 className="font-semibold">
                What You Will Learn in SAP SuccessFactors Training
              </h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>SuccessFactors Architecture & Cloud HR</li>
                <li>Performance & Goals, Employee Central</li>
                <li>Foundation Objects & MDF</li>
                <li>Hire, Rehire, Termination & LOA</li>
                <li>Proxy Management & Admin Tools</li>
                <li>Business Rules & Workflows</li>
                <li>Payroll & Self-Service Portals</li>
                <li>Real-time project scenarios</li>
              </ul>

              {/* WHY */}
              <h4 className="font-semibold">
                Why Choose Quickstep for SuccessFactors Training?
              </h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>Certified SAP consultants</li>
                <li>Real-time cloud practice</li>
                <li>Complete module coverage</li>
                <li>Placement assistance</li>
                <li>Flexible batches</li>
              </ul>

              <p>
                If you're searching for{" "}
                <Highlight>
                  Best SAP SuccessFactors Training in RT Nagar Bangalore
                </Highlight>
                , Quickstep is your best choice.
              </p>

              {/* ONLINE TRAINING */}
              <p>
                We also offer{" "}
                <Highlight>
                  Best Online SAP Training in Bangalore
                </Highlight>{" "}
                with live classes and cloud access.
              </p>

              <p>
                Our{" "}
                <Highlight>
                  Online SAP SuccessFactors Training in Bangalore
                </Highlight>{" "}
                ensures real-time learning from home.
              </p>

              <p>
                Recognized for{" "}
                <Highlight>
                  Best Online SAP Courses in Bangalore
                </Highlight>{" "}
                with flexible schedules.
              </p>

              <p>
                If you want{" "}
                <Highlight>
                  Best Online SAP Training Institute in Bangalore
                </Highlight>
                , Quickstep is the right choice.
              </p>

              {/* WHY QUICKSTEP */}
              <h3 className="text-lg font-bold mt-6">
                Why Choose Quickstep for SAP Training?
              </h3>

              <p>
                <strong>Best SAP Course in RT Nagar Bangalore</strong>
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>30+ years experience</li>
                <li>Certified trainers</li>
                <li>Real-time projects</li>
                <li>Flexible timings</li>
                <li>100% placement support</li>
              </ul>

              <h4 className="font-semibold">
                Your Search Ends Here If You Are Looking For:
              </h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>Best SAP Course in RT Nagar Bangalore</li>
                <li>Best SAP Training in RT Nagar Bangalore</li>
                <li>Best SAP SuccessFactors Training in Bangalore</li>
                <li>Best SAP Course in Bangalore</li>
                <li>Best SAP Training Institute in Bangalore</li>
              </ul>

              <p>
                Quickstep ensures job-ready SAP SuccessFactors training.
              </p>

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