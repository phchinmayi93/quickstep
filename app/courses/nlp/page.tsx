"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { FileText } from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function NLPCoursePage() {

const [showForm, setShowForm] = useState(false);

const syllabusPdf = "/IT Syllabus/NLP.pdf";

const syllabus = [
"Introduction NLP",
"Tokenization",
"Stemming",
"U - Chunks",
"U - Bag of Words",
"P - Bag of Words",
"Word existence feature",
"Word proportion feature",
"TFIDF feature",
"U - Category Predictor"
];

return (

<div className="bg-gray-100 min-h-screen">

{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Natural Language Processing (NLP) Training
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn AI based Natural Language Processing techniques and machine learning applications
</p>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold"
>
Download Syllabus
</button>

</div>
</div>


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg relative">

<Image
src="/NLP1.png"
alt="Natural Language Processing Course"
width={1200}
height={500}
className="w-full object-cover"
/>

<div className="absolute bottom-4 left-4 bg-[#ffb000] text-black px-4 py-2 font-semibold rounded">
170 <span className="text-sm">SEATS</span>
</div>

</div>



{/* COURSE CONTENT */}

<div className="bg-white p-10 rounded-xl shadow space-y-6 text-gray-700">

<h3 className="text-2xl font-bold text-gray-900">
Course Description
</h3>


<p>
<h1 className="text-xl font-bold">NLP:-</h1>

<span className={highlight}>Natural language processing (NLP)</span> is a branch of artificial intelligence. It helps computers understand, decipher and control human content language. Today there is a gigantic measure of messages, web-based media text, video transfer, client surveys, client assistance demands, and so forth These literary information become the ideal spot to apply NLP. We need NLP apparatuses and methods to measure, break down, and comprehend unstructured "huge information" to deliver the force in investigation. In this post, I will clarify characteristic language preparing in a layman's term. At that point talk about what sort of work is engaged with NLP. I likewise will explain the contrast between discourse acknowledgment and NLP. At that point at last I will cover the <span className={highlight}>AI , ML calculations for NLP</span>.
</p>


<p>
<h1 className="text-xl font-bold">
Natural Language Processing (NLP)?
</h1>
</p>


<p>
Humans communicate with each other by using <span className={highlight}>natural language</span>, for example, English, Chinese, French or Russian. A computer algorithmcan't comprehend a characteristic language yet can deal with the regular language to cause collaborations between PCs or people to feel precisely like associations among people and people. This is <span className={highlight}>regular language handling (NLP)</span>. With NLP, a computer can tune in to a characteristic language spoken by an individual, decipher it and react to it by creating regular language back to the individual.
</p>


<p>
<h1 className="text-xl font-bold">
Use Of Natural Language Processing today?
</h1>
</p>


<p>
Yes when you ask for directions, you are using <span className={highlight}>NLP in action</span>. In spite of the fact that you may not be happy with the precision level, yet the quality is improving. You may regularly hear "this call might be recorded for quality and preparing purposes" when you settle on a telephone decision, almost certainly, the underlying discussions are totally created by a computer. Once more, you might be irritated by the low quality, yet the exactness is improving after some time. Other than these two models, an <span className={highlight}>E-mail spam channel</span> is another type of NLP to figure out which messages are acceptable and which are spam. These spam channels filter the content and endeavor to comprehend the importance of that text.
</p>

</div>

</div>



{/* SIDEBAR */}

<div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl h-fit sticky top-24">

<div className="flex justify-between items-center mb-6">

<h3 className="text-xl font-bold text-[#ffb000]">
Course Syllabus
</h3>

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-4 py-2 rounded-md font-semibold"
>
Download Syllabus
</button>

</div>


<ul className="space-y-4">

{syllabus.map((item,index)=> (

<li key={index} className="flex gap-2 border-b border-white/20 pb-2">

<FileText size={16} />

{item}

</li>

))}

</ul>


<Link
href="/contact"
className="block text-center mt-8 bg-[#ffb000] text-black py-3 rounded-md font-semibold"
>
Contact Us
</Link>

</div>

</div>

</div>



{/* LEAD FORM */}

{showForm && (

<LeadForm
course="Natural Language Processing"
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}