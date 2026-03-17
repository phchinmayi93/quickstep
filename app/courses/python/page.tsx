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

const courseTitle = "Best Python Training in RT Nagar Bangalore";

const courseImage = "/Python 1.jpg";

const syllabusPdf = "/syllabus/PYTHON O.pdf";

const syllabus = [
"Python Overview",
"The Python Environment",
"Getting Started",
"String Handling",
"Operators",
"Flow Control",
"Sequences",
"Dictionaries & Sets",
"Functions",
"Modules",
"Errors & Exception Handling",
"File Handling",
"OOP Concepts",
"Regular Expressions",
"Multithreading",
"Database Access",
"Advanced Python Concepts",
"Advanced Modules"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Best Python Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Python Programming with Real Projects & Practical Training
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
{/* 
<Breadcrumb title={courseTitle} /> */}


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">

{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full h-[420px] object-cover"
/>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-2xl font-bold text-gray-900">
<span className={highlight}>Best Python Training in RT Nagar Bangalore</span>
</h2>

<h3 className="text-xl font-semibold text-gray-900">
Course Description – Python Programming
</h3>

<p>
Quickstep offers the
<span className={highlight}> Best Python Training in RT Nagar Bangalore </span>
for beginners, students, IT professionals, and job seekers who want to master programming skills.
</p>

<p>
Python is a powerful, high-level, general-purpose programming language known for its simplicity,
readability, and extensive support libraries. It is widely used in
software development, data science, machine learning, AI, automation,
and web development.
</p>

<p>
<span className={highlight}>Best Python Course in RT Nagar Bangalore</span>
</p>

<p>
Our Python course covers everything from basic programming to advanced concepts including
OOPs, modules, exception handling, file handling, database operations,
multithreading, and real-world project implementation.
</p>

<p>
As a leading
<span className={highlight}> Python Training Institute in RT Nagar Bangalore </span>
Quickstep ensures hands-on programming practice, coding exercises,
assignments, and real-time applications.
</p>

<p>
<span className={highlight}>Best Python Training in Bangalore</span>
</p>


<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn in Python Training
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>Python Overview & Installation</li>
<li>Understanding Python Environment & IDEs</li>
<li>Variables, Data Types, Strings & Operators</li>
<li>Flow Control Statements (Loops & Conditions)</li>
<li>Lists, Tuples, Dictionaries & Sets</li>
<li>Functions & Modules</li>
<li>Exception & Error Handling</li>
<li>File Handling Concepts</li>
<li>Object-Oriented Programming (OOPs)</li>
<li>Regular Expressions</li>
<li>Multithreading & Concurrency</li>
<li>Database Connectivity in Python</li>
<li>Advanced Python Concepts & Modules</li>
<li>Hands-on Projects & Real-time Assignments</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Python Training?
</h3>

<p>
<span className={highlight}>
Quickstep provide Best Python Training in RT Nagar Bangalore
</span>
</p>

<ul className="list-disc pl-6 space-y-2">

<li>Training by experienced Python developers & industry experts</li>
<li>Complete practical training with live coding sessions</li>
<li>Real-time projects for web, automation & data applications</li>
<li>100% placement assistance with resume & interview support</li>
<li>Flexible batch timings for students and professionals</li>

</ul>

<p>
If you want the
<span className={highlight}> Best Python Course in RT Nagar Bangalore </span>
that builds strong programming fundamentals with real-world skills,
Quickstep is the right place to start.
</p>


<h3 className="text-xl font-semibold text-gray-900">
Online Python Training
</h3>

<p>
Quickstep also offers the
<span className={highlight}> Best Online Python Training in Bangalore </span>
with live interactive classes from anywhere.
</p>

<p>
Our
<span className={highlight}> Best Online Python Course in Bangalore </span>
covers fundamental to advanced programming.
</p>

<p>
For learners searching for the
<span className={highlight}> Best Online Python Training Institute in Bangalore </span>
Quickstep provides structured modules and expert mentoring.
</p>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Training?
</h3>

<p>
<span className={highlight}>Best Python Course in RT Nagar Bangalore</span>
</p>

<p>
Quickstep has been a trusted training center for over
<span className={highlight}> 30+ years </span>
offering industry-focused professional training.
</p>

<ul className="list-disc pl-6 space-y-2">

<li>30+ years of trusted training excellence</li>
<li>Expert Python professionals as trainers</li>
<li>Hands-on lab sessions & coding challenges</li>
<li>Flexible weekday / weekend batches</li>
<li>Advanced learning environment</li>
<li>100% placement assistance</li>

</ul>


<h4 className="text-lg font-semibold text-gray-900">
Your Search Ends Here If You Are Looking For:
</h4>

<ul className="list-disc pl-6 space-y-2">

<li><span className={highlight}>Best Python Course in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best Python Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best Python Institute in Bangalore</span></li>
<li><span className={highlight}>Best IT Training Institute in Bangalore</span></li>

</ul>

<p>
Quickstep prepares you to become job-ready with strong Python programming
skills needed for roles like Python Developer,
Automation Engineer, Data Analyst, or Backend Developer.
</p>

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
Course Syllabus
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
<Clock size={16}/> Duration: 4 Months
</li>

<li className="flex items-center gap-2">
<Award size={16}/> Certification: Quickstep Certified Python Developer
</li>

<li className="flex items-center gap-2">
<GraduationCap size={16}/> Prerequisites: Basic Computer Knowledge
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