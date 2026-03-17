"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";

import {
FileText,
Clock,
Award,
GraduationCap
} from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

/* ===============================
COURSE VARIABLES
=============================== */

const courseTitle =
"Full Stack MERN Development Training in Bangalore";

const courseSubtitle =
"Master MongoDB, Express, React, Node.js, Next.js & DevOps";

const courseImage = "/MERN.jpg";

const syllabusPdf = "/syllabus/MERNStack.pdf";

const syllabus = [
"MERN Stack Architecture",
"React.js (Frontend)",
"Node.js & Express.js (Backend)",
"MongoDB (Database)",
"Advanced JavaScript (ES6+)",
"Next.js & Serverless APIs",
"JWT Authentication & Security",
"Git, Docker & Deployment (DevOps)",
"3+ Live MERN Projects"
];

/* =============================== */

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


{/* BREADCRUMB */}

{/* <Breadcrumb title={courseTitle} /> */}


{/* MAIN SECTION */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">

{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">

{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full h-[420px] object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-2xl font-bold text-gray-900">
Welcome to Quickstep Full Stack MERN Development Training in Bengaluru
</h2>

<h3 className="text-xl font-semibold text-gray-900">
Mastering MongoDB, Express, React, and Node.js for Modern Web Applications
</h3>

<p>
<span className={highlight}>
Full Stack Developer Training in RT Nagar Bangalore
</span>
</p>

<p>
The MERN Stack (MongoDB, Express.js, React, Node.js) remains the
undisputed champion for building dynamic, high-performance web
applications using a unified JavaScript ecosystem.
</p>

<p>
Quickstep Computer Centre offers the
<span className={highlight}>
Best Full Stack MERN Training in Bengaluru
</span>
with a curriculum designed by experienced software engineers.
</p>


<h3 className="text-xl font-semibold text-gray-900">
Why MERN Stack Development is the Right Career Choice
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>AI Integration with modern applications</li>
<li>Cloud Native Development with Docker</li>
<li>Performance optimization using Next.js</li>
<li>Best Full Stack Training in Bengaluru</li>

</ul>


<h4 className="font-semibold text-gray-900">
Career Roles
</h4>

<ul className="list-disc pl-6 space-y-2">

<li>Full Stack MERN Developer</li>
<li>Frontend React Developer</li>
<li>Node.js Backend Engineer</li>
<li>Software Development Engineer</li>
<li>DevOps Analyst</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
MERN Stack Training – Course Highlights
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>Next.js for SEO optimized applications</li>
<li>TypeScript fundamentals</li>
<li>Advanced state management with Redux</li>
<li>DevOps & CI/CD training</li>
<li>Real-world projects like E-commerce platforms</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Training Features
</h3>

<p>✔ 100% Practical Project-Based Training</p>
<p>✔ Industry Expert Mentors</p>
<p>✔ Next.js & TypeScript Advantage</p>
<p>✔ Career Launchpad with Interview Preparation</p>

</div>


{/* BACK BUTTON */}

<div>

<Link
href="/courses"
className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
>
← Back to Courses
</Link>

</div>

</div>


{/* SIDEBAR */}

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-xl sticky top-24">

<h3 className="text-xl font-bold text-[#ffb000] mb-4">
Course Features & Prerequisites
</h3>


<button
onClick={() => setShowForm(true)}
className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 mb-6"
>
Download Syllabus
</button>


<ul className="space-y-4">

{syllabus.map((item, index) => (

<li key={index} className="flex items-center gap-2 border-b border-white/20 pb-2">

<FileText size={16} />

{item}

</li>

))}

</ul>


<h3 className="text-xl font-bold text-[#ffb000] mt-8">
Course Details
</h3>

<ul className="space-y-3 mt-4">

<li className="flex items-center gap-2">
<Clock size={16} /> Duration: 6 Months (300+ Hours)
</li>

<li className="flex items-center gap-2">
<Award size={16} /> Certification: Quickstep Certified MERN Developer
</li>

<li className="flex items-center gap-2">
<GraduationCap size={16} /> Prerequisites: Basic Programming Logic
</li>

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


{/* LEAD FORM POPUP */}

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