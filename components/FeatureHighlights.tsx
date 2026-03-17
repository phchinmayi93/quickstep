"use client";

import { TrendingUp, BookOpen, Users, GraduationCap } from "lucide-react";

export default function FeatureHighlights() {
  return (
    <section className="relative -mt-34 z-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD TEMPLATE */}
          {[
            {
              icon: <TrendingUp size={30} />,
              title: "Trending Courses",
              desc: "We hunt down the Teds upcomming on the IT Industry and provide these treding Courses to our Students.",
            },
            {
              icon: <BookOpen size={30} />,
              title: "Course Material",
              desc: "We provide the excellently prepared Course material, PDF's, the Course hierachy to our students to refer.",
            },
            {
              icon: <Users size={30} />,
              title: "Certified Teachers",
              desc: "Trainers in Quickstep Institute are Certified and Well Experienced all over the IT Industry in its Technologies.",
            },
            {
              icon: <GraduationCap size={30} />,
              title: "Certification",
              desc: "We are ISO Certified 2001:2008 Certified Training Institute | Accredited by NABET(QCI) ,	Well Authorised.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-[#00006c] text-white p-8 rounded-xl text-center shadow-xl transition duration-300 hover:bg-[#ffb000] hover:text-[#00006c] hover:-translate-y-3 hover:shadow-2xl min-h-[280px] flex flex-col justify-center"
            >
              {/* ICON */}
              <div className="w-20 h-20 mx-auto bg-[#ffb000] text-[#00006c] rounded-full flex items-center justify-center mb-6 shadow-lg transition duration-300 group-hover:bg-[#00006c] group-hover:text-white group-hover:scale-110">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 transition duration-300">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-base opacity-90 transition duration-300">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
