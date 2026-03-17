"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CourseTemplate() {

const [showForm, setShowForm] = useState(false);

/* =============================
   CHANGE ONLY THESE VARIABLES
============================= */

const courseTitle = "Data Science Training in Bangalore";

const courseSubtitle =
"Learn Data Science, Machine Learning & AI with Real Projects";

const courseImage = "/DataAnalytics.png";

const syllabusPdf = "/syllabus/Data Analytics New.pdf";

const syllabus = [
"Introduction to Data Analytics",
"Analytical Terminology",
"Introduction to SAS",
"R-Studio Interface",
"Collecting Data",
"Creating Datasets",
"Reading Data from External Files",
"Data Exploration",
"Statistics",
"Data Mining",
"Neural Nets & Case Study"
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


{/* MAIN CONTENT */}

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
className="w-full object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">


{/* ========= CHANGE CONTENT BELOW ========= */}
<h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded">
<span className={highlight}>Best Data Analytics Training in RT Nagar Bangalore </span>
</h2>

<h3 className="text-2xl font-bold text-gray-900">
Course Description – Data Science
</h3>

<h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded">
<span className={highlight}>Best Data Analytics Course in RT Nagar Bangalore</span>
</h2>

<p>
Quickstep offers the{" "}
<span className={highlight}>
Best Data Science Training in RT Nagar Bangalore
</span>{" "}

for students, professionals, and freshers who want to master business analytics, data interpretation, visualization, and decision-making techniques. Data Analytics is the process of collecting, cleaning, transforming, and analyzing data to discover meaningful patterns and support business decisions.
</p>

<p>
Quickstep offers the{" "}
Our program covers all key analytical skills including statistics, exploratory analysis, R programming, SAS, data preparation, data mining, dashboards, and predictive analytics. Learners gain hands-on experience through practical assignments, live datasets, case studies, and industry tools used by Data Analysts.
</p>

<p>
As one of the {" "}
<span className={highlight}>
Best Data Analytics Training Institutes in RT Nagar Bangalore
</span>{" "}

, Quickstep ensures students learn the complete workflow—from data collection to insights generation—making them job-ready for roles such as Data Analyst, Business Analyst, MIS Analyst, and Research Analyst.
</p>

<h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded">
<span className={highlight}>Best Data Analytics Training in Bangalore</span>
</h2>



<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn in Data Analytics Training
</h3>
<ul className="list-disc pl-6 space-y-1">

<li className="border-b border-white/20 pb-2">Introduction to Data Analytics & Analytical Frameworks</li>
<li className="border-b border-white/20 pb-2">Understanding Analytics Terminology & Concepts</li>
<li className="border-b border-white/20 pb-2">Working with SAS Tools & R-Studio Interface</li>
<li className="border-b border-white/20 pb-2">Collecting Data & Creating Analytical Datasets</li>
<li className="border-b border-white/20 pb-2">Importing Data from External Sources</li>
<li className="border-b border-white/20 pb-2">Exploring & Cleaning Data (EDA Techniques)</li>
<li className="border-b border-white/20 pb-2">Statistical Methods & Data Interpretation</li>
<li className="border-b border-white/20 pb-2">Data Mining Techniques</li>
<li className="border-b border-white/20 pb-2">Neural Networks & Real-Time Case Studies</li>


</ul>

<p>
If you're looking for the  {" "}
<span className={highlight}>
Best Data Analytics Course in RT Nagar Bangalore
</span>{" "}

with real-time learning and practical exposure, Quickstep is the ideal training destination.
</p>


<p>
Quickstep also provides the   {" "}
<span className={highlight}>
Best Online Data Analytics Training in Bangalore
</span>{" "}

, designed for learners across India who prefer flexible, remote learning. All sessions are live, interactive, and supported with digital resources and project-based practice.
</p>

<p>
Through our   {" "}
<span className={highlight}>
Best Online Data Analytics Training in Bangalore
</span>{" "}

, students gain hands-on training in SAS, R, statistics, visualization, and data mining tools, ensuring the same quality as classroom training.
</p>


<p>
For those seeking the  {" "}
<span className={highlight}>
Best Online Data Analytics Training in Bangalore
</span>{" "}

, Quickstep offers structured online sessions, weekend batches, and personalized doubt clearing.
</p>


<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Data Analytics Training?
</h3>
<p>
Quickstep provides  {" "}
<span className={highlight}>
Best Data Analytics Training in RT Nagar Bangalore
</span>{" "}

</p>


<p>
With  {" "}
<span className={highlight}>
30+ years of excellence
</span>{" "}

Quickstep is one of the most trusted training institutes in RT Nagar Bangalore. Our industry-level curriculum, expert trainers, and advanced labs help students build strong analytical and technical skills.
</p>
<ul className="list-disc pl-6 space-y-1">

<li>30+ Years Training Experience</li>
<li>Real-Time Projects</li>
<li>Industry Trainers</li>
<li>Placement Support</li>

</ul>


<h3 className="text-xl font-semibold text-gray-900">
Your Search Ends Here If You Are Looking For:
</h3>

<ul className="list-disc pl-6 space-y-2">
  <li>30+ years of trusted professional training</li>
  <li>Expert trainers with real industry experience</li>
  <li>Live projects & practical assignments</li>
  <li>Advanced lab facilities with updated tools</li>
  <li>Flexible timings for students & working professionals</li>
  <li>100% placement support with interview guidance</li>
</ul>


<p>
Quickstep prepares you to become job-ready with the analytical and technical expertise required for today’s data-driven business world.
</p>
<p>

<span className={highlight}>
Best online Data Analytics Training in Bangalore
</span>{" "}

</p>
{/* ========= CHANGE CONTENT ABOVE ========= */}


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
className="border-b border-white/20 pb-2"
>
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