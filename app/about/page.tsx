"use client";
import React from "react";
import { MapPin, Globe, ShieldCheck, Heart, Award, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white text-[#1A1A1A] overflow-hidden">
      {/* HERO SECTION: Professional Gradient & Text-Only */}
      <div className="relative bg-[#1A1A1A] py-24 md:py-32 px-6 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle grid pattern for a professional look */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Redefining Travel from the <br />
            <span className="text-[#3B82F6]">Heart of Bogura</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From the historic streets of Bogura to the furthest corners of the globe, 
            we bridge the gap between dream destinations and reality.
          </p>
        </div>
      </div>

      {/* COMPANY STORY: Text-Centric layout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
              <MapPin size={16} /> Based in Bogura
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A Journey That Started In The North
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in **Bogura**, TravelO began with a simple observation: travel is more than just moving between locations; it’s about the stories we bring back. Being rooted in one of Bangladesh’s most historic cities, we understand the value of heritage and the itch for modern adventure.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              What started as a local initiative has grown into a world-class travel consultancy. We pride ourselves on our **Bogura-born hospitality**, ensuring every client receives the warmth and personalized care that our region is famous for, whether they are visiting the Sundarbans or the Alps.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION & VISION: Clean Split Design */}
      <div className="bg-[#F8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center italic font-serif">M</span>
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg border-l-4 border-blue-600 pl-6 py-2">
              To make high-end travel experiences accessible to everyone by leveraging local expertise and global partnerships, ensuring responsibility and cultural respect at every step.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 bg-[#1A1A1A] text-white rounded-lg flex items-center justify-center italic font-serif">V</span>
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg border-l-4 border-gray-900 pl-6 py-2">
              To become the leading travel authority in Bangladesh, recognized for our innovation, safety standards, and our commitment to showcasing the beauty of our planet.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US: Icon-Based Professional Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Global Travelers Trust Us</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="group p-8 rounded-[32px] border border-gray-100 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-sm">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Award size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">Bogura’s Finest Experts</h4>
            <p className="opacity-70 leading-relaxed">
              Our team consists of certified specialists who know the travel industry inside out, offering you local insights with global standards.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-[32px] border border-gray-100 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-sm">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">Global Network</h4>
            <p className="opacity-70 leading-relaxed">
              With partners across 50+ countries, we ensure priority booking, exclusive rates, and VIP treatment for our clients.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-[32px] border border-gray-100 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-sm">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">Safety-First Approach</h4>
            <p className="opacity-70 leading-relaxed">
              Your security is non-negotiable. From 24/7 support to verified accommodations, we watch over you throughout your journey.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-[#FAF3EA] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to start your story?</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95">
          Consult Our Experts
        </button>
      </div>
    </section>
  );
};

export default AboutUs;