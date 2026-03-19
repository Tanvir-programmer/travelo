import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="w-full font-sans text-[#1A1A1A]">
      {/* SECTION 1: HERO BANNER (Image 1) */}
      <section className="relative h-[400px] w-full flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80"
            alt="Thailand Islands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <nav className="flex items-center justify-center gap-2 text-lg">
            <span className="opacity-80">Home</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-semibold">Contact</span>
          </nav>
        </div>
      </section>

      {/* SECTION 2: OFFICE LOCATIONS (Image 2) */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* USA Office */}
          <div className="bg-[#E6F4B1] p-10 rounded-[32px] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-[#4A4E40] rounded-full flex items-center justify-center text-white mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">United State</h3>
            <p className="font-bold mb-2">Contact: +1 (212) 555-7890</p>
            <p className="text-gray-700">
              Skyline Plaza, 5th Floor, 123 Main Street Los Angeles, CA 90001,
              USA
            </p>
          </div>

          {/* Dubai Office */}
          <div className="bg-[#F3F3F3] p-10 rounded-[32px] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Dubai Office</h3>
            <p className="font-bold mb-2">Contact: +971 4 123 4567</p>
            <p className="text-gray-700">
              Office No. 1203, 12th Floor, Bay Tower, Al Abraj Street, Business
              Bay, Dubai, UAE
            </p>
          </div>

          {/* UK Office */}
          <div className="bg-[#C1EAD1] p-10 rounded-[32px] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">United Kingdom</h3>
            <p className="font-bold mb-2">Contact: +44 20 7946 1234</p>
            <p className="text-gray-700">
              3rd Floor, 15 Bedford Street Covent Garden, London, WC2E 9HE, UK
            </p>
          </div>
        </div>

        {/* SECTION 3: CONTACT FORM & MAP (Image 3 & 4) */}
        <div className="bg-[#F5F5FF] rounded-[40px] overflow-hidden">
          <div className="p-10 md:p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Get in Touch!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              We're excited to hear from you! Whether you have a question about
              our services, want to discuss a new project.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
              <div className="space-y-2">
                <label className="font-bold ml-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Washington Mongla"
                  className="w-full p-4 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold ml-2">Email Address</label>
                <input
                  type="email"
                  placeholder="info@example.com"
                  className="w-full p-4 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold ml-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="+92 567 *** ***"
                  className="w-full p-4 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold ml-2">Where are you going?</label>
                <select className="w-full p-4 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-400 outline-none bg-white">
                  <option>United States</option>
                  <option>Dubai</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-bold ml-2">Brief/Message</label>
                <textarea
                  rows={4}
                  placeholder="Write somethings about inquiry"
                  className="w-full p-4 rounded-xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* MAP INTEGRATION (Image 4) */}
          <div className="w-full h-[400px] bg-gray-200 grayscale">
            {/* Replace the src with your actual Google Maps Embed link */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0123456789!2d90.3551!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzIwLjAiTiA5MMKwMjEnMTguNCJF!5e0!3m2!1sen!2sbd!4v1625555555555"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button (Floating) */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-blue-500 shadow-lg hover:bg-blue-50 transition-all">
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default ContactPage;
