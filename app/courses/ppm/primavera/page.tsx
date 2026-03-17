import Link from "next/link";

export default function PrimaveraCourse() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/Primavera1.jpg"
              alt="Primavera Course"
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
              Primavera P6 Project Management training imparts the skills to
              effectively use Primavera's P6 project management software from
              Oracle. Participants learn how to manage resources for multiple
              projects by defining key roles and work breakdown structures.
            </p>

            <p className="text-gray-700 mb-4">
              The methods to define milestones, budgets, and scheduling are
              also taught in this Oracle training. The knowledge gained helps
              align projects with the strategic planning of the business along
              with calculated risk management.
            </p>

            <p className="text-gray-700 mb-4">
              Candidates gain strong enterprise-wide project portfolio
              management skills through the Primavera® P6™ training course.
            </p>

            <p className="font-semibold mb-3">
              By the completion of the training, the following skills will be developed:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">

              <li>Navigating the user interface</li>

              <li>Understanding project portfolio management (PPM)</li>

              <li>Adding a new project and setting up a Work Breakdown Structure (WBS)</li>

              <li>Defining personnel and equipment requirements</li>

              <li>Tracking and reporting project information</li>

              <li>Implementing, managing and updating schedules</li>

              <li>Baseline the project plan</li>

              <li>Calculating project risk</li>

              <li>Customizing activities and publishing on the web</li>

              <li>
                Customizing layouts, reports, grouping, sorting and filtering
                information
              </li>

              <li>Importing and exporting data</li>

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

            <a href="/IT Syllabus/Primavera.pdf" target="_blank">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
                Download Syllabus
              </button>
            </a>

          </div>


          {/* SYLLABUS LIST */}
          <ul className="space-y-4 text-sm mb-8">

            <li className="border-b border-white/30 pb-2">Defining Calendars</li>

            <li className="border-b border-white/30 pb-2">
              Project Portfolio Management
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining Enterprise Project Structure (EPS)
            </li>

            <li className="border-b border-white/30 pb-2">
              Organisation Breakdown Structure (OBS)
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining the Project Structure under EPS
            </li>

            <li className="border-b border-white/30 pb-2">
              Activities – Definition, sequencing & estimating duration
            </li>

            <li className="border-b border-white/30 pb-2">
              Using the four types of PDM relationship
            </li>

            <li className="border-b border-white/30 pb-2">
              Scheduling the project
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining constraints & resolving conflicts
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining & assigning activity codes
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining & assigning WBS codes
            </li>

            <li className="border-b border-white/30 pb-2">
              Organizing activities using activity codes & WBS
            </li>

            <li className="border-b border-white/30 pb-2">
              Filtering activities
            </li>

            <li className="border-b border-white/30 pb-2">
              Work products and documents
            </li>

            <li className="border-b border-white/30 pb-2">
              Changing currency settings
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining roles
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining resources
            </li>

            <li className="border-b border-white/30 pb-2">
              Assigning by roles
            </li>

            <li className="border-b border-white/30 pb-2">
              Estimating project cost
            </li>

            <li className="border-b border-white/30 pb-2">
              Resource analysis using profiles & tables
            </li>

            <li className="border-b border-white/30 pb-2">
              Resource leveling
            </li>

            <li className="border-b border-white/30 pb-2">
              Defining project codes and resource codes
            </li>

            <li className="border-b border-white/30 pb-2">
              Updating project progress & baseline comparison
            </li>

            <li className="border-b border-white/30 pb-2">
              Earned value management analysis
            </li>

            <li className="border-b border-white/30 pb-2">
              Preparing industrial tabular reports
            </li>

            <li className="border-b border-white/30 pb-2">
              Layer management
            </li>

            <li className="border-b border-white/30 pb-2">
              Project Planning and Management overview
            </li>

            <li className="border-b border-white/30 pb-2">
              Preparing graphical reports
            </li>

            <li className="border-b border-white/30 pb-2">
              Highlighting progress in bar charts
            </li>

            <li>
              Application of global change
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