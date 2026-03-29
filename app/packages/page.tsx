"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
  MapPin,
  Star,
  Search,
  Compass,
  ArrowUpRight,
  Loader2,
  Clock,
} from "lucide-react";
import Image from "next/image";

// Define the shape of your Package data
interface TravelPackage {
  _id: string;
  id: number;
  package_name: string;
  destination: string;
  duration: string;
  price_bdt: number;
  category: string;
  activities: string[];
  rating: number;
  image?: string; // Optional if not all have images
}

const TravelPackages: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/packages");
        if (!response.ok) throw new Error("Failed to fetch packages");
        const json = await response.json();
        setPackages(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const searchTerm = search.toLowerCase();
      return (
        pkg.package_name.toLowerCase().includes(searchTerm) ||
        pkg.destination.toLowerCase().includes(searchTerm) ||
        pkg.category.toLowerCase().includes(searchTerm)
      );
    });
  }, [search, packages]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
        <p className="text-slate-500 font-medium tracking-widest text-xs uppercase">
          Loading Packages...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100 pb-20">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-slate-200/60 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-[10px]">
                Curated Experiences
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[0.9]">
              The Ultimate <br />{" "}
              <span className="text-emerald-500">Travel Plans.</span>
            </h1>
          </div>

          <div className="relative w-full md:w-[450px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={search}
              placeholder="Search packages, destinations..."
              className="w-full bg-white border border-slate-200 py-5 pl-14 pr-6 rounded-[2rem] outline-none focus:border-emerald-500/40 focus:ring-8 focus:ring-emerald-500/5 transition-all text-slate-700 shadow-sm placeholder:text-slate-400 font-medium"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredPackages.map((pkg) => (
            <div key={pkg._id || pkg.id} className="group flex flex-col transition-all duration-500">
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 mb-6 bg-slate-200">
                {/* Image Handling */}
                <Image
                  src={pkg.image || `https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop`}
                  alt={pkg.package_name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 bg-white/90 backdrop-blur-md text-slate-900 rounded-full shadow-sm border border-slate-100">
                    {pkg.category}
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                   <div className="bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-white/20">
                    <Clock className="h-3 w-3 text-white" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-tight">
                        {pkg.duration}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-emerald-500 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
                  <Star className="h-3.5 w-3.5 text-white fill-white" />
                  <span className="text-xs font-bold text-white">
                    {pkg.rating}
                  </span>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-1.5 text-slate-400 mb-2">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {pkg.destination}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors leading-tight">
                  {pkg.package_name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.activities.slice(0, 2).map((act, i) => (
                    <span key={i} className="text-[9px] font-bold uppercase tracking-tighter text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                      #{act}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Fixed Price
                    </span>
                    <span className="text-xl font-black text-slate-900">
                      ৳{pkg.price_bdt.toLocaleString()}
                    </span>
                  </div>

                  <button className="h-14 w-14 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm group/btn active:scale-90">
                    <ArrowUpRight className="h-6 w-6 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-40 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-10">
            <Compass className="h-14 w-14 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-800">No packages found</h3>
            <p className="text-slate-500 mt-2">Try searching for "Sylhet" or "Luxury".</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TravelPackages;