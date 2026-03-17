"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function MechanicalCADD() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best Mechanical CADD Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Mechanical Design, CAD Modeling, Simulation & Product Development";

const courseImage = "/mechanicalcadd1.png";

const syllabusPdf = "/syllabus/mechanical-cadd.pdf";

const syllabus = [
{title:"AutoCAD Isometric – 2D – 3D", link:"/courses/mechanical-cadd/autocadd-20mech"},
{title:"Creo / Pro-ENGINEER", link:"/courses/mechanical-cadd/proe"},
{title:"SolidWorks", link:"/courses/mechanical-cadd/solidworks"},
{title:"ANSYS", link:"/courses/mechanical-cadd/ansys"},
{title:"Unigraphics NX", link:"/courses/mechanical-cadd/unigraphics"},
{title:"GD&T", link:"/courses/mechanical-cadd/gdt"},
{title:"CATIA V5", link:"/courses/mechanical-cadd/catia"},
{title:"HyperMesh", link:"/courses/mechanical-cadd/hypermesh"}
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
alt="Best Mechanical CADD Training in RT Nagar Bangalore"
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
Course Description – Mechanical CADD
</h2>

<p>
Quickstep offers the <span className={highlight}>Best Mechanical CADD Training in RT Nagar Bangalore</span>
for students, engineers, and professionals looking to build a strong career in product design,
mechanical drafting, modeling, and analysis.
</p>

<p>
Mechanical engineers use CADD tools to design, simulate, visualize, and develop machines,
engines, components, and mechanical systems.
</p>

<p>
Mechanical CADD skills are highly in demand in industries like automotive,
aerospace, heavy machinery, manufacturing, transportation,
product development, and engineering services companies.
</p>

<p>
Quickstep is recognized as one of the
<span className={highlight}> Best Mechanical Design Training Institutes in RT Nagar Bangalore</span>
offering real-time practical training using top industry CAD tools.
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn in Mechanical CADD Training
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Fundamentals of mechanical design and drafting</li>
<li>2D drafting & isometric drawing with AutoCAD</li>
<li>3D part modeling, assembly & simulation</li>
<li>Product design concepts and engineering drawing</li>
<li>Finite Element Analysis (FEA) and stress analysis</li>
<li>Surface modeling, sheet metal design, and detailing</li>
<li>Hands-on practice with leading CAD tools</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Software Covered in Mechanical CADD
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>AutoCAD (2D, 3D & Isometric)</li>
<li>SolidWorks</li>
<li>CATIA V5</li>
<li>Creo / Pro-E</li>
<li>ANSYS</li>
<li>HyperMesh</li>
<li>Unigraphics NX</li>
<li>GD&T</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Mechanical CADD Training?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Training by experienced mechanical design engineers</li>
<li>Real-time projects & industry-level assignments</li>
<li>Hands-on training using the latest CAD tools</li>
<li>Portfolio-building support with real models</li>
<li>Flexible timings for students & professionals</li>
<li>100% placement assistance</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Online Mechanical CADD Training
</h3>

<p>
Quickstep also offers the
<span className={highlight}> Best Online Mechanical CADD Training in Bangalore</span>
with live interactive sessions and project-based learning.
</p>

<p>
Our <span className={highlight}>Online Mechanical CAD Course in Bangalore</span>
provides complete training in modeling, drafting, and simulation tools.
</p>


<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best Mechanical CADD Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best CAD CAM Course in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best Mechanical Design Training in Bangalore</span></li>
<li><span className={highlight}>Best CAD Institute in Bangalore</span></li>
<li><span className={highlight}>Best Online Mechanical CAD Training</span></li>

</ul>

</div>

</div>


{/* RIGHT SIDEBAR */}

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>


</div>

<ul className="space-y-4">

{syllabus.map((item, index) => (

<li
key={index}
className="border-b border-white/20 pb-2 hover:text-[#ffb000]"
>

<Link href={item.link} className="text-white hover:text-[#ffb000] transition">
{item.title}

</Link>

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