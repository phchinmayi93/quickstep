
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-[#00006c] mb-10">
          .Net Technologies
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          <div className="lg:col-span-2 space-y-8">

            <div className='rounded-xl overflow-hidden shadow-lg'><Image src='https://quickstepblr.com/../images/logo-white.png' alt='.Net Technologies' width={1200} height={500} className='w-full object-cover' /></div>

            <div className="bg-white p-8 rounded-xl shadow">
              <p className='text-gray-700 leading-relaxed mb-4'>.NET (pronounced dot net) is a framework that provides a programming guidelines that can be used to develop a wide range of applicationsâââfrom web to mobile to Windows-based applications. The .NET framework can work with several programming languages such as C#, VB.NET, C++ and F#. At Grand Circus, we use C#.</p>
            </div>

          </div>

          <div className="bg-[#00006c] text-white p-8 rounded-xl shadow-xl h-fit sticky top-24">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#ffb000]">
                Course Syllabus
              </h3>

              <a
                href="/sample-syllabus.pdf"
                download
                className="bg-[#ffb000] text-black px-4 py-1 rounded-md font-semibold hover:bg-white transition"
              >
                Download
              </a>
            </div>

            <ul className="space-y-4">
              <li className='border-b border-white/20 pb-2'>• Introduction .Net Technologies</li><li className='border-b border-white/20 pb-2'>• ADO.Net</li><li className='border-b border-white/20 pb-2'>• ASP.Net</li><li className='border-b border-white/20 pb-2'>• .Net MVC</li><li className='border-b border-white/20 pb-2'>• Database</li><li className='border-b border-white/20 pb-2'>• VB.Net</li>
            </ul>

            <Link
              href="/contact"
              className="block text-center mt-8 bg-[#ffb000] text-black font-semibold py-3 rounded-md hover:bg-white transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

        <div className="mt-12">
          <Link
            href="/courses"
            className="inline-block bg-[#ffb000] text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
          >
            ← Back to Courses
          </Link>
        </div>

      </div>
    </div>
  );
}
