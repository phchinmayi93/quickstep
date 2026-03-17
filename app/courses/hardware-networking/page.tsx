
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-[#00006c] mb-10">
          Hardware & Networking
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          <div className="lg:col-span-2 space-y-8">

            <div className='rounded-xl overflow-hidden shadow-lg'><Image src='https://quickstepblr.com/../images/logo-white.png' alt='Hardware & Networking' width={1200} height={500} className='w-full object-cover' /></div>

            <div className="bg-white p-8 rounded-xl shadow">
              <p className='text-gray-700 leading-relaxed mb-4'>Computer hardware includes the physical parts of a computer, such as the case, central processing unit, monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard. By contrast, software is the set of instructions that can be stored and run by hardware.</p>
<p className='text-gray-700 leading-relaxed mb-4'>A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.</p>
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
              <li className='border-b border-white/20 pb-2'>• Hardware Basic</li><li className='border-b border-white/20 pb-2'>• System Board</li><li className='border-b border-white/20 pb-2'>• Cache RAM</li><li className='border-b border-white/20 pb-2'>• FSB System Diagnostic Utilities</li><li className='border-b border-white/20 pb-2'>• Operating System</li><li className='border-b border-white/20 pb-2'>• Topologies</li><li className='border-b border-white/20 pb-2'>• Networking</li><li className='border-b border-white/20 pb-2'>• Media Access Products</li><li className='border-b border-white/20 pb-2'>• Network Security</li><li className='border-b border-white/20 pb-2'>• Local Security</li>
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
