"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { FileText } from "lucide-react";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CyberSecurityCoursePage() {

const [showForm, setShowForm] = useState(false);

const syllabusPdf = "/syllabus/Cybersecurity.pdf";

const syllabus = [
"Introduction to Cybersecurity",
"Networking Fundamentals",
"Operating System Security",
"Ethical Hacking",
"Penetration Testing",
"Network Security",
"Web Application Security",
"Cloud Security",
"Digital Forensics",
"SOC & SIEM Tools"
];

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold mb-4">
Cybersecurity Training in Bengaluru
</h1>

<p className="text-lg text-gray-200 mb-6">
Learn Ethical Hacking, Network Security, Cloud Security & Cyber Defense
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
src="/CyberSecurity.png"
alt="Best Cybersecurity Training in RT Nagar Bangalore - Quickstep"
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
Welcome to Quickstep Cybersecurity Training in Bengaluru
</h3>

<h3 className="text-xl font-bold text-gray-900">
<span className={highlight}>Best Cybersecurity Training in RT Nagar | Bangalore</span>
</h3>


<p><strong>Cybersecurity Training</strong></p>

<p>
In today’s digital world, <span className={highlight}>Cybersecurity</span> has become one of the most in-demand and high-paying career fields across the globe. Every small business, large enterprise, financial institution, government organization, and online platform relies heavily on secure digital systems. With increasing cyber threats, data breaches, <span className={highlight}>ransomware</span> attacks, and digital frauds, the need for skilled <span className={highlight}>cybersecurity</span> professionals has reached an all-time high.
</p>

<p>
Quickstep Computer Centre offers the <span className={highlight}>Best Cybersecurity Training in Bengaluru</span>, designed to equip learners with job-ready skills, hands-on experience, and industry-relevant knowledge to build a successful career in <span className={highlight}>Cybersecurity</span>.
</p>

<p>
Our <strong>Cybersecurity Course</strong> is created by highly experienced industry experts with several years of real-time exposure to information security, ethical hacking, cloud security, and incident response. The training focuses on practical learning through live projects, real-world simulations, and case studies to ensure that learners gain a deep understanding of information security concepts, tools, and techniques.
</p>


<h4 className="text-xl font-semibold text-gray-900">
Why Choose Cybersecurity as a Career?
</h4>

<p>
<span className={highlight}>Cybersecurity</span> is one of the fastest-growing industries worldwide, with millions of job openings across IT, Banking, Healthcare, Finance, E-commerce, Cloud Computing, <strong>Defence</strong>, and Government sectors.
</p>


<ul className="list-disc pl-6 space-y-1">

<li><strong>Cybersecurity</strong> Analyst</li>
<li>Ethical Hacker</li>
<li>Penetration Tester</li>
<li>Network Security Engineer</li>
<li>Information Security Manager</li>
<li>SOC Analyst</li>
<li>Malware Analyst</li>
<li>Cloud Security Specialist</li>
<li>Cyber Forensics Expert</li>

</ul>


<p>
The <span className={highlight}>Cybersecurity</span> field not only offers job stability but also provides opportunities for continuous learning, global recognition, and career growth.
</p>


<h4 className="text-xl font-semibold text-gray-900">
Cybersecurity Training at Quickstep – Course Highlights
</h4>

<ul className="list-disc pl-6 space-y-1">

<li>Complete practical-based training</li>
<li>Live hacking demonstrations</li>
<li>Hands-on tools and labs</li>
<li>Real-world case studies</li>
<li>Industry-based curriculum</li>
<li>Interview preparation & career support</li>

</ul>


<h4 className="text-xl font-semibold text-gray-900">
Key Modules Covered in the Cybersecurity Course
</h4>

<p>Introduction to Cybersecurity, Networking Fundamentals, Operating System Security, Ethical Hacking, Penetration Testing, Network Security, Web Application Security, Cyber Threat Intelligence, Cloud Security, Digital Forensics and Security Tools.</p>


<h4 className="text-xl font-semibold text-gray-900">
Training Features
</h4>

<p><strong>✔ 100% Practical & Skill-Based Training</strong></p>
<p><strong>✔ Industry-Expert Trainers</strong></p>
<p><strong>✔ Job-Oriented Curriculum</strong></p>
<p><strong>✔ Live Projects & Case Studies</strong></p>
<p><strong>✔ Placement Assistance</strong></p>


<h4 className="text-xl font-semibold text-gray-900">
Enroll Today & Start Your Cybersecurity Career
</h4>

<p>
<span className={highlight}>Cybersecurity</span> is not just a course—it is a future-proof career that offers excellent opportunities, global demand, and long-term growth.
</p>

<p>
Join our Best <span className={highlight}>Cybersecurity Training Program</span> today and take the first step toward a rewarding career in IT.
</p>

<hr />

<p>
<strong>
Quickstep 30+ Years of Training Excellence | Best Cybersecurity Training in Bengaluru
</strong>
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
course="Cybersecurity"
pdf={syllabusPdf}
onClose={() => setShowForm(false)}
/>

)}

</div>

);
}