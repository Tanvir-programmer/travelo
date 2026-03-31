import React from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  ChevronLeft,
  Clock,
  ShieldCheck,
  Calendar,
  Info,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

async function getDestination(id: string) {
  try {
    const res = await fetch(`http://localhost:4000/api/destinations/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function DestinationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dest = await getDestination(id);

  if (!dest) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">404</h2>
          <p className="text-slate-500 font-medium mt-2">Destination not found.</p>
          <Link href="/destinations" className="mt-6 inline-block px-8 py-3 bg-slate-900 text-white rounded-full font-bold transition-transform hover:scale-105">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100">
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name || "Destination"}
          fill
          className="object-cover transition-transform duration-[10s] hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white" />
        
        <div className="absolute top-12 left-12 z-50">
          <Link
            href="/destinations"
            className="h-12 w-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </div>

        <div className="absolute bottom-28 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg">
              <Sparkles className="h-3 w-3" /> Exclusive Discovery
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none drop-shadow-sm">
              {dest.name}
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">{dest.location}, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OVERLAPPING CONTENT LAYOUT */}
      <main className="max-w-7xl mx-auto px-8 md:px-16 relative z-30 -mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Editorial Body */}
          <div className="lg:flex-1 space-y-16">
            {/* High-End Metrics Card */}
            <div className="grid grid-cols-3 gap-1 bg-slate-900 rounded-[2.5rem] p-1.5 shadow-2xl overflow-hidden">
                <div className="bg-slate-800/40 p-8 text-center rounded-[2rem]">
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Expert Rating</p>
                    <p className="text-white text-3xl font-black">{dest.rating || "4.9"}</p>
                </div>
                <div className="bg-slate-800/40 p-8 text-center rounded-[2rem]">
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Eco-Score</p>
                    <p className="text-white text-3xl font-black">A+</p>
                </div>
                <div className="bg-slate-800/40 p-8 text-center rounded-[2rem]">
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Crowd Level</p>
                    <p className="text-white text-3xl font-black">Low</p>
                </div>
            </div>

            <section className="max-w-2xl">
              <h3 className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-emerald-600" /> Overview
              </h3>
              <p className="text-slate-600 text-2xl leading-[1.6] font-medium italic">
                "{dest.description}"
              </p>
            </section>

            {/* Service Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { icon: ShieldCheck, title: "Curated Safety", desc: "Rigorous 20-point safety check on every local partner." },
                    { icon: Clock, title: "Tailored Timing", desc: "Optimized itineraries to avoid crowds and catch the best light." }
                ].map((item, i) => (
                    <div key={i} className="p-10 border border-slate-100 rounded-[3rem] bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                        <item.icon className="h-8 w-8 text-slate-900 mb-6 group-hover:text-emerald-500 transition-colors" />
                        <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* Luxury Sidebar (No Price) */}
          <div className="lg:w-[420px]">
            <div className="sticky top-10">
              <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-48 w-48 bg-emerald-50 rounded-full blur-3xl opacity-60" />
                
                <div className="relative z-10">
                    <div className="mb-10">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Adventure Status</span>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Open for Bookings</h4>
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <p className="text-slate-500 text-sm font-bold border-b border-slate-100 pb-4">Package Inclusions:</p>
                        <ul className="space-y-4">
                            {['Private Transportation', 'Boutique Accommodation', 'Certified Local Guide', 'Equipment & Gear'].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-7 rounded-[2rem] font-black text-sm tracking-[0.15em] transition-all duration-500 shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                       SEE TRAVEL PACKAGES
                       <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                        <div className="flex items-center justify-center gap-2 text-slate-400 font-bold text-[9px] uppercase tracking-[0.2em]">
                            <ShieldCheck className="h-3 w-3" />
                            Verified Experience Provider
                        </div>
                    </div>
                </div>
              </div>
              
              {/* Secondary Help Card */}
              <div className="mt-6 p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Info className="h-5 w-5 text-emerald-600" />
                      </div>
                      <p className="text-xs font-black text-emerald-900 uppercase tracking-tighter">Need custom planning?</p>
                  </div>
                  <ChevronLeft className="h-4 w-4 text-emerald-600 rotate-180" />
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">TravelO — Destination Details 2026</p>
      </footer>
    </div>
  );
}