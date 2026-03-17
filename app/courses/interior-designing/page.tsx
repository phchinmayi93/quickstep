"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function InteriorDesignCourse() {

const [showForm, setShowForm] = useState(false);

/* =============================
   COURSE DATA
============================= */

const courseTitle =
"Best Interior Design Training in RT Nagar Bangalore";

const courseSubtitle =
"Learn Interior Design, Space Planning & 3D Visualization with Real Projects";

const courseImage = "/interiordesigning1.png";

const syllabusPdf = "/syllabus/interior.pdf";

const syllabus = [
  { name: "AutoCAD 2D & 3D", link: "/courses/interior-designing/autocaddinterior" },
  { name: "3Ds Max", link: "/courses/interior-designing/3dsmaxinterior" },
  { name: "Google SketchUp", link: "/courses/interior-designing/sketchupinterior" },
  { name: "Revit Architecture", link: "/courses/interior-designing/revitinterior" },
  { name: "V-Ray Rendering", link: "/courses/interior-designing/vray" },
  { name: "Photoshop for Design", link: "/courses/interior-deisgning/photoshop" }
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
Welcome to <span className={highlight}>Quickstep 30+ Years of Training Excellence</span>.
We provide the <span className={highlight}>Best Interior Design Training in RT Nagar Bangalore</span>
with industry-focused learning.
</p>

<p>
If you are searching for the{" "}
<span className={highlight}>Best Interior Design Training in Bangalore</span>,
this course helps you build strong creative and technical skills.
</p>

<p>
Our program includes{" "}
<span className={highlight}>real-time projects, 3D design tools, and portfolio development</span>
to make you job-ready.
</p>


{/* LEARNING */}

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>Residential & commercial interior design</li>
<li>Space planning & furniture layout</li>
<li>Lighting design & materials</li>
<li>AutoCAD 2D drafting</li>
<li>SketchUp & 3D visualization</li>
<li>V-Ray rendering</li>
<li>Modular kitchen design</li>
<li>Client handling & project execution</li>

</ul>


{/* WHY QUICKSTEP */}

<h3 className="text-xl font-semibold text-gray-900">
Why Choose Quickstep
</h3>

<ul className="list-disc pl-6 space-y-1">

<li>30+ Years Training Experience</li>
<li>Industry Expert Trainers</li>
<li>Real-Time Projects</li>
<li>Portfolio Development</li>
<li>Flexible Batch Timings</li>
<li>100% Placement Support</li>

</ul>


{/* KEYWORDS */}

<h3 className="text-xl font-semibold text-gray-900">
Students Searching For
</h3>

<ul className="list-disc pl-6 space-y-1">

<li><span className={highlight}>Best Interior Design Training in RT Nagar Bangalore</span></li>
<li><span className={highlight}>Interior Design Course in Bangalore</span></li>
<li><span className={highlight}>Interior Design Institute in Bangalore</span></li>
<li><span className={highlight}>3D Interior Design Course</span></li>

</ul>


<p>
Join Quickstep and become a professional interior designer with
<span className={highlight}> practical skills and real-time experience</span>.
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



</div>


<ul className="space-y-4">
  {syllabus.map((item, index) => (
    <li key={index} className="border-b border-white/20 pb-2">
      
      <Link
        href={item.link}
        className="block text-white hover:text-[#ffb000] transition duration-200"
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