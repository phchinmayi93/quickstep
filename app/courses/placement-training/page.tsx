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

export default function PlacementPage() {
  const [showForm, setShowForm] = useState(false);

  const courseTitle = "Placements & Training Support - Quickstep";

  const images = [
    "/logos1.jpg",
    "/logos2.png",
  ];

  const syllabusPdf = "/syllabus/placements.pdf"; // optional

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* SEO */}
      <Head>
        <title>{courseTitle}</title>
        <meta
          name="description"
          content="Quickstep provides training with 100% placement support. Get career guidance, interviews, and industry-level training."
        />
      </Head>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">PLACEMENTS</h1>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
        >
          Enquire Now
        </button>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        {/* IMAGES */}
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg border"
            >
              <Image
                src={img}
                alt="Placement Companies"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="bg-white p-10 rounded-xl shadow-xl border space-y-6 text-gray-700">

          <h2 className="text-2xl font-bold text-center">
            <Highlight>Placement Support & Career Growth</Highlight>
          </h2>

          <h3 className="text-lg font-semibold">Course Description</h3>

          <p>
            Quickstep Computer Centre has earned the trust of students and top
            organizations by providing{" "}
            <Highlight>training with placement support</Highlight>.
          </p>

          <p>
            We strongly believe in teamwork. Our placement division continuously
            monitors industry requirements and updates training programs
            accordingly.
          </p>

          <p>
            Our institute ensures students gain{" "}
            <Highlight>real-time corporate-level skills</Highlight> and career
            readiness.
          </p>

          <p>
            Even during challenging times, we have successfully placed students
            across various levels in the software industry.
          </p>

          <p>
            We schedule interviews with{" "}
            <Highlight>global companies</Highlight> and help students achieve
            their dream careers.
          </p>

          <p>
            Our dedicated placement team provides guidance, motivation, and
            career planning to ensure student success.
          </p>

          <p>
            The placement department works closely with industry partners to
            facilitate{" "}
            <Highlight>internships and job opportunities</Highlight> for all
            learners.
          </p>

        </div>

        {/* BACK BUTTON */}
        <div className="text-center">
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
          Enquire
        </button>
      </div>

      {/* LEAD FORM */}
      {showForm && (
        <LeadForm
          course={courseTitle}
          pdf={syllabusPdf} // optional
          onClose={() => setShowForm(false)}
        />
      )}

    </div>
  );
}