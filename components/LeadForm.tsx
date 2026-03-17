"use client";

import { useState } from "react";

type LeadFormProps = {
course: string;
pdf: string;
onClose: () => void;
};

export default function LeadForm({ course, pdf, onClose }: LeadFormProps) {

const [formData, setFormData] = useState({
name: "",
email: "",
phone: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();


try {

  const res = await fetch("/api/download-syllabus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...formData,
      course
    })
  });

  const data = await res.json();

  if (data.success) {

    const link = document.createElement("a");
    link.href = pdf;
    link.download = `${course}-syllabus.pdf`;
    link.click();

    onClose();

  }

} catch (error) {
  console.error(error);
}


};

return (


<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

  <form
    onSubmit={handleSubmit}
    className="bg-white w-[420px] rounded-2xl shadow-2xl p-8 relative"
  >

    <button
      type="button"
      onClick={onClose}
      className="absolute top-4 right-5 text-gray-500 text-xl hover:text-red-500"
    >
      ✕
    </button>

    <h3 className="text-2xl font-bold text-[#00006c] text-center mb-6">
      Download Syllabus
    </h3>

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-3 mb-4"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-3 mb-4"
    />

    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      required
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-3 mb-6"
    />

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
    >
      Submit & Download
    </button>

  </form>

</div>


);

}
