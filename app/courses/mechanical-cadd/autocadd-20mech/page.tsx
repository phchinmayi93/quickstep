"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function MechanicalAutocadCourse() {

const [showForm, setShowForm] = useState(false);

const syllabusPdf = "/syllabus/Auto CAD Mechanical.pdf";

return (

<div className="bg-gray-100 py-12 px-6">

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

{/* LEFT SECTION */}

<div className="lg:col-span-2">

{/* IMAGE */}

<div className="relative rounded-xl overflow-hidden shadow-lg">

<Image
src="/autocad-1.jpg"
alt="Mechanical AutoCAD Training"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
20 <span className="text-sm">SEATS</span>
</div>

</div>


{/* CONTENT */}

<div className="bg-white p-8 rounded-xl shadow-md mt-6">

<h1 className="text-2xl font-bold mb-4">

<span className={highlight}>
Mechanical AutoCAD Training
</span>{" "}
2D, 3D & Isometric

</h1>


<h2 className="text-xl font-semibold mb-4">
Course Description
</h2>

<p className="text-gray-700 mb-4">

AutoCAD training course imparts drawing skills to professionals of all levels
ranging from beginner to expert. The preparation initiates with the fundamental
orders important for proficient 2D drawing, plan, and drafting utilizing
AutoCAD programming from Autodesk.

</p>

<p className="text-gray-700">

The expectation to absorb information grows by investigating the apparatuses
and strategies for drawing, dimensioning, and printing. The members figure out
how to reuse and adjust the current drawings and create professional mechanical
design documentation.

</p>

</div>

</div>


{/* SIDEBAR */}

<div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 h-fit">

{/* HEADER */}

<div className="flex justify-between items-center mb-6">

<h4 className="text-lg font-semibold">
Course Syllabus
</h4>

<button
onClick={() => setShowForm(true)}
className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500"
>
Download  Syllabus
</button>

</div>


{/* SYLLABUS */}

<ul className="space-y-3 text-sm">

<li className="border-b border-white/20 pb-2">Introduction to CAD Industry</li>

<li className="border-b border-white/20 pb-2">Drawing Settings</li>

<li className="border-b border-white/20 pb-2">Orthographic Drawings</li>

<li className="border-b border-white/20 pb-2">Isometric Drawings</li>

<li className="border-b border-white/20 pb-2">Perspective Drawings</li>

<li className="border-b border-white/20 pb-2">Editing the drawings</li>

<li className="border-b border-white/20 pb-2">Annotations and Dimensions</li>

<li className="border-b border-white/20 pb-2">Layer management</li>

<li className="border-b border-white/20 pb-2">
Project Planning and Management: An Overview
</li>

<li className="border-b border-white/20 pb-2">Selection Methods</li>

<li className="border-b border-white/20 pb-2">
Creating and Updating Repeated Elements
</li>

<li className="border-b border-white/20 pb-2">Parametric Drawings</li>

<li className="border-b border-white/20 pb-2">
Preparing Joinery Details / BOM
</li>

<li className="border-b border-white/20 pb-2">Presenting the Project</li>

<li className="border-b border-white/20 pb-2">Working with a team</li>

<li className="border-b border-white/20 pb-2">Layout Management</li>

<li className="border-b border-white/20 pb-2">
Scale setting and Plotting
</li>

<li>Import and Export</li>

</ul>


{/* CONTACT */}

<div className="mt-6">

<Link href="/contact">

<button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
Contact Us
</button>

</Link>

</div>

</div>

</div>


{/* LEAD FORM */}

{showForm && (

<LeadForm
course="Mechanical AutoCAD"
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}