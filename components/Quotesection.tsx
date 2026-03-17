"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative py-12 bg-[#fefefe]">

      {/* Background Bottom Blue Section */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-[#00006c]"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-0 shadow-2xl rounded-xl overflow-hidden">

          {/* LEFT FORM CARD */}
          <div className="lg:col-span-2 bg-white p-12 relative">

            {/* Top Yellow Border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#ffb000]"></div>

            <h2 className="text-4xl font-bold text-[#00006c]">
              Request A Quote
            </h2>

            <p className="text-gray-600 mt-3">
              We will be happy to answer your questions.
            </p>

            {/* FORM */}
            <form className="mt-10 grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="md:col-span-2 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
              />

              {/* Subscribe Checkbox */}
              <div className="md:col-span-1 flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-sm text-gray-600">
                  Also subscribe us
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-1 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#ffb000] text-[#00006c] px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT CONTACT PANEL */}
          <div className="bg-[#00006c] text-white p-12 flex flex-col justify-center space-y-10">

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffb000] text-[#00006c] p-4 rounded-md">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Address</h4>
                <p className="text-gray-300 text-sm mt-1">
                  11, 1st Floor, Unilet Store, Police Station,
                  80 Feet Rd above Unilet, P&T Colony,
                  RT Nagar, Bengaluru, Karnataka 560032
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffb000] text-[#00006c] p-4 rounded-md">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Phone</h4>
                <p className="text-gray-300 text-sm mt-1">
                  +91 9743034376 <br />
                  +91 9739204786
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffb000] text-[#00006c] p-4 rounded-md">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Email</h4>
                <p className="text-gray-300 text-sm mt-1">
                  quicksteprt@gmail.com <br />
                  jobsqsrtm@gmail.com
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}