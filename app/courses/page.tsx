"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {

const [search,setSearch] = useState("");
const [category,setCategory] = useState("All");

const truncateText = (text:string,limit:number)=>{
return text.length > limit ? text.slice(0,limit)+"..." : text;
};

const courses = [
{slug:"data-science",title:"Data Science",category:"IT",badge:"Trending",image:"/Data.png",description:"Quickstep offers the Best Data Science Training in RT Nagar Bangalore designed for students, freshers, IT professionals, analysts, and job seekers who want to build a career in the rapidly growing data analytics field."},
{slug:"data-analytics",title:"Data Analytics",category:"IT",badge:"Popular",image:"/DataAnalytics.png",description:"Quickstep offers the Best Data Analytics Training in RT Nagar Bangalore for students, professionals, and freshers who want to master business analytics"},
{slug:"cloud-computing",title:"Cloud Computing",category:"IT",badge:"Popular",image:"/CloudComputing.png",description:"Cloud computing is the the use of various services, such as software development platforms, servers, storage and software, over the internet, often referred to as the cloud.... The back-end of the application (especially hardware) is completely managed by a cloud vendor."},
{slug:"machine-learning-ai",title:"Machine Learning & Artificial Intelligence",category:"IT",badge:"Popular",image:"/AIML.png",description:"Artificial Intelligence (AI) has a long history but is still properly and actively growing and changing. In this course, you'll become familiar with the essentials of current AI"},
{slug:"pythonfullstack",title:"Python Full STack",category:"IT",badge:"Popular",image:"/Full_Stack_Python.jpg",description:"The Full Stack Python Course is designed for students and professionals who want to build modern web applications using Python technologies. This course covers frontend and backend development, database integration and deployment. It helps learners build the practical skills required to develop professional web applications."},
{slug:"tally-prime",title:"Tally Prime",category:"IT",badge:"Popular",image:"/TallyPrime.jpg",description:"Management Information Systems for decision making."},


{slug:"cybersecurity",title:"Cyber Security",category:"IT",badge:"Trending",image:"/CyberSecurity.png",description:"Quickstep offers the Best Data Science Training in RT Nagar Bangalore designed for students, freshers, IT professionals, analysts, and job seekers who want to build a career in the rapidly growing data analytics field."},
{slug:"mechanical-cadd",title:"Mechanical CADD",category:"CAD",badge:"Trending",image:"https://quickstepblr.com/images/courses/mechanicalcadd1.png",description:"Mechanical design, 3D modeling, simulation and drafting training."},

{slug:"electrical-cadd",title:"Electrical CADD",category:"CAD",badge:"Popular",image:"https://quickstepblr.com/images/courses/electricalcadd/ELectrical 1.jpg",description:"Electrical design, circuit diagrams, panel drafting and control systems."},

{slug:"civil-architectural-cadd",title:"Civil Architectural CADD",category:"CAD",badge:"Trending",image:"https://quickstepblr.com/images/courses/architexturalcadd/ACAD civil 1.jpg",description:"AutoCAD, Revit, SketchUp, 3Ds Max and structural design tools."},

{slug:"interior-designing",title:"Interior Designing",category:"CAD",badge:"New",image:"https://quickstepblr.com/images/courses/interiordesigning1.png",description:"Interior design training with 3D visualization and architectural tools."},

{slug:"digital-marketing",title:"Digital Marketing",category:"Marketing",badge:"Popular",image:"https://quickstepblr.com/images/courses/IT/Digital Marketing 1.jpg",description:"SEO, SEM, Social Media Marketing, Google Ads and online branding."},

{slug:"python",title:"Python",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/Python 1.jpg",description:"Python programming from basics to advanced including automation."},


{slug:"testing",title:"Software Testing",category:"IT",badge:"Popular",image:"https://quickstepblr.com/images/courses/IT/Software Engineer  (1).png",description:"Manual testing, automation testing and Selenium tools."},

{slug:"java-programming",title:"Java Programming",category:"IT",badge:"Trending",image:"/Java.png",description:"Core Java and Advanced Java with enterprise application development."},
{slug:"mean-full-stack",title:"Mean Stack",category:"IT",badge:"Trending",image:"/mean.jpg",description:"MongoDB, Express, React, Node.js full stack development."},

{slug:"mern",title:"MERN Stack",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/MERN.jpg",description:"MongoDB, Express, React, Node.js full stack development."},

{slug:"react-native",title:"React Native",category:"IT",badge:"New",image:"https://quickstepblr.com/images/courses/IT/React Native 1.jpg",description:"Cross platform mobile development using React Native."},

{slug:"aws",title:"AWS",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/aws1.png",description:"Amazon Web Services cloud architecture and deployment."},

{slug:"devops",title:"DevOps",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/DEV0ps1.jpg",description:"CI/CD pipelines, Docker, Kubernetes and automation tools."},

{slug:"big-data-and-hadoop",title:"Big Data & Hadoop",category:"IT",badge:"Popular",image:"https://quickstepblr.com/images/courses/IT/big data 1.jpg",description:"Big data processing using Hadoop ecosystem."},

{slug:"sql-and-database-management",title:"SQL & Database",category:"IT",badge:"Popular",image:"https://quickstepblr.com/images/courses/MIs/sql1.jpg",description:"Database design, SQL queries and data management."},

{slug:"tableau",title:"Tableau",category:"IT",badge:"New",image:"/Tableau-2-Banner.jpg",description:"Data visualization and analytics using Tableau."},

{slug:"nlp",title:"NLP",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/NLP1.png",description:"Natural Language Processing and AI text analysis."},

{slug:"android",title:"Android Development",category:"IT",badge:"Popular",image:"/Android.png",description:"Mobility Android training imparts the knowledge and skills to take on the Android world. The learner will experience the essentials of the Android application plan. Beginning with the exhibition of the IDE's, the preparation takes you through android improvement devices, for example, AVD and ADB. This preparation will expand your competency by encouraging active presentation with Android application advancement and Google Web administration. All through the course, the student will go over constant models that can serve a solid establishment while dealing with live tasks."},

{slug:"c-programming",title:"C Programming",category:"IT",badge:"Popular",image:"https://quickstepblr.com/images/courses/IT/C1.png",description:"Structured programming and system level programming."},

{slug:"j2ee-technology",title:"J2EE Technology",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/IT/J2EE-1.jpg",description:"Enterprise Java development including Servlets and JSP."},

{slug:"vba-programming-in-excel",title:"VBA Programming",category:"IT",badge:"New",image:"/VBA.jpeg",description:"Excel automation and macro programming using VBA."},

{slug:"computer-basic",title:"Computer Basics",category:"IT",badge:"New",image:"https://quickstepblr.com/images/courses/IT/Ms Office 1.png",description:"Basic computer operations and office productivity tools."},

{slug:"hardware-networking",title:"Hardware & Networking",category:"IT",badge:"Popular",image:"https://quickstepblr.com/images/courses/IT/Hardware - Networking 1.png",description:"Computer hardware components and network management."},

{slug:"oracle",title:"Oracle Database",category:"IT",badge:"Trending",image:"https://quickstepblr.com/images/courses/Oracle/oracle_1.jpg",description:"Oracle DBMS architecture and database administration."},

{slug:"sap-abap",title:"SAP ABAP",category:"SAP",badge:"Trending",image:"https://quickstepblr.com/images/courses/SAP/abap.jpg",description:"SAP programming language for enterprise customization."},

{slug:"sap-fico",title:"SAP FICO",category:"SAP",badge:"Popular",image:"https://quickstepblr.com/images/courses/SAP/sapfico1.jpg",description:"Financial accounting and controlling module in SAP."},

{slug:"sap-mm-material-management",title:"SAP MM",category:"SAP",badge:"Trending",image:"https://quickstepblr.com/images/courses/SAP/sapmm1.jpg",description:"Material management and procurement processes in SAP."},

{slug:"sap-pp-products-and-planning",title:"SAP PP",category:"SAP",badge:"Trending",image:"https://quickstepblr.com/images/courses/SAP/SAP-PP 1.jpg",description:"Production planning and manufacturing processes in SAP."},

{slug:"sap-hana",title:"SAP HANA",category:"SAP",badge:"Trending",image:"https://quickstepblr.com/images/courses/SAP/What-is-Sap-Hana1.jpg",description:"Next generation SAP in-memory database platform."},

{slug:"success-factors",title:"SAP SuccessFactors",category:"SAP",badge:"New",image:"https://quickstepblr.com/images/courses/SAP/SAP-SuccessFactors-MarketPlace1.jpg",description:"Cloud based human capital management system."},

{slug:"sap-hr-human-resource",title:"SAP HR",category:"SAP",badge:"Popular",image:"https://quickstepblr.com/images/courses/SAP/HR 1.jpg",description:"Human resource management and payroll system."},

{slug:"human-resource",title:"Human Resource",category:"Management",badge:"Popular",image:"https://quickstepblr.com/images/courses/HR/HR-career1.jpg",description:"Human resource management and corporate HR practices."},

{slug:"placement-training",title:"Placement Training",category:"Management",badge:"Trending",image:"https://quickstepblr.com/images/courses/HR/logos1.jpg",description:"Interview preparation, soft skills and placement assistance."},

{slug:"ppm",title:"Project Planning Management",category:"Management",badge:"New",image:"/Project Planning Management.png",description:"Project management tools, planning and scheduling."},

{slug:"mis",title:"MIS",category:"Management",badge:"Popular",image:"https://quickstepblr.com/images/courses/MIs/MIS1.jpg",description:"Management Information Systems for decision making."},
{slug:"cpp-programming",title:"CPP Programming",category:"IT",badge:"Popular",image:"/c++1.png",description:"Management Information Systems for decision making."},
{slug:"basic",title:"Diploma In Computer Basic (DCA)",category:"IT",badge:"Popular",image:"/Ms Office 1.png",description:"Management Information Systems for decision making."},



];

const categories=["All","IT","CAD","SAP","Marketing","Management"];

const filteredCourses=courses.filter(course =>
course.title.toLowerCase().includes(search.toLowerCase()) &&
(category==="All" || course.category===category)
);

return(

<div className="bg-gray-50 min-h-screen">

{/* HERO */}

<div className="bg-[#00006c] text-white py-20 text-center">
<h1 className="text-5xl font-bold mb-4">Explore Our Professional Courses</h1>
<p className="text-gray-300 max-w-2xl mx-auto">
Choose from industry oriented training programs designed to build your career.
</p>
</div>

<div className="max-w-7xl mx-auto px-6 py-16">

{/* SEARCH */}

<div className="flex justify-center mb-10">

<input
type="text"
placeholder="Search courses..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full md:w-[420px] px-6 py-3 rounded-full border border-gray-300 shadow-md focus:ring-2 focus:ring-[#ffb000]"
/>

</div>

{/* CATEGORY FILTER */}

<div className="flex flex-wrap justify-center gap-4 mb-14">

{categories.map(cat =>(

<button
key={cat}
onClick={()=>setCategory(cat)}
className={`px-5 py-2 rounded-full font-medium transition
${category===cat
? "bg-[#ffb000] text-[#00006c]"
: "bg-white shadow hover:bg-gray-100"}
`}
>

{cat}

</button>

))}

</div>

{/* COURSE GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{filteredCourses.map(course =>(

<div key={course.slug}
className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col">

<div className="relative h-52 overflow-hidden">

<Image
src={encodeURI(course.image)}
alt={course.title}
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

<span className="absolute top-4 left-4 bg-[#ffb000] text-[#00006c] text-xs px-3 py-1 rounded-full font-semibold">
{course.badge}
</span>

</div>

<div className="p-6 flex flex-col flex-grow">

<h2 className="text-xl font-bold text-[#00006c] mb-3 text-center">
{course.title}
</h2>

<p className="text-gray-600 text-lg mb-6 text-center" >
{truncateText(course.description,120)}
</p>

<Link
href={`/courses/${course.slug}`}
className="mt-auto text-center bg-[#ffb000] text-[#00006c] px-6 py-3 rounded-full font-semibold hover:bg-[#00006c] hover:text-white transition"
>

View Course →

</Link>

</div>

</div>

))}

</div>

</div>

</div>

);

}