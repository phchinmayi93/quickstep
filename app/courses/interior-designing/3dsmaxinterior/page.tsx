"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function ThreeDsMaxCourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DATA
============================= */

const courseTitle =
"Best 3Ds Max Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn 3D Modeling, Animation & Rendering using Autodesk 3Ds Max";

const courseImage =
"/3ds Max.png";

const syllabusPdf =
"/syllabus/3ds Max1.pdf";

const syllabus = [
  { name: "Introduction", link: "/courses/3dsmax/introduction" },
  { name: "Standard Primitives", link: "/courses/3dsmax/primitives" },
  { name: "Extended Primitives", link: "/courses/3dsmax/extended" },
  { name: "Customizing Units", link: "/courses/3dsmax/units" },
  { name: "Basic Models", link: "/courses/3dsmax/models" },
  { name: "AEC", link: "/courses/3dsmax/aec" },
  { name: "3D Boolean", link: "/courses/3dsmax/boolean" },
  { name: "Compound Objects", link: "/courses/3dsmax/compound" },
  { name: "Standard Lighting", link: "/courses/3dsmax/lighting" },
  { name: "Advanced Lighting", link: "/courses/3dsmax/advanced-lighting" },
  { name: "Basic Texturing", link: "/courses/3dsmax/texturing" },
  { name: "Particles", link: "/courses/3dsmax/particles" },
  { name: "Reactors", link: "/courses/3dsmax/reactors" }
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
20 SEATS
</div>

</div>


{/* CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">


<h2 className="text-xl font-bold text-gray-900">
Course Description
</h2>

<p>
<span className={highlight}>3Ds Max Training</span> provides exposure to a
professional <span className={highlight}>3D design and visualization platform</span> from Autodesk.
</p>

<p>
This course prepares students for careers in{" "}
<span className={highlight}>animation, architectural visualization, and design</span>.
</p>

<p>
You will learn{" "}
<span className={highlight}>2D & 3D modeling, rendering, lighting, and animation</span>{" "}
using industry-standard tools.
</p>


{/* BENEFITS */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>3Ds Max interface navigation</li>
<li>3D modeling techniques</li>
<li>Character modeling basics</li>
<li>Lighting & rendering</li>
<li>Animation fundamentals</li>
<li>Texturing & materials</li>
<li>Visual effects & simulation</li>

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


{/* KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best 3Ds Max Training in Bangalore</span></li>
<li><span className={highlight}>3D Animation Course in Bangalore</span></li>
<li><span className={highlight}>3Ds Max Institute in RT Nagar</span></li>
<li><span className={highlight}>3D Modeling Course</span></li>

</ul>


<p>
Join <span className={highlight}>Best 3Ds Max Course in Bangalore</span> and
start your career in animation & design.
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

<li key={index} className="border-b border-white/20 pb-2">

<Link
href={item.link}
className="block text-white hover:text-[#ffb000] hover:translate-x-1 transition duration-200"
>
{item.name}
</Link>

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