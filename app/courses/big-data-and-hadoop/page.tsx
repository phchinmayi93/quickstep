"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "Big Data & Hadoop Training in Bangalore";

const courseSubtitle =
"Learn Big Data, Hadoop & Distributed Data Processing with Real Projects";

const courseImage = "/big data 1.jpg";

const syllabusPdf = "/syllabus/Introduction to BIGDATA and HADOOP.pdf";

const syllabus = [
"Introduction to Big Data & Hadoop",
"Importance of HESC",
"HDFS Architecture",
"Fail Over Mechanism",
"Accessing HDFS",
"MapReduce Framework"
];

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

{/* DOWNLOAD BUTTON 1 */}

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


{/* LEFT SECTION */}

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

<h2 className="text-xl font-bold text-gray-900">
Big Data & Hadoop Course Description
</h2>

<p>
<span className={highlight}>Big Data</span> refers to extremely large volumes
of structured and unstructured data that organizations generate every day.
The real value of big data lies in the insights that can be extracted from it
to make better business decisions.
</p>

<p>
Businesses analyze big data to identify trends, patterns,
and customer behavior which help companies improve efficiency,
innovation, and strategic planning.
</p>

<p>
<span className={highlight}>Apache Hadoop</span> is an open-source framework
designed to store and process massive amounts of data across clusters
of computers using distributed storage and parallel processing.
</p>

<p>
Hadoop enables organizations to handle big data efficiently using
technologies such as <span className={highlight}>HDFS</span>,
<span className={highlight}> MapReduce</span>, and distributed computing.
</p>

<p>
Through this course, learners will gain practical knowledge in
Big Data architecture, Hadoop ecosystem tools, data processing,
and real-world big data analytics.
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

<div className="bg-gradient-to-b from-[#00006c] to-indigo-800 text-white p-8 rounded-xl shadow-2xl h-fit sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

{/* DOWNLOAD BUTTON 2 */}

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-5 py-2 rounded-lg font-semibold"
>
Download Sylalbus
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