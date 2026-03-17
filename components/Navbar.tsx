"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       <Link href="/" className="flex items-center">
         <Image
    src="/logo1.png"
    alt="EDUMINT Logo"
    width={350}
    height={250}
    className="object-contain"
  />
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#00006c] text-lg">
          <Link href="/" className="hover:text-[#ffb000] transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-[#ffb000] transition">
            Courses
          </Link>
          <Link href="/about" className="hover:text-[#ffb000] transition">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-[#ffb000] transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[#ffb000] transition">
            Contact
          </Link>
          <Link href="/gallery" className="hover:text-[#ffb000] transition">
           Gallery
          </Link>
        </div>

        {/* Desktop Buttons */}
       <div className="hidden md:flex items-center gap-4">

  {/* <Link href="/login">
    <button className="text-[#00006c] text-lg hover:text-[#ffb000] transition">
      Book Demo Class
    </button>
  </Link> */}

  <Link href="/enrollment">
    <button className="bg-[#ffb000] text-[#00006c] px-4 text-lg py-2 rounded-md font-semibold hover:opacity-90 transition">
      ENROLL NOW
    </button>
  </Link>

</div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#00006c]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4">

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-[#00006c] hover:text-[#ffb000]"
          >
            Home
          </Link>

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-[#00006c] hover:text-[#ffb000]"
          >
            Courses
          </Link>

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-[#00006c] hover:text-[#ffb000]"
          >
            Pages
          </Link>

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-[#00006c] hover:text-[#ffb000]"
          >
            Blog
          </Link>

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-[#00006c] hover:text-[#ffb000]"
          >
            Contact
          </Link>

          <div className="pt-4 border-t">
            <button className="block w-full text-left text-[#00006c] mb-3 hover:text-[#ffb000]">
              Sign In
            </button>

            <button className="w-full bg-[#ffb000] text-[#00006c] py-2 rounded-md font-semibold">
              Sign Up
            </button>
          </div>

        </div>
      )}
    </nav>
  );
}
