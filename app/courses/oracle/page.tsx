"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function OracleCourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DATA
============================= */

const courseTitle =
"Best Oracle Database Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn DBMS, Oracle Database Administration & Data Management";

const courseImage =
"/oracle_1.jpg";

const syllabusPdf =
"/syllabus/Oracal p.pdf";

const syllabus = [
  { name: "Introduction Oracle" },
  { name: "Database Architecture" },
  { name: "Creating Database"},
  { name: "Managing Database" },
  { name: "Configuring Database" },
  { name: "R-Man Recovery" },
  { name: "Moving Data"},
  { name: "Data Guard" },
  { name: "Installing Oracle"},
  { name: "Database Patches & Upgrades" }
];

/* ============================= */

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO */}

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


{/* MAIN */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border relative">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
170 SEATS
</div>

</div>


{/* CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">


<h2 className="text-xl font-bold text-gray-900">
Course Description
</h2>

<p>
<span className={highlight}>Database Management System (DBMS)</span> is
software used for creating and managing databases efficiently.
</p>

<p>
This course teaches how to{" "}
<span className={highlight}>
create, retrieve, update, and manage data
</span>{" "}
using Oracle database systems.
</p>

<p>
You will gain knowledge in{" "}
<span className={highlight}>
database administration, architecture, and data management
</span>{" "}
used in real-world applications.
</p>


{/* LEARNING */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Database concepts & DBMS fundamentals</li>
<li>Oracle database architecture</li>
<li>Creating & managing databases</li>
<li>Backup & recovery (RMAN)</li>
<li>Data migration & security</li>
<li>Database configuration</li>
<li>Performance tuning basics</li>

</ul>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Real-Time Projects</li>
<li>Hands-on Practice</li>
<li>Flexible Batch Timings</li>
<li>100% Placement Support</li>

</ul>


{/* SEO KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best Oracle Training in Bangalore</span></li>
<li><span className={highlight}>DBMS Course in RT Nagar</span></li>
<li><span className={highlight}>Oracle DBA Training in Bangalore</span></li>
<li><span className={highlight}>Database Administration Course</span></li>

</ul>


<p>
Join <span className={highlight}>Best Oracle Course in Bangalore</span> and
build your career in database management and administration.
</p>

</div>


{/* BACK */}

<div className="mt-10">

<Link
href="/courses"
className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
>
← Back to Courses
</Link>

</div>


</div>


{/* SIDEBAR */}

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl h-fit sticky top-24">

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
      className="border-b border-white/20 pb-2 text-white"
    >
      {typeof item === "string" ? item : item.name}
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