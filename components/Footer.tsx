"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00006c] text-white pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 - About */}
        <div className="space-y-6">

          <Image
            src="/logo.png"
            alt="Quickstep Logo"
            width={250}
            height={250}
            className="object-contain"
          />

          <p className="text-gray-300 leading-relaxed">
            We are one of the few education and training organizations in India
            who have received this accreditation. This accreditation is
            recognized by the Government of India.
          </p>

          <div className="flex gap-5">
            <Facebook size={20} className="cursor-pointer hover:text-blue-400 transition" />
            <Twitter size={20} className="cursor-pointer hover:text-blue-400 transition" />
            <Instagram size={20} className="cursor-pointer hover:text-blue-400 transition" />
          </div>

        </div>

        {/* Column 2 - Why Quickstep */}
        <div>

          <h3 className="text-lg font-semibold text-[#ffb000] mb-6">
            Why Quickstep?
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>30+ Years of Training Experience</li>
            <li>Industrial Based Projects</li>
            <li>Quality Education & Affordable Cost</li>
            <li>Dedicated Placement Team</li>
            <li>Interview Skills Training</li>
            <li>Internship Opportunities</li>
            <li>Final Year Projects</li>
            <li>All kinds of Project Development</li>
          </ul>

        </div>

        {/* Column 3 - Sitemap (2 Columns) */}
        <div>

          <h3 className="text-lg font-semibold text-[#ffb000] mb-6">
            Our Sitemap
          </h3>

          <div className="grid grid-cols-2 gap-y-3 ">

            <Link href="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>

            <Link href="/about" className="text-white hover:text-blue-400 transition">
              About
            </Link>

            <Link href="/courses" className="text-white hover:text-blue-400 transition">
              Courses
            </Link>

            <Link href="/courses-details" className="text-white hover:text-blue-400 transition">
              Course Details
            </Link>

            <Link href="/contact" className="text-white hover:text-blue-400 transition">
              Contact
            </Link>

            <Link href="/blog" className="text-white hover:text-blue-400 transition">
              Blog
            </Link>

          </div>

        </div>

        {/* Column 4 - Flickr Feed */}
        <div>

          <h3 className="text-lg font-semibold text-[#ffb000] mb-6">
            Flickr Feed
          </h3>

          <div className="grid grid-cols-3 gap-3">

            {[
              "/image_41.jpg",
              "/image_46.jpg",
              "/image_42.jpg",
              "/image_43.jpg",
              "/image_44.jpg",
              "/image_45.jpg",
            ].map((img, i) => (

              <div key={i} className="overflow-hidden rounded-md">

                <Image
                  src={img}
                  alt="gallery"
                  width={90}
                  height={60}
                  className="object-cover w-full h-full hover:scale-110 transition duration-300"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/20 mt-14 pt-6 text-center text-gray-400 ">
        © {new Date().getFullYear()} Quickstep Computer Centre. All rights reserved.
      </div>

    </footer>
  );
}