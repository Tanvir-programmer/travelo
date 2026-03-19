"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/svNVxmKG/photo-1587302525159-2363f54affd4.avif",
    title: "Plan Your Trip, Your Way.",
    description:
      "Perfect for customized travel experiences — tailored flights, stays, and tours just for you.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/FLpRhHSz/sajek.jpg",
    title: "Explore Hidden Gems.",
    description:
      "Discover off-the-beaten-path destinations with our expert local guides.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/TxfX5Dvb/pexels-ferdous-26673370.jpg",
    title: "Adventure Awaits.",
    description:
      "Experience the world like never before with our luxury travel packages.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-8xl font-bold mb-6 max-w-5xl"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-2xl max-w-2xl opacity-90"
            >
              {slides[current].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all"
      >
        <ChevronRight size={30} />
      </button>

      {/* Animated Progress Bar (Timer Visual) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-50">
        <motion.div
          key={`progress-${current}`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="h-full bg-blue-500"
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
