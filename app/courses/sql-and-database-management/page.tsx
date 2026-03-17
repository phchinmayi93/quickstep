"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "SQL and Database Management";

const syllabusPdf = "/syllabus/SQL Course Content.pdf";

const syllabus = [
"Introduction SQL",
"Structure Queries",
"Tables",
"Grouping",
"Conditional",
"Functions"
];

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO SECTION */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
SQL and Database Management Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn SQL, Database Concepts & Data Management
</p>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
>
Download Syllabus
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


{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg">

<Image
src="/sql1.jpg"
alt="SQL and Database Management"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-8 rounded-xl shadow">

<p className="text-gray-700 leading-relaxed mb-4">
A database management system (DBMS) is system software for creating and managing databases. The DBMS provides users and programmers with a systematic way to create, retrieve, update and manage data.A DBMS makes it possible for end users to create, read, update and delete data in a database.
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

<FileText size={16} />

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