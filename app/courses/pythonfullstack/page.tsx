
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CourseTemplate() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE VARIABLES
============================= */

const courseTitle = "Full Stack Python Training in Bangalore";

const courseSubtitle =
"Become a Job Ready Python Full Stack Developer with Real Time Projects";

const courseImage = "/Full_Stack_Python.jpg";

const syllabusPdf = "/syllabus/python-fullstack.pdf";

const syllabus = [
"HTML5 & CSS3",
"Responsive Web Design",
"JavaScript & DOM Manipulation",
"Python Programming Fundamentals",
"Django Framework",
"Database (MySQL / PostgreSQL)",
"REST API Development",
"Git & Version Control",
"Deployment of Web Applications",
"Real Time Projects"
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
Full Stack Python Course Overview
</h2>

<p>
The <span className={highlight}>Full Stack Python Course</span> is designed
for students and professionals who want to build modern web applications using
Python technologies. This course covers frontend and backend development,
database integration and deployment. It helps learners build the practical
skills required to develop professional web applications.
</p>

<p>
Our <span className={highlight}>Full Stack Python Training</span> provides
hands-on learning with real time projects and expert trainer guidance.
Students gain strong programming skills and practical experience working on
industry level applications.
</p>

<p>
The <span className={highlight}>Python Full Stack Developer Course</span>
focuses on building complete web applications using Python, Django and
modern web technologies. This training helps students become job-ready
developers capable of working in real IT projects.
</p>

<p>
As a leading <span className={highlight}>Full Stack Python Training Institute</span>,
we provide industry-focused training, practical sessions and project based
learning. Students gain the knowledge and confidence required to start their
career in software development.
</p>

<p>
This <span className={highlight}>Python Web Development Course</span> teaches
students how to design, develop and deploy dynamic web applications using
Python and Django framework. After completing this course students can build
professional web applications and start a career in web development.
</p>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
What You Will Learn in Python Full Stack Developer Course
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>HTML5 and CSS3 website design</li>
<li>Responsive web design</li>
<li>JavaScript for interactive websites</li>
<li>Python programming fundamentals</li>
<li>Django backend development</li>
<li>Database integration using MySQL</li>
<li>REST API development</li>
<li>Version control using Git & GitHub</li>
<li>Web application deployment</li>

</ul>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
Full Stack Python Course Syllabus
</h2>

<ul className="list-disc pl-6 space-y-2">

<li><span className={highlight}>HTML5 & CSS3</span> – Website structure and styling</li>
<li><span className={highlight}>Responsive Web Design</span> – Mobile friendly layouts</li>
<li><span className={highlight}>JavaScript</span> – Interactive web applications</li>
<li><span className={highlight}>Python Programming</span> – Core programming concepts</li>
<li><span className={highlight}>Django Framework</span> – Backend web development</li>
<li><span className={highlight}>Database Management</span> – MySQL / PostgreSQL</li>
<li><span className={highlight}>REST API Development</span> – API integration</li>
<li><span className={highlight}>Git & GitHub</span> – Version control</li>
<li><span className={highlight}>Deployment</span> – Hosting web applications</li>

</ul>


{/* H2 */}
<h2 className="text-xl font-bold text-gray-900">
Why Choose Quickstep Training Institute
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Hands On Real Time Projects</li>
<li>Placement Assistance</li>
<li>Practical Learning Environment</li>
<li>Course Completion Certification</li>

</ul>


{/* SEO KEYWORDS SECTION */}

<h2 className="text-xl font-bold text-gray-900 mt-10">
Your Search Ends Here If You Are Looking For:
</h2>

<ul className="mt-4 space-y-3 text-gray-800 font-medium">

<li><span className={highlight}>Full Stack Python Course</span></li>
<li><span className={highlight}>Full Stack Python Training</span></li>
<li><span className={highlight}>Python Full Stack Developer Course</span></li>
<li><span className={highlight}>Full Stack Python Training Institute</span></li>
<li><span className={highlight}>Python Web Development Course</span></li>
<li><span className={highlight}>Python Django Course</span></li>
<li><span className={highlight}>Learn Full Stack Python</span></li>
<li><span className={highlight}>Python Backend Development</span></li>
<li><span className={highlight}>Django Web Development Training</span></li>
<li><span className={highlight}>Python Programming Course</span></li>
<li><span className={highlight}>Best Full Stack Python course for beginners</span></li>
<li><span className={highlight}>Full Stack Python training with placement</span></li>
<li><span className={highlight}>Python Django full stack developer course</span></li>
<li><span className={highlight}>Online full stack Python training</span></li>
<li><span className={highlight}>Python web development certification course</span></li>

</ul>

<p className="mt-4 text-gray-600">
Quickstep prepares you to become industry ready with the skills required
to develop modern web applications and start a successful career as a
Full Stack Python Developer.
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
