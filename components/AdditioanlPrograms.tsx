"use client";

import {
  Database,
  Code,
  BarChart3,
  Calculator,
  DraftingCompass,
  Layout,
  Keyboard,
  Brain,
  Bot,
  Sparkles,
  Cpu,
  Eye
} from "lucide-react";

export default function AdditionalPrograms() {

  const programs = [

    {
      title: "SAP Training",
      desc: "FI/CO, HR, MM, ABAP, SD, BI, WM, EWM, BW – S/4 HANA",
      icon: Database
    },
  
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript, React, Node.js",
      icon: Layout
    },
    {
      title: "Advanced Excel, Power BI & SQL",
      desc: "Business analytics and reporting tools",
      icon: BarChart3
    },

    /* AI COURSES */

    {
      title: "Artificial Intelligence & Machine Learning",
      desc: "ML algorithms, deep learning and real-world AI applications",
      icon: Brain
    },
    {
      title: "Generative AI",
      desc: "ChatGPT, OpenAI APIs, LLM development and AI applications",
      icon: Sparkles
    },
    {
      title: "Prompt Engineering",
      desc: "Advanced prompting techniques and LLM optimization",
      icon: Bot
    },
    {
      title: "AI Automation with Python",
      desc: "Build AI workflows and automation tools",
      icon: Cpu
    },
    {
      title: "Computer Vision",
      desc: "Image recognition, object detection and OpenCV",
      icon: Eye
    },
    {
      title: "Natural Language Processing",
      desc: "Chatbots, speech recognition and language models",
      icon: Brain
    },
    {
      title: "AI Agents Development",
      desc: "Build autonomous AI agents and automation systems",
      icon: Bot
    },
    {
      title: "Tableau & Data Visualization",
      desc: "Interactive dashboards and visual analytics",
      icon: BarChart3
    },

    /* EXISTING COURSES */

    {
      title: "Tally Prime with GST",
      desc: "Accounting and financial management training",
      icon: Calculator
    },
    {
      title: "AutoCAD",
      desc: "Mechanical, Civil, Architectural, Electrical design",
      icon: DraftingCompass
    },
    {
      title: "Interior Design",
      desc: "Creative interior planning and space design training",
      icon: Layout
    },
  

  ];

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#00006c]">
            Additional <span className="text-yellow-500">Programs</span>
          </h2>

          <p className="text-gray-500 mt-3">
            Expand your skills with industry-relevant professional courses
          </p>

        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {programs.map((program, index) => {

            const Icon = program.icon;

            return (

              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 border hover:border-yellow-400"
              >

                {/* Icon */}

                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#00006c] text-white mb-5 group-hover:bg-yellow-500 transition">
                  <Icon size={26} />
                </div>

                {/* Title */}

                <h3 className="font-semibold text-lg text-[#00006c] mb-2">
                  {program.title}
                </h3>

                {/* Description */}

                <p className="text-gray-600  mb-4">
                  {program.desc}
                </p>

                {/* Button */}

                <button className=" font-semibold text-[#00006c] group-hover:text-yellow-500 transition">
                  Explore Course →
                </button>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}