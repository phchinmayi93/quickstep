"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
// import Breadcrumb from "@/components/Breadcrumb";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

/* ========= COURSE VARIABLES ========= */

const courseTitle = "AWS Training in Bangalore";

const courseSubtitle =
"Learn Amazon Web Services (AWS), Cloud Infrastructure & DevOps Tools";

const courseImage ="/aws1.png";

const syllabusPdf = "/syllabus/AWS org (1).pdf";

const syllabus = [
"Introduction to AWS DEVOPS",
"AWS Web Services",
"Basic Linux for AWS",
"Amazon Elastic Compute Cloud (EC2)",
"AWS S3",
"Creation of Internet Gateways (IGW)",
"Dynamo DB",
"Redshift",
"Direct Connect",
"Route 53",
"ElastiCache",
"Config",
"Trusted Advisor",
"Elastic Beanstalk",
"Glacier",
"Cloud Watch",
"Cloud Formation",
"Cloud Front",
"Cloud Trail",
"Code Deploy",
"Workspaces",
"Automation of Jobs",
"Provisioning Tools",
"Monitoring Tools",
"Network Concepts",
"Languages"
];

/* ==================================== */

return (

<div className="bg-gray-100 min-h-screen">


{/* HERO SECTION */}

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

{/* <Breadcrumb title={courseTitle} /> */}


{/* MAIN CONTENT */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid lg:grid-cols-3 gap-10 items-start">


{/* LEFT CONTENT */}

<div className="lg:col-span-2 space-y-8">


{/* IMAGE */}

<div className="rounded-xl overflow-hidden shadow-xl border">

<Image
src={courseImage}
alt={courseTitle}
width={1200}
height={500}
className="w-full object-cover"
/>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
AWS Course Description
</h2>

<p>
<span className={highlight}>Cloud Computing</span> is the delivery of
computing services such as servers, storage, databases,
networking, software, analytics, and intelligence over the internet
to offer faster innovation and flexible resources.
</p>

<p>
In cloud computing, infrastructure and backend hardware are managed
by the cloud provider, allowing organizations to focus on application
development and business growth.
</p>

<p>
This instructor-led training program covers
<span className={highlight}> AWS Solutions Architect </span>
and
<span className={highlight}> SysOps Administrator </span>
concepts with hands-on practice.
</p>

<p>
Students will learn how to design, deploy, manage,
and scale applications on
<span className={highlight}> Amazon Web Services (AWS) </span>
with deep insights into public cloud infrastructure.
</p>

<p>
By the end of the training, learners will be able to build
scalable cloud architectures and deploy real-world applications
using AWS cloud services.
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


{/* LEAD FORM POPUP */}

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