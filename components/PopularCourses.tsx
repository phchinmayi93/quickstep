"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {

const popularCourses = [
{
title: "Data Science",
image: "/Data.png",
slug: "data-science",
rating: "4.8",
students: "8,500",
duration: "4 Months",
level: "Beginner"
},
{
title: "Data Analytics",
image: "/DataAnalytics.png",
slug: "data-analytics",
rating: "4.7",
students: "6,200",
duration: "3 Months",
level: "Beginner"
},
{
title: "Artificial Intelligence",
image: "/AIML.png",
slug: "artificial-intelligence",
rating: "4.9",
students: "9,100",
duration: "5 Months",
level: "Advanced"
},
{
title: "Machine Learning",
image: "/ML AL1.jpg",
slug: "machine-learning",
rating: "4.8",
students: "7,300",
duration: "4 Months",
level: "Intermediate"
},
{
title: "Full Stack Developer",
image: "/Full_Stack_Python.jpg",
slug: "full-stack",
rating: "4.9",
students: "11,000",
duration: "6 Months",
level: "Beginner"
},
{
title: "MERN Stack Developer",
image: "/MERN.jpg",
slug: "mern-stack",
rating: "4.8",
students: "8,900",
duration: "5 Months",
level: "Intermediate"
}
];

return (

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-blue-900">
Popular Courses
</h2>

<p className="text-gray-600 mt-3 text-lg">
Learn industry-demand skills with expert instructors
</p>

</div>

{/* Courses Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

{popularCourses.map((course,index)=>(

<div
key={index}
className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden flex flex-col group"
>

{/* Course Image */}

<div className="relative w-full h-56 overflow-hidden">

<Image
src={course.image}
alt={course.title}
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

{/* Gradient Overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

{/* Trending Badge */}

<span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
Trending
</span>

</div>

{/* Course Content */}

<div className="p-6 flex flex-col flex-grow text-center">

<h3 className="text-xl font-semibold text-gray-800">
{course.title}
</h3>

{/* Rating */}

<div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-3">

<span className="text-yellow-500 text-lg">⭐</span>

<span>{course.rating}</span>

<span>•</span>

<span>{course.students} Students</span>

</div>

{/* Duration + Level */}

<div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-3">

<span>⏱ {course.duration}</span>

<span>📊 {course.level}</span>

</div>

{/* Buttons */}

<div className="flex gap-3 mt-auto pt-6">

<Link
href="/enrollment"
className="flex-1 text-center bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 transition text-sm font-bold"
>
Enroll Now
</Link>

<Link
href={`/courses/${course.slug}`}
className="flex-1 text-center bg-yellow-400 text-black py-2.5 rounded-lg hover:bg-yellow-500 transition text-sm font-bold"
>
View Details
</Link>

</div>

</div>

</div>

))}

</div>

</div>

</section>

);
}