"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1 rounded";

export default function SAPHRCourse() {

const [showForm, setShowForm] = useState(false);

/* ================================
COURSE DATA
================================ */

const courseTitle = "Best SAP HR / HCM Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn SAP Human Capital Management with Real-Time HR Scenarios";

const courseImage = "/HR 1.jpg";

const syllabusPdf = "/syllabus/SAP HR- HCM (1).pdf";

const syllabus = [
"INTRODUCTION TO ERP AND SAP",
"ORGANIZATIONAL MANAGEMENT (OM)",
"PERSONNEL ADMINISTRATION (PA)",
"TIME MANAGEMENT",
"PAYROLL",
"BENEFITS"
];

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


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">

{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border relative">

<Image
src={courseImage}
alt="Best SAP HR HCM Training in RT Nagar Bangalore - Quickstep"
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
Course Description
</h2>

<p>
Quickstep offers the <span className={highlight}>Best SAP HR Training in RT Nagar Bangalore</span>,
designed for students, working professionals, and job seekers who want
to build a successful career in Human Resource Management using SAP.
</p>

<p>
SAP HR, also known as <span className={highlight}>SAP HCM (Human Capital Management)</span>,
includes modules such as Personnel Administration (PA),
Organizational Management (OM), Time Management, and Payroll.
</p>

<p>
Our program is recognized as the
<span className={highlight}> Best SAP HCM Training in Bangalore</span>
because it teaches participants how to manage employee data,
payroll processes, HR workflows, and organizational structures.
</p>

<p>
Quickstep is known as the
<span className={highlight}> Best SAP HR Training Institute in RT Nagar</span>
and one of the leading
<span className={highlight}> SAP HCM Training Institutes in Bangalore</span>.
</p>


{/* WHAT YOU WILL LEARN */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Complete understanding of SAP HR / HCM module</li>

<li>Personnel Administration: hiring, master data, employee lifecycle</li>

<li>Payroll processing including wage types and deductions</li>

<li>Time Management: schedules, attendance, leave and overtime</li>

<li>Integration with Finance (FI) for payroll posting</li>

<li>Organizational Management configuration</li>

<li>Recruitment process and employee data updates</li>

</ul>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for SAP Training?
</h3>

<p>
At Quickstep we provide high quality SAP courses delivered by experienced
industry professionals. With
<span className={highlight}> 30+ years of training excellence</span>,
Quickstep is one of the
<span className={highlight}> Best SAP Training Institutes in RT Nagar Bengaluru</span>.
</p>

<ul className="list-disc pl-6 space-y-1">

<li>30+ years of trusted training experience</li>

<li>Certified SAP trainers</li>

<li>Real-time project-based learning</li>

<li>Advanced lab facilities</li>

<li>Flexible batch timings</li>

<li>100% placement assistance</li>

</ul>


{/* SEARCH KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best SAP Course in RT Nagar Bengaluru</span></li>

<li><span className={highlight}>Best SAP Training in RT Nagar Bengaluru</span></li>

<li><span className={highlight}>Best SAP Training Institute in Bengaluru</span></li>

<li><span className={highlight}>SAP HR HCM Course in Bangalore</span></li>

<li><span className={highlight}>Best SAP HR Training in Bangalore</span></li>

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


{/* SIDEBAR */}

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