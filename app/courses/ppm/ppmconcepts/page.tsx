import Link from "next/link";

export default function PPMConcepts() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/PPM1.jpg"
              alt="Project Planning Management Course"
              className="w-full object-cover"
            />

            <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
              170 <span className="text-sm">SEATS</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-white p-8 rounded-xl shadow-md mt-6">

            <h3 className="text-2xl font-bold mb-4">
              Course Description
            </h3>

            <p className="text-gray-700 mb-4">
              Advance your skills in Infrastructure with Industry Experts and Peer Network.
              Apply Today! Recognise emerging trends in the Real Estate and Infrastructure.
            </p>

            <p className="text-gray-700">
              Project plan management involves creating a set of plans to help guide your
              team through the implementation and closure phases of the project. The plans
              created during this phase will help you manage time, cost, quality, changes,
              risk, and related issues.
            </p>

          </div>

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 h-fit">

          {/* TITLE + DOWNLOAD */}
          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-semibold">
              Course Syllabus
            </h3>

            <a
              href="/IT Syllabus/ppm concepts p.pdf"
              target="_blank"
            >
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
                Download Syllabus
              </button>
            </a>

          </div>


          {/* SYLLABUS LIST */}
          <ul className="space-y-4 mb-8 text-sm">

            <li className="border-b border-white/30 pb-2">
              Instructions to Project Planning and Management
            </li>

            <li className="border-b border-white/30 pb-2">
              What is a project?
            </li>

            <li className="border-b border-white/30 pb-2">
              What is project management?
            </li>

            <li className="border-b border-white/30 pb-2">
              Project management context
            </li>

            <li className="border-b border-white/30 pb-2">
              Processes of a project management
            </li>

            <li className="border-b border-white/30 pb-2">
              Initiation
            </li>

            <li className="border-b border-white/30 pb-2">
              Planning
            </li>

            <li className="border-b border-white/30 pb-2">
              Execution
            </li>

            <li className="border-b border-white/30 pb-2">
              Controlling
            </li>

            <li className="border-b border-white/30 pb-2">
              Closure
            </li>

            <li className="border-b border-white/30 pb-2">
              Knowledge areas in a project
            </li>

            <li className="border-b border-white/30 pb-2">
              Cost management
            </li>

            <li className="border-b border-white/30 pb-2">
              Scope management
            </li>

            <li className="border-b border-white/30 pb-2">
              Quality management
            </li>

            <li className="border-b border-white/30 pb-2">
              Risk management
            </li>

            <li className="border-b border-white/30 pb-2">
              Human resources management
            </li>

            <li className="border-b border-white/30 pb-2">
              Procurement management
            </li>

            <li className="border-b border-white/30 pb-2">
              Integration management
            </li>

            <li>
              Communication Management
            </li>

          </ul>


          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500">
              Contact Us
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}