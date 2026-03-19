"use client";
import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full font-sans text-[#1A1A1A] bg-white">
      {/* SECTION 1: HERO BANNER (Image 1 style) */}
      <section className="relative h-[450px] w-full flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co.com/yFM2X1xt/pexels-jacint-bofill-1745787-33483502.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <nav className="flex items-center justify-center gap-3 text-lg">
            <span className="opacity-80">Home</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-semibold underline underline-offset-4">
              Contact
            </span>
          </nav>
        </div>
      </section>

      {/* SECTION 2: OFFICE LOCATIONS (Image 2 style) */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Dhaka Office */}
          <div className="bg-[#E6F4B1] p-10 rounded-[40px] text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#4A4E40] rounded-full flex items-center justify-center text-white mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Dhaka Office</h3>
            <p className="font-bold mb-2">Contact: +880 1711-000000</p>
            <p className="text-gray-700">
              House #168/170, Road 02, Avenue 1, Mirpur DOHS, Dhaka 1216
            </p>
          </div>

          {/* Bogura Office */}
          <div className="bg-[#F3F3F3] p-10 rounded-[40px] text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bogura Office</h3>
            <p className="font-bold mb-2">Contact: +880 1711-111111</p>
            <p className="text-gray-700">
              Mofiz Paglar Mor, Sherpur Road, Bogura 5800, Bangladesh
            </p>
          </div>

          {/* Rajshahi Office */}
          <div className="bg-[#C1EAD1] p-10 rounded-[40px] text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Rajshahi Office</h3>
            <p className="font-bold mb-2">Contact: +880 1711-222222</p>
            <p className="text-gray-700">
              Shaheb Bazar, Zero Point, Rajshahi 6000, Bangladesh
            </p>
          </div>
        </div>

        {/* SECTION 3: CONTACT FORM & BOGURA MAP (Image 3 & 4 style) */}
        <div className="bg-[#F8F9FF] rounded-[50px] overflow-hidden border border-blue-50/50">
          <div className="p-10 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch!
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
              We are excited to hear from you! Whether you have a question about
              our services or want to discuss a new adventure.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              <div className="space-y-3">
                <label className="font-bold text-sm uppercase tracking-wider text-gray-600 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Wasington Mongla"
                  className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="font-bold text-sm uppercase tracking-wider text-gray-600 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="info@example.com"
                  className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="font-bold text-sm uppercase tracking-wider text-gray-600 ml-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+92 567 *** ***"
                  className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="font-bold text-sm uppercase tracking-wider text-gray-600 ml-1">
                  Where are you going?
                </label>
                <select className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all appearance-none">
                 <option>Dhaka</option>
                  <option>Bogura</option>
                  <option>Rajshahi</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="font-bold text-sm uppercase tracking-wider text-gray-600 ml-1">
                  Brief/Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write somethings about inquiry"
                  className="w-full p-5 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center pt-6">
                <button
                  type="button"
                  className="bg-[#3B82F6] hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
                >
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* GOOGLE MAP (Focused on Bogura, Bangladesh) */}
          <div className="w-full h-[500px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58156.32637213411!2d89.3377755907406!3d24.84650630799895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81dfad1%3A0x1384003f5ad037e9!2sBogura!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-blue-500 shadow-xl hover:bg-blue-50 transition-all group z-50"
      >
        <ArrowUp
          size={28}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default ContactPage;
