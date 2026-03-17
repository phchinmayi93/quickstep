"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "Java programming";

const syllabusPdf = "/syllabus/Java-Ad Java Syllabi.pdf";

const syllabus = [
"Introduction JAVA",
"Data Types",
"Arrays",
"Strings",
"Classes & Objeccts",
"Interitance",
"Polymorphism",
"Abstraction",
"Encapsulation",
"Access Specifiers",
"Error Handling",
"Type Casting",
"Threads",
"Applets",
"Networking",
"Interface"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Java Programming Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Core Java & Advanced Java with Practical Training
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


{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg">

<Image
src="/Java.png"
alt="Java programming"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-8 rounded-xl shadow">

<p className="text-gray-700 leading-relaxed mb-4">
This Core Java Training / Advance Java is by the Real-Time Professionals and Teaching Experts.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
.Each program execution will be clarified with Compiler and JVM Architectures
</p>

<p className="text-gray-700 leading-relaxed mb-4">
Each program memory chart will be obviously clarified with JVM Architecture
</p>

<p className="text-gray-700 leading-relaxed mb-4">
1000+ Programs will be shrouded in preparing just as by and by material
</p>

<p className="text-gray-700 leading-relaxed mb-4">
Entire SCJP syllabus will be covered rundown of inquiries addresses will be secured on each idea
</p>

<p className="text-gray-700 leading-relaxed mb-4">
.Each idea will be obviously clarified with ongoing venture situations
</p>

<p className="text-gray-700 leading-relaxed mb-4">
.Each idea will be clarified with MVC and LC-RP Architectures
</p>

<p className="text-gray-700 leading-relaxed mb-4">
.Hence you will get great information in planning and creating ventures
</p>

<p className="text-gray-700 leading-relaxed mb-4">
.With the goal that you can clear all meetings as a fresher or as an accomplished
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

<div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold hover:bg-white transition"
>
Download Syllabus
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


<Link
href="/contact"
className="block text-center mt-8 bg-[#ffb000] text-black font-semibold py-3 rounded-md hover:bg-white transition"
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