"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { FileText } from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function AndroidCoursePage() {

const [showForm, setShowForm] = useState(false);

const syllabusPdf = "/syllabus/Android Training  with Advanced Course Syllabus.pdf";

const syllabus = [
"Introduction Android",
"OOPS",
"Framework",
"Applets",
"AWT",
"SWING",
"Android Application Structure",
"AndroidManifest",
"Android Virtual Device",
"Preferences"
];

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Android Training in Bangalore
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Android Application Development and build mobile apps using modern tools
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

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-lg relative">

<Image
src="/Android.png"
alt="Android Training Course"
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
<span className={highlight}>Android Training</span> :-
Mobility Android training imparts the knowledge and skills to take on the Android world. The learner will experience the essentials of the Android application plan. Beginning with the exhibition of the IDE's, the preparation takes you through android improvement devices, for example, AVD and ADB. This preparation will expand your competency by encouraging active presentation with <span className={highlight}>Android application advancement</span> and Google Web administration. All through the course, the student will go over constant models that can serve a solid establishment while dealing with live tasks.
</p>


<p>
End Of the <span className={highlight}>Android training course</span>, you will be able to:
</p>


<p>• Understand Android basics and design</p>

<p>• Build and send Android applications</p>

<p>• Use diverse IDEs, in particular, Eclipse, or IntelliJ Studio for application improvement</p>

<p>• Exploring Android advancement instruments for constant troubleshooting and testing applications</p>

<p>• Apply Java Fundamentals for <span className={highlight}>Android Application Development</span></p>

<p>• Perform activities utilizing Android UI and have a great comprehension of screen direction and formats</p>

<p>• Activate various goals, exercises, and classes</p>

<p>• Work on Android broadcast collectors and administrations</p>

<p>• Utilize distinctive inbuilt APIs to perform an activity like getting to plan to utilize Google Web administration</p>

<p>• Use different application building squares, for example, information bases, correspondence, date, and time.</p>

<p>• Build applications dependent on the ideas learned in the preparation</p>

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
course="Android Training"
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}