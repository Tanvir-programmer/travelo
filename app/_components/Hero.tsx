"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Search, User } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1433086566608-531ad9aca474?auto=format&fit=crop&q=80",
    title: "Plan Your Trip, Your Way.",
    description:
      "Perfect for customized travel experiences — tailored flights, stays, and tours just for you.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    title: "Explore Hidden Gems.",
    description:
      "Discover off-the-beaten-path destinations with our expert local guides.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. Top Navigation Bar */}

      {/* 2. Blue Announcement Banner */}
      <div className="bg-blue-600 text-white py-2 flex justify-center items-center gap-4 text-sm font-medium relative z-20">
        <ChevronLeft size={16} className="cursor-pointer" />
        Enjoy Family Holiday Packages with Flexible Payment Options
        <ChevronRight size={16} className="cursor-pointer" />
      </div>

      {/* 3. Main Slider Section */}
      <div className="relative h-[calc(100vh-120px)] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl max-w-2xl font-medium"
              >
                {slides[current].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full border border-white/30 bg-black/20 text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full border border-white/30 bg-black/20 text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
