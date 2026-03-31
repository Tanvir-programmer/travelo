"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
  MapPin,
  Star,
  Search,
  Compass,
  ArrowUpRight,
  Loader2,
  Info,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  _id: string;
  id: number;
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
  rating: number;
}

const TravelODestinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/destinations");
        if (!response.ok) throw new Error("Failed to fetch data");
        const json = await response.json();
        setDestinations(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const searchTerm = search.toLowerCase();
      return (
        dest.name.toLowerCase().includes(searchTerm) ||
        dest.location.toLowerCase().includes(searchTerm) ||
        dest.category.toLowerCase().includes(searchTerm)
      );
    });
  }, [search, destinations]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
        <p className="text-slate-500 font-bold tracking-[0.3em] text-[10px] uppercase">
          Curating Adventures...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100 pb-20">
      {/* Navigation / Header Section */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-slate-200/60 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="text-emerald-600 font-black tracking-[0.2em] uppercase text-[10px]">
                Explore Bangladesh
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Find Your <br />{" "}
              <span className="text-emerald-500 underline decoration-slate-200 underline-offset-8">
                Adventure.
              </span>
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-[450px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={search}
              placeholder="Search by name, city or category..."
              className="w-full bg-white border border-slate-200 py-6 pl-16 pr-8 rounded-[2.5rem] outline-none focus:border-emerald-500/40 focus:ring-[12px] focus:ring-emerald-500/5 transition-all text-slate-700 shadow-sm placeholder:text-slate-400 font-bold text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          {filteredDestinations.map((dest) => (
            <div
              key={dest._id || dest.id}
              className="group flex flex-col transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/60 mb-8 border border-white">
                <Image
                  src={dest.image}
                  alt={dest.name || "Destination"}
                  fill
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-[9px] font-black tracking-widest uppercase py-2.5 px-5 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-lg border border-white/20">
                    {dest.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/10">
                  <Star className="h-3 w-3 text-emerald-400 fill-emerald-400" />
                  <span className="text-xs font-black text-white">
                    {dest.rating}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex items-center gap-2 text-slate-400 mb-3">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {dest.location}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-emerald-600 transition-colors">
                  {dest.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                  {dest.description}
                </p>

                {/* Footer - No Price Version */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                      Experience
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      Discovery Awaits
                    </span>
                  </div>

                  <Link
                    href={`/destinations/${dest.id}`}
                    className="h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-500 transition-all duration-500 shadow-xl shadow-slate-900/20 group/btn active:scale-90"
                  >
                    <ArrowUpRight className="h-6 w-6 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-40 bg-white rounded-[4rem] border border-slate-100 shadow-sm mt-10">
            <Compass className="h-16 w-16 text-slate-200 mx-auto mb-8 animate-pulse" />
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
              No matching spots found
            </h3>
            <p className="text-slate-500 mt-3 font-medium">
              Try searching for "Beach", "Heritage", or "Sylhet".
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TravelODestinations;
