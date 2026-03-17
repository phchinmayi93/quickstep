"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);
const [selectedPdf, setSelectedPdf] = useState("");

const courseTitle =
"Software Testing & QA Training in Bangalore";

const syllabus = [
"Manual Testing",
"Sellinium Testing with Java",
"Sellinium Testing with Python",
"QTP",
"Load Runner",
"UFT",
"Advance of GTT",
"J-Matters"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Welcome to Quickstep Comprehensive Software Testing & QA Training in Bengaluru
</h1>

<p className="text-lg text-gray-200 mb-6">
Mastering Manual, Automation, and Selenium Testing in RT Nagar | Bangalore
</p>

<button
onClick={() => {
setShowForm(true);
setSelectedPdf("Software Testing.pdf");
}}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
>
Download Course Syllabus
</button>

</div>
</div>


{/* BREADCRUMB */}

{/* <Breadcrumb title={courseTitle} /> */}


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg relative">

<Image
src="/Software Engineer  (1).png"
alt="Software Testing Training"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-2 rounded">
20 <span className="font-semibold">SEATS</span>
</div>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-8 rounded-xl shadow text-gray-700 space-y-6">

<h3 className="text-xl font-bold">
Welcome to Quickstep Comprehensive Software Testing & QA Training in Bengaluru
</h3>

<h3 className="text-xl font-bold">
Mastering Manual, Automation, and Selenium Testing in RT Nagar | Bangalore
</h3>

<p>
<strong>Software Testing and Quality Assurance (QA) Training</strong>
</p>

<p>
In today's technology landscape, Software Testing is crucial for delivering high-quality, bug-free applications across all industries. Mastery of QA principles, combined with proficiency in advanced automation tools like Selenium, is a high-demand skill for anyone seeking a robust career in Information Technology, Software Development, or Quality Engineering.
</p>

<p>
Quickstep Computer Centre offers the{" "}
<span className={highlight}>
Best Software Testing Training in Bengaluru
</span>, designed to equip learners with practical skills, real-world experience, and industry-relevant expertise to ensure software quality throughout the entire development lifecycle.
</p>

<p>
Our{" "}
<span className={highlight}>
Software Testing Course
</span>{" "}
is created by highly experienced Senior QA Engineers and industry experts with real-time exposure to Agile development, continuous integration, and large-scale test automation projects.
</p>


<h4 className="text-lg font-semibold">
Why Choose Software Testing as a Career?
</h4>

<p>
Mastery of software testing methodologies is crucial for professional growth in the IT and Software Development fields.
</p>

<p>Some of the top Software Testing roles include:</p>

<ul className="list-disc pl-6 space-y-2">

<li><strong>QA Analyst / Software Tester</strong></li>
<li><strong>Manual Test Engineer</strong></li>
<li><strong>Test Automation Engineer (Selenium)</strong></li>
<li><strong>Quality Assurance Lead</strong></li>
<li><strong>Software Development Engineer in Test (SDET)</strong></li>
<li><strong>Performance Tester</strong></li>
<li><strong>Defect/Bug Analyst</strong></li>

</ul>

<p>
Proficiency in Software Testing offers strong job stability, excellent compensation, and clear pathways for career growth.
</p>


<h4 className="text-lg font-semibold">
Software Testing Training at Quickstep – Course Highlights
</h4>

<ul className="list-disc pl-6 space-y-2">

<li>Complete practical-based training on industry-standard tools (Jira, Selenium, TestNG).</li>
<li>Live project simulations covering the entire Software Testing Life Cycle (STLC).</li>
<li>Hands-on practice with writing code for test automation frameworks.</li>
<li>Real-world case studies on testing web, mobile, and API applications.</li>
<li>Industry-based curriculum covering Agile, Scrum, and DevOps testing principles.</li>
<li>Interview preparation & career support in the IT sector.</li>

</ul>


<h4 className="text-lg font-semibold">
Training Features
</h4>

<p><strong>✔ 100% Practical & Skill-Based Training</strong></p>
<p>Every session is conducted with hands-on labs and live test execution projects to ensure real-world exposure.</p>

<p><strong>✔ Industry-Expert Trainers</strong></p>
<p>Learn from certified Senior QA Engineers with extensive experience in leading automation projects.</p>

<p><strong>✔ Job-Oriented Curriculum</strong></p>
<p>The entire syllabus is aligned with current QA industry demands.</p>

<hr/>

<p>
<strong>
Quickstep | Best Software Testing & Selenium Training in RT Nagar Bengaluru
</strong>
</p>

</div>


{/* BACK BUTTON */}

<div>

<Link
href="/courses"
className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold"
>
← Back to Courses
</Link>

</div>

</div>


{/* SIDEBAR */}

<div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl sticky top-24">

<h3 className="text-xl font-bold text-[#ffb000] mb-6">
Course Syllabus
</h3>


{/* BUTTONS STACKED */}

<div className="flex flex-col gap-4 mb-8">

<button
onClick={()=>{
setShowForm(true);
setSelectedPdf("/syllabus/Software Testing.pdf");
}}
className="bg-[#ffb000] text-black py-3 rounded-lg font-semibold"
>
Testing Download Syllabus
</button>

<button
onClick={()=>{
setShowForm(true);
setSelectedPdf("/syllabus/Seleinum (1).pdf");
}}
className="bg-[#ffb000] text-black py-3 rounded-lg font-semibold"
>
Seleinum Download Syllabus
</button>

</div>


{/* SYLLABUS */}

<ul className="space-y-4">

{syllabus.map((item, index)=> (

<li
key={index}
className="flex items-center gap-2 border-b border-white/20 pb-2"
>

<FileText size={16}/>

{item}

</li>

))}

</ul>

</div>


</div>
</div>


{/* LEAD FORM */}

{showForm && (

<LeadForm
course={courseTitle}
pdf={selectedPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}