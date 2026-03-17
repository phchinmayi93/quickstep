"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

import { FileText } from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

/* ============================= */

const courseTitle = "React Native Training in Bangalore";

const courseSubtitle =
"Learn React Native Mobile App Development with Real Projects";

const courseImage = "/React Native 1.jpg";

const syllabusPdf = "/syllabus/React Native p.pdf";

const syllabus = [
"Introduction Reactive Native",
"Views",
"React Components",
"Styling",
"React Navigation",
"State & Props",
"Networking (API)",
"React Native Libraries"
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


{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
<span className={highlight}>React Native Training in Bangalore</span>
</h2>

<p>
React Native is an open-source mobile application framework created by
Facebook, Inc. It is used to develop applications for Android,
Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling
developers to use React's framework along with native platform
capabilities.
</p>

<p>
Quickstep offers the
<span className={highlight}> Best React Native Training in RT Nagar Bangalore </span>
designed for students, developers, and IT professionals who want to
build modern cross-platform mobile applications.
</p>

<p>
Our React Native course focuses on practical training, helping
students build real mobile apps using React Native components,
navigation systems, APIs, and third-party libraries.
</p>

<p>
With hands-on projects and expert mentoring, learners can build
Android and iOS applications using one powerful JavaScript framework.
</p>

<h3 className="text-xl font-semibold text-gray-900">
What You Will Learn in React Native Training
</h3>

<ul className="list-disc pl-6 space-y-2">

<li>Introduction to React Native</li>
<li>Views and UI Components</li>
<li>React Components</li>
<li>Styling React Native Applications</li>
<li>Navigation Systems</li>
<li>State & Props Management</li>
<li>Networking and API Integration</li>
<li>Using React Native Libraries</li>

</ul>

<p>
If you are searching for the
<span className={highlight}> Best React Native Course in Bangalore </span>
Quickstep provides complete hands-on training with real-world mobile
application projects.
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
className="flex items-center gap-2 border-b border-white/20 pb-2"
>

<FileText size={16} />

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