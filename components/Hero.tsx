"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "WELCOME TO Quickstep Computer Centre +31 Years of Skilling the Industries",
    description:
      "We are the Best Training & Placement Institute in R.T.Nagar Bengaluru. Best Training & Placement.",
    image: "/slide1.jpg",
  },
  {
    title: "ARE YOU READY TO APPLY? There is no better time than NOW!",
    description:
      "We at Quickstep Computer Center have Best Professional Trainers, Best Trending Courses & Authorised Certification.",
    image: "/slide2.jpg",
  },
  {
    title: "Contact us & Book Your Seats on Trending Courses",
    description:
      "We find upcoming best technologies from IT Corporates, Designing, ERP, CAD & SAP. Get the best courses for students.",
    image: "/slide3.jpg",
  },
  {
    title: "Best Mechanical CAD Training Institute",
    description:
      "Best Mechanical CAD, Catia, Pro/E, Solidworks, UG-NX Cad, Hypermesh, Ansys, MEP Training Institute in R.T Nagar Bengaluru.",
    image: "/slide4.jpg",
  },
  {
    title: "Best Civil CAD & Architectural CAD Training Institute",
    description:
      "AutoCAD, Revit, 3ds Max, SketchUp, Etabs, StadPro training with 2D, 3D modeling & structural design.",
    image: "/slide5.jpg",
  },
  {
    title: "Best Electrical CAD Training Institute",
    description:
      "AutoCAD electrical training for circuit diagrams, cable diagrams, isometric diagrams and electronic drawings.",
    image: "/slide6.jpg",
  },
  {
    title: "Best Interior Designing Course",
    description:
      "AutoCAD, 3ds Max, Revit & SketchUp training for interior design professionals.",
    image: "/slide7.jpg",
  },
  {
    title: "Best Web Development & IT Technologies",
    description:
      "Java, Python, .NET, PHP, HTML training programs in R.T Nagar Bengaluru.",
    image: "/slide8.jpg",
  },
  {
    title: "Best Data Science & Data Analytics Training Institute",
    description:
      "AI, ML, NLP training with Python, R Programming & Tableau.",
    image: "/slide9.jpg",
  },
  {
    title: "Best Big Data Hadoop Training Institute",
    description:
      "Professional Big Data Hadoop certification training in Bengaluru.",
    image: "/slide10.jpg",
  },
  {
    title: "Best Software Testing Training Institute in Bengaluru",
    description:
      "Selenium, JMeter, UFT & RPA professional training programs.",
    image: "/slide11.jpg",
  },
  {
    title: "Best Android Development Training Institute",
    description:
      "Professional Android application development training in Bengaluru.",
    image: "/slide12.jpg",
  },
  {
    title: "Best SAP & HANA Training",
    description:
      "SAP FI/CO, SAP ABAP, SAP HR, SAP MM, SAP SD, SAP PP training with certification.",
    image: "/slide13.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center h-full pt-40">
        <div className="text-center text-white px-6 w-full max-w-6xl mx-auto">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-wide">
            {slides[current].title}
          </h1>

          {slides[current].description && (
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-4xl mx-auto">
              {slides[current].description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

  <Link href="/about">
    <button className="bg-[#ffb000] text-[#00006c] px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
      BEST PLACEMENT AND TRAINING
    </button>
  </Link>

  <Link href="/courses">
    <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
      START NOW
    </button>
  </Link>

</div>

        </div>
      </div>

    </section>
  );
}