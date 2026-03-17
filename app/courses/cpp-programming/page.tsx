"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { FileText } from "lucide-react";

export default function CppCoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "C++ Programming Course";

const syllabusPdf = "/syllabus/C++ Training P.pdf";

const syllabus = [
"Introduction to C++",
"Structure of C++ Program",
"Variables and Data Types",
"Operators",
"Control Statements",
"Functions",
"Classes and Objects",
"Inheritance",
"Polymorphism",
"Encapsulation",
"File Handling",
"Templates",
"Exception Handling",
"STL (Standard Template Library)"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO SECTION */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
C++ Programming Course
</h1>

<p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
C++ is a powerful general-purpose programming language that supports object-oriented programming concepts such as classes, inheritance, polymorphism, and encapsulation. It is widely used for system software, application development, game engines, and high-performance programs.
</p>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
>
Download Syllabus
</button>

</div>
</div>


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-10">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg">

<Image
src="/c++1.png"
alt="C++ Programming"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE OVERVIEW */}

<div className="bg-white p-10 rounded-xl shadow">

<h2 className="text-3xl font-semibold text-[#00006c] mb-4">
Course Overview
</h2>

<p className="text-gray-700 mb-4">
C++ is one of the most widely used programming languages in the software industry. It extends the C language with powerful object-oriented programming features and supports both procedural and object-oriented programming paradigms.
</p>

<p className="text-gray-700 mb-4">
This course provides strong programming fundamentals along with hands-on practice to help students build real-world applications.
</p>

<ul className="list-disc ml-6 text-gray-700 space-y-2">
<li>Strong foundation in programming logic</li>
<li>Object-Oriented Programming concepts</li>
<li>Hands-on coding practice</li>
<li>Real-time programming examples</li>
<li>Placement support</li>
</ul>

<Link
href="/contact"
className="inline-block mt-6 bg-[#00006c] text-white px-6 py-3 rounded-lg hover:bg-blue-900"
>
Enroll Now
</Link>

</div>


{/* COURSE SYLLABUS SECTION */}

<div className="bg-white p-10 rounded-xl shadow">

<h2 className="text-3xl font-bold text-[#00006c] mb-8">
C++ Course Syllabus
</h2>


<div className="grid md:grid-cols-2 gap-8">


{/* Module 1 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 1: Introduction to C++
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>History of C++</li>
<li>Structure of C++ Program</li>
<li>Compiling and Executing</li>
<li>Basic Syntax</li>
</ul>

</div>


{/* Module 2 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 2: Variables & Data Types
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>Variables and Constants</li>
<li>Data Types</li>
<li>Operators</li>
<li>Type Conversion</li>
</ul>

</div>


{/* Module 3 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 3: Control Statements
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>If / Else Statements</li>
<li>Switch Case</li>
<li>Loops (for, while, do-while)</li>
<li>Break and Continue</li>
</ul>

</div>


{/* Module 4 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 4: Functions
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>Function Definition</li>
<li>Function Overloading</li>
<li>Recursion</li>
<li>Inline Functions</li>
</ul>

</div>


{/* Module 5 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 5: Object Oriented Programming
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>Classes and Objects</li>
<li>Constructors and Destructors</li>
<li>Inheritance</li>
<li>Polymorphism</li>
<li>Encapsulation</li>
</ul>

</div>


{/* Module 6 */}

<div className="bg-gray-100 p-6 rounded-lg">

<h3 className="font-semibold text-lg mb-3">
Module 6: Advanced C++
</h3>

<ul className="list-disc ml-5 space-y-2">
<li>File Handling</li>
<li>Templates</li>
<li>Exception Handling</li>
<li>STL (Standard Template Library)</li>
</ul>

</div>

</div>

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

<div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl sticky top-24 h-fit">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold"
>
Download Syllabus
</button>

</div>


<ul className="space-y-4">

{syllabus.map((item,index)=> (

<li key={index} className="flex gap-2 border-b border-white/20 pb-2">

<FileText size={16} />

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


{/* CTA */}

<div className="bg-[#00006c] text-white py-16 text-center">

<h2 className="text-3xl font-bold mb-4">
Start Your Programming Journey
</h2>

<p className="mb-6">
Join the C++ Programming Course at Quickstep Computer Centre and build a strong foundation in software development.
</p>

<Link
href="/contact"
className="bg-white text-[#00006c] px-6 py-3 rounded-lg font-semibold"
>
Contact Us
</Link>

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