import Image from "next/image";
import React from "react";

const destinations = [
  {
    id: 1,
    name: "Cox's Bazar",
    location: "CHATTOGRAM",
    image:
      "https://i.ibb.co.com/svNVxmKG/photo-1587302525159-2363f54affd4.avif",
    tag: "Coastal Luxury",
    description:
      "Where the rhythmic pulse of the Bay of Bengal meets 120km of golden silence.",
  },
  {
    id: 2,
    name: "Sajek Valley",
    location: "RANGAMATI",
    image: "https://i.ibb.co.com/FLpRhHSz/sajek.jpg",
    tag: "Highland Retreat",
    description:
      "An ethereal escape perched above the clouds, cradled by the lush peaks of the Hill Tracts.",
  },
  {
    id: 3,
    name: "Sundarbans",
    location: "KHULNA",
    image: "https://i.ibb.co.com/5xsxvmHv/licensed-image.jpg",
    tag: "The Wild Delta",
    description:
      "Ancient mangroves and hidden waterways: the sacred sanctuary of the Royal Bengal Tiger.",
  },
];

const TopDestinations: React.FC = () => {
  return (
    <section className="bg-[#f8f7f4] py-32 px-6 lg:px-24 font-sans antialiased text-slate-900">
      {/* 1. Sophisticated Navigation/Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
              Est. 1971 • Bengal
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] tracking-tighter">
            Hidden{" "}
            <span className="italic font-normal text-emerald-900">Gems</span>{" "}
            <br />
            of the Delta.
          </h2>
        </div>

        <div className="md:max-w-xs">
          <p className="text-slate-500 text-sm leading-relaxed border-l border-slate-300 pl-6 uppercase tracking-wider">
            A curated collection of Bangladesh’s most profound landscapes,
            documented for the modern traveler.
          </p>
        </div>
      </div>

      {/* 2. Staggered Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12 items-start">
        {destinations.map((place, index) => (
          <div
            key={place.id}
            className={`md:col-span-4 group cursor-pointer ${
              index === 1 ? "md:mt-32" : "" // Stagger effect
            }`}
          >
            {/* Image Wrap with "Framed" effect */}
            <div className="relative overflow-hidden bg-slate-200">
              {/* Aspect ratio 4:5 for high-end look */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 ease-out"
                />
                {/* Modern subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-80" />

                {/* Floating Meta */}
                <div className="absolute top-8 left-8 overflow-hidden">
                  <p className="text-[9px] font-black tracking-[0.3em] text-white uppercase transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    Discover Detail
                  </p>
                </div>
              </div>

              {/* Tag - overlapping the image slightly */}
              <div className="absolute -bottom-4 right-8 bg-emerald-900 text-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl">
                {place.tag}
              </div>
            </div>

            {/* Typography Section */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1px] bg-emerald-800"></span>
                <p className="text-[10px] font-bold text-emerald-800 tracking-widest">
                  {place.location}
                </p>
              </div>

              <h3 className="text-4xl font-serif font-medium group-hover:italic transition-all duration-300">
                {place.name}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xs">
                {place.description}
              </p>

              <div className="pt-4 flex items-center gap-4 group/btn">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-emerald-900 group-hover/btn:border-emerald-900 transition-all duration-500">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-slate-900 group-hover/btn:stroke-white transition-colors"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover/btn:text-slate-900 transition-colors">
                  View Experience
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Accent */}
      <div className="mt-32 border-t border-slate-200 pt-12 text-center">
        <p className="text-[10px] tracking-[0.8em] uppercase text-slate-400">
          The Beauty of Bangladesh
        </p>
      </div>
    </section>
  );
};

export default TopDestinations;
