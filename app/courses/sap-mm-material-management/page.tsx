"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-1  rounded-md font-semibold inline-block";

export default function SAPMMCourse() {

const [showForm,setShowForm] = useState(false);

const courseTitle = "Best SAP MM Training in RT Nagar Bangalore";

const courseImage = "/sapmm1.jpg";

const syllabusPdf = "/syllabus/SAPmm1.pdf";

const syllabus = [
"INTRODUCTION TO ERP",
"INTRODUCTION TO SAP",
"INITIAL SCREENS",
"ENTERPRISE STRUCTURE",
"MASTER DATA",
"Purchasing",
"Inventory Management",
"Special Procurement Process / Special Stocks",
"External Services Management",
"Valuation and Account Determination",
"Logistics Invoice Verification",
"Pricing Procedure",
"Batch Management",
"Output Determination",
"Integration with FI/CO",
"Integration with PP (MRP)",
"ASAP Methodology",
"Support Project Process",
"Resume Preparation",
"Real-time Project Scenarios",
"Tips and Tricks"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
{courseTitle}
</h1>

<button
onClick={()=>setShowForm(true)}
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
alt="Best SAP MM Training in RT Nagar Bangalore - Quickstep"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-5 right-5 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
170 SEATS
</div>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">


<h3 className="text-xl font-bold">
<span className={highlight}>Best SAP MM Training in RT Nagar Bangalore</span>
</h3>

<h3 className="text-xl font-bold">
Course Description – Best SAP MM Training in RT Nagar
</h3>

<p>
Quickstep offers the <span className={highlight}>Best SAP MM Training in RT Nagar Bangalore</span> designed for students, working professionals, and job seekers who want to build a strong career in SAP Materials Management. SAP MM is one of the most essential modules in the SAP ERP system, covering Master Data, Purchasing, Inventory Management, Material Valuation, Logistics, and Vendor Management.
</p>

<p>
Our training program is recognized as the <span className={highlight}>Best SAP MM Course in Bangalore</span> because it provides complete hands-on learning with real-time scenarios.
</p>

<p>
Being one of the <span className={highlight}>Best SAP MM Training Institutes in RT Nagar</span> and a top-rated <span className={highlight}>SAP MM Training Institute in Bangalore</span>, Quickstep offers advanced training with integration concepts such as MM–SD, MM–PP, and MM–FI.
</p>


<h4 className="text-lg font-semibold">
What You Will Learn in SAP MM Training at Quickstep
</h4>

<p>By the end of the SAP MM course, you will be able to:</p>

<ul className="list-disc pl-6 space-y-1">

<li>Understand the objectives and complete process flow of SAP Materials Management</li>

<li>Maintain accurate Master Data for Materials, Vendors, and Purchasing</li>

<li>Execute end-to-end Purchase Cycle: PR → PO → Goods Receipt → Invoice Verification</li>

<li>Create and manage Service Master, Service Purchase Orders, and Service Entry Sheets</li>

<li>Perform Inventory Management operations including goods movement, stock adjustments, and physical inventory</li>

<li>Configure Material Valuation and Account Determination</li>

<li>Handle complete Logistics Invoice Verification</li>

<li>Integrate SAP MM with SAP SD, SAP PP, and SAP FI/CO modules</li>

</ul>


<h4 className="text-lg font-semibold">
Why Choose Quickstep for SAP MM Training?
</h4>

<ul className="list-disc pl-6 space-y-1">

<li>Training by real-time SAP MM Consultants</li>

<li>Practical training with hands-on assignments</li>

<li>Complete SAP MM Syllabus with real-time project scenarios</li>

<li>Placement assistance with interview preparation</li>

<li>Flexible batch timings for students and working professionals</li>

</ul>

<p>
If you are searching for the <span className={highlight}>Best SAP MM training in RT Nagar Bangalore</span> or want industry-standard SAP MM certification training, Quickstep is your trusted training destination.
</p>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-bold pt-6">
Why Choose Quickstep for SAP Training?
</h3>

<p>
At <strong>Quickstep</strong>, we provide high-quality SAP courses delivered by experienced industry professionals, supported by advanced lab facilities, real-time project practice, and complete placement assistance.
</p>

<ul className="list-disc pl-6 space-y-1">

<li>30+ years of trusted training excellence</li>

<li>Highly experienced & certified SAP trainers</li>

<li>Real-time, project-based SAP learning</li>

<li>Advanced lab setup for hands-on practice</li>

<li>Individual attention with flexible batch timings</li>

<li>100% placement support with interview preparation</li>

</ul>


<h4>Your Search Ends Here if You Are Looking For:</h4>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best SAP Course in RT Nagar Bengaluru</span></li>

<li><span className={highlight}>Best SAP Training in RT Nagar Bengaluru</span></li>

<li><span className={highlight}>Best SAP Training in Bengaluru</span></li>

<li><span className={highlight}>Best SAP Course in Bengaluru</span></li>

<li><span className={highlight}>Best SAP Training Institute in Bengaluru</span></li>

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
onClick={()=>setShowForm(true)}
className="bg-[#ffb000] text-black px-5 py-2 rounded-lg font-semibold"
>
Download Syllabus
</button>

</div>

<ul className="space-y-4">

{syllabus.map((item,index)=>(
<li key={index} className="border-b border-white/20 pb-2">
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
onClose={()=>setShowForm(false)}
/>

)}

</div>

);
}