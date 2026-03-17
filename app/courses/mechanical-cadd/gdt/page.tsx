"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function GDTCourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best GD&T Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Geometric Dimensioning and Tolerancing for Mechanical Design";

const courseImage = "/GD & T1.jpg";

const syllabusPdf = "/syllabus/GD &T.pdf";

const syllabus = [
"Dimensions and Drawings",
"Tolerance dimensioning",
"Ways of expressing tolerance",
"IT grades",
"Introduction to ASME Y14.5M-1994",
"GD&T Rules",
"Maximum Material Condition of a feature of size",
"Least Material Condition of a feature of size",
"Concept of virtual condition",
"Concept of bonus tolerance",
"Planar datums",
"Modifiers and Symbols",
"Tolerance types",
"Positioning Assembly Components"
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
alt="Best GD&T Training in RT Nagar Bangalore"
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
Course Description – GD&T
</h2>

<p>
Quickstep offers the <span className={highlight}>Best GD&T Training in RT Nagar Bangalore</span>
for students and engineers who want to develop strong skills in
<span className={highlight}> Geometric Dimensioning and Tolerancing</span>.
</p>

<p>
GD&T is a system used in mechanical engineering drawings to define
and communicate design intent and manufacturing tolerances using
standard symbols and feature control frames.
</p>

<p>
<span className={highlight}>Geometric Dimensioning and Tolerancing</span>
helps engineers define allowable variations in form, orientation,
location, and size of features on mechanical components.
</p>

<p>
This system ensures accurate manufacturing and assembly by clearly
communicating design requirements to engineers, machinists,
and manufacturing systems.
</p>

<p>
The GD&T course helps students understand engineering drawings,
datums, tolerance zones and the application of geometric tolerances
in modern manufacturing industries.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Engineering drawings and dimensioning principles</li>
<li>Tolerance dimensioning methods</li>
<li>Different ways of expressing tolerances</li>
<li>Understanding IT grades</li>
<li>Introduction to ASME Y14.5 standard</li>
<li>GD&T rules and interpretation</li>
<li>Maximum Material Condition (MMC)</li>
<li>Least Material Condition (LMC)</li>
<li>Virtual condition and bonus tolerance</li>
<li>Datum systems and planar datums</li>
<li>GD&T modifiers and symbols</li>
<li>Types of geometric tolerances</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Career Opportunities
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Mechanical Design Engineer</li>
<li>Quality Control Engineer</li>
<li>Manufacturing Engineer</li>
<li>CAD Design Engineer</li>
<li>Production Engineer</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years of Training Excellence</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Practical Training</li>
<li>Real-time industry examples</li>
<li>Flexible batch timings</li>
<li>Placement support</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best GD&T Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Geometric Dimensioning and Tolerancing Course in Bangalore</span></li>
<li><span className={highlight}>GD&T Training Institute in Bangalore</span></li>
<li><span className={highlight}>Mechanical GD&T Course</span></li>
<li><span className={highlight}>Best GD&T Institute in Bangalore</span></li>

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