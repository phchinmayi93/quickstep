"use client";

import { useEffect, useState } from "react";
import { Users, BookOpen, Layers, GraduationCap } from "lucide-react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Achievements() {
  return (
    <section className="py-24 bg-[#00006c] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-[#ffb000] text-[#00006c] px-4 py-1 rounded-full text-sm font-semibold">
            ACHIEVEMENTS
          </span>

          <h2 className="text-4xl font-bold mt-6">
            Our Success in Numbers
          </h2>

          <p className="text-gray-300 mt-4">
            We are proud of our journey and the milestones we have achieved.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {/* Teachers */}
          <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition">
            <Users className="mx-auto text-[#ffb000]" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              <Counter target={125} />
            </h3>
            <p className="text-gray-300 mt-2">Teachers</p>
          </div>

          {/* Courses */}
          <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition">
            <BookOpen className="mx-auto text-[#ffb000]" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              <Counter target={130} />
            </h3>
            <p className="text-gray-300 mt-2">Courses</p>
          </div>

          {/* Batches */}
          <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition">
            <Layers className="mx-auto text-[#ffb000]" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              <Counter target={275} />
            </h3>
            <p className="text-gray-300 mt-2">Ongoing Batches</p>
          </div>

          {/* Professionals */}
          <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition">
            <GraduationCap className="mx-auto text-[#ffb000]" size={40} />
            <h3 className="text-3xl font-bold mt-6">
              <Counter target={45324} />
            </h3>
            <p className="text-gray-300 mt-2">Trained Professionals</p>
          </div>

        </div>

      </div>
    </section>
  );
}