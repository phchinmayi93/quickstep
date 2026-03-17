"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LeadForm from "@/components/LeadForm";

// SEO Highlight Style (SOFT, not aggressive)
const highlight = "bg-blue-600 px-1 rounded, text-white";

export default function TallyPrimeCourse() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle =
    "Best Tally Prime Training in RT Nagar Bangalore";

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Best Tally Prime Training in RT Nagar Bangalore with GST, accounting, inventory and real-time projects. 100% placement support."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className={highlight}>{courseTitle}</span>
        </h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
        >
          Download Syllabus
        </button>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/TallyPrime.jpg"
                alt="Tally Prime Training"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="bg-white p-10 rounded-xl shadow space-y-5 text-gray-700 leading-relaxed">

              <h3 className="text-xl font-bold">
                Welcome to Quickstep Tally Prime Training in Bengaluru
              </h3>

              <h3 className="text-lg font-semibold">
                Best Business Accounting and GST Tally Prime Training in RT Nagar | Bangalore
              </h3>

              <p>
                <strong className={highlight}>
                  Business Accounting and Tally Prime Training
                </strong>
              </p>

              <p>
                In today's dynamic business environment,{" "}
                <strong className={highlight}>Tally Prime</strong> is essential for{" "}
                <strong className={highlight}>
                  Accounting, Inventory Management, and GST Compliance
                </strong>.
              </p>

              <p>
                Quickstep offers the{" "}
                <strong className={highlight}>
                  Best Tally Prime Training in Bengaluru
                </strong>{" "}
                with hands-on practical skills.
              </p>

              {/* WHY TALLY */}
              <h4 className="font-semibold mt-6">
                Why Choose Tally Prime as a Career Tool?
              </h4>

              <p>
                Mastery of <strong className={highlight}>Tally Prime</strong>{" "}
                opens opportunities in{" "}
                <strong className={highlight}>Finance and Accounting</strong>.
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Accounts Executive</strong></li>
                <li><strong>Junior Accountant</strong></li>
                <li><strong>Inventory Controller</strong></li>
                <li><strong>GST Assistant</strong></li>
                <li><strong>Billing Specialist</strong></li>
                <li><strong>Finance Assistant</strong></li>
              </ul>

              {/* COURSE HIGHLIGHTS */}
              <h4 className="font-semibold mt-6">
                Tally Prime Training Highlights
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Practical training with live projects</strong></li>
                <li><strong>GST filing practice</strong></li>
                <li><strong>Real-world case studies</strong></li>
                <li><strong>Industry syllabus</strong></li>
                <li><strong>Interview preparation</strong></li>
              </ul>

              {/* MODULES */}
              <h4 className="font-semibold mt-6">
                Key Modules Covered
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>Company Creation & Security</li>
                <li>Ledger & Inventory Setup</li>
                <li>Voucher Entry</li>
                <li>GST Setup & Filing</li>
                <li>Financial Reports</li>
                <li>Payroll & Banking</li>
              </ul>

              {/* WHO CAN JOIN */}
              <h4 className="font-semibold mt-6">
                Who Can Join?
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>Commerce Students</li>
                <li>BBA/MBA Finance</li>
                <li>Business Owners</li>
                <li>Job seekers</li>
              </ul>

              {/* CAREER */}
              <h4 className="font-semibold mt-6">
                Career Opportunities
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>Tally Operator</li>
                <li>Accountant</li>
                <li>GST Executive</li>
                <li>Finance Assistant</li>
              </ul>

              {/* WHY QUICKSTEP */}
              <h4 className="font-semibold mt-6">
                Why Quickstep?
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li>30+ Years Experience</li>
                <li>Expert Trainers</li>
                <li>Flexible batches</li>
                <li>Placement Support</li>
              </ul>

              <p>
                Join the{" "}
                <strong className={highlight}>
                  Best Tally Prime Training in RT Nagar Bangalore
                </strong>{" "}
                and build your career.
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
          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg sticky top-24 h-fit">

            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold text-[#ffb000]">
                Course Syllabus
              </h4>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ffb000] text-black px-3 py-1 rounded"
              >
                Download Syllabus
              </button>
            </div>

            <ul className="space-y-3">
              <li>Introduction to Tally Prime</li>
              <li>Company Creation</li>
              <li>Ledger & Inventory</li>
              <li>Voucher Entry</li>
              <li>GST Setup</li>
              <li>Reports</li>
              <li>Payroll</li>
            </ul>

            <Link
              href="/contact"
              className="block text-center mt-6 bg-[#ffb000] text-black py-2 rounded font-semibold"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdf={"/syllabus/TallyNew.pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}