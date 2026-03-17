import Link from "next/link";

export default function MSProjectCourse() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/ms project 1.jpg"
              alt="Microsoft Project Course"
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
              Microsoft Project preparing extends the learning time and builds
              proficiency by understanding the essential ideas of undertaking
              the board. The involved introduction to the product empowers the
              members to design and deal with the different ventures going from
              little to medium size.
            </p>

            <p className="text-gray-700 mb-4">
              Designating assets, planning costing, characterizing booking and
              different subtleties needed to keep the task on target are secured
              under this MS Project Training. Members are outfitted with the
              aptitudes to transform venture factors into convenient conveyance
              all through the task life expectancy.
            </p>

            <p className="text-gray-700 mb-4 font-semibold">
              On the finishing of the preparation, the people will hold the
              accompanying capacities:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">

              <li>Understand venture the board ideas</li>

              <li>
                Identity, separate and set up connection between various sorts
                of undertakings
              </li>

              <li>Create a Work Breakdown Structure (WBS)</li>

              <li>Allocate assets and make asset leveled plan</li>

              <li>Set a gauge to follow the venture</li>

              <li>Perform a fluctuation investigation on an undertaking</li>

              <li>Create equations and formats</li>

              <li>
                Perform various approaches to organize information including
                arranging, sifting, gathering, and detailing
              </li>

              <li>
                Establish sharing and synchronizing of assets among numerous
                ventures
              </li>

            </ul>

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
              href="/IT Syllabus/Ms Project.pdf"
              target="_blank"
            >
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
                Download Syllabus
              </button>
            </a>

          </div>


          {/* SYLLABUS LIST */}
          <ul className="space-y-4 text-sm mb-8">

            <li className="border-b border-white/30 pb-2">
              Activities, Calendars - Definitions, Sequencing & estimate duration
            </li>

            <li className="border-b border-white/30 pb-2">
              How to develop a schedule plan and control
            </li>

            <li className="border-b border-white/30 pb-2">
              Network analysis - CPM, PERT, PDM
            </li>

            <li className="border-b border-white/30 pb-2">
              How to prepare Work Breakdown Structure (WBS)
            </li>

            <li className="border-b border-white/30 pb-2">
              How to update WBS
            </li>

            <li className="border-b border-white/30 pb-2">
              Constraints
            </li>

            <li className="border-b border-white/30 pb-2">
              How to manage cost in a project
            </li>

            <li className="border-b border-white/30 pb-2">
              How to do Resource Planning and Cost Estimation
            </li>

            <li className="border-b border-white/30 pb-2">
              How to prepare Resource Sheet
            </li>

            <li className="border-b border-white/30 pb-2">
              How to apply resource to each activity
            </li>

            <li className="border-b border-white/30 pb-2">
              How to define Resource Pool and to allocate Resources
            </li>

            <li className="border-b border-white/30 pb-2">
              Filters and Grouping
            </li>

            <li className="border-b border-white/30 pb-2">
              How Material Resources are being allocated
            </li>

            <li className="border-b border-white/30 pb-2">
              Analyzing resources by leveling the resource using crashing
            </li>

            <li className="border-b border-white/30 pb-2">
              Earned Value Analysis
            </li>

            <li className="border-b border-white/30 pb-2">
              Method of developing different types of reports according to industrial needs
            </li>

            <li className="border-b border-white/30 pb-2">
              Scheduling in multiple projects
            </li>

            <li>
              Customisation
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