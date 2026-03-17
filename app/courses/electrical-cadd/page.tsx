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

export default function ElectricalCADD() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Best Electrical CADD Training in RT Nagar Bangalore";

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">

      {/* SEO */}
      <Head>
        <title>{courseTitle} | Quickstep</title>
        <meta
          name="description"
          content="Join the Best Electrical CADD Training in RT Nagar Bangalore. Learn AutoCAD Electrical, PLC diagrams, panel design, and electrical drafting with placement support."
        />
      </Head>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2">

          {/* IMAGE FIXED */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ELectrical 1.jpg"
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
          <div className="bg-white p-8 rounded-xl shadow-md mt-6 space-y-4 text-gray-700">

            <h3 className="text-2xl font-bold">
              <Highlight>{courseTitle}</Highlight>
            </h3>

            <h3 className="text-xl font-semibold">
              Course Description – Electrical CADD
            </h3>

            <p>
              Quickstep provides the{" "}
              <Highlight>Best Electrical CADD Training in RT Nagar Bangalore</Highlight>,
              designed for engineers and professionals.
            </p>

            <p>
              <Highlight>AutoCAD Electrical</Highlight> improves productivity by
              automating panel layouts, wiring diagrams, and PLC modules.
            </p>

            <p>
              As one of the{" "}
              <Highlight>Best Electrical CAD Training Institutes in RT Nagar Bangalore</Highlight>,
              Quickstep ensures practical industry exposure.
            </p>

            {/* LEARNING */}
            <h4 className="text-lg font-semibold">
              What You Will Learn
            </h4>

            <ul className="list-disc ml-6 space-y-2 cursor-default">
              <li>Electrical drafting basics</li>
              <li>Control panel design</li>
              <li>Wiring diagrams</li>
              <li>PLC module creation</li>
              <li>AutoCAD Electrical tools</li>
              <li>Component tagging</li>
              <li>BOQ & documentation</li>
              <li>Real-time projects</li>
            </ul>

            {/* SOFTWARE */}
            <h4 className="text-lg font-semibold">
              Software Covered
            </h4>

            <ul className="list-disc ml-6 space-y-2">
              <li>AutoCAD Electrical</li>
              <li>PC Schematic</li>
            </ul>

            {/* WHY */}
            <h4 className="text-lg font-semibold">
              Why Choose Quickstep?
            </h4>

            <ul className="list-disc ml-6 space-y-2">
              <li>Expert trainers</li>
              <li>Hands-on projects</li>
              <li>Flexible batches</li>
              <li>Placement assistance</li>
            </ul>

            {/* KEYWORDS */}
            <p>
              If you are searching for{" "}
              <Highlight>Best Electrical CADD Course in RT Nagar Bangalore</Highlight>,
              Quickstep is the best choice.
            </p>

            <p>
              We also offer{" "}
              <Highlight>Best Online Electrical CADD Training in Bangalore</Highlight>.
            </p>

            {/* WHY QUICKSTEP */}
            <div className="mt-6">
              <h3 className="text-xl font-bold">
                Why Choose Quickstep for Training?
              </h3>

              <p>
                Quickstep has <Highlight>30+ years of experience</Highlight> in
                training engineers.
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Experienced faculty</li>
                <li>Real-time projects</li>
                <li>Flexible learning</li>
                <li>Placement support</li>
              </ul>

              <h4 className="font-semibold mt-4">
                Students Searching For
              </h4>

              <ul className="list-disc ml-6 space-y-2">
                <li><Highlight>Best Electrical CADD Training in RT Nagar Bangalore</Highlight></li>
                <li><Highlight>AutoCAD Electrical Course in Bangalore</Highlight></li>
                <li><Highlight>Electrical CAD Institute in Bangalore</Highlight></li>
                <li><Highlight>Online Electrical CAD Course</Highlight></li>
              </ul>

            </div>

          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 h-fit sticky top-24 self-start">

          <h4 className="text-xl font-semibold mb-6">
            Course Syllabus
          </h4>

          <ul className="space-y-4">

            <li className="border-b border-white/20 pb-2">
              AutoCAD Electrical – 2D / 3D / Isometric
            </li>

            <li className="border-b border-white/20 pb-2">
              PC Schematic
            </li>

          </ul>

          <button
            onClick={() => setShowForm(true)}
            className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-semibold"
          >
            Download Syllabus
          </button>

         

        </div>

      </div>

      {/* BACK */}
      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white"
        >
          ← Back to Courses
        </Link>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdf={"/syllabus/electrical.pdf"}
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}