"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function J2EECourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DATA
============================= */

const courseTitle =
"Best J2EE Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Java Web Development, Servlets, JSP & MVC Frameworks";

const courseImage =
"/J2EE-1.jpg";

const syllabusPdf =
"/syllabus/J2EE.pdf";

const syllabus = [
"XML",
"JDBC",
"STRUTS",
"AJAX",
"Java Beans",
"Hibernate",
"Spring",
"Servlet",
"EJB",
"JSP / JSF",
"RMI"
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
This course builds a strong understanding of{" "}
<span className={highlight}>JDBC Technology</span> and explains why{" "}
<span className={highlight}>Servlets are the foundation of Java Web Development</span>.
</p>

<p>
It also demonstrates how{" "}
<span className={highlight}>JSP is based on the Servlet architecture</span>{" "}
and teaches you to use{" "}
<span className={highlight}>JSTL, custom tags, and expression language</span>{" "}
to reduce Java code in web pages.
</p>

<p>
You will also explore{" "}
<span className={highlight}>Java MVC frameworks like Struts</span> and learn how
to build scalable and maintainable web applications.
</p>

<p>
This is a <span className={highlight}>practical-oriented J2EE training</span> with
real-time labs and simulations to help you gain hands-on experience.
</p>

<p>
After completing this course, you will be able to build{" "}
<span className={highlight}>
high-performance, scalable, and maintainable web applications
</span>.
</p>


{/* LEARNING */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Java Web Application Development</li>
<li>JDBC Database Connectivity</li>
<li>Servlets & JSP Programming</li>
<li>JSTL & Expression Language</li>
<li>MVC Architecture (Struts)</li>
<li>Spring & Hibernate Basics</li>
<li>Building scalable web applications</li>

</ul>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Hands-on Practical Labs</li>
<li>Real-Time Projects</li>
<li>Flexible Batch Timings</li>
<li>100% Placement Support</li>

</ul>


{/* SEO KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best J2EE Training in Bangalore</span></li>
<li><span className={highlight}>Java Full Stack Course in RT Nagar</span></li>
<li><span className={highlight}>Servlet JSP Training Institute</span></li>
<li><span className={highlight}>Spring Hibernate Course</span></li>

</ul>


<p>
Join <span className={highlight}>Best J2EE Course in Bangalore</span> and become
a professional Java web developer.
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
className="border-b border-white/20 pb-2 text-white hover:translate-x-1 transition duration-200"
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