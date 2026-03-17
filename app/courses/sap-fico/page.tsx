"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-3  rounded-md font-semibold inline-block";

export default function SAPFICOCourse() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "Best SAP FICO Training in RT Nagar Bangalore";

const courseImage = "/sapfico1.jpg";

const syllabusPdf = "/syllabus/SAP FICO.pdf";

const syllabus = [
"INTRODUCTION TO ERP & SAP",
"ENTERPRISE STRUCTURE",
"GENERAL LEDGER ACCOUNTING (FI-GL)",
"ACCOUNTS PAYABLE (FI-AP)",
"ACCOUNTS RECEIVABLE (FI-AR)",
"ASSET ACCOUNTING (FI-AA)",
"BANK ACCOUNTING",
"COST CENTER ACCOUNTING (CO-CCA)",
"INTERNAL ORDERS (CO-IO)",
"PROFIT CENTER ACCOUNTING",
"CONTROLLING (CO)",
"INTEGRATION WITH MM, SD, HR",
"PERIOD-END CLOSING & REPORTING"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-6">
{courseTitle}
</h1>

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
alt="Best SAP FICO Training in RT Nagar Bangalore - Quickstep"
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
<span className={highlight}>Best SAP FICO Training in RT Nagar Bangalore</span>
</h3>

<h3 className="text-xl font-bold">
Course Description
</h3>

<p>
Quickstep offers the <span className={highlight}>Best SAP FICO Training in RT Nagar Bangalore</span>, designed for students, accountants, finance graduates, and working professionals who want to build a strong career in SAP Financial Accounting (FI) and Controlling (CO). SAP FICO is one of the most widely used SAP modules for managing financial processing, reporting, controlling, and business operations.
</p>

<p>
Our SAP FICO program is recognized as the <span className={highlight}>Best SAP FICO Course in Bangalore</span> because it provides complete hands-on learning, real-time projects, and practical exposure to financial transactions, accounts payable, accounts receivable, asset accounting, cost controlling, and profit center management.
</p>

<p>
As the <span className={highlight}>Best SAP FICO Training in RT Nagar Bangalore</span> and one of the top-rated <span className={highlight}>SAP FICO Training Institutes in Bangalore</span>, Quickstep ensures you gain end-to-end knowledge of how SAP FICO integrates with MM, SD, HR, and other SAP modules for complete enterprise-level financial automation.
</p>

<p>
<span className={highlight}>Best SAP Course in RT Nagar Bangalore</span>
</p>


<h4 className="text-lg font-semibold">
What You Will Learn in SAP FICO Training at Quickstep
</h4>

<ul className="list-disc pl-6 space-y-2">

<li>Complete overview of SAP Financial Accounting (FI) and Controlling (CO)</li>
<li>Company structure configuration: Company, Company Code, Business Areas, Fiscal Year Variants</li>
<li>General Ledger (G/L) configuration, retained earnings, and G/L postings</li>
<li>Accounts Payable (AP) and Accounts Receivable (AR) complete cycle</li>
<li>Asset Accounting: depreciation areas, asset classes, acquisition & retirement</li>
<li>Foreign exchange differences, tax configuration, and bank accounting</li>
<li>Cost Center Accounting, Internal Orders, Profit Centers & Controlling</li>
<li>Integration with MM, SD, HR modules</li>
<li>Period-end closing activities, financial statements & reporting</li>
<li>Real-time project scenarios to prepare for SAP consultant roles</li>

</ul>


<p>
<span className={highlight}>Best Online SAP Course in RT Nagar Bangalore</span>
</p>


<h4 className="text-lg font-semibold">
Why Choose Quickstep for SAP FICO Training?
</h4>

<ul className="list-disc pl-6 space-y-2">

<li>Training by certified and highly experienced SAP FICO consultants</li>
<li>100% practical training with real-time assignments</li>
<li>Industry-level SAP FICO implementation and support scenarios</li>
<li>Complete placement support + interview preparation</li>
<li>Flexible batch timings for students and working professionals</li>

</ul>


<p>
If you are looking for the <span className={highlight}>Best SAP FICO Training in RT Nagar Bangalore</span> or want to learn SAP FICO from industry experts, Quickstep is the best place to begin your SAP finance career.
</p>


<h3 className="text-xl font-bold pt-6">
Why Choose Quickstep for SAP Training?
</h3>

<p>
At <strong>Quickstep</strong>, we provide high-quality SAP courses delivered by experienced industry professionals. With advanced lab facilities, real-time project training, and complete placement support, we ensure every student becomes industry-ready. For over <strong>30+ years</strong>, Quickstep has been one of the <span className={highlight}>Best SAP Training Institutes in RT Nagar, Bengaluru</span>.
</p>


<ul className="list-disc pl-6 space-y-2">

<li>30+ years of trusted training excellence</li>
<li>Certified & experienced SAP trainers</li>
<li>Real-time, project-based SAP learning</li>
<li>Advanced lab facilities</li>
<li>Flexible batch timings for all learners</li>
<li>100% placement training & interview guidance</li>

</ul>


<h4 className="font-semibold">
Your Search Ends Here if You Are Looking For:
</h4>

<ul className="list-disc pl-6 space-y-2">

<li><span className={highlight}>Best SAP FICO Course in RT Nagar Bengaluru</span></li>
<li><span className={highlight}>Best SAP Training in RT Nagar Bengaluru</span></li>
<li><span className={highlight}>Best SAP Training in Bengaluru</span></li>
<li><span className={highlight}>Best SAP Course in Bengaluru</span></li>
<li><span className={highlight}>Best SAP Training Institute in Bengaluru</span></li>

</ul>


<p>
At Quickstep, we prepare you with professional, industry-aligned SAP training designed for real-world needs.
</p>

<p>
<span className={highlight}>Quickstep provides best SAP Course in Bangalore</span>
</p>

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
Download  Syllabus
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
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}