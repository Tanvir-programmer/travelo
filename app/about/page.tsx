"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800">

      {/* Company Story */}
      <div className="container mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">
            TravelO was founded with a vision to create unforgettable travel experiences for adventurers and explorers around the world. From serene beaches to majestic mountains, we provide curated journeys that inspire, excite, and connect people with the beauty of our planet.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">
            Our team of passionate travel experts ensures that every trip is seamless, safe, and full of adventure. We pride ourselves on personalized service, attention to detail, and delivering memories that last a lifetime.
          </p>
        </div>

        {/* Circular Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="https://i.ibb.co/xqtRGBhK/Gemini-Generated-Image-ykjprgykjprgykjp.jpg"
              alt="Our Journey"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-[#FAF3EA] py-16 lg:py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            To make world-class travel experiences accessible, inspiring, and unforgettable for everyone. We believe in exploring responsibly, connecting with cultures, and creating journeys that leave a positive impact on the traveler and the destinations we visit.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 md:px-12 py-16 lg:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose TravelO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our travel specialists curate every journey with expertise and care, ensuring you experience the best every time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Personalized Experiences</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Every trip is tailored to your preferences, from activities and accommodations to local culture immersion.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Trusted & Safe</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Safety and reliability are our top priorities, so you can travel with peace of mind anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;