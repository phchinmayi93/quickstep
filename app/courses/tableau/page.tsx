"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "Tableau";

const syllabusPdf = "/syllabus/Tableau.pdf";

const syllabus = [
"Tableau Introduction",
"Connecting Data",
"Calculated Fields",
"Formatting",
"Dashboard"
];

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Tableau Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Tableau Data Visualization & Dashboard Development
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

{/* <Breadcrumb title={courseTitle} /> */}


{/* MAIN SECTION */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">


{/* COURSE IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg">

<Image
src="/Tableau-2-Banner.jpg"
alt="Tableau"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-8 rounded-xl shadow">

<p className="text-gray-700 leading-relaxed mb-4">
Tableau has a mapping functionality, and is able to plot latitude and longitude coordinates and connect to spatial files like Esri Shapefiles, KML, and GeoJSON to display custom geography.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
The built-in geo-coding allows for administrative places (country, state/province, county/district), postal codes, US Congressional Districts, US CBSA/MSA, Area Codes, Airports, and European Union statistical areas (NUTS codes) to be mapped automatically.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
You can group geographies to create custom territories or use custom geocoding to extend existing geographic roles in the product.
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

<div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold hover:bg-white transition"
>
Download
</button>

</div>


{/* SYLLABUS */}

<ul className="space-y-4">

{syllabus.map((item, index)=> (

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
className="block text-center mt-8 bg-[#ffb000] text-black font-semibold py-3 rounded-md hover:bg-white transition"
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