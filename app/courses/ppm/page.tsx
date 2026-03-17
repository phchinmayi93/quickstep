import Link from "next/link";

export default function PPMCourse() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/Project Planning Management.png"
              alt="Project Planning and Management Course"
              className="w-full object-cover"
            />

            <div className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">
              20 <span className="text-sm">SEATS</span>
            </div>
          </div>


          {/* COURSE CONTENT */}
          <div className="bg-white p-8 rounded-xl shadow-md mt-6">

            <h3 className="text-2xl font-bold mb-2">
              Best Project Planning & Management (PPM) Training in RT Nagar Bangalore
            </h3>

            <h3 className="text-xl font-semibold mb-6">
              Course Description – PPM (Project Planning & Management)
            </h3>

            <p className="text-gray-700 mb-4">
              Quickstep offers the <strong>Best Project Planning and Management Training in RT Nagar Bangalore</strong> for engineering students, construction professionals, planners, and project managers. This course equips learners with industry-standard tools and techniques used in real estate, infrastructure, construction, manufacturing, and IT project environments.
            </p>

            <p className="text-gray-700 mb-4">
              Project Planning & Management involves developing a detailed plan that guides the execution, monitoring, control, and closure of a project. It includes planning time schedules, cost estimation, resource allocation, risk analysis, quality management, and project reporting.
            </p>

            <p className="text-gray-700 mb-6">
              As one of the <strong>Best PPM Training Institutes in RT Nagar Bangalore</strong>, Quickstep provides hands-on training using globally recognized project management software such as MS Project and Primavera.
            </p>


            {/* WHAT YOU WILL LEARN */}
            <h4 className="text-lg font-semibold mb-3">
              What You Will Learn in Project Planning & Management
            </h4>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>Fundamentals of Project Management (Scope, Cost, Time, Quality)</li>
              <li>Understanding project lifecycle & planning processes</li>
              <li>Work Breakdown Structure (WBS) creation</li>
              <li>Scheduling, sequencing & resource management</li>
              <li>Risk analysis, control & change management</li>
              <li>Gantt charts, network diagrams & baseline setting</li>
              <li>Monitoring & tracking project performance</li>
              <li>Cost control, budgeting & earned value management</li>
              <li>Real-time project simulation using MS Project & Primavera</li>
            </ul>


            {/* SOFTWARE COVERED */}
            <h4 className="text-lg font-semibold mb-3">
              Software Covered
            </h4>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>PPM Concepts</li>
              <li>Microsoft Office Project</li>
              <li>Primavera</li>
            </ul>


            {/* WHY QUICKSTEP */}
            <h4 className="text-lg font-semibold mb-3">
              Why Choose Quickstep for PPM Training?
            </h4>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>Training by certified project management professionals</li>
              <li>Real-time project scenarios & hands-on tool practice</li>
              <li>Industry-relevant curriculum aligned with corporate needs</li>
              <li>Flexible batches for students and working professionals</li>
              <li>100% placement support in planning & project roles</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you are looking for the <strong>Best PPM Course in RT Nagar Bangalore</strong>, Quickstep offers expert-led, practical, and job-oriented project management training.
            </p>


            {/* ONLINE TRAINING */}
            <p className="text-gray-700 mb-3">
              Quickstep also provides the <strong>Best Online Project Planning and Management Training in Bangalore</strong>, including live classes, software practice, and real-time project exercises.
            </p>

            <p className="text-gray-700 mb-3">
              Our <strong>Online PPM Course in Bangalore</strong> covers project planning, scheduling, cost control, and reporting using MS Project and Primavera.
            </p>

            <p className="text-gray-700">
              For learners looking for flexible options, Quickstep is the <strong>Best Online PPM Training Institute in Bangalore</strong>.
            </p>


            {/* WHY QUICKSTEP SECTION */}
            <div className="mt-10">

              <h3 className="text-xl font-bold mb-3">
                Why Choose Quickstep for Training?
              </h3>

              <p className="text-gray-700 mb-4">
                With <strong>30+ years of training excellence</strong>, Quickstep delivers professional, practical, and industry-ready training for engineering and management courses.
              </p>

              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Highly experienced industry trainers</li>
                <li>Hands-on learning with real projects</li>
                <li>Modern labs & structured training environment</li>
                <li>Flexible scheduling with weekend & weekday batches</li>
                <li>100% placement guidance for planning & management roles</li>
              </ul>

              <h4 className="font-semibold mb-3">
                Your Search Ends Here If You Are Looking For:
              </h4>

              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>Best PPM Training in RT Nagar Bangalore</strong></li>
                <li><strong>Best Project Planning Course in Bangalore</strong></li>
                <li><strong>Best Primavera Training Institute in Bangalore</strong></li>
                <li><strong>Best Microsoft Project Course in Bangalore</strong></li>
                <li><strong>Best Online PPM Training in Bangalore</strong></li>
              </ul>

            </div>

          </div>
        </div>


        {/* RIGHT SIDEBAR */}
        <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 h-fit">

          {/* TITLE + DOWNLOAD */}
          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-semibold">
              Course Syllabus
            </h3>

          

          </div>


          {/* SYLLABUS LIST */}
         
<ul className="space-y-4 mb-8">

  <li className="border-b border-white/30 pb-2 hover:text-yellow-300">
    <Link href="/courses/ppm/ppmconcepts">
      PPM Concepts
    </Link>
  </li>

  <li className="border-b border-white/30 pb-2 hover:text-yellow-300">
    <Link href="/courses/ppm/microsoftofficeproject">
      Microsoft Office Project
    </Link>
  </li>

  <li className="hover:text-yellow-300">
    <Link href="/courses/ppm/primavera">
      Primavera
    </Link>
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