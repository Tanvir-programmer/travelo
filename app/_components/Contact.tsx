"use client"
import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUp, Globe } from "lucide-react";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full font-sans bg-[#F9FBFF] text-[#1A1A1A]">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[450px] w-full flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#F9FBFF]"></div>
        </div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
            Let's Connect
          </h1>
          <nav className="flex items-center justify-center gap-3 text-lg font-medium">
            <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
              Home
            </span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400">Contact</span>
          </nav>
        </div>
      </section>

      {/* SECTION 2: OFFICE LOCATIONS (Glassmorphism Style) */}
      <section className="max-w-7xl mx-auto -mt-20 relative z-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              city: "Bogura",
              color: "bg-[#E6F4B1]",
              phone: "+880 1712 000000",
              address: "Sultanganj Para, Thanthania, Bogura-5800",
            },
            {
              city: "Dhaka",
              color: "bg-white",
              phone: "+880 1812 000000",
              address: "Level 4, Banani Blue Tower, Road 11, Dhaka-1213",
            },
            {
              city: "Rajshahi",
              color: "bg-[#C1EAD1]",
              phone: "+880 1912 000000",
              address: "Ranibazar Main Road, Rajshahi-6000",
            },
          ].map((office, idx) => (
            <div
              key={idx}
              className={`${office.color} backdrop-blur-md bg-opacity-80 p-8 rounded-[2rem] border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{office.city} Office</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2 font-semibold text-gray-800">
                  <Phone size={16} className="text-blue-500" /> {office.phone}
                </p>
                <p className="leading-relaxed">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FORM & MAP */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="mb-10 text-left">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Send us a message
            </h2>
            <p className="text-gray-500">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Md Tanvir Rahman"
                  className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="tanvir@example.com"
                  className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Inquiry Branch
              </label>
              <select className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                <option>Bogura</option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
              />
            </div>

            <button className="w-full md:w-max bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200 active:scale-95">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* Professional Google Map Integration */}
        <div className="h-full min-h-[500px] relative group">
          <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116334.5097560824!2d89.3031128!3d24.8480749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e830e0129b%3A0x6d97c6729015c7e1!2sBogura!5e0!3m2!1sen!2sbd!4v1710920000000!5m2!1sen!2sbd"
              className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-blue-600 shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 group z-50"
      >
        <ArrowUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default ContactPage;
