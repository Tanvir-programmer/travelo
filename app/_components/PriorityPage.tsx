import React from "react";
import { Compass, Percent, Lightbulb, LucideIcon } from "lucide-react";

// 1. Define an interface for the Card props
interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isCentered?: boolean;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  isCentered = false,
}) => {
  return (
    <div
      className={`flex flex-col ${isCentered ? "items-center text-center" : ""}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-black ${
            title === "Deals & Discounts" ? "bg-sky-400" : "bg-[#FFC14F]"
          }`}
        >
          <Icon
            className="w-7 h-7"
            strokeWidth={1.5}
            fill={title === "Local Guidance" ? "black" : "none"}
          />
        </div>
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
      </div>
      <p className="text-black text-[16.5px] leading-relaxed max-w-[340px]">
        {description}
      </p>
    </div>
  );
};

const PriorityPage: React.FC = () => {
  return (
    <div className="bg-[#E9FBC6] p-12 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-10">
        {/* Main Title Section */}
        <div className="text-center mb-16 relative pb-8">
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">
            <span className="text-primary">
              Travels<span className="text-secondary">O</span>
            </span>{" "}
            – Your Journey, Our Priority!
          </h1>
          {/* Decorative Divider */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[1px] w-full max-w-4xl bg-neutral-400/30"></div>
        </div>

        {/* 3 Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 px-4">
          <Card
            icon={Compass}
            title="Local Guidance"
            description="Travel agencies have experienced professionals guidance."
          />

          <Card
            icon={Percent}
            title="Deals & Discounts"
            description="Agencies have special discounts on flights, hotels, & packages."
            isCentered={true}
          />

          <Card
            icon={Lightbulb}
            title="Saves Money"
            description="Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options."
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-neutral-800 transition-colors">
            Find Your Favourite Travel Package!
          </button>

          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold flex items-center group hover:bg-neutral-800 transition-colors">
            Discover Today
            <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2.5">
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriorityPage;
