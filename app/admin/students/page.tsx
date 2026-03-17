"use client";

import { useEffect, useState } from "react";

export default function AdminStudents(){

const [students,setStudents] = useState<any[]>([]);

useEffect(()=>{

fetch("/api/admin/enrollments")
.then(res=>res.json())
.then(data=>setStudents(data.data));

},[]);

const deleteStudent = async(id:string)=>{

if(!confirm("Delete student?")) return;

await fetch(`/api/admin/enrollments/${id}`,{
method:"DELETE"
});

setStudents(students.filter(s=>s._id !== id));

};

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

<a href="/admin/students" className="bg-[#ffb000] text-black px-4 py-2 rounded font-semibold">
Students
</a>

<a href="/admin/courses" className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded">
Courses
</a>

</nav>

</div>

{/* CONTENT */}

<div className="flex-1 p-10">

<h1 className="text-3xl font-bold text-[#00006c] mb-6">
Students List
</h1>

<div className="bg-white rounded-xl shadow overflow-x-auto">

<table className="w-full">

<thead className="bg-[#00006c] text-white">

<tr>

<th className="p-4 text-left">Name</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Course</th>
<th className="p-4 text-center">Action</th>

</tr>

</thead>

<tbody>

{students.map((student,index)=>(

<tr key={index} className="border-b hover:bg-gray-50">

<td className="p-4">{student.name}</td>
<td className="p-4">{student.phone}</td>
<td className="p-4">{student.courseTitle}</td>

<td className="p-4 text-center">

<button
onClick={()=>deleteStudent(student._id)}
className="bg-red-500 text-white px-4 py-2 rounded"
>

Delete

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}