"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#fefefe]">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-[#00006c]/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <div className="flex justify-center gap-2 ">
            <Link href="/" className="hover:text-[#ffb000]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ffb000]">Contact</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="relative -mt-16 z-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Address */}
          <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-[#ffb000] text-[#00006c] rounded-full flex items-center justify-center mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-[#00006c] mb-2">
              Office Address
            </h3>
            <p className="text-gray-600 ">
              11, 1st Floor, Unilet Store, Police Station, 80 Feet Rd
above Unilet ,P&T Colony, RT Nagar, Bengaluru, Karnataka 560032
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-[#ffb000] text-[#00006c] rounded-full flex items-center justify-center mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-[#00006c] mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600 ">
             +91 9743034376 <br></br>
             +91 9739204786
            </p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-[#ffb000] text-[#00006c] rounded-full flex items-center justify-center mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-[#00006c] mb-2">
              Email Address
            </h3>
            <p className="text-gray-600 ">
              info@quickstep.com <br />
              support@quickstep.com
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 bg-white shadow-2xl rounded-2xl p-12">

          <h2 className="text-3xl font-bold text-[#00006c] text-center mb-10">
            Send Us A Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
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
              className="md:col-span-2 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="md:col-span-2 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
            />

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#ffb000] text-[#00006c] px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1813658380233!2d77.5902830757237!3d13.024119713723321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b092373ed9%3A0xa14ab7c8064efb15!2sQuickstep!5e0!3m2!1sen!2sin!4v1773641024504!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-2xl"

              
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}
