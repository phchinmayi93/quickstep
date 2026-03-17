"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminEnrollments() {

const [enrollments,setEnrollments] = useState<any[]>([]);
const [search,setSearch] = useState("");
const [loading,setLoading] = useState(true);

useEffect(()=>{

const fetchEnrollments = async()=>{

try{

const res = await fetch("/api/admin/enrollments");
const data = await res.json();

if(data.success){
setEnrollments(data.data);
}

}catch(err){
console.log(err);
}

setLoading(false);

}

fetchEnrollments();

},[]);



/* DELETE STUDENT */

const deleteStudent = async(id:string)=>{

if(!confirm("Delete this enrollment?")) return;

try{

await fetch(`/api/admin/enrollments/${id}`,{
method:"DELETE"
});

setEnrollments(prev=>prev.filter(s=>s._id !== id));

}catch(err){
console.log(err);
}

};



/* SEARCH FILTER */

const filtered = enrollments.filter((s:any)=>
s.name?.toLowerCase().includes(search.toLowerCase()) ||
s.phone?.includes(search)
);



if(loading){
return <div className="p-10 text-lg">Loading enrollments...</div>
}



return (

<div className="flex min-h-screen bg-gray-100">


{/* SIDEBAR */}

<div className="w-64 bg-[#00006c] text-white flex flex-col">

<h1 className="text-2xl font-bold p-6 border-b border-white/20">
Quickstep Admin
</h1>

<nav className="flex flex-col p-4 space-y-3">

<Link
href="/admin"
className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded"
>
Dashboard
</Link>

<Link
href="/admin/enrollments"
className="bg-[#ffb000] text-black px-4 py-2 rounded font-semibold"
>
Enrollments
</Link>

<Link
href="/admin/students"
className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded"
>
Students
</Link>

<Link
href="/admin/courses"
className="hover:bg-[#ffb000] hover:text-black px-4 py-2 rounded"
>
Courses
</Link>

</nav>

</div>



{/* MAIN CONTENT */}

<div className="flex-1 p-10">

<h1 className="text-3xl font-bold text-[#00006c] mb-6">
Admin Enrollment Panel
</h1>



{/* SEARCH */}

<input
placeholder="Search by name or phone..."
className="border p-3 rounded mb-6 w-72"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>



<div className="bg-white rounded-xl shadow-lg overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-[#00006c] text-white">

<tr>

<th className="p-4 text-left">Name</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Course</th>
<th className="p-4 text-center">Fee</th>
<th className="p-4 text-center">Installments</th>
<th className="p-4 text-center">Paid</th>
<th className="p-4 text-center">Balance</th>
<th className="p-4 text-center">Progress</th>
<th className="p-4 text-center">Action</th>

</tr>

</thead>



<tbody>

{filtered.map((student:any)=>{

const totalPaid =
student.installments?.reduce(
(sum:number,inst:any)=> sum + Number(inst.amount || 0),
0
) || 0;

const balance = Number(student.courseFee || 0) - totalPaid;

const progress = student.courseFee
? (totalPaid / student.courseFee) * 100
: 0;



return(

<tr key={student._id} className="border-b hover:bg-gray-50">

<td className="p-4 font-medium">
{student.name}
</td>

<td className="p-4">
{student.phone}
</td>

<td className="p-4">
{student.courseTitle}
</td>

<td className="p-4 text-center font-semibold">
₹{student.courseFee}
</td>

<td className="p-4 text-center">
{student.installments?.length || 0}
</td>

<td className="p-4 text-center text-green-600 font-semibold">
₹{totalPaid}
</td>

<td className="p-4 text-center text-red-600 font-semibold">
₹{balance}
</td>



{/* PROGRESS BAR */}

<td className="p-4">

<div className="w-full bg-gray-200 rounded-full h-2">

<div
className="bg-green-500 h-2 rounded-full"
style={{width:`${progress}%`}}
/>

</div>

</td>



{/* ACTIONS */}

<td className="p-4 flex gap-2 justify-center">

<Link
href={`/admin/enrollments/view/${student._id}`}
className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
>
View
</Link>

<a
href={`/api/admin/enrollments/pdf?id=${student._id}`}
className="bg-[#ffb000] text-black px-3 py-1 rounded text-sm"
>
PDF
</a>

<button
onClick={()=>deleteStudent(student._id)}
className="bg-red-500 text-white px-3 py-1 rounded text-sm"
>
Delete
</button>

</td>

</tr>

)

})}

</tbody>

</table>

</div>

</div>

</div>

);

}