"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";
import { FileText } from "lucide-react";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "C Programming";

const syllabusPdf = "/syllabus/C training p.pdf";

const syllabus = [
"Basic Features of C",
"Introducing C",
"C Fundamentals",
"Formatted Input/Output",
"Expressions",
"Selection Statements",
"Loops",
"Basic Types",
"Arrays",
"Functions",
"Program Organization",
"Advanced Features of C",
"Pointers",
"Pointers and Arrays",
"Strings",
"The Preprocessor",
"Writing Large Programs",
"Structures, Unions, and Enumerations",
"Advanced Uses of Pointers",
"Declarations",
"Program Design",
"Low-Level Programming",
"The Standard C Library",
"The Standard Library",
"Input/Output",
"Library Support for Numbers and Character Data",
"Error Handling",
"International Features",
"Miscellaneous Library Functions"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
C Programming Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn C Programming Fundamentals with Practical Training
</p>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
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
src="/C1.png"
alt="C Programming"
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE CONTENT */}

<div className="bg-white p-8 rounded-xl shadow text-gray-700">

<p className="leading-relaxed mb-4">
"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, while a static type system prevents unintended operations".
</p>

<p className="leading-relaxed mb-4">
C is a basic building block for every language. It is a general Purpose Language. To build up the programming abilities 'C' is the main stage for creating programming strategies for any kind of dialect. It is a Mid-level programming language for frameworks programming broadly utilized, moderately low-level, feebly composed, a frameworks programming language related with UNIX and through that with Linux and the open-source development Performance turns out to be fairly compact. Numerous Applications like System Software, Application Software, Embedded Systems, Cool Games, Mobile applications, Device Drivers Programming and so on of the World applications written in C and the List proceeds… C Designed and executed by Dennis Ritchie 1972.
</p>

<p className="leading-relaxed mb-4">
A successor to the programming language B, C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system.[6] During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages,[7][8], with C compilers from various vendors available for the majority of existing computer architectures and operating systems. C has been standardized by the ANSI since 1989 (ANSI C) and by the International Organization for Standardization (ISO). As of September 2020, C is the most popular programming language.
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
className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold"
>
Download  Syllabus
</button>

</div>


<ul className="space-y-4">

{syllabus.map((item, index)=> (

<li
key={index}
className="flex items-center gap-2 border-b border-white/20 pb-2"
>

<FileText size={16}/>

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