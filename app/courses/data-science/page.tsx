"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Data Science Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Data Science, Machine Learning & AI with Real Projects
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

<div className="rounded-xl overflow-hidden shadow-xl border">

<Image
src="/Datascience.png"
alt="Data Science"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded">
Best Data Science Training in RT Nagar Bangalore
</h2>

<h3 className="text-2xl font-bold text-gray-900">
Course Description – Data Science
</h3>

<p>
Quickstep offers the{" "}
<span className={highlight}>
Best Data Science Training in RT Nagar Bangalore
</span>{" "}


designed for students, freshers, IT professionals, analysts, and job seekers who want to build a career in the rapidly growing data analytics field. Data Science is a multidisciplinary domain that uses statistical methods, machine learning, scientific processes, and algorithms to extract valuable insights from structured and unstructured data.
</p>

<h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded">
Best Data Science Course in Bangalore
</h2>

<p>
Our Data Science course provides hands-on learning in Python programming, Machine Learning, Statistics, Data Mining, Data Visualization, Artificial Intelligence, Big Data, and more. The training covers real-time projects, case studies, and practical applications that prepare learners for industry roles such as Data Analyst, Data Scientist, ML Engineer, and Business Analyst.
</p>


<p>
<span className={highlight}>
Best Data Science Training in Bangalore
</span>
</p>

<p>
As one of the{" "}
<span className={highlight}>
Best Data Science Training Institutes in RT Nagar Bangalore
</span>
Quickstep ensures that every learner gains deep conceptual clarity and practical experience using tools such as Python, R, Tableau, Machine Learning Libraries, and Big Data platforms like Hadoop and Spark.
</p>


<p>
<span className={highlight}>
Best online Data Science Training in Bangalore
</span>
</p>


<h4 className="text-xl font-semibold text-gray-900">
What You Will Learn in Data Science Training
</h4>

<ul className="list-disc pl-6 space-y-1">

<li>Introduction to Data Science & Real-World Applications</li>
<li>Business Statistics & Data Understanding</li>
<li>Python and R Programming for Data Science</li>
<li>Exploratory Data Analysis (EDA)</li>
<li>Data Cleaning, Data Munging & Feature Engineering</li>
<li>Artificial Intelligence & Machine Learning Algorithms</li>
<li>Deep Learning Concepts & Neural Networks</li>
<li>Big Data Technologies – Hadoop, Spark, Azure</li>
<li>Data Visualization using Tableau</li>
<li>Practical AI Use Cases & Industry Best Practices</li>

</ul>


<h4 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Data Science?
</h4>

<p>
<span className={highlight}>
Quickstep provide Best Data Science Training in RT Nagar Bangalore
</span>
</p>

<ul className="list-disc pl-6 space-y-1">

<li>Training by expert Data Scientists & AI professionals</li>
<li>Hands-on real-time projects with datasets</li>
<li>Python, R, Machine Learning & Deep Learning covered in detail</li>
<li>100% placement assistance with mock interviews</li>
<li>Flexible batch timings for students & working professionals</li>

</ul>


<p>
If you are searching for the{" "}
<span className={highlight}>
Best Data Science Course in RT Nagar Bangalore
</span>{" "}
with practical real-time learning, Quickstep is the right choice to begin your Data Science career.
</p>

<p>
At <span className={highlight}>Quickstep</span> we also offer the{" "}
<span className={highlight}>
Best Online Data Science Training in Bangalore
</span>{" "}
 with live interactive classes, cloud-based tools, and practical project support. Learn Data Science from anywhere with flexible schedules.
</p>

<p>
Our{" "}
<span className={highlight}>
Online Data Science Course in Bangalore
</span>{" "}
 covers Python, AI, ML, Deep Learning, and Big Data with complete hands-on training so that learners can master Data Science from home.
</p>

<p>
Quickstep is known for delivering the{" "}
<span className={highlight}>
Best Online Data Science Training Institute in Bangalore
</span>{" "}
with weekend and weekday batches, personalized doubt clearing, and real-time project assignments.
</p>


<h3 className="text-2xl font-bold text-gray-900 pt-6">
Why Choose Quickstep for Training?
</h3>

<p>
With <span className={highlight}>30+ years</span> of professional training experience, Quickstep is one of the most trusted institutes in RT Nagar Bangalore. Our expert trainers, real-time projects, modern labs, and placement support make our Data Science program highly industry-oriented.
</p>


<p>
<span className={highlight}>
Best online Data Science Course in Bangalore
</span>
</p>

<ul className="list-disc pl-6 space-y-1">

<li>30+ years of trusted training excellence</li>
<li>Experienced Data Science & AI trainers</li>
<li>Real-time projects with industry datasets</li>
<li>Advanced labs and cloud-based tools</li>
<li>Flexible batch timing for professionals & students</li>
<li>100% placement support</li>

</ul>


<h4 className="text-xl font-semibold text-gray-900">
Your Search Ends Here If You Are Looking For:
</h4>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best Data Science Course in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best Data Science Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Best Data Science Institute in Bangalore</span></li>
<li><span className={highlight}>Best Data Science Course in Bangalore</span></li>
<li><span className={highlight}>Best Training Institute in Bangalore</span></li>

</ul>


<p>
Quickstep prepares you to become industry-ready with the skills required
to grow in the competitive Data Science and AI job market.
</p>

</div>
 <div className="mt-12">
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

<li className="border-b border-white/20 pb-2">Introduction to Data Science</li>
<li className="border-b border-white/20 pb-2">Business Statistics</li>
<li className="border-b border-white/20 pb-2">Python for Data Science</li>
<li className="border-b border-white/20 pb-2">Data Munging</li>
<li className="border-b border-white/20 pb-2">Artificial Intelligence</li>
<li className="border-b border-white/20 pb-2">Deep Learning</li>
<li className="border-b border-white/20 pb-2">Big Data</li>
<li className="border-b border-white/20 pb-2">Tableau</li>

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
course="Data Science"
pdf="/syllabus/DS-AI-ML New.pdf"
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}