"use client";

import Link from "next/link";
import { Calendar, User, MessageCircle } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Skills to Boost Your Career in 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "Feb 10, 2026",
    author: "Admin",
    comments: 12,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Why Digital Marketing is the #1 Skill in 2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    date: "Feb 05, 2026",
    author: "Admin",
    comments: 8,
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Full Stack Development",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    date: "Jan 28, 2026",
    author: "Admin",
    comments: 10,
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function BlogListPage() {
  return (
    <main className="bg-[#fefefe]">

      {/* ===== Hero with Image Background ===== */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1584697964403-4a7f9f2c53b1?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-[#00006c]/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Blog
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 text-sm">
            <Link href="/" className="hover:text-[#ffb000] transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ffb000]">Blog</span>
          </div>
        </div>
      </section>

      {/* ===== Blog Posts Listing ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {blogs.map((blog) => (
            <div key={blog.id} className="lg:flex gap-10 items-start">

              {/* Image */}
              <div className="lg:w-1/3 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={`${blog.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="lg:w-2/3 mt-6 lg:mt-0">

                {/* Meta Info */}
                <div className="flex gap-6 text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    {blog.comments} Comments
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-[#00006c] hover:text-[#ffb000] transition">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-6 inline-block text-[#ffb000] font-semibold hover:underline"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}

          {/* ===== Pagination ===== */}
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 bg-[#00006c] text-white rounded-md">
              1
            </button>
            <button className="px-4 py-2 border border-[#00006c] text-[#00006c] rounded-md hover:bg-[#ffb000] hover:text-[#00006c] transition">
              2
            </button>
            <button className="px-4 py-2 border border-[#00006c] text-[#00006c] rounded-md hover:bg-[#ffb000] hover:text-[#00006c] transition">
              3
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
