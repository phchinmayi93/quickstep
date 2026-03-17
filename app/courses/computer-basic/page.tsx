"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CourseTemplate() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DETAILS
============================= */

const courseTitle = "Diploma in Computer Application";

const courseSubtitle =
"Learn Computer Fundamentals and MS Office with Practical Training";

const courseImage = "/Ms Office 1.png";

const syllabusPdf = "/syllabus/Diploma In Computer Application.pdf";

const syllabus = [
"Typing",
"Computer Fundamentals",
"MS Word",
"MS Excel",
"MS PowerPoint",
"MS Access",
"Internet Explorer"
];

/* ============================= */

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


{/* MAIN SECTION */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">

{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg border relative">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full object-cover"
/>

{/* SEATS */}

<div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
170 SEATS
</div>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
Course Description
</h2>

<p>
A computer consists of four major parts: the input, output,
CPU (<span className={highlight}>Central Processing Unit</span>),
and memory. Input devices include microphone, keyboard,
mouse, and scanner. Output devices include monitor and speakers.
This course teaches the basics of computers and essential
Microsoft Office tools used in modern workplaces.
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

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl sticky top-24 h-fit">


{/* SYLLABUS HEADER */}

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-4 py-2 rounded-lg font-semibold hover:bg-white"
>
Download Syllabus
</button>

</div>


{/* SYLLABUS LIST */}

<ul className="space-y-4 text-white">

{syllabus.map((item, index) => (

<li
key={index}
className="border-b border-white/20 pb-2 text-white"
>

{item}

</li>

))}

</ul>


{/* CONTACT BUTTON */}

<Link
href="/contact"
className="block text-center mt-6 bg-[#ffb000] text-black font-semibold py-3 rounded-md hover:bg-white transition"
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