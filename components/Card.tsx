import Link from "next/link";
import {
  FaChartBar,
  FaGlobe,
  FaReact,
  FaPython,
  FaShieldAlt,
  FaCloud,
  FaBug,
  FaDraftingCompass,
  FaDatabase
} from "react-icons/fa";

const courses = [
  { name: "Data Science & Analytics", icon: <FaChartBar />, link: "/courses/data-science" },
  { name: "Full Stack Development", icon: <FaGlobe />, link: "/courses/full-stack" },
  { name: "MERN Stack Development", icon: <FaReact />, link: "/courses/mern" },
  { name: "Python, Java, .Net Programming", icon: <FaPython />, link: "/courses/python" },
  { name: "SAP – All Modules", icon: <FaDatabase />, link: "/courses/sap-abap" },
  { name: "Cyber Security", icon: <FaShieldAlt />, link: "/courses/cybersecurity" },
  { name: "Cloud Computing (AWS, DevOps & Azure)", icon: <FaCloud />, link: "/courses/cloud-computing" },
  { name: "Software Testing", icon: <FaBug />, link: "/courses/testing" },
  { name: "CADD & Interior Design", icon: <FaDraftingCompass />, link: "/courses/interior-designing" },
];

export default function Card() {
  return (
    <section className="py-12 bg-blue-50">

      <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">
        Our Course Offerings
      </h2>

      <div className="flex flex-wrap justify-center gap-5 px-6">

        {courses.map((course, index) => (
          <Link key={index} href={course.link}>

            <div
              className="flex items-center gap-3 px-6 py-3
              bg-white border border-blue-200
              rounded-full shadow-sm
              hover:bg-yellow-200 hover:shadow-md
              transition duration-300 cursor-pointer"
            >
              <span className="text-blue-600 text-lg">
                {course.icon}
              </span>

              <span className="text-blue-900 font-medium">
                {course.name}
              </span>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}