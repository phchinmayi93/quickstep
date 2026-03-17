"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function CATIACourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best CATIA Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn CATIA V5 CAD Design, Surface Modeling & Product Development";

const courseImage = "/CATIA.jpg";

const syllabusPdf = "/syllabus/catia1 (1).pdf";

const syllabus = [
"Introduction to CATIA V5",
"Drawing Sketches in the Sketcher Workbench - I",
"Drawing Sketches in the Sketcher Workbench - II",
"Reference Elements and Sketch-Based Features",
"Creating Dress-Up and Hole Features",
"Editing Features",
"Transformation Features and Advanced Modeling Tools - I",
"Advanced Modeling Tools - II",
"Editing and Modifying Surfaces",
"Compress Components with Surfacing",
"Assembly Modeling",
"Working with the Drafting Workbench - I",
"Working with the Drafting Workbench - II",
"Working with Sheet Metal Components"
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
alt="Best CATIA Training in RT Nagar Bangalore"
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
Course Description – CATIA
</h2>

<p>
Quickstep offers the <span className={highlight}>Best CATIA Training in RT Nagar Bangalore</span>
for students and engineers who want to build a career in
<span className={highlight}> mechanical product design and CAD modeling</span>.
</p>

<p>
CATIA is a powerful product design and development software
developed by Dassault Systèmes and widely used in industries
such as automotive, aerospace, manufacturing, and engineering design.
</p>

<p>
<span className={highlight}>CATIA V5 software</span> enables engineers
to create complex 3D models, perform surface modeling,
and develop advanced product designs.
</p>

<p>
The training program helps students understand the complete
<span className={highlight}>product lifecycle management (PLM)</span>
process including conceptual design, modeling, assembly,
and engineering documentation.
</p>

<p>
After completing the CATIA course students will gain practical
skills in product design, modeling, and digital simulation.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Sketcher workbench for creating engineering sketches</li>
<li>Creating 3D models using advanced modeling tools</li>
<li>Editing and managing features in complex models</li>
<li>Surface modeling techniques for complex designs</li>
<li>Assembly modeling and constraints</li>
<li>Digital MockUp (DMU) simulation</li>
<li>Sheet metal design techniques</li>
<li>Engineering drawing and documentation</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Career Opportunities
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Mechanical Design Engineer</li>
<li>Product Design Engineer</li>
<li>CAD Engineer</li>
<li>Automotive Design Engineer</li>
<li>Aerospace Design Engineer</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Practical Projects</li>
<li>Latest CATIA software training</li>
<li>Flexible batch timings</li>
<li>Placement support</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best CATIA Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>CATIA V5 Course in Bangalore</span></li>
<li><span className={highlight}>CATIA Training Institute in Bangalore</span></li>
<li><span className={highlight}>Mechanical CAD Training in Bangalore</span></li>
<li><span className={highlight}>Best CATIA Institute in Bangalore</span></li>

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
Download  Syllabus
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