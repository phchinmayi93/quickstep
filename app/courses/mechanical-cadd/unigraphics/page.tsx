"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function UnigraphicsCourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best Unigraphics NX Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Siemens NX CAD, CAM & Product Lifecycle Management";

const courseImage = "/UG NX1.jpg";

const syllabusPdf = "/syllabus/Unigraphics 1.pdf";

const syllabus = [
"User Interface",
"Sketcher essentials",
"Constraining sketches",
"Managing sketches",
"Datums",
"Creating part features",
"Editing parts",
"Knowledge Fusion",
"Creating fundamental curves",
"Editing Curves",
"Editing Freeform Features",
"Basic Assembly Concepts",
"Creating Assemblies",
"Positioning Assembly Components",
"Assembly Arrangements and Arrays",
"Assembly Revisions and Component Replacements",
"Assembly Sequencing and Motion",
"Assemblies – Clearance and Analysis",
"Deformable Components",
"Part Families",
"Introduction to Drafting",
"Creating dimensions, notes and labels",
"Plotting Drawings",
"GD&T Symbols"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO SECTION */}

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


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">

{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">

{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border relative">

<Image
src={courseImage}
alt="Best Unigraphics NX Training in RT Nagar Bangalore"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
170 SEATS
</div>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
Course Description – Unigraphics NX
</h2>

<p>
Quickstep offers the <span className={highlight}>Best Unigraphics NX Training in RT Nagar Bangalore</span>
for students and engineers who want to specialize in
<span className={highlight}> CAD, CAM and Product Lifecycle Management (PLM)</span>.
</p>

<p>
UG NX training teaches the skills required to improve efficiency
throughout the product development lifecycle.
Participants learn how to create conceptual designs,
perform 3D modeling and generate engineering documentation.
</p>

<p>
<span className={highlight}>Siemens NX software</span>,
formerly known as Unigraphics NX, is widely used in industries
for computer-aided design (CAD) and computer-aided manufacturing (CAM).
</p>

<p>
This training program also develops expertise in
manufacturing solutions, quality analysis, machining and tooling
used in modern product development.
</p>

<p>
Upon completion of the course students will gain practical
skills in engineering design and product development.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Navigate the Siemens NX user interface</li>
<li>Work with coordinate systems and move WCS</li>
<li>Create solid models and structural features</li>
<li>Work with shell features and layers</li>
<li>Create edge blends and load options</li>
<li>Work with Assembly Navigator</li>
<li>Apply constraints and datum features</li>
<li>Create and edit sketches and curves</li>
<li>Explore Master Model Assemblies</li>
<li>Create drawings, annotations, dimensions and notes</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Career Opportunities
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>CAD Design Engineer</li>
<li>Product Design Engineer</li>
<li>Mechanical Design Engineer</li>
<li>Manufacturing Engineer</li>
<li>CAD CAM Engineer</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Projects and Assignments</li>
<li>Training using latest Siemens NX software</li>
<li>Flexible batch timings</li>
<li>Placement support</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best Unigraphics NX Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Siemens NX Training Institute in Bangalore</span></li>
<li><span className={highlight}>UG NX Course in Bangalore</span></li>
<li><span className={highlight}>Best CAD CAM Training in Bangalore</span></li>
<li><span className={highlight}>Unigraphics NX Training Institute</span></li>

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


{/* RIGHT SIDEBAR */}

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24">

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

<li
key={index}
className="border-b border-white/20 pb-2"
>
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