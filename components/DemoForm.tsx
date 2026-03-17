"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function DemoForm({ onClose }: Props) {

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
course: "",
message: ""
});

const courses = [
"Data Science",
"Data Analytics",
"Artificial Intelligence",
"Machine Learning",
"Python Programming",
"Full Stack Developer",
"MERN Stack Developer",
"Digital Marketing",
"SAP S/4 HANA",
"Cyber Security",
"Interior Design",
"Engineering Design",
"AutoCAD",
"Revit Architecture",
"SolidWorks",
"Ansys",
"Power BI",
"Advanced Excel",
"English Language Training"
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleCourseSelect = (course: string) => {
setFormData({
...formData,
course
});
};

const handleSubmit = async (e: React.FormEvent) => {

e.preventDefault();
setLoading(true);

try {

await fetch("/api/download-syllabus",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
...formData,
course: formData.course || "General Enquiry"
})
});

alert("✅ Enquiry submitted successfully!");

onClose();

} catch(error){
alert("❌ Something went wrong. Please try again.");
}

setLoading(false);

};

return (

<div
className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4"
onClick={onClose}
>

<div
className="bg-white rounded-xl shadow-2xl grid md:grid-cols-2 w-full max-w-[1000px] max-h-[90vh] overflow-hidden relative"
onClick={(e)=>e.stopPropagation()}
>

{/* CLOSE BUTTON */}

<button
onClick={onClose}
className="absolute right-4 top-3 text-xl font-bold text-gray-500 hover:text-red-500"
>
✕
</button>

{/* LEFT IMAGE */}

<div className="hidden md:flex bg-[#ffb000] items-center justify-center p-10">

<Image
src="/demo-illustration.jpeg"
alt="Student"
width={420}
height={420}
className="object-contain"
/>

</div>

{/* RIGHT FORM */}

<div className="p-6 overflow-y-auto">

<h3 className="text-xl font-bold mb-5 text-[#00006c]">
Quickstep Course Enquiry
</h3>

<form onSubmit={handleSubmit} className="space-y-4">

{/* NAME */}

<input
name="name"
placeholder="Name *"
required
onChange={handleChange}
className="w-full bg-gray-100 border border-gray-200 rounded-md p-3 text-sm"
/>

{/* PHONE */}

<div className="flex gap-3">

<select className="border bg-gray-100 rounded-md p-3 w-[40%] text-sm">
<option>India (91)</option>
</select>

<input
name="phone"
placeholder="Phone *"
required
onChange={handleChange}
className="border bg-gray-100 rounded-md p-3 w-full text-sm"
/>

</div>

{/* EMAIL */}

<input
name="email"
placeholder="Email *"
required
onChange={handleChange}
className="w-full bg-gray-100 border border-gray-200 rounded-md p-3 text-sm"
/>

{/* COURSE TAGS */}

<div className="pt-2">

<p className="text-sm font-semibold mb-2">
Select Course
</p>

<div className="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto text-sm">

{courses.map((course)=>(
<button
type="button"
key={course}
onClick={()=>handleCourseSelect(course)}
className={`px-3 py-1 text-xs rounded-md border transition
${formData.course===course
? "bg-[#00006c] text-white border-[#00006c]"
: "bg-gray-100 border-gray-300 hover:bg-gray-200"
}`}
>
{course}
</button>
))}

</div>

</div>

{/* MESSAGE */}

<textarea
name="message"
placeholder="Please describe your inquiry..."
rows={4}
onChange={handleChange}
className="w-full bg-gray-100 border border-gray-200 rounded-md p-3 text-sm"
/>

{/* SUBMIT BUTTON */}

<div className="text-center pt-2">

<button
type="submit"
disabled={loading}
className="bg-[#00006c] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition disabled:opacity-50"
>

{loading ? "Submitting..." : "Submit Request →"}

</button>

</div>

{/* OR TEXT */}

<p className="text-center text-sm mt-6 font-semibold underline">
Or, let's get on a 1-on-1 with a Mentor:
</p>

{/* DEMO BUTTON */}

<div className="text-center mt-4">

<button
type="button"
className="bg-[#ffb000] text-[#00006c] px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition"
>
📅 Book A Free Demo Class
</button>

</div>

{/* DISCLAIMER */}

<p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
By providing a telephone number and submitting this form you are consenting
to be contacted by SMS text message. Message & data rates may apply.
You can reply STOP to opt-out of further messaging.
</p>

</form>

</div>

</div>

</div>

);

}