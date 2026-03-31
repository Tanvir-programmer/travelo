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
} from "lucide-react";
import Link from "next/link";

// 1. Optimized Fetch Function
async function getPackageData(id: string) {
  try {
    const res = await fetch(`http://localhost:4000/api/packages/${id}`, {
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

export default async function PackageDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dest = await getPackageData(id);

  // 2. Comprehensive Not Found State
  if (!dest) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
        <div className="p-10 text-center bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md mx-6">
          <Info className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Package Not Found
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            The adventure with ID:{" "}
            <span className="text-emerald-600">#{id}</span> is currently
            unavailable or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
          >
            <ChevronLeft className="h-5 w-5" /> Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24 selection:bg-emerald-100">
      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <Image
          src={
            dest.image ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          }
          alt={dest.name || "Travel Destination"} // CRITICAL FIX: Ensures alt is never empty
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        {/* Multi-layered Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-black/20 to-black/40" />

        <div className="absolute top-10 left-10 z-30">
          <Link
            href="/"
            className="group h-14 w-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-emerald-600 transition-all duration-500 shadow-2xl"
          >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Floating Title on Hero */}
        <div className="absolute bottom-40 left-0 w-full px-6 md:px-12 z-20">
          <div className="max-w-7xl mx-auto">
            <span className="px-5 py-2 bg-emerald-500/90 backdrop-blur-md text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
              {dest.category || "Tour Package"}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 tracking-tighter leading-none drop-shadow-2xl">
              {dest.name || dest.package_name}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <main className="max-w-6xl mx-auto px-6 -mt-24 relative z-30">
        <div className="bg-white rounded-[3.5rem] p-8 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100/50">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Details */}
            <div className="flex-1">
              <div className="flex items-center gap-3 text-slate-400 mb-10">
                <div className="h-10 w-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="font-bold text-xl text-slate-800 tracking-tight">
                  {dest.location || dest.destination}, Bangladesh
                </span>
              </div>

              <div className="space-y-8">
                <div className="prose prose-slate lg:prose-xl max-w-none">
                  <p className="text-slate-600 leading-[1.8] text-lg md:text-xl font-medium first-letter:text-6xl first-letter:font-black first-letter:text-emerald-500 first-letter:mr-4 first-letter:float-left">
                    {dest.description ||
                      "Experience the breathtaking beauty of this curated destination. Our packages are designed to provide an immersive cultural and natural experience in the heart of Bangladesh."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                  <div className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-500">
                    <Calendar className="h-8 w-8 text-emerald-500 mb-4" />
                    <h4 className="text-slate-900 font-black text-lg uppercase tracking-tighter">
                      Best Season
                    </h4>
                    <p className="text-slate-500 font-semibold">
                      October to March
                    </p>
                  </div>
                  <div className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-500">
                    <ShieldCheck className="h-8 w-8 text-emerald-500 mb-4" />
                    <h4 className="text-slate-900 font-black text-lg uppercase tracking-tighter">
                      Travel Status
                    </h4>
                    <p className="text-slate-500 font-semibold">
                      Government Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Sidebar */}
            <div className="lg:w-[380px]">
              <div className="sticky top-10 space-y-6">
                {/* Rating Card */}
                <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-600/20 flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-[10px] font-black uppercase tracking-widest mb-1">
                      Expert Rating
                    </p>
                    <h4 className="text-4xl font-black">Exceptional</h4>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                      <span className="text-2xl font-black">
                        {dest.rating || "4.8"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Booking Card */}
                <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl shadow-slate-900/30 overflow-hidden relative">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 blur-[80px] -mr-10 -mt-10" />

                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em]">
                    Full Package Starts
                  </span>
                  <div className="flex items-baseline gap-2 mt-2 mb-10">
                    <span className="text-5xl font-black tracking-tighter text-emerald-400">
                      ৳{dest.price_bdt?.toLocaleString() || "2,500"}
                    </span>
                    <span className="text-slate-500 font-bold text-sm">
                      / person
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {[
                      "Local Tour Guide",
                      "Entry Tickets",
                      "Transportation",
                      "Verified Stay",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-slate-300 font-semibold text-sm"
                      >
                        <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="group w-full py-6 bg-emerald-500 hover:bg-white hover:text-emerald-900 text-white rounded-2xl font-black transition-all duration-500 shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-3">
                    RESERVE NOW
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <p className="text-center text-slate-500 text-[10px] font-bold uppercase mt-6 tracking-widest">
                    Instant confirmation available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 mt-16 flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        <Clock className="h-8 w-8" />
        <Star className="h-8 w-8" />
        <ShieldCheck className="h-8 w-8" />
        <MapPin className="h-8 w-8" />
      </div>
    </div>
  );
}
