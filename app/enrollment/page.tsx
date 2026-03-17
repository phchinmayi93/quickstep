"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EnrollmentPage() {

const [loading,setLoading] = useState(false);

const [formData,setFormData] = useState({
name:"",
address:"",
phone:"",
emergencyPhone:"",
email:"",
bloodGroup:"",
disability:"",
courseTitle:"",
aadhaar:"",
duration:"",
softwareUsed:"",
courseFee:"",
language1:"",
language2:"",
language3:"",
language4:"",
paymentType:"",
totalAmount:""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e:React.FormEvent)=>{
e.preventDefault();

setLoading(true);

try{

const res = await fetch("/api/enrollment",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
});

const data = await res.json();

if(res.ok && data.success){

alert("Enrollment submitted successfully!");

setFormData({
name:"",
address:"",
phone:"",
emergencyPhone:"",
email:"",
bloodGroup:"",
disability:"",
courseTitle:"",
aadhaar:"",
duration:"",
softwareUsed:"",
courseFee:"",
language1:"",
language2:"",
language3:"",
language4:"",
paymentType:"",
totalAmount:""
});

}else{
alert(data.message || "Failed to submit enrollment");
}

}catch(err){
console.log(err)
alert("Server Error. Please try again.");
}

setLoading(false);
};

return (

<div className="min-h-screen bg-gray-100 flex justify-center py-10">

<form
onSubmit={handleSubmit}
className="w-full max-w-5xl bg-white p-10 shadow-lg rounded-lg"
>

{/* HEADER */}

<div className="flex justify-between items-start border-b pb-6 mb-6">

<div className="flex flex-col items-center">

<Link href="/">
<Image
src="/logo1.png"
alt="logo"
width={450}
height={350}
className="object-contain"
/>
</Link>

<p className="text-base font-semibold text-gray-700 mt-2 text-center">
Contact: 9739204786 / 9743034376
</p>

</div>

{/* PHOTO */}

<div className="flex flex-col items-center">

<div className="w-24 h-28 border border-gray-400 flex items-center justify-center text-xs text-gray-500">
PHOTO
</div>

<input type="file" className="mt-2 text-xs"/>

</div>

</div>

{/* TITLE */}

<div className="flex justify-between items-center border-b pb-4 mb-8">

<h1 className="text-xl font-bold text-[#00006c]">
STUDENT'S ENROLLMENT
</h1>

<div className="flex gap-6">

<div className="flex items-center gap-2">
<label>Date</label>
<input className="w-10 border-b border-black text-center outline-none"/>
/
<input className="w-10 border-b border-black text-center outline-none"/>
/
<input className="w-14 border-b border-black text-center outline-none"/>
</div>

<div className="flex items-center gap-2">
<label>Time</label>
<input type="time" className="border p-2 rounded"/>
</div>

</div>

</div>

{/* STUDENT INFO */}

<h2 className="text-lg font-semibold mb-4">
Student Information
</h2>

<div className="grid md:grid-cols-2 gap-4 mb-4">

<input
name="name"
value={formData.name}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Student Name"
/>

<input
type="date"
className="border p-3 rounded"
/>

</div>

<input
name="address"
value={formData.address}
onChange={handleChange}
className="border p-3 rounded w-full mb-4"
placeholder="Address"
/>

<div className="grid md:grid-cols-2 gap-4 mb-4">

<input
name="phone"
value={formData.phone}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Phone Number"
/>

<input
name="emergencyPhone"
value={formData.emergencyPhone}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Emergency Contact"
/>

</div>

<input
name="email"
value={formData.email}
onChange={handleChange}
className="border p-3 rounded w-full mb-4"
placeholder="Email ID"
/>

<div className="grid md:grid-cols-2 gap-4 mb-6">

<input
name="bloodGroup"
value={formData.bloodGroup}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Blood Group"
/>

<input
name="disability"
value={formData.disability}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Disability"
/>

</div>

{/* COURSE */}

<h2 className="text-lg font-semibold mb-4">
Course Information
</h2>

<div className="grid md:grid-cols-2 gap-4 mb-4">

<input
name="courseTitle"
value={formData.courseTitle}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Course Title"
/>

<input
name="aadhaar"
value={formData.aadhaar}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Student Aadhaar"
/>

</div>

<div className="grid md:grid-cols-2 gap-4 mb-4">

<input
name="duration"
value={formData.duration}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Duration"
/>

<input
name="softwareUsed"
value={formData.softwareUsed}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Software Used"
/>

</div>

<input
name="courseFee"
value={formData.courseFee}
onChange={handleChange}
className="border p-3 rounded w-full mb-6"
placeholder="Course Fee"
/>

{/* LANGUAGES */}

<h2 className="text-lg font-semibold mb-4">
Languages
</h2>

<div className="grid md:grid-cols-4 gap-4 mb-6">

<input name="language1" value={formData.language1} onChange={handleChange} className="border p-3 rounded" placeholder="Language 1"/>

<input name="language2" value={formData.language2} onChange={handleChange} className="border p-3 rounded" placeholder="Language 2"/>

<input name="language3" value={formData.language3} onChange={handleChange} className="border p-3 rounded" placeholder="Language 3"/>

<input name="language4" value={formData.language4} onChange={handleChange} className="border p-3 rounded" placeholder="Language 4"/>

</div>

{/* PAYMENT */}

<h2 className="text-lg font-semibold mb-4">
Payment
</h2>

<div className="grid md:grid-cols-2 gap-4 mb-6">

<select
name="paymentType"
value={formData.paymentType}
onChange={handleChange}
className="border p-3 rounded"
>

<option value="">Select Payment Type</option>
<option value="Single Payment">Single Payment</option>
<option value="Installment">Installment</option>

</select>

<input
name="totalAmount"
value={formData.totalAmount}
onChange={handleChange}
className="border p-3 rounded"
placeholder="Total Amount"
/>

</div>

{/* INSTALLMENTS */}

<h2 className="text-lg font-semibold mb-4">
Installments
</h2>

<div className="space-y-4 mb-6">

{[1,2,3,4].map((i)=>(
<div key={i} className="grid grid-cols-4 gap-4 items-center">

<label className="font-medium col-span-1">
Installment {i}
</label>

<input
className="border p-3 rounded col-span-1"
placeholder="Amount"
/>

<input
type="date"
className="border p-3 rounded col-span-2"
/>

</div>
))}

</div>

<p className="text-red-600 font-semibold mb-6">
Fees once paid will not be refunded.
</p>

{/* SIGNATURE */}

<div className="grid md:grid-cols-2 gap-6 mb-6">

<input
className="border p-3 rounded"
placeholder="Student Signature"
/>

<input
className="border p-3 rounded"
placeholder="Counsellor Signature"
/>

</div>

<textarea
className="border p-3 rounded w-full mb-6"
rows={4}
placeholder="Comments"
/>

<button
type="submit"
disabled={loading}
className="bg-[#00006c] text-white py-3 px-10 rounded font-semibold hover:bg-[#ffb000] hover:text-black transition"
>

{loading ? "Submitting..." : "ENROLL NOW"}

</button>

</form>

</div>
);
}