"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function AnsysCourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best ANSYS Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Finite Element Analysis (FEA), Simulation & Engineering Analysis";

const courseImage = "/ansy1.jpg";

const syllabusPdf = "/syllabus/ANSYS (1).pdf";

const syllabus = [
"Introduction to Engineering Design",
"Different types of Numerical Methods & applications",
"Practical Applications of FEA",
"Basics of Finite Element Method (FEM)",
"Analytical Method to solve Mechanics Problems",
"Theoretical FEM Procedure",
"Theories of Failure",
"Basic Linear & Torsional Equation",
"Getting Started with ANSYS",
"CAD Modeling Using ANSYS",
"Introduction to Meshing",
"Types of elements & FEA design intent",
"Meshing Techniques",
"Assigning material properties",
"Working with boundary conditions",
"Performing different analysis & viewing results",
"1D element example problems",
"2D Plane Stress / Strain example",
"3D Analysis",
"Thermal Analysis",
"Coupled Field Analysis"
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
alt="Best ANSYS Training in RT Nagar Bangalore"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
20 SEATS
</div>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
Course Description – ANSYS
</h2>

<p>
Quickstep offers the <span className={highlight}>Best ANSYS Training in RT Nagar Bangalore</span>
for students and engineers who want to specialize in
<span className={highlight}> Finite Element Analysis (FEA) and engineering simulation</span>.
</p>

<p>
ANSYS training provides the knowledge and skills required to design,
analyze and simulate complex engineering products before actual manufacturing.
</p>

<p>
Engineers use <span className={highlight}>ANSYS simulation software</span> to test
product strength, thermal performance, stress distribution,
and structural stability.
</p>

<p>
The training introduces modern simulation tools including
pre-processing techniques, multiphysics simulations,
and high-performance computing used in real engineering industries.
</p>

<p>
Students will learn to perform simulations in areas such as
<span className={highlight}>structural analysis, thermal analysis and multiphysics analysis</span>.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Working of Finite Element Modeling (FEA)</li>
<li>Solid modeling techniques for analysis</li>
<li>Creating mathematical models and work planes</li>
<li>Importing CAD models and IGES files</li>
<li>Meshing models and defining mesh density</li>
<li>Applying loads and boundary conditions</li>
<li>Static and advanced structural analysis</li>
<li>Thermal analysis concepts</li>
<li>Different types of thermal simulations</li>
<li>Post processing and result evaluation</li>
<li>ANSYS report generation</li>
<li>Capturing tables, images and animations for reports</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Career Opportunities
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Simulation Engineer</li>
<li>FEA Analyst</li>
<li>CAE Engineer</li>
<li>Mechanical Design Engineer</li>
<li>Structural Analysis Engineer</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Simulation Projects</li>
<li>Latest ANSYS software training</li>
<li>Flexible batch timings</li>
<li>Placement support</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best ANSYS Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>ANSYS Course in Bangalore</span></li>
<li><span className={highlight}>FEA Training Institute in Bangalore</span></li>
<li><span className={highlight}>CAE Training in Bangalore</span></li>
<li><span className={highlight}>ANSYS Simulation Training</span></li>

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