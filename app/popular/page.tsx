"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  MapPin,
  Star,
  Search,
  Compass,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- TYPES ---
export interface Destination {
  _id: string;
  id: number;
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
  rating: number;
}

const PopularDestinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        // Calling your "Top Rated" API
        const response = await fetch(
          "http://localhost:4000/api/destinations/top-rated",
        );
        if (!response.ok) throw new Error("Failed to fetch popular spots");
        const json = await response.json();
        setDestinations(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopular();
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
        <p className="text-slate-500 font-medium tracking-widest text-[10px] uppercase">
          Curating Top-Rated Spots...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100 pb-20">
      {/* Header Section - matching your "Find Your Adventure" style */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-slate-200/60 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px]">
                Highly Rated Escapes
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[0.9]">
              Popular <br />{" "}
              <span className="text-emerald-500">Destinations.</span>
            </h1>
            <p className="mt-6 text-slate-500 font-medium max-w-sm">
              Discover the most loved places in Bangladesh with a community
              rating of 4.5 or higher.
            </p>
          </div>

          {/* Search Input - Matching Glassmorphism */}
          <div className="relative w-full md:w-[450px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={search}
              placeholder="Filter popular spots..."
              className="w-full bg-white border border-slate-200 py-5 pl-14 pr-6 rounded-[2rem] outline-none focus:border-emerald-500/40 focus:ring-8 focus:ring-emerald-500/5 transition-all text-slate-700 shadow-sm placeholder:text-slate-400 font-medium"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredDestinations.map((dest) => (
            <div
              key={dest._id || dest.id}
              className="group flex flex-col transition-all duration-500"
            >
              {/* Image Container with 2.5rem rounding */}
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 mb-6">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 bg-white/90 backdrop-blur-md text-slate-900 rounded-full shadow-sm border border-slate-100">
                    {dest.category}
                  </span>
                </div>

                {/* Star Rating Badge - Emerald Color */}
                <div className="absolute bottom-6 right-6 bg-emerald-500 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
                  <Star className="h-3.5 w-3.5 text-white fill-white" />
                  <span className="text-xs font-bold text-white">
                    {dest.rating}
                  </span>
                </div>
              </div>

              {/* Text Content Area */}
              <div className="px-2">
                <div className="flex items-center gap-1.5 text-slate-400 mb-2">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {dest.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {dest.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {dest.description}
                </p>

                {/* Footer Action - Matching the Round Button style */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Premium Experience
                    </span>
                    <span className="text-xl font-black text-slate-900">
                      Top Choice
                    </span>
                  </div>

                  <Link
                    href={`/destinations/${dest.id}`}
                    className="h-14 w-14 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm group/btn active:scale-90"
                  >
                    <ArrowUpRight className="h-6 w-6 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State when no popular spots match search */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-40 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-10">
            <Compass className="h-14 w-14 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-800">
              No top-rated spots found
            </h3>
            <p className="text-slate-500 mt-2">
              We couldnt find any highly rated matches for that search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PopularDestinations;
