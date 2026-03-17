"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Divya",
    role: "Business Manager",
    image:
      "14.jpg",
    message:
      "  I have finished my Architectural - Interior design CAD , this institute is very good for Design course , Highly experienced trainer supportive staff , i am thankful to  trainer . i started working as the design engineer in one of the reputed company,They provide me few projects while doing course and i am able to start my professional career I felt this is best interior designing Course Training Institute in R.T.Nagar Bengaluru. ",
  },
  {
    name: "Maseera Ali",
    role: "Marketing Expert",
    image:
      "5.jpg",
    message:
      "  Hi, i am Maseera Ali i have joined for Advance Excel Tally and SAP (Fico) the training was excellent i got indivitual attention Trainer was well experienced person & it was friendly Environment... i too refer my friends to join the Institute & they are very much happy.This is Best SAP,TALLY & EXCEL Training Institute in R.T.Nagar Bengaluru. They provide me Placement in small company working on Tally this is first job. ",
  },
  {
    name: "Saroj .K",
    role: "Marketing Expert",
    image:
      "11.jpeg",
    message:
      "   Hi This is one of the best training centre for full stack java Development & Best Python in R.T.Nagar. Me and my friends have done. We are very much happy. Institute has placement facility also. Excellent for freshers...",
  },

    {
    name: "Jaya Lakshmi",
    role: "Marketing Expert",
    image:
      "1.jpg",
    message:
      "         I have joined for Interior Design course (Auto Cad 3ds Max and Revit) successfully I have completed the course as par my knowledge it is one of the interior designing in Bengaluru, & got the placement as well.. The trainers are well experienced the course was very comprehensive and easy to understand Thank you....",
  },
    
  
    {
    name: "Amer Patil",
    role: "Marketing Expert",
    image:
      "6.jpg",
    message:
      "   Nice place to learn I would like to share my experience with you all.. Basically I am Mechanical engineer and decided to change my field then i studied Software Testing Selenium course in Quickstep computer centre . They have experience professionals Trainer who train you in practical way to make us understand, This is Best Software Testing training Centre in R.T.Nagar & now got placed in an it company as 'Testing engineer' #Training is Excellent #Flexible Timing # good Placement #You can also learn soft skills here Thanks to Management & especially to my trainer change my life.",
  },
    {
    name: "Ashutosh Singh",
    role: "Marketing Expert",
    image:
      "3.jpg",
    message:
      "This is best institute for online Classes I Have joined for Data science with python . It was awesome , I am very much satisficed there i did not feel different online line compare Offline classes,if you looking for Course this is best data science & python Training Institute. Trainer was very friendly and knowledgeable explanation very good and They arranged for me interview also ....",
  },
    {
    name: "Ravi.A",
    role: "Marketing Expert",
    image:
      "4.jpg",
    message:
      "   Quickstep Computer Centre Best Python AI- Data Science Training Institute in R.T.Nagar Bengaluru. I have done course here .Excellent training wl experienced trainer , Individual training , awesome explanation with project , I m very much happy bcz i got more then i expected . good caring for Placement for fresher . super management with excellent environment .",
  },
    {
    name: "Vaibhav",
    role: "Marketing Expert",
    image:
      "10.jpg",
    message:
      "    Joined to quickstep computer centre for SAP ABAP & HANA , Since i was fresher , i did this course , As i expected this course really help me out to get into corporate world , they really help me , finely i got a job in one of the MNC, I m really happy. This Institute is very good for fresher they provide best SAP ABAP & HANA Training. Thanks to quickstep computer centre.",
  },
    {
    name: "Roshan Pandit",
    role: "Marketing Expert",
    image:
      "9.jpg",
    message:
      "    Quickstep Computer Centre is Best Java with Android Training Institute in R.T.Nagar. I have done course here, they have highly experienced professional trainer. I was able to enhance my development skill. I thanks to Quickstep Computer Centre.",
  },
    {
    name: "Rithvik  Ayyapa",
    role: "Marketing Expert",
    image:
      "7.jpg",
    message:
      "  Hello ... friends I am a student of Quickstep Computer Centre, I learn Civil CAD after my civil eng....., I had done course my trainer had real time experience, he tough me very simple way, i could understand about the software , i enjoy , environment was excellent , they arranged Internship for me. and now I m getting real time experience.Quickstep Computer Centre is Best Civil CAD Training Institute in R.T.Nagar, I learn Autocad Revit Sketchup ETABS.",
  },

   {
    name: "Sajid Husain",
    role: "Marketing Expert",
    image:
      "12.jpg",
    message:
      "   Hi, I have joined Mechanical CAD course  for 3 software Auto CAD, Catia , Solidworks  . I am really satisficed with the trainer . Boz he has Realtime Experience and whatever he trainee  me ,  i am able to work on that .  This is best Mechanical CAD Training Institute for fresher. Who looking for Job . End of the course They Placed me in company . It's really worth it doing course at this Institute .",
  },
   {
    name: "Amardeep Kumar",
    role: "Marketing Expert",
    image:
      "8.jpeg",
    message:
      "  Quickstep Computer Centre is one of the Best SAP HANA Training Institute in Bengaluru. It's a fully Sophisticated Computer equipment's. The Trainer is having  excellent knowledge and experience in the Subject. Lab facility is really good. I Strongly recommend the Other SAP HANA Aspirants to join the Course. The Knowledge Which gain here is Very Use full in my Corporate Day-to day life....... Thanks to Quickstep",
					            
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="bg-[#ffb000] text-[#00006c] px-4 py-1 rounded-full text-sm font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl font-bold text-[#00006c] mt-6 leading-snug">
            Happy Clients Say About Us
          </h2>

          <p className="text-gray-600 mt-6">
            Our learners share their experiences and success stories after
            completing our courses.
          </p>

          <p className="mt-6 text-[#00006c] font-semibold">
            We Have <span className="text-[#ffb000]">1356+</span> Global Partners
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div className="bg-white shadow-xl rounded-2xl p-10 relative">

            {/* Client Image */}
            <div className="absolute -top-12 left-10">
              <img
                src={`${testimonial.image}?auto=format&fit=crop&w=200&q=80`}
                alt={testimonial.name}
                className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-md"
              />
            </div>

            <div className="pt-12">

              <h3 className="text-xl font-semibold text-[#00006c]">
                {testimonial.name}
              </h3>

              <p className="text-[#ffb000] text-sm font-medium mb-4">
                {testimonial.role}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {testimonial.message}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6 text-[#ffb000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffb000" />
                ))}
              </div>

            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-8 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-[#00006c]"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
