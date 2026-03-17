"use client";

export default function CoursCard() {

  const courses = [
    {
      title: "Data Science",
      image: "/courses/data-science.jpg"
    },
    {
      title: "Data Analytics",
      image: "/courses/data-analytics.jpg"
    },
    {
      title: "Artificial Intelligence (AI)",
      image: "/courses/ai.jpg"
    },
    {
      title: "Machine Learning (ML)",
      image: "/courses/ml.jpg"
    },
    {
      title: "Full Stack Developer",
      image: "/courses/fullstack.jpg"
    },
    {
      title: "Cyber Security",
      image: "/courses/cyber.jpg"
    }
  ];

  return (
    <section className="py-12 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#00006c]">
            Popular <span className="text-yellow-500">Courses</span>
          </h2>

          <p className="text-gray-600 mt-3">
            Industry-focused courses designed to build real-world skills
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">

                <h3 className="text-lg font-semibold text-[#00006c] mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  Learn industry-ready skills with practical training and real-time projects.
                </p>

                {/* Buttons */}
                <div className="flex gap-3">

                  <button className="flex-1 border border-[#00006c] text-[#00006c] py-2 rounded-lg text-sm hover:bg-[#00006c] hover:text-white transition">
                    View Details
                  </button>

                  <button className="flex-1 bg-yellow-400 text-[#00006c] py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition">
                    Enroll Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}