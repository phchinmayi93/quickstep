"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function SolidworksCourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best SolidWorks Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn SolidWorks 3D Modeling, Assembly Design & Simulation";

const courseImage = "/solidworks 1.jpg";

const syllabusPdf = "/syllabus/SolidWorks (1).pdf";

const syllabus = [
"Sketcher basics",
"3D sketching",
"Part modeling",
"Creating reference geometries",
"Editing features",
"Advanced modeling tools",
"Configuration",
"Design table/library features",
"Import/Export of files",
"Surface overview",
"Bottom-up assembly",
"Top-Down assembly",
"Exploding assemblies",
"Simulation / Detailing",
"BOM, Balloon tools",
"Sheet metal",
"PDM Works",
"Weidman"
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
alt="Best SolidWorks Training in RT Nagar Bangalore"
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
Course Description – SolidWorks
</h2>

<p>
Quickstep offers the <span className={highlight}>Best SolidWorks Training in RT Nagar Bangalore</span>
for students, engineers, and professionals who want to build a career in
<span className={highlight}> mechanical design and 3D product modeling</span>.
</p>

<p>
SolidWorks is a powerful <span className={highlight}>3D mechanical design software</span>
that runs on the Windows operating system and is developed by
Dassault Systèmes SolidWorks Corp. This software is widely used in the
industry for product design, modeling, simulation, and manufacturing.
</p>

<p>
The software provides powerful tools for
<span className={highlight}>design validation, simulation, routing, and product development</span>
that help engineers design accurate mechanical systems.
</p>

<p>
The SolidWorks training program teaches the core concepts required
to convert ideas into detailed engineering designs.
</p>

<p>
Students will also learn how to test product performance using
simulation tools available inside SolidWorks.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>SolidWorks interface and core concepts</li>
<li>Sketch creation and parametric modeling</li>
<li>Defining dimensions, patterns, and constraints</li>
<li>Creating planes, extruded cuts and revolved cuts</li>
<li>Using advanced modeling tools</li>
<li>Editing, suppressing and managing features</li>
<li>Creating and editing 3D sketches</li>
<li>Assembly design and sub-assemblies</li>
<li>Working with drawing views</li>
<li>Sheet metal design and detailing</li>
<li>Surface modeling</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Career Opportunities
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Mechanical Design Engineer</li>
<li>CAD Engineer</li>
<li>Product Design Engineer</li>
<li>Automotive Design Engineer</li>
<li>Industrial Design Engineer</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Real Projects</li>
<li>Flexible Batch Timings</li>
<li>Placement Support</li>

</ul>

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