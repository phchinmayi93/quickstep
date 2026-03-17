"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";


const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

/* ===============================
   COURSE VARIABLES
================================ */

const courseTitle =
"Artificial Intelligence & Machine Learning Training in Bangalore";

const courseSubtitle =
"Learn AI, Machine Learning, Deep Learning & Python with Real Projects";

const courseImage = "/AIML.png";

const aiPdf = "/syllabus/Machine Learning with R and Python.pdf";
const mlPdf = "/syllabus/Machine Learning with R and Python.pdf";

const syllabus = [
"Introduction to Artificial Intelligence (AI)",
"Introduction to Machine Learning (ML)",
"Reinforcement Learning",
"Life Cycle of Machine Learning",
"Implement Blending Techniques",
"Deep Learning & Neural Networks",
"Numpy & Pandas Python Libraries"
];

/* =============================== */

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


{/* BREADCRUMB */}
{/* 
<Breadcrumb title={courseTitle} /> */}


{/* MAIN SECTION */}

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
className="w-full h-[420px] object-cover"
/>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-2xl font-bold text-gray-900">
Best Artificial Intelligence & Machine Learning Training in RT Nagar Bangalore
</h2>

<h3 className="text-xl font-semibold text-gray-900">
Course Description – Artificial Intelligence & Machine Learning
</h3>

<p>
Quickstep offers the{" "}
<span className={highlight}>
Best Artificial Intelligence & Machine Learning Training in RT Nagar Bangalore
</span>{" "}
designed for students, freshers, and professionals who want to build
advanced careers in modern technology fields.
</p>

<p>
Artificial Intelligence (AI) and Machine Learning (ML) are transforming
industries including healthcare, automation, finance,
cybersecurity, robotics, and data science.
</p>

<p>
This program provides complete hands-on training in
AI fundamentals, ML algorithms, Deep Learning,
Neural Networks, Python programming,
Numpy, Pandas, TensorFlow, and real-world datasets.
</p>

<p>
As a leading{" "}
<span className={highlight}>
AI ML Training Institute in RT Nagar Bangalore
</span>{" "}
Quickstep provides project-based training aligned with industry needs.
</p>


{/* WHAT YOU WILL LEARN */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn in AI & ML Training
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Introduction to Artificial Intelligence (AI) & Applications</li>
<li>Introduction to Machine Learning Algorithms</li>
<li>Reinforcement Learning & ML Life Cycle</li>
<li>Deep Learning & Neural Networks</li>
<li>Numpy, Pandas & Python Libraries</li>
<li>TensorFlow / Keras Model Building</li>
<li>Blending & Implementing ML Techniques</li>
<li>Real-Time Projects & Case Studies</li>

</ul>


{/* WHY CHOOSE QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for AI & ML Training?
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Expert AI ML trainers with industry experience</li>
<li>Hands-on coding with Python & TensorFlow</li>
<li>Real-world projects & datasets</li>
<li>100% placement support with interview preparation</li>
<li>Flexible batches for students & professionals</li>

</ul>

<p>
If you are searching for the{" "}
<span className={highlight}>
Best Artificial Intelligence Training in RT Nagar Bangalore
</span>{" "}
or{" "}
<span className={highlight}>
Best Machine Learning Training in RT Nagar Bangalore
</span>{" "}
Quickstep is the best place to start your career.
</p>


{/* ONLINE TRAINING */}

<p>
Quickstep also offers{" "}
<span className={highlight}>
Best Online Artificial Intelligence Training in Bangalore
</span>{" "}
and{" "}
<span className={highlight}>
Best Online Machine Learning Training in Bangalore
</span>{" "}
with live interactive classes and cloud-based coding labs.
</p>

<p>
Our{" "}
<span className={highlight}>
Online AI ML Course in Bangalore
</span>{" "}
includes coding exercises, projects,
and practical implementation.
</p>

<p>
For learners looking for the{" "}
<span className={highlight}>
Best Online AI ML Training Institute in Bangalore
</span>{" "}
Quickstep provides structured virtual training.
</p>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep for Training?
</h3>

<p>
With <span className={highlight}>30+ years of training excellence</span>,
Quickstep is one of the most trusted training institutes in RT Nagar Bangalore.
</p>

<ul className="list-disc pl-6 space-y-1">

<li>30+ years of trusted professional training</li>
<li>Expert faculty specializing in AI ML development</li>
<li>Hands-on datasets & real systems</li>
<li>Advanced lab infrastructure</li>
<li>Flexible weekday/weekend batches</li>
<li>100% placement assistance</li>

</ul>


<h4 className="text-lg font-semibold text-gray-900">
Your Search Ends Here If You Are Looking For:
</h4>

<ul className="list-disc pl-6 space-y-1">

<li>Best Artificial Intelligence Course in RT Nagar Bangalore</li>
<li>Best Machine Learning Course in RT Nagar Bangalore</li>
<li>Best AI ML Course in Bangalore</li>
<li>Best AI ML Training Institute in Bangalore</li>
<li>Best IT Training Institute in Bangalore</li>

</ul>

<p>
Quickstep prepares you for job roles like
AI Engineer, Machine Learning Engineer,
Data Scientist, Automation Specialist,
and Research Engineer.
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

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-xl sticky top-24">


<h3 className="text-xl font-bold text-[#ffb000] mb-4">
Course Syllabus
</h3>


{/* DOWNLOAD BUTTONS */}

<div className="flex flex-col gap-2 mb-6">

<a
href={aiPdf}
download
className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200"
>
AI Download Syllabus
</a>

<a
href={mlPdf}
download
className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200"
>
ML Download Syllabus
</a>

</div>


<ul className="space-y-4">

{syllabus.map((item, index) => (

<li key={index} className="border-b border-white/20 pb-2">

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
pdf={aiPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}