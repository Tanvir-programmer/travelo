"use client";
import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
  rating: number;
}

// 50 reviews
const reviews: Review[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  location: ["Dhaka", "London", "Dubai", "New York", "Berlin"][i % 5],
  image: `https://i.pravatar.cc/150?u=${i + 1}`,
  review:
    "Amazing experience! Everything was well organized and smooth. Highly recommended for travelers.",
  rating: 4 + (i % 2),
}));

const loopedReviews = [...reviews, ...reviews];

const CARD_WIDTH = 360;

const ReviewCard = ({ data }: { data: Review }) => (
  <div
    className="flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 mx-2 h-[250px] flex flex-col justify-between relative group"
    style={{ width: CARD_WIDTH }}
  >
    {/* Quote Icon */}
    <Quote className="absolute top-4 right-4 w-10 h-10 text-orange-100 group-hover:text-orange-200 transition" />

    {/* Content */}
    <div>
      <div className="flex gap-1 mb-3">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} size={16} fill="#FF8C00" className="text-[#FF8C00]" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-3">
        "{data.review}"
      </p>
    </div>

    {/* User */}
    <div className="flex items-center gap-3 mt-5">
      <img
        src={data.image}
        className="w-11 h-11 rounded-full object-cover border-2 border-orange-100"
      />
      <div>
        <h4 className="font-semibold text-gray-800 text-sm">{data.name}</h4>
        <p className="text-xs text-gray-500">{data.location}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAF3EA] to-white py-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12 max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900">
          What Our Travelers Say
        </h1>
        <p className="text-gray-500 mt-3 text-sm">
          Real experiences from people who explored the world with us
        </p>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden rounded-xl"
        style={{
          width: CARD_WIDTH * 3 + 24,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{
            x: -(index * (CARD_WIDTH + 16)),
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          {loopedReviews.map((review, i) => (
            <ReviewCard key={i} data={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
