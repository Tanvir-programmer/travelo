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
  Globe,
  Plane,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

async function getTour(id: string) {
  try {
    // Note: Our fixed backend handles both numeric 'id' and MongoDB '_id'
    const res = await fetch(`http://localhost:4000/api/tours/${id}`, {
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

export default async function TourDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = await getTour(id);

  if (!tour) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900">Tour Not Found</h2>
          <Link
            href="/tours"
            className="mt-4 inline-block text-blue-600 font-bold underline"
          >
            Return to World Map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* 1. HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-[10s] hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />

        <div className="absolute top-12 left-12 z-50">
          <Link
            href="/tours"
            className="h-12 w-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
          >
            <ChevronLeft />
          </Link>
        </div>

        <div className="absolute bottom-20 left-0 w-full z-10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              <Globe className="h-3 w-3" /> International Expedition
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              {tour.title}
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">
                {tour.country}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE CONTENT */}
      <main className="max-w-7xl mx-auto px-8 relative z-30 -mt-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Info */}
          <div className="lg:flex-1 space-y-16">
            {/* Rapid Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl">
              {[
                {
                  label: "Duration",
                  val: `${tour.duration_days} Days`,
                  icon: Clock,
                },
                {
                  label: "Price (USD)",
                  val: `$${tour.price_usd}`,
                  icon: CreditCard,
                },
                { label: "Rating", val: tour.rating, icon: Star },
                { label: "Flights", val: "Included", icon: Plane },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 p-6 rounded-[1.8rem] text-center border border-white/5"
                >
                  <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-3" />
                  <p className="text-white text-lg font-black">{stat.val}</p>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <section>
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-6">
                The Experience
              </h3>
              <p className="text-slate-600 text-2xl leading-relaxed font-medium italic">
                `{tour.description}`
              </p>
            </section>

            {/* Itinerary / Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-10 border border-slate-100 rounded-[3rem] bg-slate-50/50">
                <h4 className="text-xl font-black text-slate-900 mb-6">
                  Tour Highlights
                </h4>
                <ul className="space-y-4">
                  {[
                    "Luxury Stay",
                    "City Transfers",
                    "Daily Breakfast",
                    "English Guide",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600 font-bold text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 border border-blue-100 rounded-[3rem] bg-blue-50/30">
                <h4 className="text-xl font-black text-slate-900 mb-6">
                  Visa Info
                </h4>
                <p className="text-sm text-slate-600 font-bold leading-relaxed">
                  Visa processing assistance is available for this destination.
                  Please ensure your passport has 6 months validity.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-[400px]">
            <div className="sticky top-10">
              <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-48 w-48 bg-blue-50 rounded-full blur-3xl opacity-60" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                      Package Starts From
                    </span>
                    <h4 className="text-5xl font-black text-slate-900 tracking-tighter">
                      ${tour.price_usd}
                    </h4>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-slate-400" />
                        <span className="font-bold text-sm text-slate-700">
                          Next Batch
                        </span>
                      </div>
                      <span className="text-xs font-black text-blue-600 uppercase">
                        Aug 2026
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-blue-600 text-white py-7 rounded-[2rem] font-black text-sm tracking-[0.15em] transition-all duration-500 shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                    RESERVE SPOT
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="mt-8 flex items-center justify-center gap-3 text-slate-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      Global Secure Payments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-12 text-center border-t border-slate-50">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">
          TravelO Global — {tour.country} 2026
        </p>
      </footer>
    </div>
  );
}
