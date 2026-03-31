"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Top 10 International Tours You Must Experience in 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "March 30, 2026",
    author: "TravelO Team",
    description:
      "Discover the most breathtaking international destinations including Maldives, Paris, and Switzerland. Perfect for your next adventure.",
  },
  {
    id: 2,
    title: "Why International Travel Changes Your Life",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    date: "March 25, 2026",
    author: "Admin",
    description:
      "Traveling the world is not just about sightseeing. It opens your mind, builds confidence, and creates unforgettable memories.",
  },
  {
    id: 3,
    title: "Budget Travel Tips for International Tours",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    date: "March 20, 2026",
    author: "Travel Expert",
    description:
      "Learn how to travel internationally on a budget with smart tips, cheap flights, and affordable accommodation strategies.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b mb-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
            Travel <span className="text-blue-500">Stories.</span>
          </h1>
          <p className="mt-6 text-slate-500 text-lg">
            Explore tips, guides, and inspiration for your next international
            journey.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {blog.author}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                  {blog.description}
                </p>

                {/* Button */}
                <Link
                  href={`/blog/${blog.id}`}
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}