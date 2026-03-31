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

interface Tour {
  id: number;
  title: string;
  country: string;
  duration_days: number;
  price_usd: number;
  rating: number;
  image: string;
  description: string;
}

const InternationalTours: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/tours");
        const data = await res.json();
        setTours(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const term = search.toLowerCase();
      return (
        tour.title.toLowerCase().includes(term) ||
        tour.country.toLowerCase().includes(term)
      );
    });
  }, [search, tours]);

  // Loading UI
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="text-slate-500 text-xs uppercase tracking-widest">
          Loading Tours...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                Explore World
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
              International <br />
              <span className="text-blue-500">Tours.</span>
            </h1>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[450px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tours..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border py-5 pl-14 pr-6 rounded-[2rem] outline-none focus:ring-8 focus:ring-blue-500/10"
            />
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour._id} className="group flex flex-col">
              {/* Image */}
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Country */}
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-bold uppercase px-4 py-2 bg-white/90 rounded-full">
                    {tour.country}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-6 right-6 bg-blue-500 px-3 py-1 rounded-xl flex items-center gap-1">
                  <Star className="h-3 w-3 text-white fill-white" />
                  <span className="text-white text-xs font-bold">
                    {tour.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex items-center gap-1 text-slate-400 mb-2">
                  <MapPin className="h-3 w-3 text-blue-500" />
                  <span className="text-xs uppercase tracking-widest">
                    {tour.country}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600">
                  {tour.title}
                </h3>

                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center border-t pt-5">
                  <div>
                    <span className="text-xs text-slate-400 uppercase">
                      Price
                    </span>
                    <h4 className="text-xl font-black text-blue-600">
                      ${tour.price_usd}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {tour.duration_days} days
                    </p>
                  </div>

                  <Link
                    href={`/tours/${tour.id}`}
                    className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filteredTours.length === 0 && (
          <div className="text-center py-40 mt-10 bg-white rounded-3xl">
            <Compass className="h-14 w-14 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-bold">No tours found</h3>
            <p className="text-slate-500 mt-2">
              Try searching different countries.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default InternationalTours;
