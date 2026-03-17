
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function MeanStackCourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE VARIABLES
============================= */

const courseTitle = "MEAN Stack Training in Bangalore";

const courseSubtitle =
"Become a Professional MEAN Stack Developer with Real Time Projects";

const courseImage = "/mean.jpg";

const syllabusPdf = "/syllabus/mean-stack.pdf";

const syllabus = [
"HTML5 & CSS3",
"JavaScript Fundamentals",
"Angular Framework",
"Node.js Development",
"Express.js Framework",
"MongoDB Database",
"REST API Development",
"Authentication & Security",
"Full Stack Project Development",
"Deployment & Hosting"
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


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
MEAN Stack Course Overview
</h2>

<p>
The <span className={highlight}>MEAN Stack Course</span> is designed for
students and professionals who want to become full stack web developers.
This course teaches MongoDB, Express.js, Angular and Node.js to build
modern web applications. Our
<span className={highlight}>MEAN Stack Training</span> focuses on real-time
projects and practical learning.
</p>

<p>
This <span className={highlight}>MEAN Stack Developer Course</span> covers
frontend development using Angular and backend development using Node.js
and Express.js. Students will learn how to build dynamic web applications
and integrate them with MongoDB databases.
</p>

<p>
As a leading <span className={highlight}>MEAN Stack Training Institute</span>,
Quickstep provides industry-oriented training and project-based learning.
Students gain hands-on experience building real web applications using
modern JavaScript technologies.
</p>

<p>
Our <span className={highlight}>MEAN Stack Web Development Course</span>
helps students master full stack JavaScript development and prepares them
for careers as Full Stack Developers, Web Developers and Node.js Developers.
</p>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
What You Will Learn in MEAN Stack Training
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>HTML5 and CSS3 web design</li>
<li>JavaScript programming fundamentals</li>
<li>Angular framework for frontend development</li>
<li>Node.js backend development</li>
<li>Express.js server-side programming</li>
<li>MongoDB database management</li>
<li>REST API development</li>
<li>Authentication and security</li>
<li>Deploying full stack applications</li>

</ul>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
MEAN Stack Course Syllabus
</h2>

<ul className="list-disc pl-6 space-y-2">

<li><span className={highlight}>HTML5 & CSS3</span> – Website design and layouts</li>
<li><span className={highlight}>JavaScript</span> – Core programming concepts</li>
<li><span className={highlight}>Angular Framework</span> – Frontend development</li>
<li><span className={highlight}>Node.js</span> – Backend application development</li>
<li><span className={highlight}>Express.js</span> – Server-side APIs</li>
<li><span className={highlight}>MongoDB</span> – NoSQL database management</li>
<li><span className={highlight}>REST APIs</span> – API development</li>
<li><span className={highlight}>Authentication</span> – JWT security</li>
<li><span className={highlight}>Deployment</span> – Hosting applications</li>

</ul>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
Why Choose Quickstep Training Institute
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Hands-On Real Time Projects</li>
<li>Placement Assistance</li>
<li>Certification After Course Completion</li>

</ul>


{/* SEO KEYWORDS SECTION */}

<h2 className="text-xl font-bold text-gray-900 mt-10">
Your Search Ends Here If You Are Looking For:
</h2>

<ul className="mt-4 space-y-3 text-gray-800 font-medium">

<li><span className={highlight}>MEAN Stack Course</span></li>
<li><span className={highlight}>MEAN Stack Training</span></li>
<li><span className={highlight}>MEAN Stack Developer Course</span></li>
<li><span className={highlight}>MEAN Stack Training Institute</span></li>
<li><span className={highlight}>MEAN Stack Web Development Course</span></li>
<li><span className={highlight}>Angular Node.js Course</span></li>
<li><span className={highlight}>MongoDB Express Angular Node Training</span></li>
<li><span className={highlight}>Best MEAN Stack course for beginners</span></li>
<li><span className={highlight}>MEAN Stack training with placement</span></li>
<li><span className={highlight}>Online MEAN Stack training</span></li>

</ul>

<p className="mt-4 text-gray-600">
Quickstep prepares you to become industry ready with the skills required
to build modern JavaScript applications and start a successful career
as a MEAN Stack Developer.
</p>


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
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}
