"use client";

import { useState } from "react";

export default function AdminCourses(){

const [courses,setCourses] = useState([

"Data Science",
"Data Analytics",
"Artificial Intelligence",
"Machine Learning",
"Full Stack Developer",
"MERN Stack Developer",
"Cyber Security",
"Cloud Computing",
"AWS DevOps",
"Software Testing",
"UI/UX Design",
"Digital Marketing"

]);

return(

<div className="flex min-h-screen bg-gray-100">

{/* SIDEBAR */}

<div className="w-64 bg-[#00006c] text-white flex flex-col">

<h1 className="text-2xl font-bold p-6 border-b border-white/20">
Quickstep Admin
</h1>

<nav className="flex flex-col p-4 space-y-3">

<a href="/admin" className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded">
Dashboard
</a>

<a href="/admin/enrollments" className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded">
Enrollments
</a>

<a href="/admin/students" className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded">
Students
</a>

<a href="/admin/courses" className="bg-[#ffb000] text-black px-4 py-2 rounded font-semibold">
Courses
</a>

</nav>

</div>

{/* CONTENT */}

<div className="flex-1 p-10">

<h1 className="text-3xl font-bold text-[#00006c] mb-6">
Courses
</h1>

<div className="grid md:grid-cols-3 gap-6">

{courses.map((course,index)=>(

<div
key={index}
className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
>

<h3 className="font-semibold text-lg text-[#00006c]">
{course}
</h3>

<button className="mt-4 bg-[#ffb000] text-black px-4 py-2 rounded font-semibold">

Edit Course

</button>

</div>

))}

</div>

</div>

</div>

)

}