"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function ProECourse() {

const [showForm, setShowForm] = useState(false);

/* ================= COURSE INFO ================= */

const courseTitle = "PTC Creo / Pro-E Training in Bangalore";

const courseSubtitle =
"Learn Creo Parametric / Pro Engineer CAD Software with Industry Projects";

const courseImage = "/PROe.jpg";

const syllabusPdf = "/syllabus/ProE (1).pdf";

const syllabus = [
"Pro/ENGINEER concepts",
"Using the Pro/ENGINEER interface",
"Creating sketcher geometry",
"Creating extrudes, revolves, and ribs",
"Selecting and editing",
"Creating datum features",
"Utilizing internal sketches and embedded datums",
"Creating sweeps and blends",
"Creating holes and shells",
"Creating rounds, chamfers and Drafts",
"Variable section sweeps, Helical sweeps and Swept blends",
"Creating patterns",
"Group, copy, and mirror tools",
"Measuring and inspecting models",
"Advanced reference management",
"Relations and parameters",
"Layers, Family tables & UDF",
"Assembling with constraints",
"Exploding assemblies",
"Creating surface features",
"Editing surface features in Pro/ENGINEER",
"Creating drawing views",
"Creating drawing details",
"Using advanced assembly constraints",
"Creating and using component interfaces",
"Creating and using flexible components",
"Using assembly features and shrinkwrap",
"Replacing components in an assembly",
"Understanding simplified reps",
"Creating cross-sections, display styles, and combined views",
"Substituting components by rep, envelope, and model",
"Creating and using assembly structure and skeletons",
"Introduction to sheet metal design",
"Primary walls, Secondary and unattached walls",
"Unbend, bend back and cuts",
"Notches and punches",
"Sheet metal forms",
"Bending & Unbending sheet metal geometry",
"Converting solid parts",
"Sheet metal drawings with flat states and bend order table",
"Real time rendering"
];

/* ================================================= */

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

{/* LEFT SECTION */}

<div className="lg:col-span-2 space-y-8">

{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border relative">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={600}
className="w-full object-cover"
/>

<div className="absolute top-4 right-4 bg-[#ffb000] text-black px-4 py-2 rounded font-bold">
170 SEATS
</div>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
Course Description
</h2>

<p>
<span className={highlight}>PTC Creo / Pro-E Training</span> (formerly known as
Pro/ENGINEER) is an integrated <span className={highlight}>CAD/CAM/CAE parametric modeling software</span>
developed by Parametric Technology Corporation (PTC). This software acts as a
powerful and flexible design platform widely used by
<span className={highlight}>mechanical engineers</span> for developing complete
3D product models.
</p>

<p>
Knowledge of various tools and capabilities in
<span className={highlight}>Creo Parametric software</span> enables users to
create collaborative product designs efficiently and effectively.
</p>

<p>
Creo Elements / Pro-E training equips candidates with the skills related to
rule-based features and integrated design capabilities of this
mechanical design software.
</p>

<p>
Participants will explore:
</p>

<ul className="list-disc pl-6 space-y-2">

<li>Solid Modeling</li>
<li>Assembly Modeling</li>
<li>Sheet Metal Design</li>
<li>Drafting</li>
<li>Finite Element Analysis</li>

</ul>

<p>
Through this training program students gain skills in
<span className={highlight}>design, analysis and manufacturing</span>.
</p>

<h3 className="text-xl font-semibold text-gray-900">
After Completing the Course You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>Understanding Solid Part Modeling and Assembly</li>
<li>Using Sketcher instruments and layers</li>
<li>Creating Swept Blends, openings and chamfers</li>
<li>Measuring and Inspecting Models</li>
<li>Creating and modifying sheet metal models</li>
<li>Practicing surface modeling tools</li>
<li>Creating and editing solids using Quilts</li>
<li>Creating new drawings and drawing views</li>
<li>Adding model details to drawings</li>

</ul>

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep Computer Centre
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Practical Projects</li>
<li>Flexible Batch Timings</li>
<li>Certification after completion</li>
<li>Placement Assistance</li>

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
Download
</button>

</div>

<ul className="space-y-3 text-sm">

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