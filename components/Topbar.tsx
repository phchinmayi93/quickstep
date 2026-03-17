"use client";

import { Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden md:block bg-[#ffb000] text-[#00006c] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Welcome to Quickstep Computer Center</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>quickstepblr@gmail.com</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={16} className="cursor-pointer hover:opacity-70 transition" />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} className="cursor-pointer hover:opacity-70 transition" />
          </a>

          <a
            href="https://www.instagram.com/quickstep_bangalore?igsh=MWh2ajRlbHNldGptdg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} className="cursor-pointer hover:opacity-70 transition" />
          </a>

        </div>

      </div>
    </div>
  );
}