"use client";

import {
  Award,
  Users,
  BookOpen,
  Laptop,
  Clock,
  Briefcase,
  Building,
  CreditCard,
  GraduationCap
} from "lucide-react";

export default function WhyChooseQuickstep() {

  const leftFeatures = [
    {
      icon: Clock,
      title: "Flexible Timing & Individual Attention",
      desc: "Flexible schedules designed to suit students and working professionals."
    },
    {
      icon: Briefcase,
      title: "100% Quality Training",
      desc: "Dedicated placement assistance and interview preparation."
    },
    {
      icon: Building,
      title: "Excellent Learning Environment",
      desc: "Modern labs and supportive academic atmosphere."
    },
    {
      icon: CreditCard,
      title: "No-Cost EMI Options",
      desc: "Affordable learning with flexible payment plans."
    },
    {
      icon: GraduationCap,
      title: "Hands-on Professional Skill Development",
      desc: "Build real-world technical and professional skills."
    },
    {
      icon: Users,
      title: "Placement Assistance",
      desc: "Dedicated career guidance including resume building, mock interviews, and job referrals to help students start successful careers."
    }
  ];

  const rightFeatures = [
    {
      icon: Award,
      title: "30+ Years of Training Excellence",
      desc: "Over three decades of delivering trusted professional education."
    },
    {
      icon: Users,
      title: "Highly Experienced Trainers",
      desc: "Learn from industry experts with real-world experience."
    },
    {
      icon: BookOpen,
      title: "Industry-Based Curriculum",
      desc: "Courses designed according to current industry standards."
    },
    {
      icon: Laptop,
      title: "Practical, Real-Time Projects",
      desc: "Hands-on project work to build practical experience."
    }
  ];

  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* BLUE INTRO BOX */}
          <div className="bg-[#00006c] text-white p-10 rounded-xl shadow-lg">

            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">Quickstep?</span>
            </h2>

            <p className="text-gray-200 leading-relaxed">
              Quickstep has been a trusted name in professional education for over three decades.
              With industry-driven training programs, experienced trainers, and practical learning
              methods, we prepare students to succeed in the modern job market.
            </p>

          </div>

          {/* LEFT FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {leftFeatures.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-[#00006c] rounded-lg">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-semibold text-lg text-[#00006c]">
                      {item.title}
                    </h3>

                  </div>

                  <p className="text-gray-600 ">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div className="grid md:grid-cols-2 gap-8">

          {rightFeatures.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center text-center"
              >

                {/* ICON */}
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-lg mb-5">
                  <Icon size={28} className="text-[#00006c]" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg text-[#00006c] mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600  max-w-xs">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}