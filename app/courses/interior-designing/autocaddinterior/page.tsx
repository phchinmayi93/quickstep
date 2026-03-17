"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function AutoCADCourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DATA
============================= */

const courseTitle =
"Best AutoCAD Civil Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn AutoCAD 2D, 3D & Isometric Drawing with Real Projects";

const courseImage =
"/Auto CAD.png";

const syllabusPdf =
"/syllabus/Autocad civil.pdf";

const syllabus = [
"Introduction to CAD Industry",
"Drawing Settings",
"Orthographic Drawings",
"Isometric Drawings",
"Perspective Drawings",
"Editing Drawings",
"Annotations & Dimensions",
"Layer Management",
"Project Planning",
"Selection Methods",
"Parametric Drawings",
"Joinery Details / BOM",
"Layout Management",
"Scale Setting & Plotting",
"Import & Export"
];

/* ============================= */

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
{courseTitle}
</h1>

<p className="text-lg text-gray-200 mb-6">
{courseSubtitle}
</p>

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


{/* LEFT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border relative">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
20 SEATS
</div>

</div>


{/* CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">


<h2 className="text-xl font-bold text-gray-900">
Civil AutoCAD 2D, 3D, Isometric
</h2>

<h3 className="text-lg font-semibold text-gray-900">
Course Description
</h3>

<p>
AutoCAD training course provides drawing skills from beginner to advanced levels.
Learn{" "}
<span className={highlight}>
2D drafting, 3D modeling, and isometric design
</span>{" "}
using AutoCAD software.
</p>

<p>
The course covers essential tools for{" "}
<span className={highlight}>
drawing, dimensioning, and printing
</span>{" "}
with real-time project experience.
</p>

<p>
Students will also learn how to{" "}
<span className={highlight}>
reuse, modify, and optimize designs
</span>{" "}
efficiently.
</p>


{/* LEARNING */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>AutoCAD interface & tools</li>
<li>2D drafting techniques</li>
<li>3D modeling concepts</li>
<li>Isometric drawing</li>
<li>Dimensioning & annotation</li>
<li>Layer management</li>
<li>Plotting & printing</li>

</ul>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Real-Time Project Training</li>
<li>Hands-on Practice</li>
<li>Flexible Batch Timings</li>
<li>100% Placement Support</li>

</ul>


{/* KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best AutoCAD Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>AutoCAD Civil Course in Bangalore</span></li>
<li><span className={highlight}>2D 3D AutoCAD Training</span></li>
<li><span className={highlight}>AutoCAD Institute in Bangalore</span></li>

</ul>


<p>
Join{" "}
<span className={highlight}>
Best AutoCAD Civil Training in Bangalore
</span>{" "}
and build your career in design and drafting.
</p>

</div>


{/* BACK */}

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

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl h-fit sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-5 py-2 rounded-lg font-semibold"
>
Download Syllabus
</button>

</div>


<ul className="space-y-4">

{syllabus.map((item, index) => (

<li key={index} className="border-b border-white/20 pb-2">
{item}
</li>

))}

</ul>


<Link
href="/contact"
className="block text-center mt-8 bg-[#ffb000] text-black font-semibold py-3 rounded-md"
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
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}