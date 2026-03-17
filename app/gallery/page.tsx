"use client";

import { useState } from "react";
import Link from "next/link";

const images = [
  "/image_41.jpg",
 "/image_42.jpg",
  "/image_43.jpg",
   "/image_44.jpg",
    "/image_45.jpg",
     "/image_46.jpg",
     "/image_41.jpg",
 "/a.jpg",
  "/aa.jpg",
   "/ae.jpg",
    "/af.jpg",
     "/b.jpg",
     "/c.jpg",
     "/f.jpg",
     "/g.jpg",
     "/e.jpg",
     "/h.jpg",
     "/i.jpg",
     


];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#fefefe]">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#00006c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Gallery
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 text-sm">
            <Link href="/" className="hover:text-[#ffb000] transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ffb000]">Gallery</span>
          </div>

        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

            {images.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={`${img}?auto=format&fit=crop&w=800&q=80`}
                  alt="Gallery"
                  className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00006c]/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="bg-[#ffb000] text-[#00006c] px-6 py-2 rounded-full font-semibold">
                    View
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ===== MODAL PREVIEW ===== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#ffb000] text-[#00006c] px-4 py-2 rounded-md font-semibold"
            >
              Close
            </button>

            <img
              src={`${selectedImage}?auto=format&fit=crop&w=1200&q=80`}
              alt="Preview"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}

    </main>
  );
}
