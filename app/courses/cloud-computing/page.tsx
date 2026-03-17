"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const highlight = "bg-blue-600 text-white px-2 py-1 rounded";

export default function CoursePage() {

const [showForm, setShowForm] = useState(false);

const courseTitle = "Cloud Computing Training in Bangalore";

const courseSubtitle =
"Learn AWS Cloud, DevOps & Infrastructure with Real-Time Projects";

const courseImage = "/CloudComputing.png";

const syllabusPdf = "/syllabus/Microsoft Azure Training Course Syllabus (1).pdf";

const syllabus = [
"Introduction to AWS DEVOPS",
"AWS Web Services",
"Basics of Linux for AWS",
"Amazon Elastic Compute Cloud (EC2)",
"AWS S3",
"Creation of Internet Gateways (IGW)",
"DynamoDB",
"Redshift",
"Direct Connect",
"Route 53",
"ElastiCache",
"Config",
"Trusted Advisor",
"Elastic Beanstalk",
"Glacier",
"CloudWatch",
"CloudFormation",
"CloudFront",
"CloudTrail",
"CodeDeploy",
"Workspaces",
"Automation of Jobs",
"Provisioning Tools",
"Monitoring Tools",
"Network Concepts",
"Programming Languages"
];

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

{/* DOWNLOAD BUTTON 1 */}

<button
onClick={() => setShowForm(true)}
className="bg-[#ffb000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
>
Download Course Syllabus
</button>

</div>
</div>


{/* MAIN CONTENT */}

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
className="w-full object-cover"
/>

</div>


{/* COURSE DESCRIPTION */}

<div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 space-y-6 text-gray-700">

<h2 className="text-xl font-bold text-gray-900">
Cloud Computing Course Description
</h2>

<p>
Cloud computing is the use of services such as servers, storage,
databases, networking, and software delivered over the internet,
commonly referred to as the <span className={highlight}>cloud</span>.
</p>

<p>
The backend infrastructure including hardware, servers,
and networking is completely managed by the cloud provider,
allowing organizations to focus on application development
and business solutions.
</p>

<p>
Our instructor-led training program covers
<span className={highlight}> AWS Solutions Architect – Associate</span>
and <span className={highlight}> AWS SysOps Administrator</span>.
</p>

<p>
The course teaches how to design, deploy, and manage
cloud services on <span className={highlight}>Amazon Web Services (AWS)</span>,
covering Infrastructure as a Service (IaaS) and DevOps practices.
</p>

<p>
Students will gain hands-on experience with AWS services,
Linux systems, networking concepts, automation tools,
monitoring systems, and real-world cloud deployment scenarios.
</p>

<p>
By the end of the program, learners will have the skills required
to work as Cloud Engineers, AWS Architects,
DevOps Engineers, and Cloud Administrators.
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