"use client";

import {
  FaAward,
  FaUserTie,
  FaBriefcase,
  FaLaptopCode,
  FaClock,
  FaCheckCircle,
  FaBuilding,
  FaUsers
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    text: "30+ Years of Training Excellence",
  },
  {
    icon: <FaUserTie />,
    text: "Highly Experienced & Certified Trainers",
  },
  {
    icon: <FaBriefcase />,
    text: "Industry-Based & Job-Oriented Curriculum",
  },
  {
    icon: <FaLaptopCode />,
    text: "Hands-on Projects & Real-Time Practical Exposure",
  },
  {
    icon: <FaClock />,
    text: "Flexible Batches & Personal Attention",
  },
  {
    icon: <FaCheckCircle />,
    text: "100% Quality Training & Placement Assistance",
  },
  {
    icon: <FaBuilding />,
    text: "Modern Infrastructure & Learning Environment",
  },
  {
    icon: <FaUsers />,
    text: "Trusted by Thousands of Students Across India & Abroad",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#0f172a] mb-16">
          Why Quickstep is the <span className="text-yellow-500">Most Preferred Choice?</span>
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl text-yellow-500 mb-4 flex justify-center">
                {item.icon}
              </div>

              <p className="text-gray-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}