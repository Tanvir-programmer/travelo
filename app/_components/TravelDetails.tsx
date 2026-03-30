"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Destination, ApiResponse } from '@/types'; // Adjust path as needed

export default function TravelDetails() {
  const params = useParams();
  const id = params.id as string;

  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/destinations/${id}`);
        const result: ApiResponse = await response.json();

        if (result.success) {
          setDestination(result.data);
        } else {
          setError("We couldn't find that destination.");
        }
      } catch (err) {
        setError("Connection to the server failed.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium">
        Loading your journey...
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p className="text-red-500 text-xl font-semibold">{error}</p>
        <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/" className="text-gray-500 hover:text-gray-800 transition-colors">
          ← All Destinations
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image with Next.js Optimization */}
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-start">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit">
            {destination.category}
          </div>
          
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            {destination.name}
          </h1>

          <div className="mt-2 flex items-center text-gray-600 italic">
            <span className="mr-2 text-xl">📍</span>
            {destination.location}
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center bg-yellow-400 px-3 py-1 rounded-lg text-white font-bold">
              ★ {destination.rating.toFixed(1)}
            </div>
            <span className="text-sm text-gray-500 font-medium">Verified Reviews</span>
          </div>

          <hr className="my-8 border-gray-200" />

          <h3 className="text-xl font-semibold text-gray-800 mb-3">About this place</h3>
          <p className="text-gray-600 leading-8 text-lg">
            {destination.description}
          </p>

          <div className="mt-10 flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-95 shadow-lg">
              Book Package
            </button>
            <button className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}