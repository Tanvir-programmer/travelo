import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Form */}
          <div className="bg-[#FAF3EA] p-10 md:p-16 rounded-[40px] shadow-sm">
            <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-8">
              Plan Your Next <br />
              Adventure with Travel<span className="text-[#FF8C00]">O</span>
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF8C00] outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF8C00] outline-none transition-all"
                />
              </div>
              <select className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF8C00] outline-none transition-all bg-white appearance-none">
                <option>Select Destination</option>
                <option>Sundarbans, Bangladesh</option>
                <option>Cox's Bazar</option>
                <option>Sajek Valley</option>
                <option>International Tour</option>
              </select>
              <textarea
                placeholder="Tell us about your dream trip..."
                rows={4}
                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#FF8C00] outline-none transition-all"
              ></textarea>

              <button className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#333] transition-colors group">
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Right Side: Info & Map Placeholder */}
          <div className="lg:pt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#FF8C00]/10 rounded-xl flex items-center justify-center text-[#FF8C00]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us Anytime</p>
                    <p className="font-bold text-[#1A1A1A]">+880 1234-567890</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#FF8C00]/10 rounded-xl flex items-center justify-center text-[#FF8C00]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-bold text-[#1A1A1A]">
                      hello@travelo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#FF8C00]/10 rounded-xl flex items-center justify-center text-[#FF8C00]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Main Office</p>
                    <p className="font-bold text-[#1A1A1A]">
                      Bogura, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element (Decorative) */}
            <div className="h-64 bg-gray-100 rounded-[40px] relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80"
                alt="Map view"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 bg-white px-6 py-3 rounded-full shadow-lg font-bold">
                Open in Google Maps ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
